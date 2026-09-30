package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsConflictingBooleanTags verifies a boolean states one
// threshold, not one per literal.
//
// `true` and `false` fold into one boolean, and the metadata used to keep the
// tags of only one of them, so `(true & A) | (false & B)` silently used
// whichever survived. The neighbors that put one tag on the boolean, or the
// same tag on both literals, must still compile.
//
//  1. Declare booleans whose literals carry different tags, or a tag on one
//     literal only.
//  2. Require a transform diagnostic at each.
//  3. Accept `boolean & Tag` and the same tag on both literals.
func TestLlmEvaluationRejectsConflictingBooleanTags(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "boolean-tags", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** Different tags? */
  different: (true & tags.Probability<0.3>) | (false & tags.Probability<0.7>);
  /** One literal only? */
  half: (true & tags.Probability<0.3>) | false;
}>();
`)
  for _, expected := range []string{
    "- $input.different\n  - LLM evaluation",
    "- $input.half\n  - LLM evaluation boolean has different tags.Probability on true and false; put one on boolean.",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("llm.evaluation boolean tag diagnostic missing %q:\n%s", expected, errText)
    }
  }
  llmEvaluationAccepts(t, "boolean-tags-twin", `import typia, { tags } from "typia";

typia.llm.evaluation<{
  /** One tag? */
  whole: boolean & tags.Probability<0.3>;
  /** The same tag on both? */
  same: (true & tags.Probability<0.3>) | (false & tags.Probability<0.3>);
}>();
`)
}
