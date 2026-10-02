package factories

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeTagFactoryKeepsBoolFormExclusivity verifies the bool-form exclusivity branch still rejects a duplicated kind.
//
// The bool branch was never broken; it is the working neighbor of the inert
// array-form branch and shares the same loop and reporting path. Repairing the
// array-form branch must not disturb it, so this pins its behavior in both
// directions independently of the array-form tests.
//
// 1. Duplicate a bool-form kind and require rejection naming the kind.
// 2. Require an opted-out `exclusive: false` tag to permit its own duplicate.
//
// @evidence contracts/testing.md#behavioral-verification The validator is called on a duplicated bool-form kind, and on a tag that opts out of exclusivity; the first must be rejected with a report naming the kind and the second must be accepted.
// @evidence contracts/testing.md#independent-expectations Bool-form exclusivity is declared by each tag; both verdicts are authored from the declaration.
// @evidence contracts/testing.md#distinguishing-cases Rejected duplicate versus permitted opted-out duplicate form the pair.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the validator on constructed tags with no checker, filesystem fixture or process.
func TestMetadataTypeTagFactoryKeepsBoolFormExclusivity(t *testing.T) {
  success, messages := metadataTypeTagFactoryTestValidate("string", []schemametadata.IMetadataTypeTag{
    {Target: "string", Name: "Format<\"uuid\">", Kind: "format", Exclusive: true},
    {Target: "string", Name: "Format<\"email\">", Kind: "format", Exclusive: true},
  })
  if success {
    t.Fatal("a duplicated bool-form kind must be rejected")
  }
  if len(messages) != 1 || strings.Contains(messages[0], "format") == false {
    t.Fatalf("the bool-form duplication report must name the kind, reported %#v", messages)
  }

  success, messages = metadataTypeTagFactoryTestValidate("string", []schemametadata.IMetadataTypeTag{
    {Target: "string", Name: "Example<\"first\">", Kind: "example", Exclusive: false},
    {Target: "string", Name: "Example<\"second\">", Kind: "example", Exclusive: false},
  })
  if success == false {
    t.Fatalf("a tag opting out of exclusivity must permit its own duplicate, reported %#v", messages)
  }
}
