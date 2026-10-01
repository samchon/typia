package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestProtobufUtilBigintConstantDeduction verifies signed bigint deduction.
//
// Bigint literal unions choose signed or unsigned protobuf scalar defaults from
// their values when no explicit type tag is present. Negative values force
// `int64`, while all-positive values can use `uint64`.
//
// 1. Build bigint constants with only positive values.
// 2. Assert protobuf extraction deduces uint64.
// 3. Build bigint constants with a negative value.
// 4. Assert protobuf extraction deduces int64.
//
// @evidence contracts/testing.md#behavioral-verification Bigint constant unions with only positive values and with a negative value are passed to the protobuf extraction.
// @evidence contracts/testing.md#independent-expectations Negative values require a signed scalar and all-positive values fit unsigned; the two scalars are authored.
// @evidence contracts/testing.md#distinguishing-cases All-positive and sign-mixed unions form the pair.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported utility on constructed metadata with no filesystem fixture, process or native command build.
func TestProtobufUtilBigintConstantDeduction(t *testing.T) {
	unsigned := helpers.ProtobufUtil.GetBigints(testutil.BigintConstantMetadata("1", "2"))
	if _, ok := unsigned["uint64"]; !ok {
		t.Fatalf("positive bigint constants should deduce uint64: %#v", unsigned)
	}

	signed := helpers.ProtobufUtil.GetBigints(testutil.BigintConstantMetadata("-1", "2"))
	if _, ok := signed["int64"]; !ok {
		t.Fatalf("negative bigint constants should deduce int64: %#v", signed)
	}
}
