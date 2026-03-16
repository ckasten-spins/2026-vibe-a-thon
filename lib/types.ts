export type TriggerType = 
  | 'policy_acute' 
  | 'policy_secular' 
  | 'behavioral_secular' 
  | 'supply_shock' 
  | 'competitive' 
  | 'media_cultural'

export type Timeline = 
  | 'acute_0_30' 
  | 'acute_30_90' 
  | 'secular_6_12' 
  | 'secular_12_36'

export type Confidence = 'high' | 'medium' | 'low'
export type VelocityTier = 'A' | 'B' | 'C'
export type CalorieDensity = 'high' | 'medium' | 'low'
export type ProteinContent = 'high' | 'medium' | 'low'
export type FormatSize = 'large' | 'standard' | 'small'

export interface SKU {
  sku_id: string
  brand: string
  product_name: string
  category: string
  subcategory: string
  price: number
  velocity_tier: VelocityTier
  country_of_origin: string
  spins_attributes: {
    calorie_density: CalorieDensity
    protein_content: ProteinContent
    format_size: FormatSize
    wellness_claim: string[]
    organic_certified: boolean
    dietary_segment: string[]
  }
  base_weekly_units: number
  base_weekly_revenue: number
}

export interface DemandShock {
  trigger_type: TriggerType
  trigger_summary: string
  affected_segments: string[]
  demand_direction: {
    suppress: string[]
    amplify: string[]
  }
  magnitude: {
    suppress_pct: number
    amplify_pct: number
    confidence: Confidence
  }
  timeline: Timeline
  notes: string | null
}

export interface ScoredSKU extends SKU {
  impact_score: number
  impact_direction: 'suppress' | 'amplify'
  projected_weekly_revenue_change: number
  matched_attributes: string[]
}

export interface SubstitutionPair {
  at_risk_sku: ScoredSKU
  substitutes: {
    sku: ScoredSKU
    capture_probability: number
    reasoning: string
    matched_attributes: string[]
  }[]
}

export interface CategoryRevenue {
  category: string
  before: number
  change: number
  direction: 'suppress' | 'amplify' | 'neutral'
}

export interface RevenueImpact {
  total_at_risk_revenue: number
  total_opportunity_revenue: number
  net_redistribution: number
  by_category: CategoryRevenue[]
}

export interface AnalysisResult {
  scenario_id: string
  demand_shock: DemandShock
  mitigation_summary: string
  at_risk_skus: ScoredSKU[]
  opportunity_skus: ScoredSKU[]
  substitution_pairs: SubstitutionPair[]
  revenue_impact: RevenueImpact
  processing_time_ms: number
}

export interface ProcessingStep {
  id: string
  label: string
  status: 'pending' | 'running' | 'complete'
}
