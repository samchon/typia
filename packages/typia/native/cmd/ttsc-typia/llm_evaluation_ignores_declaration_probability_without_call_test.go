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
//
// @evidence contracts/testing.md#behavioral-verification An ordinary program declaring a probability-annotated alias compiles when no evaluation operation exists.
// @evidence contracts/testing.md#independent-expectations Evaluation-specific placement requirements belong to calls that request an evaluation plan, not to arbitrary TypeScript JSDoc annotations.
// @evidence contracts/testing.md#distinguishing-cases The no-call program is the negative twin of the neighboring declaration-placement rejection case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationIgnoresDeclarationProbabilityWithoutCall as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
func TestLlmEvaluationIgnoresDeclarationProbabilityWithoutCall(t *testing.T) {
  llmEvaluationAccepts(t, "no-evaluation-call", `/** @probability 0.8 */
export type Urgency = boolean;
`)
}
