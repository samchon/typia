package main

import "testing"

// TestLlmEvaluationAcceptsUnselectedSourceProbability verifies a comment on
// an unrelated property does not constrain an indexed-access decision.
//
// Indexed access extracts a property type, not its JSDoc. An annotation on a
// different source property must not reject an otherwise valid evaluation.
//
//  1. Declare an annotated and an unannotated source property.
//  2. Extract the unannotated property's type for an evaluation decision.
//  3. Require successful compilation.
//
// @evidence contracts/testing.md#behavioral-verification The evaluation build accepts an indexed-access decision selecting the unannotated Source property.
// @evidence contracts/testing.md#independent-expectations Indexed access extracts the selected value type, not a different property declaration or its JSDoc requirement.
// @evidence contracts/testing.md#distinguishing-cases The source has both an annotated ignored boolean and an unannotated selected boolean, so leaking unrelated property comments would reject the control.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationAcceptsUnselectedSourceProbability as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
func TestLlmEvaluationAcceptsUnselectedSourceProbability(t *testing.T) {
  llmEvaluationAccepts(t, "unselected-source-probability", `import typia from "typia";
interface Source {
  /** @probability 0.8 */ ignored: boolean;
  selected: boolean;
}
type Value = Source["selected"];
typia.llm.evaluation<{
  /** Is it urgent? */
  urgent: Value;
}>();
`)
}
