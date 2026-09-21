package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsComputedMethodProbability verifies an unsupported
// computed method annotation produces a diagnostic instead of a panic.
//
// A computed property name is not a text-bearing identifier in the parser.
// Reading its name as plain text used to crash the compiler's diagnostic path.
//
//  1. Annotate a computed class method with @probability.
//  2. Build an otherwise valid evaluation call.
//  3. Require a normal transform diagnostic.
func TestLlmEvaluationRejectsComputedMethodProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "computed-method-probability", `import typia from "typia";
class Source {
  /** @probability 0.8 */ [Symbol.iterator]() { return []; }
}
typia.llm.evaluation<{
  /** Is it urgent? */
  urgent: boolean;
}>();
`)
  if !strings.Contains(diagnostics, "@probability") {
    t.Fatalf("computed method tag must produce a diagnostic:\n%s", diagnostics)
  }
}
