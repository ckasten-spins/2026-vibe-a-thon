'use client'

import { motion } from 'framer-motion'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  LabelList,
} from 'recharts'
import { RevenueImpact } from '@/lib/types'

interface RevenueWaterfallProps {
  revenueImpact: RevenueImpact
}

function formatK(n: number): string {
  if (Math.abs(n) >= 1000) {
    return `${n < 0 ? '-' : '+'}$${(Math.abs(n) / 1000).toFixed(1)}k`
  }
  return `${n < 0 ? '-' : '+'}$${Math.abs(n).toLocaleString()}`
}

function formatDollar(n: number): string {
  if (Math.abs(n) >= 1000) {
    const k = Math.abs(n) / 1000
    return `${n < 0 ? '-' : ''}$${k.toFixed(1)}k`
  }
  return `${n < 0 ? '-' : ''}$${Math.abs(n).toLocaleString()}`
}

interface WaterfallEntry {
  name: string
  base: number
  change: number
  direction: 'suppress' | 'amplify' | 'neutral' | 'net'
  displayValue: number
}

function buildWaterfallData(revenueImpact: RevenueImpact): WaterfallEntry[] {
  const data: WaterfallEntry[] = []
  let runningTotal = 0

  for (const cat of revenueImpact.by_category) {
    if (cat.direction === 'suppress') {
      data.push({
        name: cat.category,
        base: runningTotal + cat.change,
        change: Math.abs(cat.change),
        direction: 'suppress',
        displayValue: cat.change,
      })
      runningTotal += cat.change
    } else {
      data.push({
        name: cat.category,
        base: runningTotal,
        change: cat.change,
        direction: 'amplify',
        displayValue: cat.change,
      })
      runningTotal += cat.change
    }
  }

  data.push({
    name: 'Net Impact',
    base: 0,
    change: runningTotal,
    direction: 'net',
    displayValue: runningTotal,
  })

  return data
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ payload: WaterfallEntry }>
  label?: string
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null
  const entry = payload[0]?.payload
  if (!entry) return null

  const color = entry.direction === 'suppress' ? '#B91C1C' : entry.direction === 'net'
    ? (entry.displayValue >= 0 ? '#15803D' : '#B91C1C')
    : '#15803D'

  return (
    <div
      className="rounded-md px-3.5 py-2.5 text-sm shadow-lg"
      style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}
    >
      <p className="font-semibold mb-1" style={{ color: '#111827' }}>{entry.name}</p>
      <p style={{ color }}>{formatK(entry.displayValue)}</p>
      <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>weekly revenue change</p>
    </div>
  )
}

export default function RevenueWaterfall({ revenueImpact }: RevenueWaterfallProps) {
  const data = buildWaterfallData(revenueImpact)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.14 }}
      className="rounded-lg p-5"
      style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      {/* Panel header */}
      <div className="flex items-start justify-between mb-5">
        <div style={{ borderLeft: '3px solid #2563EB', paddingLeft: '12px' }}>
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#2563EB' }}>
            Revenue Intelligence
          </h2>
          <p className="text-base font-bold" style={{ color: '#111827' }}>
            Weekly Revenue Redistribution
          </p>
        </div>

        {/* Summary metrics */}
        <div className="flex gap-5">
          <div className="text-right">
            <p className="text-xs mb-0.5" style={{ color: '#9CA3AF' }}>At Risk</p>
            <p className="text-lg font-bold font-mono" style={{ color: '#B91C1C' }}>
              {formatDollar(revenueImpact.total_at_risk_revenue)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs mb-0.5" style={{ color: '#9CA3AF' }}>Opportunity</p>
            <p className="text-lg font-bold font-mono" style={{ color: '#15803D' }}>
              +{formatDollar(revenueImpact.total_opportunity_revenue)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs mb-0.5" style={{ color: '#9CA3AF' }}>Net</p>
            <p
              className="text-lg font-bold font-mono"
              style={{ color: revenueImpact.net_redistribution >= 0 ? '#15803D' : '#B91C1C' }}
            >
              {revenueImpact.net_redistribution >= 0 ? '+' : ''}{formatDollar(revenueImpact.net_redistribution)}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
          >
            <CartesianGrid vertical={false} stroke="#F3F4F6" strokeOpacity={1} />
            <XAxis
              dataKey="name"
              tick={{ fill: '#6B7280', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={50}
            />
            <YAxis
              tickFormatter={(v) => `$${Math.abs(v / 1000).toFixed(0)}k`}
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={45}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <ReferenceLine y={0} stroke="#E5E7EB" strokeDasharray="3 3" />

            {/* Invisible base bar for waterfall stacking */}
            <Bar dataKey="base" stackId="waterfall" fill="transparent" radius={0} isAnimationActive={false} />

            {/* Visible change bar */}
            <Bar dataKey="change" stackId="waterfall" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={700}>
              {data.map((entry, index) => {
                let color: string
                if (entry.direction === 'suppress') color = '#EF4444'
                else if (entry.direction === 'amplify') color = '#22C55E'
                else color = entry.displayValue >= 0 ? '#3B82F6' : '#EF4444'

                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={color}
                    fillOpacity={0.85}
                  />
                )
              })}
              <LabelList
                dataKey="displayValue"
                position="top"
                formatter={(v: unknown) => formatK(v as number)}
                style={{ fill: '#6B7280', fontSize: 10, fontFamily: 'monospace' }}
              />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-2 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: '#EF4444', opacity: 0.85 }} />
          <span className="text-xs" style={{ color: '#6B7280' }}>Suppressed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: '#22C55E', opacity: 0.85 }} />
          <span className="text-xs" style={{ color: '#6B7280' }}>Amplified</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: '#3B82F6' }} />
          <span className="text-xs" style={{ color: '#6B7280' }}>Net redistribution</span>
        </div>
      </div>
    </motion.div>
  )
}
