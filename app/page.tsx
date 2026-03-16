'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Gavel, ArrowRight, Activity, ChevronRight, TrendingDown, TrendingUp } from 'lucide-react'
import { TARIFF_SCENARIO, GLP1_SCENARIO } from '@/lib/mockData'

function formatRevenue(n: number) {
  const abs = Math.abs(n)
  const formatted = abs >= 1000 ? `$${(abs / 1000).toFixed(1)}K` : `$${abs.toLocaleString()}`
  return n < 0 ? `-${formatted}` : `+${formatted}`
}

const SCENARIO_CARDS = [
  {
    id: 'tariff' as const,
    icon: Gavel,
    badge: 'Policy Shock · Acute',
    badgeColor: '#92400E',
    badgeBg: '#FFFBEB',
    badgeBorder: '#FDE68A',
    accentColor: '#DC2626',
    accentBg: '#FEF2F2',
    accentBorder: '#FECACA',
    title: '15% Tariff on Mexican Produce',
    description:
      'Policy shock triggers price-driven suppression of fresh Mexican produce with cascade to domestic and preserved alternatives.',
    metrics: [
      { label: 'At-risk SKUs', value: '8' },
      { label: 'At-Risk Sales', value: '-22%' },
      { label: 'Timeline', value: '0–30 days' },
    ],
    revenueAtRisk: TARIFF_SCENARIO.revenue_impact.total_at_risk_revenue,
    revenueOpportunity: TARIFF_SCENARIO.revenue_impact.total_opportunity_revenue,
  },
  {
    id: 'glp1' as const,
    icon: Activity,
    badge: 'Behavioral · Secular',
    badgeColor: '#5B21B6',
    badgeBg: '#F5F3FF',
    badgeBorder: '#DDD6FE',
    accentColor: '#2563EB',
    accentBg: '#EFF6FF',
    accentBorder: '#BFDBFE',
    title: 'GLP-1 Adoption Up 400% YoY',
    description:
      'Behavioral shift in the 35–55 cohort reshapes snack, beverage, and wellness categories at unprecedented speed.',
    metrics: [
      { label: 'At-risk SKUs', value: '10' },
      { label: 'At-Risk Sales', value: '-31%' },
      { label: 'Timeline', value: '6–12 months' },
    ],
    revenueAtRisk: GLP1_SCENARIO.revenue_impact.total_at_risk_revenue,
    revenueOpportunity: GLP1_SCENARIO.revenue_impact.total_opportunity_revenue,
  },
]

export default function HomePage() {
  const router = useRouter()
  const [customTrigger, setCustomTrigger] = useState('')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleRunScenario(id: 'tariff' | 'glp1') {
    router.push(`/dashboard?scenario=${id}`)
  }

  function handleCustomSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!customTrigger.trim()) return
    router.push(`/dashboard?scenario=tariff&custom=${encodeURIComponent(customTrigger)}`)
  }

  return (
    <div className="p-6 max-w-4xl">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl font-bold" style={{ color: '#111827' }}>Current Scenarios Impacting Awesome Brand</h1>
        </div>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          2 active demand signals detected. Select a scenario to view impact analysis, at-risk SKUs, and substitution intelligence.
        </p>
      </div>

      {/* Section label */}
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
        Active signals
      </p>

      {/* Scenario Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {SCENARIO_CARDS.map((card, idx) => {
          const Icon = card.icon
          const isHovered = hoveredCard === card.id
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -2 }}
              className="relative rounded-lg p-5 cursor-pointer"
              style={{
                background: '#FFFFFF',
                border: `1px solid ${isHovered ? card.accentBorder : '#E5E7EB'}`,
                boxShadow: isHovered
                  ? `0 4px 12px rgba(0,0,0,0.08)`
                  : '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'border-color 0.15s, box-shadow 0.15s',
              }}
              onClick={() => handleRunScenario(card.id)}
            >
              {/* Badge */}
              <div className="mb-3">
                <span
                  className="px-2 py-1 rounded-md text-xs font-semibold"
                  style={{
                    background: card.badgeBg,
                    color: card.badgeColor,
                    border: `1px solid ${card.badgeBorder}`,
                  }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Icon + title */}
              <div className="flex items-start gap-3 mb-2.5">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: card.accentBg, border: `1px solid ${card.accentBorder}` }}
                >
                  <Icon size={16} style={{ color: card.accentColor }} />
                </div>
                <h3 className="text-base font-semibold leading-snug" style={{ color: '#111827' }}>
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                {card.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {card.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-md px-2.5 py-2 text-center"
                    style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
                  >
                    <p className="text-sm font-bold font-mono" style={{ color: card.accentColor }}>
                      {m.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Revenue impact */}
              <div
                className="grid grid-cols-2 gap-2 mb-4 rounded-lg p-3"
                style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
              >
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <TrendingDown size={11} style={{ color: '#DC2626' }} />
                    <span className="text-xs" style={{ color: '#6B7280' }}>Weekly sales at risk</span>
                  </div>
                  <p className="text-base font-bold font-mono" style={{ color: '#DC2626' }}>
                    {formatRevenue(card.revenueAtRisk)}/wk
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <TrendingUp size={11} style={{ color: '#16A34A' }} />
                    <span className="text-xs" style={{ color: '#6B7280' }}>Opportunity upside</span>
                  </div>
                  <p className="text-base font-bold font-mono" style={{ color: '#16A34A' }}>
                    {formatRevenue(card.revenueOpportunity)}/wk
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: '#1D4ED8' }}>
                  View Analysis
                </span>
                <ArrowRight size={14} style={{ color: '#1D4ED8' }} />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px" style={{ background: '#E5E7EB' }} />
        <span className="text-xs" style={{ color: '#9CA3AF' }}>or</span>
        <div className="flex-1 h-px" style={{ background: '#E5E7EB' }} />
      </div>

      {/* Custom trigger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
          Custom trigger
        </p>
        <form onSubmit={handleCustomSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={customTrigger}
            onChange={(e) => setCustomTrigger(e.target.value)}
            placeholder="e.g. Bird flu outbreak reduces egg supply by 30%..."
            className="flex-1 rounded-lg px-3.5 py-2.5 text-sm outline-none"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              color: '#111827',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#2563EB'
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.1)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
          <button
            type="submit"
            disabled={!customTrigger.trim()}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 transition-opacity"
            style={{ background: '#2563EB', color: '#FFFFFF' }}
          >
            Analyze
            <ChevronRight size={14} />
          </button>
        </form>
      </motion.div>
    </div>
  )
}
