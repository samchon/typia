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
