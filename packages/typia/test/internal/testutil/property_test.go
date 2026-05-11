package testutil

import "testing"

// TestProperty verifies literal-key property construction.
//
// Object metadata tests often need a compact way to build a required property
// with a string literal key and a supplied value schema. This test confirms the
// helper wires the generated key and value into the metadata property.
//
// 1. Build a string atomic metadata value.
// 2. Build a property with a literal key.
// 3. Assert the value schema is preserved by pointer.
// 4. Assert the key is encoded as the expected string literal.
func TestProperty(t *testing.T) {
	value := AtomicMetadata("string")
	property := Property("key", value)
	if property.Key == nil || property.Value != value {
		t.Fatalf("unexpected property: %+v", property)
	}
	if constant := property.Key.Constants[0]; constant.Type != "string" || constant.Values[0].Value != "key" {
		t.Fatalf("unexpected property key: %+v", property.Key)
	}
}
