package typia_test

import (
  "testing"

  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestProtobufUtilNumericConstantSequenceKeepsDeducedScalar verifies sequence-only constants.
//
// Number constants first deduce their protobuf scalar from literal values. A
// sequence tag without an explicit type tag must keep that deduced scalar
// instead of resetting the bucket to double.
//
// 1. Build a number constant whose value is an int32-sized integer.
// 2. Add only a protobuf sequence tag to the constant.
// 3. Assert GetNumbers keeps the sequence under int32 and not double.
func TestProtobufUtilNumericConstantSequenceKeepsDeducedScalar(t *testing.T) {
  sequence := 7
  meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Constants: []*metadata.MetadataConstant{
      metadata.MetadataConstant_create(metadata.MetadataConstant{
        Type: "number",
        Values: []*metadata.MetadataConstantValue{
          metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
            Value: 1,
            Tags:  [][]metadata.IMetadataTypeTag{{testutil.SequenceTag(sequence)}},
          }),
        },
      }),
    },
  })

  numbers := helpers.ProtobufUtil.GetNumbers(meta)
  if got := numbers["int32"]; got == nil || *got != sequence {
    t.Fatalf("sequence-only number constant should keep int32 deduction: %#v", numbers)
  }
  if _, ok := numbers["double"]; ok {
    t.Fatalf("sequence-only number constant should not fall back to double: %#v", numbers)
  }
}
