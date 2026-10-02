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
//
// @evidence contracts/testing.md#behavioral-verification A computed Symbol.iterator method with probability produces a normal probability diagnostic rather than crashing.
// @evidence contracts/testing.md#independent-expectations Computed method names are AST expressions rather than plain identifier text, but unsupported placement still requires an ordinary reported error.
// @evidence contracts/testing.md#distinguishing-cases A computed method is annotated beside an otherwise valid boolean evaluation, isolating diagnostic-name handling from decision validity.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationRejectsComputedMethodProbability as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
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
