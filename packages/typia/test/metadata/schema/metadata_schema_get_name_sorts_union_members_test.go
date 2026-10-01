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
//
// @evidence contracts/testing.md#behavioral-verification GetName on metadata holding nullable, undefined, number and string members returns one string compared with a literal.
// @evidence contracts/testing.md#independent-expectations The expected sorted union name is an authored literal; the requirement is that name does not depend on construction order.
// @evidence contracts/testing.md#distinguishing-cases One four-member union fixes the sort. It does not assert that a different construction order yields the same name, so that property is only indirectly pinned.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It constructs metadata and reads the name directly, with no filesystem fixture, process or native command build.
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
