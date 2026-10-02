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
//
// @evidence contracts/testing.md#behavioral-verification The generated helper call receives three for configured decimals and two when omitted.
// @evidence contracts/testing.md#independent-expectations The public evaluation config sets the decoder rounding grid; a fixed literal helper argument pins transport of that setting independently of the emitted plan body.
// @evidence contracts/testing.md#distinguishing-cases The same boolean decision is transformed with explicit three and with no config, separating configured and default precision.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationEmitsConfiguredDecimals as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
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
