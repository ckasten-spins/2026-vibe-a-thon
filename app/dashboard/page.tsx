'use client'

import { Suspense, useRef, useLayoutEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import TriggerSummaryPanel from '@/components/TriggerSummaryPanel'
import AtRiskSKUList from '@/components/AtRiskSKUList'
import AtRiskPanel from '@/components/AtRiskPanel'
import SubstitutionPanel from '@/components/SubstitutionPanel'
import RevenueWaterfall from '@/components/RevenueWaterfall'
import { SCENARIOS } from '@/lib/mockData'
import { AnalysisResult } from '@/lib/types'

const SCENARIO_LABELS: Record<string, string> = {
  tariff: '15% Tariff on Mexican Produce',
  glp1: 'GLP-1 Adoption Surge 400% YoY',
}


function DashboardContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const scenarioParam = (searchParams.get('scenario') || 'tariff') as 'tariff' | 'glp1'

  const result: AnalysisResult = SCENARIOS[scenarioParam]
  const scenarioLabel = SCENARIO_LABELS[scenarioParam] || scenarioParam

  const leftCardRef = useRef<HTMLDivElement>(null)
  const [rightCardHeight, setRightCardHeight] = useState<number | undefined>()

  useLayoutEffect(() => {
    if (!leftCardRef.current) return
    const update = () => setRightCardHeight(leftCardRef.current!.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(leftCardRef.current)
    return () => observer.disconnect()
  }, [scenarioParam])

  return (
    <>
      {/* Page header — sticky relative to <main> scroll container */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-3.5"
        style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #E5E7EB', backdropFilter: 'blur(8px)' }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 text-sm transition-colors duration-150 hover:opacity-70"
            style={{ color: '#6B7280' }}
          >
            <ArrowLeft size={13} />
            New Analysis
          </button>
          <div className="w-px h-4" style={{ background: '#E5E7EB' }} />
          <span className="text-sm font-semibold" style={{ color: '#111827' }}>
            {scenarioLabel}
          </span>
        </div>
      </div>

      {/* Dashboard panels */}
      <div className="px-6 py-6 space-y-5 max-w-[1400px] mx-auto" style={{ background: '#F3F4F6' }}>
        <div className="grid grid-cols-3 gap-5 items-start">
          <motion.div
            ref={leftCardRef}
            className="col-span-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <TriggerSummaryPanel demandShock={result.demand_shock} revenueImpact={result.revenue_impact} mitigationSummary={result.mitigation_summary} />
          </motion.div>

          <motion.div
            className="col-span-1 flex flex-col"
            style={{ height: rightCardHeight, overflow: 'hidden' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <AtRiskSKUList atRiskSkus={result.at_risk_skus} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.06 }}
          >
            <AtRiskPanel
              atRiskSkus={result.at_risk_skus}
              opportunitySkus={result.opportunity_skus}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <SubstitutionPanel substitutionPairs={result.substitution_pairs} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.14 }}
        >
          <RevenueWaterfall revenueImpact={result.revenue_impact} />
        </motion.div>
      </div>
    </>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F3F4F6' }}>
        <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: '#E5E7EB', borderTopColor: '#2563EB' }} />
      </div>
    }>
      <DashboardContent />
    </Suspense>
  )
}
