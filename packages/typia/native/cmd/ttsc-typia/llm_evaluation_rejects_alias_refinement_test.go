package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsAliasRefinement verifies a named alias cannot hide
// a validation tag from the evaluation compiler.
//
// An alias of a boolean refinement still denotes a constrained boolean. The
// decoder does not enforce that constraint, while an annotation-only alias is
// safe and must remain accepted.
//
//  1. Declare a validation refinement behind a named alias.
//  2. Require a decision-path diagnostic.
//  3. Accept a neighboring annotation-only alias.
//
// @evidence contracts/testing.md#behavioral-verification The aliased trueOnly constraint reports the exact allowed decision path and unsupported-tag reason; an annotation-only Default alias compiles.
// @evidence contracts/testing.md#independent-expectations A decoder that does not enforce a validation refinement cannot promise the refined boolean, regardless of the alias spelling; annotation-only metadata adds no acceptance restriction.
// @evidence contracts/testing.md#distinguishing-cases Named validation and annotation-only boolean aliases differ only in whether their tag imposes a runtime constraint.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationRejectsAliasRefinement as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
func TestLlmEvaluationRejectsAliasRefinement(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "alias-refinement", `import typia, { tags } from "typia";

type TrueOnly = tags.TagBase<{
  target: "boolean";
  kind: "trueOnly";
  value: undefined;
  validate: "$input === true";
}>;
type Guarded = boolean & TrueOnly;
typia.llm.evaluation<{
  /** Is it allowed? */
  allowed: Guarded;
}>();
`)
  expected := "- $input.allowed\n  - LLM evaluation does not support type tag \"trueOnly\", because decode() cannot enforce its constraint."
  if !strings.Contains(errText, expected) {
    t.Fatalf("missing aliased refinement diagnostic:\n%s", errText)
  }
  llmEvaluationAccepts(t, "alias-refinement-control", `import typia, { tags } from "typia";

type Annotated = boolean & tags.Default<true>;
typia.llm.evaluation<{
  /** Is it allowed? */
  allowed: Annotated;
}>();
`)
}
