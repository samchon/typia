package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsSharedValues verifies a decision cannot list one
// value through two declarations.
//
// TypeScript gives an enum's members with one value a single literal type, and
// a union folds `E.a | "x"` or `("a" & Tag) | "a"` into one entry, so the
// second declaration's description and probability requirement would vanish
// and the question would be asked with whichever came first. Every spelling of
// that must fail, and each neighbor that lists a value once must not.
//
//  1. Declare members sharing a value in one enum, an enum beside a literal, a
//     literal with and without a tag in both orders, a literal with two tags,
//     a number, and an array set.
//  2. Require a transform diagnostic naming the shared value at each.
//  3. Accept a distributed tag, an enum with a tag, a flattened alias union, an
//     `Exclude`, and an enum subset.
func TestLlmEvaluationRejectsSharedValues(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "shared-values", `import typia, { tags } from "typia";

enum Dup {
  /** A */
  a = "x",
  /** B */
  b = "x",
  /** C */
  c = "y",
}
enum Plain {
  /** A */
  a = "x",
  /** B */
  b = "y",
}
enum Numeric {
  /** A */
  a = 1,
  /** B */
  b = 1,
  /** C */
  c = 2,
}
enum Merged {
  /** A */
  a = 1,
}
enum Merged {
  /** B */
  b = 1,
  /** C */
  c = 2,
}

typia.llm.evaluation<{
  /** Numeric enum? */
  numericEnum: Numeric;
  /** Merged enum? */
  mergedEnum: Merged;
  /** Same enum? */
  sameEnum: Dup;
  /** Enum beside a literal? */
  enumLiteral: Plain | "x";
  /** Tagged and bare? */
  taggedBare: ("a" & tags.Probability<0.3>) | "a" | ("b" & tags.Probability<0.7>);
  /** Bare and tagged? */
  bareTagged: "a" | ("a" & tags.Probability<0.3>) | ("b" & tags.Probability<0.7>);
  /** Two tags? */
  twoTags: ("a" & tags.Probability<0.3>) | ("a" & tags.Probability<0.7>) | "b";
  /** A number? */
  number: (0 & tags.Probability<0.3>) | (0 & tags.Probability<0.7>) | 1;
  /** A set? */
  set: Array<("a" & tags.Probability<0.3>) | ("a" & tags.Probability<0.7>) | "b">;
}>();
`)
  for _, expected := range []string{
    "- $input.numericEnum\n  - LLM evaluation does not support enum members or literals sharing the value 1",
    "- $input.mergedEnum\n  - LLM evaluation does not support enum members or literals sharing the value 1",
    "- $input.sameEnum\n  - LLM evaluation does not support enum members or literals sharing the value \"x\"",
    "- $input.enumLiteral\n  - LLM evaluation does not support enum members or literals sharing the value \"x\"",
    "- $input.taggedBare\n  - LLM evaluation does not support enum members or literals sharing the value \"a\"",
    "- $input.bareTagged\n  - LLM evaluation does not support enum members or literals sharing the value \"a\"",
    "- $input.twoTags\n  - LLM evaluation does not support enum members or literals sharing the value \"a\"",
    "- $input.number\n  - LLM evaluation does not support enum members or literals sharing the value 0",
    "- $input.set\n  - LLM evaluation does not support enum members or literals sharing the value \"a\"",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("llm.evaluation shared value diagnostic missing %q:\n%s", expected, errText)
    }
  }
  llmEvaluationAccepts(t, "shared-values-twin", `import typia, { tags } from "typia";

enum Plain {
  /** A */
  a = "x",
  /** B */
  b = "y",
}
type Tagged = ("a" & tags.Probability<0.3>) | ("b" & tags.Probability<0.7>);
type Pair = "a" | "b";

typia.llm.evaluation<{
  /** Distributed tag? */
  distributed: ("a" | "b") & tags.Probability<0.5>;
  /** Enum with a tag? */
  enumTag: Plain & tags.Probability<0.5>;
  /** Alias union of tagged members? */
  alias: Tagged;
  /** Flattened alias union? */
  flattened: Pair | "a";
  /** Exclude? */
  excluded: Exclude<"a" | "b" | "c", "c">;
  /** Enum subset? */
  subset: Plain.a | Plain.b;
  /** Numbers? */
  numbers: (0 & tags.Probability<0.3>) | (1 & tags.Probability<0.7>);
}>();
`)
}
