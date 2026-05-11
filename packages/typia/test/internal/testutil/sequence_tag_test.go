package testutil

import "testing"

// TestSequenceTag verifies protobuf sequence tag construction.
//
// Protobuf emission tests use sequence tags to assign explicit field numbers.
// The helper should build the same metadata shape produced by parsed
// annotations, including the schema extension consumed by protobuf utilities.
//
// 1. Build a sequence tag with an explicit field number.
// 2. Assert the tag kind and name identify a sequence annotation.
// 3. Assert the schema payload uses the protobuf extension key.
// 4. Assert the schema payload stores the requested field number.
func TestSequenceTag(t *testing.T) {
	tag := SequenceTag(7)
	if tag.Kind != "sequence" || tag.Name != "Sequence" {
		t.Fatalf("unexpected sequence tag: %+v", tag)
	}
	schema, ok := tag.Schema.(map[string]any)
	if !ok {
		t.Fatalf("unexpected sequence schema type: %+v", tag.Schema)
	}
	if value := schema["x-protobuf-sequence"]; value != 7 {
		t.Fatalf("unexpected sequence schema: %+v", schema)
	}
}
