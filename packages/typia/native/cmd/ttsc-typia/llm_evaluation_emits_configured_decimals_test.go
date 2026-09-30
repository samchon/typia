package main

import (
  "regexp"
  "testing"
)

// TestLlmEvaluationEmitsConfiguredDecimals verifies the configured decimals,
// two by default, reach the runtime helper as its second argument.
//
// `decode()` derives its rounding tolerance from that number, so a config that
// never reached the helper would leave the decoder on the wrong precision.
//
//  1. Transform a decision type with `decimals: 3`.
//  2. Transform the same type without a config.
//  3. Assert the helper call ends with 3 in the first output and 2 in the second.
func TestLlmEvaluationEmitsConfiguredDecimals(t *testing.T) {
  transform := func(name string, config string) string {
    project := llmEvaluationProject(t, name, `import typia from "typia";

export const evaluation = typia.llm.evaluation<{
  /** Urgent? */
  urgent: boolean;
}`+config+`>();
`)
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
  for _, tc := range []struct{ name, config, decimals string }{
    {"configured-decimals", `, { decimals: 3 }`, "3"},
    {"default-decimals", ``, "2"},
  } {
    out := transform(tc.name, tc.config)
    if !regexp.MustCompile(`\]\s*,\s*` + tc.decimals + `\s*\)`).MatchString(out) {
      t.Fatalf("emission must pass %s decimals to the helper:\n%s", tc.decimals, out)
    }
  }
}
