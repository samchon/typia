package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationPlanEmissionTransform verifies typia.llm.evaluation emits
// one deterministic plan call with the documented description sources.
//
// The transform replaces the call with `_createLlmEvaluation(plan)`, whose
// plan carries every question's text. A property or enum member `@description`
// tag overrides its summary, as it does in typia's JSON schemas, and repository
// formatting rewrites that tag in TypeScript sources, so this fixture pins it
// here. The same source must also emit byte-identical output on every run,
// because the plan feeds build caches and published bundles.
//
//  1. Transform a decision type with `@description` overrides on a property and
//     an enum member, a threshold, and a member minimum.
//  2. Transform the same project again.
//  3. Assert the runtime helper call, the overridden texts, the requirements,
//     and identical output across runs.
func TestLlmEvaluationPlanEmissionTransform(t *testing.T) {
  project := llmEvaluationProject(t, "emission", llmEvaluationEmissionSource)
  transform := func() string {
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", "src/main.ts",
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("llm.evaluation transform failed: code=%d stderr=\n%s", code, errText)
    }
    return out
  }
  first := transform()
  for _, expected := range []string{
    "_createLlmEvaluation",
    `instructions: "Overridden question"`,
    `description: "Overridden member"`,
    `description: "Plain member"`,
    "threshold: 0.8",
    "minimum: 0.75",
  } {
    if !strings.Contains(first, expected) {
      t.Fatalf("llm.evaluation emission missing %q:\n%s", expected, first)
    }
  }
  for _, unexpected := range []string{`instructions: "Summary`, `description: "Summary`, "typia.llm.evaluation"} {
    if strings.Contains(first, unexpected) {
      t.Fatalf("llm.evaluation emission must not contain %q:\n%s", unexpected, first)
    }
  }
  if second := transform(); second != first {
    t.Fatalf("llm.evaluation emission is not deterministic:\n--- first\n%s\n--- second\n%s", first, second)
  }
}

const llmEvaluationEmissionSource = `import typia, { tags } from "typia";

enum Team {
  /**
   * Plain member
   *
   * @probability 0.5
   */
  billing = "billing",
  /**
   * Summary to be overridden
   *
   * @description Overridden member
   * @probability 0.75
   */
  technical = "technical",
}

export const evaluation = typia.llm.evaluation<{
  /**
   * Summary to be overridden
   *
   * @description Overridden question
   */
  team: Team;
  /** Is a refund requested? */
  refund: boolean & tags.Probability<0.8>;
}>();
`
