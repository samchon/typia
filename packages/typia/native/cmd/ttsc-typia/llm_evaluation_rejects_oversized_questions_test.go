package main

import (
  "fmt"
  "strconv"
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsOversizedQuestions verifies a choice above 255
// options and a score above 10 levels are compile errors.
//
// TypeSafe's Jev rejects a larger question with a 422 only when the provider
// is called, which is the run-time failure the compiler exists to prevent. The
// largest accepted size must still compile, so the limit is exact and not a
// round number.
//
//  1. Declare a 256-option choice and an 11-level score.
//  2. Require a transform diagnostic naming the size at each.
//  3. Accept a 255-option choice and a 10-level score.
func TestLlmEvaluationRejectsOversizedQuestions(t *testing.T) {
  union := func(count int, quote bool) string {
    parts := make([]string, count)
    for i := range parts {
      if quote {
        parts[i] = strconv.Quote(fmt.Sprintf("o%03d", i))
      } else {
        parts[i] = strconv.Itoa(i)
      }
    }
    return strings.Join(parts, " | ")
  }
  source := func(choice int, score int) string {
    return `import typia from "typia";

interface IDecision {
  /** Which option? */
  choice: ` + union(choice, true) + `;
  /** How severe? */
  score: ` + union(score, false) + `;
}

typia.llm.evaluation<IDecision>();
`
  }
  errText := llmEvaluationDiagnosticsBuild(t, "oversized-questions", source(256, 11))
  for _, expected := range []string{
    "- $input.choice\n  - LLM evaluation does not support a choice of 256 options, because an evaluation model accepts at most 255.",
    "- $input.score\n  - LLM evaluation does not support a score of 11 levels, because an evaluation model accepts at most 10.",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("llm.evaluation size diagnostic missing %q:\n%s", expected, errText)
    }
  }
  llmEvaluationAccepts(t, "largest-questions", source(255, 10))
}
