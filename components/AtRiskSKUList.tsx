'use client'

import { ScoredSKU } from '@/lib/types'

interface AtRiskSKUListProps {
  atRiskSkus: ScoredSKU[]
}

function formatRevenue(n: number) {
  return `$${Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

export default function AtRiskSKUList({ atRiskSkus }: AtRiskSKUListProps) {
  const totalRevenueLoss = atRiskSkus.reduce((sum, s) => sum + s.projected_weekly_revenue_change, 0)

  return (
    <div
      className="rounded-lg flex flex-col flex-1 overflow-hidden"
      style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ borderLeft: '3px solid #DC2626', paddingLeft: '12px' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#DC2626' }}>
            Exposure
          </p>
          <h2 className="text-base font-bold" style={{ color: '#111827' }}>At-Risk SKUs</h2>
        </div>
        <div className="mt-3 rounded-md px-3 py-2.5" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
          <p className="text-xs" style={{ color: '#9CA3AF' }}>Total weekly revenue at risk</p>
          <p className="text-xl font-bold mt-0.5" style={{ color: '#B91C1C' }}>{formatRevenue(totalRevenueLoss)}</p>
        </div>
      </div>

      {/* SKU list */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {atRiskSkus.map((sku, idx) => (
          <div
            key={sku.sku_id}
            className="flex items-center justify-between px-5 py-3"
            style={{
              borderBottom: idx < atRiskSkus.length - 1 ? '1px solid #F9FAFB' : 'none',
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Rank */}
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                style={{ background: '#FEF2F2', color: '#DC2626' }}
              >
                {idx + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: '#111827' }}>
                  {sku.product_name}
                </p>
                <p className="text-xs truncate" style={{ color: '#9CA3AF' }}>
                  {sku.brand} · {sku.subcategory}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 ml-3 text-right">
              <p className="text-sm font-bold" style={{ color: '#DC2626' }}>
                {formatRevenue(sku.projected_weekly_revenue_change)}/wk
              </p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                of {formatRevenue(sku.base_weekly_revenue)} base
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
