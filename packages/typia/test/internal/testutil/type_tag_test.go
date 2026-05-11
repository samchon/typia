package testutil

import "testing"

// TestTypeTag verifies protobuf type tag construction.
//
// Protobuf helper tests use type tags to force unsigned and fixed-width scalar
// interpretations. This test ensures the compact helper fills the kind, name,
// and value fields with the requested protobuf type.
//
// 1. Build a type tag for uint64.
// 2. Assert the kind field marks it as a type tag.
// 3. Assert the tag name matches the protobuf scalar.
// 4. Assert the tag value matches the protobuf scalar.
func TestTypeTag(t *testing.T) {
	tag := TypeTag("uint64")
	if tag.Kind != "type" || tag.Name != "uint64" || tag.Value != "uint64" {
		t.Fatalf("unexpected type tag: %+v", tag)
	}
}
