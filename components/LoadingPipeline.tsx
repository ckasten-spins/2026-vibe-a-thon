'use client'

import { motion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { ProcessingStep } from '@/lib/types'

interface LoadingPipelineProps {
  steps: ProcessingStep[]
  scenarioLabel: string
}

export default function LoadingPipeline({ steps, scenarioLabel }: LoadingPipelineProps) {
  const completeCount = steps.filter(s => s.status === 'complete').length
  const progress = steps.length > 0 ? (completeCount / steps.length) * 100 : 0

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#F3F4F6' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md px-6"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#2563EB' }}>
            Demand Signal Engine
          </p>
          <h2 className="text-xl font-bold mb-1" style={{ color: '#111827' }}>
            Running Analysis
          </h2>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            {scenarioLabel}
          </p>
        </div>

        {/* Steps */}
        <div
          className="rounded-lg border p-5 mb-5"
          style={{ background: '#FFFFFF', borderColor: '#E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <div className="space-y-3.5">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="flex items-center gap-3"
              >
                {/* Status indicator */}
                <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  {step.status === 'pending' && (
                    <div className="w-2 h-2 rounded-full" style={{ background: '#D1D5DB' }} />
                  )}
                  {step.status === 'running' && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Loader2 size={14} style={{ color: '#2563EB' }} />
                    </motion.div>
                  )}
                  {step.status === 'complete' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: '#DCFCE7', border: '1px solid #86EFAC' }}
                    >
                      <Check size={9} style={{ color: '#16A34A' }} strokeWidth={3} />
                    </motion.div>
                  )}
                </div>

                {/* Label */}
                <span
                  className="text-sm"
                  style={{
                    color: step.status === 'pending'
                      ? '#D1D5DB'
                      : step.status === 'running'
                      ? '#111827'
                      : '#6B7280',
                    fontWeight: step.status === 'running' ? 500 : 400,
                  }}
                >
                  {step.label}
                </span>

                {step.status === 'running' && (
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-auto text-xs font-mono"
                    style={{ color: '#2563EB' }}
                  >
                    running
                  </motion.span>
                )}
                {step.status === 'complete' && (
                  <span className="ml-auto text-xs" style={{ color: '#16A34A' }}>
                    done
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs" style={{ color: '#9CA3AF' }}>
              {completeCount} / {steps.length} agents complete
            </span>
            <span className="text-xs font-mono" style={{ color: '#2563EB' }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E5E7EB' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #2563EB, #16A34A)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
