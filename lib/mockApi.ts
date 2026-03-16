import { AnalysisResult, ProcessingStep } from './types'
import { TARIFF_SCENARIO, GLP1_SCENARIO } from './mockData'

export const PROCESSING_STEPS: ProcessingStep[] = [
  { id: 'normalize', label: 'Agent 1: Normalizing trigger signal...', status: 'pending' },
  { id: 'classify', label: 'Classifying demand shock type & magnitude...', status: 'pending' },
  { id: 'match', label: 'Matching against SPINS taxonomy (50 SKUs)...', status: 'pending' },
  { id: 'substitute', label: 'Agent 2: Scoring substitution pairs...', status: 'pending' },
  { id: 'revenue', label: 'Agent 3: Computing revenue redistribution...', status: 'pending' },
  { id: 'render', label: 'Rendering demand shock dashboard...', status: 'pending' },
]

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function analyzeScenario(
  scenarioId: 'tariff' | 'glp1',
  onStepUpdate: (steps: ProcessingStep[]) => void
): Promise<AnalysisResult> {
  const steps = PROCESSING_STEPS.map(s => ({ ...s }))

  for (let i = 0; i < steps.length; i++) {
    steps[i].status = 'running'
    onStepUpdate([...steps])
    await sleep(i === 3 ? 900 : 500)
    steps[i].status = 'complete'
    onStepUpdate([...steps])
  }

  return scenarioId === 'tariff' ? TARIFF_SCENARIO : GLP1_SCENARIO
}
