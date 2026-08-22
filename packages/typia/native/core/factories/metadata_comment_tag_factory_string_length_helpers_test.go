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
