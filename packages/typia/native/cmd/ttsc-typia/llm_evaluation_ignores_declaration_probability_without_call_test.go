package main

import "testing"

func TestLlmEvaluationIgnoresDeclarationProbabilityWithoutCall(t *testing.T) {
  llmEvaluationAccepts(t, "no-evaluation-call", `/** @probability 0.8 */
export type Urgency = boolean;
`)
}
