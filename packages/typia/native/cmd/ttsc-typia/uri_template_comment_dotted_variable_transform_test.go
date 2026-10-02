package main

import (
  "regexp"
  "strings"
  "testing"
)

// TestUriTemplateCommentDottedVariableTransform verifies the comment-format
// producer retains dotted variable names in its emitted lexical predicate.
//
// The comment-tag cheat sheet is a separate producer from the public Format
// type's imported helper. RFC 6570 section 2.3 permits an optional dot before
// each varchar following the first, so both producers must preserve that rule.
//
//  1. Transform one authored @format uri-template field through the shared fixture.
//  2. Read its emitted regular expression and exercise ASCII and percent-escape
//     variable names, comma lists, prefix and explode modifiers.
//  3. Reject trailing/consecutive dots, malformed escapes and invalid modifiers.
//
// @evidence contracts/testing.md#behavioral-verification runTransform emits the comment-format predicate for a string property. The emitted regular expression must accept dotted variable names in the first and subsequent variables and with modifiers, while rejecting adjacent invalid spellings. Go regexp evaluates the emitted ASCII lexical predicate; this case does not execute the JavaScript validator.
// @evidence contracts/testing.md#independent-expectations RFC 6570 section 2.3 defines varname as varchar followed by optional-dot/varchar repetitions. Authored positive and negative strings follow that grammar independently of the producer. The Go regular expression evaluator supports the emitted expression's groups, repetitions, character classes and escapes for these ASCII inputs; JavaScript-only Unicode cases are outside this oracle.
// @evidence contracts/testing.md#distinguishing-cases Plain and dotted variable names, both comma-list positions, percent escapes, prefix and explode forms contrast with trailing/consecutive dots, malformed escapes, zero/too-long prefixes and simultaneous modifiers. Empty and literal templates remain accepted. The public type-tag helper's runtime case is owned by the TypeScript schema population.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers this unit Test function. The shared fixture loads declaration dependencies once and runTransform operates in process; one emitted predicate serves every lexical input without a native artifact build, compiler or JavaScript subprocess.
func TestUriTemplateCommentDottedVariableTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "uri-template-comment-", `import typia from "typia";
interface Template {
  /** @format uri-template */
  value: string;
}
export const check = typia.createIs<Template>();
`)
  js := compareEqualCoverTransform(t, project)
  emitted := anyArrayTypeTagsExport(t, js, "check")
  start := strings.Index(emitted, "/^(?:")
  if start < 0 {
    t.Fatalf("comment format emitted no lexical expression:\n%s", emitted)
  }
  end := strings.Index(emitted[start:], "/i.test(")
  if end < 0 {
    t.Fatalf("comment format emitted no expression invocation:\n%s", emitted)
  }
  pattern, err := regexp.Compile("(?i)" + emitted[start+1:start+end])
  if err != nil {
    t.Fatalf("parse emitted ASCII lexical predicate: %v", err)
  }
  for _, value := range []string{"", "/literal", "{plain}", "{a.b}", "{?a.b,c.d}", "{a.b:2}", "{a.b*}", "{a.%2e.b}"} {
    if !pattern.MatchString(value) {
      t.Errorf("comment-format predicate rejected RFC varname %q", value)
    }
  }
  for _, value := range []string{"{.a.}", "{a..b}", "{a.}", "{a%zz}", "{a.b:0}", "{a.b:10000}", "{a.b*:2}"} {
    if pattern.MatchString(value) {
      t.Errorf("comment-format predicate accepted malformed variable %q", value)
    }
  }
}
