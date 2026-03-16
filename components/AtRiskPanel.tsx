'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { ScoredSKU } from '@/lib/types'

interface AtRiskPanelProps {
  atRiskSkus: ScoredSKU[]
  opportunitySkus: ScoredSKU[]
}

function formatCurrency(n: number): string {
  const abs = Math.abs(n)
  const formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  return `${n < 0 ? '-' : '+'}$${formatted}`
}

function formatTag(tag: string): string {
  return tag.replace(/_/g, ' ').replace(/:/g, ': ')
}

function VelocityBadge({ tier }: { tier: string }) {
  const colors: Record<string, { bg: string; color: string; border: string }> = {
    A: { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
    B: { bg: '#FFFBEB', color: '#B45309', border: '#FDE68A' },
    C: { bg: '#FEF2F2', color: '#B91C1C', border: '#FECACA' },
  }
  const c = colors[tier] || colors.C
  return (
    <span
      className="px-1.5 py-0.5 rounded text-xs font-bold"
      style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
    >
      {tier}
    </span>
  )
}

function SKURow({ sku, index }: { sku: ScoredSKU; index: number }) {
  const isSuppressed = sku.impact_direction === 'suppress'
  const barColor = isSuppressed ? '#DC2626' : '#16A34A'
  const barBg = isSuppressed ? '#FEE2E2' : '#DCFCE7'
  const revenueColor = isSuppressed ? '#B91C1C' : '#15803D'
  const tagBg = isSuppressed ? '#FEF2F2' : '#F0FDF4'
  const tagColor = isSuppressed ? '#B91C1C' : '#15803D'
  const tagBorder = isSuppressed ? '#FECACA' : '#BBF7D0'

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
      className="rounded-md p-3 mb-2"
      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-semibold truncate" style={{ color: '#111827' }}>
              {sku.product_name}
            </span>
            <VelocityBadge tier={sku.velocity_tier} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs" style={{ color: '#6B7280' }}>{sku.brand}</span>
            <span className="text-xs" style={{ color: '#D1D5DB' }}>·</span>
            <span className="text-xs" style={{ color: '#9CA3AF' }}>{sku.category}</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-sm font-bold font-mono" style={{ color: revenueColor }}>
            {formatCurrency(sku.projected_weekly_revenue_change)}
          </div>
          <div className="text-xs" style={{ color: '#9CA3AF' }}>wkly rev Δ</div>
        </div>
      </div>

      {/* Impact score bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs" style={{ color: '#9CA3AF' }}>Impact Score</span>
          <span className="text-xs font-mono font-bold" style={{ color: barColor }}>
            {(sku.impact_score * 100).toFixed(0)}
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: barBg }}>
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${sku.impact_score * 100}%` }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
            style={{ background: barColor }}
          />
        </div>
      </div>

      {/* Matched attributes */}
      <div className="flex flex-wrap gap-1">
        {sku.matched_attributes.slice(0, 4).map(attr => (
          <span
            key={attr}
            className="px-1.5 py-0.5 rounded text-xs font-mono"
            style={{ background: tagBg, color: tagColor, border: `1px solid ${tagBorder}` }}
          >
            {formatTag(attr)}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function AtRiskPanel({ atRiskSkus, opportunitySkus }: AtRiskPanelProps) {
  const [activeTab, setActiveTab] = useState<'risk' | 'opportunity'>('risk')

  const sortedAtRisk = [...atRiskSkus].sort((a, b) => b.impact_score - a.impact_score)
  const sortedOpportunity = [...opportunitySkus].sort((a, b) => b.impact_score - a.impact_score)

  const totalAtRisk = atRiskSkus.reduce((sum, s) => sum + s.projected_weekly_revenue_change, 0)
  const totalOpportunity = opportunitySkus.reduce((sum, s) => sum + s.projected_weekly_revenue_change, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.06 }}
      className="rounded-lg flex flex-col"
      style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      {/* Panel header */}
      <div className="p-5 pb-3">
        <div style={{ borderLeft: '3px solid #2563EB', paddingLeft: '12px' }}>
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#2563EB' }}>
            SKU Intelligence
          </h2>
          <p className="text-base font-bold" style={{ color: '#111827' }}>
            Impact Analysis
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 pb-2 flex gap-0" style={{ borderBottom: '1px solid #E5E7EB' }}>
        <button
          onClick={() => setActiveTab('risk')}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-all duration-150"
          style={{
            color: activeTab === 'risk' ? '#DC2626' : '#9CA3AF',
            borderBottom: activeTab === 'risk' ? '2px solid #DC2626' : '2px solid transparent',
            marginBottom: '-1px',
          }}
        >
          <TrendingDown size={13} />
          At Risk
          <span
            className="px-1.5 py-0.5 rounded text-xs"
            style={{
              background: activeTab === 'risk' ? '#FEE2E2' : '#F3F4F6',
              color: activeTab === 'risk' ? '#DC2626' : '#9CA3AF',
            }}
          >
            {atRiskSkus.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('opportunity')}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-all duration-150"
          style={{
            color: activeTab === 'opportunity' ? '#16A34A' : '#9CA3AF',
            borderBottom: activeTab === 'opportunity' ? '2px solid #16A34A' : '2px solid transparent',
            marginBottom: '-1px',
          }}
        >
          <TrendingUp size={13} />
          Opportunity
          <span
            className="px-1.5 py-0.5 rounded text-xs"
            style={{
              background: activeTab === 'opportunity' ? '#DCFCE7' : '#F3F4F6',
              color: activeTab === 'opportunity' ? '#16A34A' : '#9CA3AF',
            }}
          >
            {opportunitySkus.length}
          </span>
        </button>
      </div>

      {/* Summary line */}
      <div
        className="mx-5 my-3 px-3 py-2 rounded-md flex items-center justify-between"
        style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
      >
        <span className="text-xs" style={{ color: '#6B7280' }}>
          {activeTab === 'risk' ? 'Total weekly revenue at risk' : 'Total weekly revenue opportunity'}
        </span>
        <span
          className="text-sm font-bold font-mono"
          style={{ color: activeTab === 'risk' ? '#B91C1C' : '#15803D' }}
        >
          {activeTab === 'risk' ? formatCurrency(totalAtRisk) : formatCurrency(totalOpportunity)}
        </span>
      </div>

      {/* SKU list */}
      <div className="px-5 pb-5 flex-1 overflow-y-auto" style={{ maxHeight: '480px' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'risk' ? (
            <motion.div
              key="risk"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {sortedAtRisk.map((sku, i) => (
                <SKURow key={sku.sku_id} sku={sku} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="opportunity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {sortedOpportunity.map((sku, i) => (
                <SKURow key={sku.sku_id} sku={sku} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
