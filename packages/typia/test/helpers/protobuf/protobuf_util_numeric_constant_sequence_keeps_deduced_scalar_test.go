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
//
// @evidence contracts/testing.md#behavioral-verification An int32-sized number constant with only a sequence tag is extracted and its scalar and sequence are asserted.
// @evidence contracts/testing.md#independent-expectations A sequence tag does not choose a scalar, so the deduced int32 must remain; authored from the tag contract.
// @evidence contracts/testing.md#distinguishing-cases One sequence-only constant with presence under int32 and absence under double.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported utility on constructed metadata with no filesystem fixture, process or native command build.
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
