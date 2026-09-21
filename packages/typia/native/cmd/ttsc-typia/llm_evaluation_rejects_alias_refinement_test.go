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
