package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsUnsupportedRefinements verifies every validation
// tag outside the decoder's contract is a compile error.
//
// A decoded decision must satisfy every constraint in T. The evaluator cannot
// turn a selected literal into one satisfying an unrelated refinement.
//
//  1. Declare invalid string, number, boolean, and object refinements.
//  2. Require a transform diagnostic at each decision path.
//  3. Accept neighboring annotation-only tags.
//
// @evidence contracts/testing.md#behavioral-verification Unsupported string, numeric, boolean and object validation refinements diagnose their decision paths; annotation-only tag controls compile.
// @evidence contracts/testing.md#independent-expectations Evaluation decodes selected literals without running arbitrary tag predicates, so refined values cannot be represented soundly unless their constraints are part of the decoder contract.
// @evidence contracts/testing.md#distinguishing-cases Direct and nested decisions, array membership and a custom boolean predicate contrast with metadata-only annotations.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationRejectsUnsupportedRefinements as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
func TestLlmEvaluationRejectsUnsupportedRefinements(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "refinements", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Which team? */
  team: ("a" & tags.MinLength<2>) | "b";
  /** Which level? */
  level: (0 & tags.Minimum<1>) | 2;
  /** Which product? */
  products: Array<( "a" & tags.MinLength<2>) | "b">;
  nested: {
    /** Which status? */
    status: ("old" & tags.Pattern<"^new$">) | "new";
  };
}>();

type TrueOnly = tags.TagBase<{
  target: "boolean";
  kind: "trueOnly";
  value: undefined;
  validate: "$input === true";
}>;
typia.llm.evaluation<{
  /** Is it permitted? */
  permitted: boolean & TrueOnly;
}>();

type GuardedProbability = tags.TagBase<{
  target: "boolean";
  kind: "probability";
  value: 0.8;
  validate: "$input === true";
}>;
typia.llm.evaluation<{
  /** Is it allowed? */
  allowed: boolean & GuardedProbability;
}>();

type ObjectOnly = tags.TagBase<{
  target: "object";
  kind: "objectOnly";
  value: undefined;
  validate: "true";
}>;
typia.llm.evaluation<{
  child: ({ /** Is it active? */ active: boolean } & ObjectOnly);
}>();

interface IRoot {
  /** Is it active? */
  active: boolean;
}
typia.llm.evaluation<IRoot & ObjectOnly>();
`)
  for _, expected := range []string{
    "- $input.team\n  - LLM evaluation does not support",
    "- $input.level\n  - LLM evaluation does not support",
    "- $input.products\n  - LLM evaluation does not support",
    "- $input.nested.status\n  - LLM evaluation does not support",
    "- $input.permitted\n  - LLM evaluation does not support",
    "- $input.allowed\n  - LLM evaluation does not support",
    "- $input.child\n  - LLM evaluation does not support",
    "- $input\n  - LLM evaluation does not support",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("missing unsupported refinement diagnostic %q:\n%s", expected, errText)
    }
  }
  llmEvaluationAccepts(t, "annotation-refinements", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Is it urgent? */
  urgent: boolean & tags.Default<true>;
  /** Which level? */
  level: (0 & tags.Example<0>) | 1;
}>();
`)
}
