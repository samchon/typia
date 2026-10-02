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
//
// @evidence contracts/testing.md#behavioral-verification The evaluation build succeeds when a final boolean property and enum members carry supported probability annotations.
// @evidence contracts/testing.md#independent-expectations Only final decision properties and enum member declarations retain the annotations read by evaluation; probability one is the supported inclusive upper bound.
// @evidence contracts/testing.md#distinguishing-cases An aliased boolean uses a property-level requirement of one, beside enum members requiring one and 0.2; invalid declaration placements are owned by the rejection cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationAcceptsPropertyAndEnumMemberProbability as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
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
