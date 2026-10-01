package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCommentTagFactoryStringLengthHelpers verifies every JSDoc length
// spelling emits the same short-circuiting predicates as the public type tags.
//
// The type-tag declarations and JSDoc parser are independent metadata sources.
// Updating only one would preserve schema output while making runtime behavior
// and helper imports depend on which spelling a user chose.
//
//  1. Parse @length and require both comparison helpers at the same boundary.
//  2. Parse @minLength and @maxLength and require their corresponding helper.
//
// @evidence contracts/testing.md#behavioral-verification @length, @minLength and @maxLength comment tags are parsed and the emitted validators must name the same comparison helpers as the type-tag spellings.
// @evidence contracts/testing.md#independent-expectations The type-tag declarations are the reference for which helpers a length constraint imports; the expected helper names come from that reference.
// @evidence contracts/testing.md#distinguishing-cases Three spellings are checked for both bounds and one bound each.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the factory in memory with no checker, filesystem fixture or process.
func TestMetadataCommentTagFactoryStringLengthHelpers(t *testing.T) {
  parse := func(name string, value string) []schemametadata.IMetadataTypeTag {
    t.Helper()
    reports := []string{}
    record := metadataCommentTagFactory_parse(struct {
      Report func(msg string) any
      Tag    schemametadata.IJsDocTagInfo
    }{
      Report: func(msg string) any {
        reports = append(reports, msg)
        return nil
      },
      Tag: schemametadata.IJsDocTagInfo{
        Name: name,
        Text: []schemametadata.IJsDocTagInfo_IText{{Text: value}},
      },
    })
    if len(reports) != 0 {
      t.Fatalf("@%s %s reported errors: %#v", name, value, reports)
    }
    return record["string"]
  }

  length := parse("length", "3")
  if len(length) != 2 ||
    length[0].Validate != `$importInternal("_stringLengthGte")($input, 3)` ||
    length[1].Validate != `$importInternal("_stringLengthLte")($input, 3)` {
    t.Fatalf("@length must emit both comparison helpers: %#v", length)
  }
  minimum := parse("minLength", "2")
  if len(minimum) != 1 || minimum[0].Validate != `$importInternal("_stringLengthGte")($input, 2)` {
    t.Fatalf("@minLength must emit the lower-bound helper: %#v", minimum)
  }
  maximum := parse("maxLength", "4")
  if len(maximum) != 1 || maximum[0].Validate != `$importInternal("_stringLengthLte")($input, 4)` {
    t.Fatalf("@maxLength must emit the upper-bound helper: %#v", maximum)
  }
}
