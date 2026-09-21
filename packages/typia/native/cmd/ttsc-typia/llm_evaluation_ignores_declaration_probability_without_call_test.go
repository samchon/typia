package main

import "testing"

// TestLlmEvaluationIgnoresDeclarationProbabilityWithoutCall verifies a
// program without evaluation calls does not trigger JEV-specific diagnostics.
//
// The placement scanner is owned by the evaluation transformer, so merely
// declaring a JSDoc tag must not alter ordinary TypeScript compilation.
//
//  1. Declare a tagged primitive alias.
//  2. Omit every evaluation call.
//  3. Require successful compilation.
func TestLlmEvaluationIgnoresDeclarationProbabilityWithoutCall(t *testing.T) {
  llmEvaluationAccepts(t, "no-evaluation-call", `/** @probability 0.8 */
export type Urgency = boolean;
`)
}
