package main

import (
  "strings"
  "testing"
)

func TestLlmEvaluationRejectsAliasCommentProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "alias-comment-probability", `import typia from "typia";

/** @probability 0.8 */
type Urgency = boolean;
type UrgencyChain = Urgency;
type Wrapper<T> = { /** Wrapped? */ wrapped: T };
/** @probability invalid */
type Choice = "yes" | "no";
/** @probability 0.3 */
type Score = 1 | 2 | 3;
/** @probability 0.4 */
type SetChoice = "a" | "b";
typia.llm.evaluation<{
  /** First? */ first: Urgency;
  /** Second? */ second: UrgencyChain;
  /** Nested? */ nested: { /** Third? */ third: Urgency };
  /** Container? */ container: Wrapper<Urgency>;
  /** Choice? */ choice: Choice;
  /** Score? */ score: Score;
  /** Set? */ set: SetChoice[];
}>();
`)
  for _, expected := range []string{
    "- $input.first\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.second\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.nested.third\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.container.wrapped\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.choice\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.score\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.set\n  - LLM evaluation @probability on a type alias is not supported",
  } {
    if !strings.Contains(diagnostics, expected) {
      t.Fatalf("llm.evaluation alias probability diagnostic missing %q:\n%s", expected, diagnostics)
    }
  }
}

func TestLlmEvaluationRejectsInterfaceCommentProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "interface-comment-probability", `import typia from "typia";

/** @probability 0.8 */
interface IDecision {
  /** Is it urgent? */
  urgent: boolean;
}
/** @probability 0.4 */
interface INested {
  /** Answer? */
  answer: boolean;
}
interface IInherited extends INested {}
typia.llm.evaluation<IDecision>();
typia.llm.evaluation<{
  /** Nested? */ nested: INested;
}>();
typia.llm.evaluation<IInherited>();
`)
  for _, expected := range []string{
    "- $input\n  - LLM evaluation @probability on an object declaration is not supported",
    "- $input.nested\n  - LLM evaluation @probability on an object declaration is not supported",
  } {
    if !strings.Contains(diagnostics, expected) {
      t.Fatalf("llm.evaluation interface probability diagnostic missing %q:\n%s", expected, diagnostics)
    }
  }
  if count := strings.Count(diagnostics, "- $input\n  - LLM evaluation @probability on an object declaration is not supported"); count != 2 {
    t.Fatalf("llm.evaluation should reject both direct and inherited interface comments, got %d:\n%s", count, diagnostics)
  }
}

func TestLlmEvaluationAcceptsUnannotatedAliasAndPropertyComment(t *testing.T) {
  llmEvaluationAccepts(t, "alias-probability-valid", `import typia from "typia";

/** @probability 0.9 */
type Unused = boolean;
type Discards<T> = boolean;
/** Ordinary alias. */
type Urgency = boolean;
type UrgencyChain = Urgency;
typia.llm.evaluation<{
  /** First? */ first: Urgency;
  /** Second? @probability 0.8 */ second: UrgencyChain;
  /** Third? */ third: Discards<Unused>;
}>();
`)
}
