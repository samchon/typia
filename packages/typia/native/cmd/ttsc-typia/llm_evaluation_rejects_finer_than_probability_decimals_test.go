package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsFinerThanProbabilityDecimals verifies a probability
// requirement finer than the configured `decimals`, two by default, is a
// compile error at every requirement position.
//
// The evaluation model rounds its answers to those decimals, so a finer
// requirement can never be told apart from its neighbor. The same source must
// fail without a config, because two decimals is the default, and compile once
// `decimals` is fine enough to hold it.
//
//  1. Declare a boolean, a choice member, and a set member finer than two
//     decimals, with `decimals: 2`.
//  2. Require a transform diagnostic at each of them, and the same without a
//     config.
//     A property default finer than the grid is reported once, not once per
//     member.
//  3. Accept a requirement on the grid, and a finer one with `decimals: 3`.
//
// @evidence contracts/testing.md#behavioral-verification Boolean, choice and set thresholds finer than two decimals diagnose; an inherited property default is reported once, omitted config still uses two, and supported grid controls compile.
// @evidence contracts/testing.md#independent-expectations A probability requirement must lie on the model answer rounding grid, otherwise neighboring requirements cannot be distinguished at configured precision.
// @evidence contracts/testing.md#distinguishing-cases Three requirement positions, one inherited default, omitted config, on-grid literals and decimals three distinguish precision and duplicate-report boundaries.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationRejectsFinerThanProbabilityDecimals as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
func TestLlmEvaluationRejectsFinerThanProbabilityDecimals(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "finer-decimals", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Urgent? */
  boolean: boolean & tags.Probability<0.755>;
  /** Which team? */
  choice: ("a" & tags.Probability<0.334>) | ("b" & tags.Probability<0.5>);
  /** Which products? */
  set: Array<("card" & tags.Probability<0.125>) | "loan">;
}, { decimals: 2 }>();
`)
  for _, expected := range []string{
    "- $input.boolean\n  - LLM evaluation probability requirement must use at most 2 decimal places, the configured decimals, but got 0.755.",
    "- $input.choice\n  - LLM evaluation probability requirement must use at most 2 decimal places, the configured decimals, but got 0.334.",
    "- $input.set\n  - LLM evaluation probability requirement must use at most 2 decimal places, the configured decimals, but got 0.125.",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("llm.evaluation decimals diagnostic missing %q:\n%s", expected, errText)
    }
  }
  // a property default is one declaration, however many members inherit it
  inherited := llmEvaluationDiagnosticsBuild(t, "decimals-inherited", `import typia from "typia";

enum Team {
  /** Payments */
  billing = "billing",
  /** Outages */
  technical = "technical",
  /** Pricing */
  sales = "sales",
}

typia.llm.evaluation<{
  /**
   * Which team?
   *
   * @probability 0.334
   */
  team: Team;
}>();
`)
  if count := strings.Count(inherited, "but got 0.334"); count != 1 {
    t.Fatalf("a property default must be reported once, got %d:\n%s", count, inherited)
  }
  defaulted := llmEvaluationDiagnosticsBuild(t, "decimals-default", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Urgent? */
  boolean: boolean & tags.Probability<0.755>;
}>();
`)
  if !strings.Contains(defaulted, "at most 2 decimal places") {
    t.Fatalf("llm.evaluation must default to two decimals:\n%s", defaulted)
  }
  llmEvaluationAccepts(t, "decimals-on-grid", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Urgent? */
  boolean: boolean & tags.Probability<0.75>;
  /** Which team? */
  choice: ("a" & tags.Probability<0.33>) | ("b" & tags.Probability<0.5>);
}>();
`)
  llmEvaluationAccepts(t, "decimals-three", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Urgent? */
  boolean: boolean & tags.Probability<0.755>;
}, { decimals: 3 }>();
`)
}
