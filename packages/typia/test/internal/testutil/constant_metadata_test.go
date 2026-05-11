package testutil

import "testing"

// TestConstantMetadata verifies literal constant schema construction.
//
// Protobuf and schema coverage tests build literal unions through the generic
// constant helper and its primitive wrappers. This test pins the shared bucket
// shape for generic, number, bigint, and string constants.
//
// 1. Build a generic boolean constant schema.
// 2. Assert the generic constant bucket stores all values.
// 3. Build number and bigint constants through wrapper helpers.
// 4. Assert the string wrapper stores its literal values.
func TestConstantMetadata(t *testing.T) {
	assertConstantValues(t, ConstantMetadata("boolean", true, false), "boolean", []any{true, false})
	assertConstantValues(t, NumberConstantMetadata(1, 2.5), "number", []any{1, 2.5})
	assertConstantValues(t, BigintConstantMetadata("1", "2"), "bigint", []any{"1", "2"})
	assertConstantValues(t, StringConstantMetadata("a", "b"), "string", []any{"a", "b"})
}
