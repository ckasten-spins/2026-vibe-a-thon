'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, ArrowRight, TrendingDown } from 'lucide-react'
import { SubstitutionPair } from '@/lib/types'

interface SubstitutionPanelProps {
  substitutionPairs: SubstitutionPair[]
}

function formatTag(tag: string): string {
  return tag.replace(/_/g, ' ')
}

function formatCurrency(n: number): string {
  const abs = Math.abs(n)
  return `$${abs.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

function CaptureProbabilityGauge({ probability }: { probability: number }) {
  const pct = probability * 100
  const color = pct >= 70 ? '#16A34A' : pct >= 40 ? '#D97706' : '#DC2626'
  const size = 52
  const strokeWidth = 5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const arc = circumference * 0.75
  const offset = arc - (pct / 100) * arc

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(135deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arc} ${circumference}`}
            strokeLinecap="round"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${arc} ${circumference}`}
            strokeLinecap="round"
            initial={{ strokeDashoffset: arc }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: -4 }}>
          <span className="text-xs font-bold" style={{ color }}>
            {Math.round(pct)}%
          </span>
        </div>
      </div>
      <span className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>capture</span>
    </div>
  )
}

function SubstitutionPairCard({ pair, defaultOpen }: { pair: SubstitutionPair; defaultOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [expandedReasonings, setExpandedReasonings] = useState<Set<number>>(new Set())

  function toggleReasoning(i: number) {
    setExpandedReasonings(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div
      className="rounded-lg mb-3 overflow-hidden"
      style={{ border: '1px solid #E5E7EB', background: '#F9FAFB' }}
    >
      {/* At-risk SKU header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-3.5 text-left transition-colors duration-150"
        style={{ background: isOpen ? '#FEF2F2' : 'transparent' }}
      >
        <div
          className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center"
          style={{ background: '#FEE2E2', border: '1px solid #FECACA' }}
        >
          <TrendingDown size={13} style={{ color: '#DC2626' }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: '#111827' }}>
            {pair.at_risk_sku.product_name}
          </p>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            {pair.at_risk_sku.brand} · Impact {(pair.at_risk_sku.impact_score * 100).toFixed(0)}
          </p>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp size={15} style={{ color: '#9CA3AF' }} />
          ) : (
            <ChevronDown size={15} style={{ color: '#9CA3AF' }} />
          )}
        </div>
      </button>

      {/* Substitutes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-3.5 pb-3.5 space-y-2.5"
              style={{ borderTop: '1px solid #E5E7EB', paddingTop: '12px' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2563EB' }}>
                Recommended Substitutes
              </p>
              {pair.substitutes.map((sub, i) => {
                const capColor = sub.capture_probability >= 0.7 ? '#16A34A' : sub.capture_probability >= 0.4 ? '#D97706' : '#DC2626'
                const isReasoningExpanded = expandedReasonings.has(i)

                return (
                  <div
                    key={sub.sku.sku_id}
                    className="rounded-md p-3"
                    style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}
                  >
                    <div className="flex items-start gap-3">
                      <CaptureProbabilityGauge probability={sub.capture_probability} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <ArrowRight size={11} style={{ color: capColor, flexShrink: 0 }} />
                          <span className="text-sm font-semibold" style={{ color: '#111827' }}>
                            {sub.sku.product_name}
                          </span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color: '#6B7280' }}>
                          {sub.sku.brand} · ${sub.sku.price}
                        </p>

                        <p
                          className="text-xs leading-relaxed mb-1.5"
                          style={{ color: '#9CA3AF' }}
                        >
                          {isReasoningExpanded ? sub.reasoning : sub.reasoning.slice(0, 100) + (sub.reasoning.length > 100 ? '...' : '')}
                        </p>
                        {sub.reasoning.length > 100 && (
                          <button
                            onClick={() => toggleReasoning(i)}
                            className="text-xs mb-2 font-medium"
                            style={{ color: '#2563EB' }}
                          >
                            {isReasoningExpanded ? 'Show less' : 'Show more'}
                          </button>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {sub.matched_attributes.slice(0, 3).map(attr => (
                            <span
                              key={attr}
                              className="px-1.5 py-0.5 rounded text-xs font-mono"
                              style={{ background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE' }}
                            >
                              {formatTag(attr)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SubstitutionPanel({ substitutionPairs }: SubstitutionPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="rounded-lg flex flex-col"
      style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      {/* Panel header */}
      <div className="p-5 pb-4" style={{ borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ borderLeft: '3px solid #2563EB', paddingLeft: '12px' }}>
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#2563EB' }}>
            Agentic Analysis
          </h2>
          <p className="text-base font-bold" style={{ color: '#111827' }}>
            Substitution Pairs
          </p>
        </div>
        <p className="text-xs mt-1.5" style={{ color: '#9CA3AF' }}>
          {substitutionPairs.length} at-risk SKUs with ranked substitutes by capture probability
        </p>
      </div>

      {/* Pairs list */}
      <div className="px-5 py-4 flex-1 overflow-y-auto" style={{ maxHeight: '600px' }}>
        {substitutionPairs.map((pair, i) => (
          <SubstitutionPairCard
            key={pair.at_risk_sku.sku_id}
            pair={pair}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </motion.div>
  )
}
