package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsInvalidConfig verifies the second generic argument
// accepts only an integer `decimals` in [0, 15].
//
// The bounds are AI SDK's rounding declaration, which typia's decoder reads. An
// unknown option next to a known one passes TypeScript's own check, so the
// transform must reject it rather than silently configure nothing.
//
//  1. Build one project per invalid config: a fraction, a negative, sixteen, and
//     an unknown option beside `decimals`.
//  2. Require each build to fail with its message.
//  3. Accept the bounds 0 and 15.
func TestLlmEvaluationRejectsInvalidConfig(t *testing.T) {
  for name, tc := range map[string]struct{ config, message string }{
    "fraction": {`{ decimals: 1.5 }`, "decimals must be an integer between 0 and 15."},
    "negative": {`{ decimals: -1 }`, "decimals must be an integer between 0 and 15."},
    "sixteen":  {`{ decimals: 16 }`, "decimals must be an integer between 0 and 15."},
    "unknown":  {`{ decimals: 2; scale: 2 }`, `Unknown option "scale".`},
  } {
    errText := llmEvaluationDiagnosticsBuild(t, "config-"+name, `import typia from "typia";

typia.llm.evaluation<{
  /** Urgent? */
  urgent: boolean;
}, `+tc.config+`>();
`)
    if !strings.Contains(errText, tc.message) {
      t.Fatalf("config %s diagnostic missing %q:\n%s", name, tc.message, errText)
    }
  }
  for _, decimals := range []string{"0", "15"} {
    llmEvaluationAccepts(t, "config-bound-"+decimals, `import typia from "typia";

typia.llm.evaluation<{
  /** Urgent? */
  urgent: boolean;
}, { decimals: `+decimals+` }>();
`)
  }
}
