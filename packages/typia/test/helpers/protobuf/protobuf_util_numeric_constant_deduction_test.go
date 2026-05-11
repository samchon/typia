package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestProtobufUtilNumericConstantDeduction verifies protobuf numeric scalar
// deduction for number constants.
//
// Number literal unions should use the narrowest protobuf scalar that can hold
// all values. Small integers become int32, large integers become int64, and
// fractional values become double. This unit test pins those thresholds without
// needing a full protobuf program emission.
//
// 1. Build number-constant metadata for small integers.
// 2. Assert protobuf extraction deduces int32.
// 3. Build metadata for a value outside int32 range and assert int64.
// 4. Build metadata for a fractional value and assert double.
func TestProtobufUtilNumericConstantDeduction(t *testing.T) {
	int32Meta := testutil.NumberConstantMetadata(1, 2, 3)
	if _, ok := helpers.ProtobufUtil.GetNumbers(int32Meta)["int32"]; !ok {
		t.Fatalf("small integer constants should deduce int32: %#v", helpers.ProtobufUtil.GetNumbers(int32Meta))
	}

	int64Meta := testutil.NumberConstantMetadata(2147483648)
	if _, ok := helpers.ProtobufUtil.GetNumbers(int64Meta)["int64"]; !ok {
		t.Fatalf("large integer constants should deduce int64: %#v", helpers.ProtobufUtil.GetNumbers(int64Meta))
	}

	doubleMeta := testutil.NumberConstantMetadata(1.5)
	if _, ok := helpers.ProtobufUtil.GetNumbers(doubleMeta)["double"]; !ok {
		t.Fatalf("fractional constants should deduce double: %#v", helpers.ProtobufUtil.GetNumbers(doubleMeta))
	}
}
