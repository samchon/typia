package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaGetNameSortsUnionMembers verifies stable union names.
//
// Metadata names become cache keys for generated helpers. When a schema has
// multiple union members, the generated name must be sorted so construction
// order does not change the cache identity.
//
// 1. Build metadata with nullable, undefined, number, and string members.
// 2. Ask metadata for its display name.
// 3. Assert the union members are sorted into a stable string.
func TestMetadataSchemaGetNameSortsUnionMembers(t *testing.T) {
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Required: false,
		Nullable: true,
		Atomics: []*metadata.MetadataAtomic{
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "string"}),
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "number"}),
		},
	})

	expected := "(null | number | string | undefined)"
	if got := meta.GetName(); got != expected {
		t.Fatalf("unexpected sorted union name: %q", got)
	}
}
