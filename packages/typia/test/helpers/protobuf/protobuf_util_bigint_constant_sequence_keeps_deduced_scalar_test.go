package typia_test

import (
  "testing"

  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestProtobufUtilBigintConstantSequenceKeepsDeducedScalar verifies sequence-only bigints.
//
// Bigint constants first deduce their protobuf scalar from literal values. A
// sequence tag without an explicit type tag must keep that deduced scalar
// instead of resetting the bucket to int64.
//
// 1. Build a positive bigint constant that deduces uint64.
// 2. Add only a protobuf sequence tag to the constant.
// 3. Assert GetBigints keeps the sequence under uint64 and not int64.
func TestProtobufUtilBigintConstantSequenceKeepsDeducedScalar(t *testing.T) {
  sequence := 17
  meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Constants: []*metadata.MetadataConstant{
      metadata.MetadataConstant_create(metadata.MetadataConstant{
        Type: "bigint",
        Values: []*metadata.MetadataConstantValue{
          metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
            Value: "7",
            Tags:  [][]metadata.IMetadataTypeTag{{testutil.SequenceTag(sequence)}},
          }),
        },
      }),
    },
  })

  bigints := helpers.ProtobufUtil.GetBigints(meta)
  if got := bigints["uint64"]; got == nil || *got != sequence {
    t.Fatalf("sequence-only positive bigint constant should keep uint64 deduction: %#v", bigints)
  }
  if _, ok := bigints["int64"]; ok {
    t.Fatalf("sequence-only positive bigint constant should not fall back to int64: %#v", bigints)
  }
}
