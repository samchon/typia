package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsInvalidProbability verifies typia.llm.evaluation
// rejects every malformed or misplaced probability requirement.
//
// A requirement is a probability, so anything outside `[0, 1]` or not a
// number is a compile error; two requirements on one target are ambiguous
// rather than silently resolved; and `@probability` on an object has no
// decision to govern. Once one choice, score, or set member declares a
// requirement, every member must be covered directly or by a property default.
// Each case pins the accessor and, for members, the member literal, so a
// rejection lands on the declaration the author must fix. A valid requirement
// of every spelling, in a separate project, is the positive twin.
//
//  1. Build one project with one call per invalid requirement, and a separate
//     project with valid requirements.
//  2. Require the first build to fail through the transform-diagnostic path.
//  3. Require each rejected accessor with its message, and the valid project
//     to compile.
func TestLlmEvaluationRejectsInvalidProbability(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "probability", llmEvaluationProbabilitySource)
  for _, expected := range []string{
    "- $input.tagOver\n  - LLM evaluation tags.Probability must be in [0, 1], but got 1.5.",
    "- $input.tagUnder\n  - LLM evaluation tags.Probability must be in [0, 1], but got -0.1.",
    "- $input.commentText\n  - LLM evaluation @probability must be a number in [0, 1], but got \"high\".",
    "- $input.commentEmpty\n  - LLM evaluation @probability must be a number in [0, 1], but got \"\".",
    "- $input.commentOver\n  - LLM evaluation @probability must be in [0, 1], but got 2.",
    "- $input.commentTwice\n  - LLM evaluation @probability is declared more than once; keep only one.",
    "- $input.both\n  - LLM evaluation boolean has both tags.Probability and @probability; keep only one.",
    "- $input.memberTag\n  - LLM evaluation tags.Probability must be in [0, 1], but got 1.2. (member \"risky\")",
    "- $input.memberComment\n  - LLM evaluation @probability must be in [0, 1], but got 3. (member \"bad\")",
    "- $input.scoreComment\n  - LLM evaluation @probability must be a number in [0, 1], but got \"x\". (member 1)",
    "- $input.setMember\n  - LLM evaluation tags.Probability must be in [0, 1], but got 7. (member \"card\")",
    "- $input.partialTag\n  - LLM evaluation probability requirements must cover every member once one member declares one; add tags.Probability or @probability to member \"plain\", or add a property @probability default.",
    "- $input.partialComment\n  - LLM evaluation probability requirements must cover every member once one member declares one; add tags.Probability or @probability to member \"plain\", or add a property @probability default.",
    "- $input.nested\n  - LLM evaluation @probability must be on a boolean, choice, score, or set property, not on an object.",
    // two tags on one member fail typia's generic exclusive-tag check first
    "- __type.tagTwice: string & Probability0.5 & Probability0.6\n  - the property [\"typia.tag\"] kind 'probability' can't be duplicated.",
    // a non-literal value fails typia's generic tag check (samchon/typia#2400)
    "- __type.tagWide: boolean & Probabilitynumber\n  - the property [\"typia.tag.value\"] must be a literal, literal tuple, object, or undefined type.",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("llm.evaluation probability diagnostic missing %q:\n%s", expected, errText)
    }
  }
  llmEvaluationAccepts(t, "probability-valid", llmEvaluationProbabilityValidSource)
}

const llmEvaluationProbabilityValidSource = `import typia, { tags } from "typia";

enum Team {
  /**
   * Payments
   *
   * @probability 0.5
   */
  billing = "billing",
  /**
   * Outages
   *
   * @probability 0.75
   */
  technical = "technical",
}

typia.llm.evaluation<IValid>();

interface IValid {
  /** Tagged? */
  tagged: boolean & tags.Probability<0>;
  /** Tagged at one? */
  taggedOne: boolean & tags.Probability<1>;
  /**
   * Commented?
   *
   * @probability 1
   */
  commented: boolean;
  /** Team? */
  team: Team;
  /** Action? */
  action:
    | ("risky" & tags.Probability<0.9>)
    | ("safe" & tags.Probability<0>);
  /**
   * Products?
   *
   * @probability 0.7
   */
  products: Array<("card" & tags.Probability<0.9>) | "loan">;
}
`

const llmEvaluationProbabilitySource = `import typia, { tags } from "typia";

enum Bad {
  /** Fine */
  fine = "fine",
  /**
   * Broken
   *
   * @probability 3
   */
  bad = "bad",
}

enum Level {
  /**
   * Low
   *
   * @probability x
   */
  low = 1,
  /** High */
  high = 2,
}

enum Partial {
  /**
   * Gated
   *
   * @probability 0.8
   */
  gated = "gated",
  /** Plain */
  plain = "plain",
}

typia.llm.evaluation<{
  /** Wide? */ tagWide: boolean & tags.Probability<number>;
}>();

typia.llm.evaluation<{
  /** Over? */ tagOver: boolean & tags.Probability<1.5>;
  /** Under? */ tagUnder: boolean & tags.Probability<-0.1>;
  /**
   * Text?
   *
   * @probability high
   */
  commentText: boolean;
  /**
   * Empty?
   *
   * @probability
   */
  commentEmpty: boolean;
  /**
   * Over?
   *
   * @probability 2
   */
  commentOver: boolean;
  /**
   * Twice?
   *
   * @probability 0.5
   * @probability 0.6
   */
  commentTwice: boolean;
  /**
   * Both?
   *
   * @probability 0.7
   */
  both: boolean & tags.Probability<0.8>;
  /** Member tag? */
  memberTag: ("risky" & tags.Probability<1.2>) | "safe";
  /** Member comment? */
  memberComment: Bad;
  /** Score comment? */
  scoreComment: Level;
  /** Set member? */
  setMember: Array<("card" & tags.Probability<7>) | "loan">;
  /** Partial tag? */
  partialTag: ("gated" & tags.Probability<0.8>) | "plain";
  /** Partial comment? */
  partialComment: Partial;
  /**
   * Nested?
   *
   * @probability 0.5
   */
  nested: {
    /** Inner? */
    inner: boolean;
  };
}>();

typia.llm.evaluation<{
  /** Twice? */
  tagTwice: ("a" & tags.Probability<0.5> & tags.Probability<0.6>) | "b";
}>();
`
