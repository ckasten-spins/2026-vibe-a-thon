'use client'

import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, Shield, Clock, BarChart3, Zap, Users, AlertTriangle } from 'lucide-react'
import { DemandShock, TriggerType, Timeline, Confidence, RevenueImpact } from '@/lib/types'

interface TriggerSummaryPanelProps {
  demandShock: DemandShock
  revenueImpact: RevenueImpact
  mitigationSummary: string
}

function formatRevenue(n: number) {
  const abs = Math.abs(n)
  const formatted = abs >= 1000 ? `$${(abs / 1000).toFixed(1)}K` : `$${abs.toLocaleString()}`
  return n < 0 ? `-${formatted}` : `+${formatted}`
}

const TRIGGER_CONFIG: Record<TriggerType, { label: string; color: string; bg: string; border: string; Icon: React.ComponentType<{size?: number; style?: React.CSSProperties}> }> = {
  policy_acute:      { label: 'Policy — Acute',      color: '#92400E', bg: '#FFFBEB', border: '#FDE68A', Icon: AlertTriangle },
  policy_secular:    { label: 'Policy — Secular',    color: '#B45309', bg: '#FFFBEB', border: '#FDE68A', Icon: Shield },
  behavioral_secular:{ label: 'Behavioral — Secular',color: '#5B21B6', bg: '#F5F3FF', border: '#DDD6FE', Icon: Users },
  supply_shock:      { label: 'Supply Shock',        color: '#B45309', bg: '#FFFBEB', border: '#FDE68A', Icon: Zap },
  competitive:       { label: 'Competitive',         color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', Icon: BarChart3 },
  media_cultural:    { label: 'Media / Cultural',    color: '#9D174D', bg: '#FDF2F8', border: '#F9A8D4', Icon: TrendingUp },
}

const TIMELINE_LABELS: Record<Timeline, string> = {
  acute_0_30:    '0–30 Days',
  acute_30_90:   '30–90 Days',
  secular_6_12:  '6–12 Months',
  secular_12_36: '12–36 Months',
}

const CONFIDENCE_CONFIG: Record<Confidence, { color: string; bg: string; border: string }> = {
  high:   { color: '#15803D', bg: '#F0FDF4', border: '#86EFAC' },
  medium: { color: '#B45309', bg: '#FFFBEB', border: '#FDE68A' },
  low:    { color: '#B91C1C', bg: '#FEF2F2', border: '#FECACA' },
}

function formatTag(tag: string) {
  return tag.replace(/_/g, ' ').replace(/:/g, ': ')
}

export default function TriggerSummaryPanel({ demandShock, revenueImpact, mitigationSummary }: TriggerSummaryPanelProps) {
  const triggerCfg = TRIGGER_CONFIG[demandShock.trigger_type]
  const confidenceCfg = CONFIDENCE_CONFIG[demandShock.magnitude.confidence]
  const TriggerIcon = triggerCfg.Icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg p-6"
      style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      {/* Panel header */}
      <div className="flex items-start justify-between mb-5">
        <div style={{ borderLeft: '3px solid #2563EB', paddingLeft: '12px' }}>
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#2563EB' }}>
            Demand Shock Analysis
          </h2>
          <p className="text-lg font-bold" style={{ color: '#111827' }}>
            Impact Summary
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <span
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold"
            style={{ background: triggerCfg.bg, color: triggerCfg.color, border: `1px solid ${triggerCfg.border}` }}
          >
            <TriggerIcon size={11} />
            {triggerCfg.label}
          </span>
          <span
            className="px-2.5 py-1 rounded-md text-xs font-semibold capitalize"
            style={{ background: confidenceCfg.bg, color: confidenceCfg.color, border: `1px solid ${confidenceCfg.border}` }}
          >
            {demandShock.magnitude.confidence} confidence
          </span>
          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold"
            style={{ background: '#F9FAFB', color: '#6B7280', border: '1px solid #E5E7EB' }}
          >
            <Clock size={11} />
            {TIMELINE_LABELS[demandShock.timeline]}
          </span>
        </div>
      </div>

      {/* Trigger description */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>
        {demandShock.trigger_summary}
      </p>

      {/* At-Risk Sales callout */}
      <div
        className="rounded-lg p-4 mb-5"
        style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <TrendingDown size={14} style={{ color: '#DC2626' }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#DC2626' }}>
            At-Risk Sales
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-bold" style={{ color: '#B91C1C' }}>
            -{demandShock.magnitude.suppress_pct}%
          </span>
          <span className="text-lg font-semibold" style={{ color: '#DC2626' }}>
            {formatRevenue(revenueImpact.total_at_risk_revenue)}/wk
          </span>
        </div>
        <p className="text-xs" style={{ color: '#EF4444' }}>projected reduction in demand across affected SKUs</p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px" style={{ background: '#E5E7EB' }} />
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9CA3AF' }}>Recommended Mitigation</span>
        <div className="flex-1 h-px" style={{ background: '#E5E7EB' }} />
      </div>

      {/* Mitigation summary */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>
        {mitigationSummary}
      </p>

      {/* Potential Net Revenue callout */}
      <div
        className="rounded-lg p-4"
        style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <TrendingUp size={14} style={{ color: '#16A34A' }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#16A34A' }}>
            Potential Net Revenue
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-bold" style={{ color: '#15803D' }}>
            +{demandShock.magnitude.amplify_pct}%
          </span>
          <span className="text-lg font-semibold" style={{ color: '#16A34A' }}>
            {formatRevenue(revenueImpact.total_opportunity_revenue)}/wk
          </span>
        </div>
        <p className="text-xs" style={{ color: '#22C55E' }}>based on full mitigation implementation</p>
      </div>
    </motion.div>
  )
}
