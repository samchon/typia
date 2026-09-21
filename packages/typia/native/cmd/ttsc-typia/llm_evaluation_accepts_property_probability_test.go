package main

import "testing"

// TestLlmEvaluationAcceptsPropertyAndEnumMemberProbability verifies both
// supported JSDoc placements compile with the upper probability boundary.
//
// Primitive aliases may erase their name, but a final decision property's
// comment and enum members' comments remain attached to their declarations.
//
//  1. Declare an aliased boolean and a probability-annotated enum.
//  2. Put probability one on the final boolean decision property.
//  3. Require successful compilation.
func TestLlmEvaluationAcceptsPropertyAndEnumMemberProbability(t *testing.T) {
  llmEvaluationAccepts(t, "property-probability-valid", `import typia from "typia";

type Urgency = boolean;
enum Choice {
  /** @probability 1 */ yes = "yes",
  /** @probability 0.2 */ no = "no",
}
typia.llm.evaluation<{
  /** Urgent? @probability 1 */ urgent: Urgency;
  /** Choice? */ choice: Choice;
}>();
`)
}
