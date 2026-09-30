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
// `decimals` is coarse enough to hold it.
//
//  1. Declare a boolean, a choice member, and a set member finer than two
//     decimals, with `decimals: 2`.
//  2. Require a transform diagnostic at each of them, and the same without a
//     config.
//  3. Accept a requirement on the grid, and a finer one with `decimals: 3`.
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
