package typia_test

import (
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestAtomicPredicatorRejectsNativeOverlaps verifies native wrapper filtering.
//
// Atomic and constant predicates must not emit duplicate primitive checks when a
// metadata bucket already contains a native wrapper with the same primitive
// name. The comparison is intentionally ASCII case-insensitive because the
// native names come from TypeScript symbols.
//
// 1. Build metadata with `String` and `Number` native references.
// 2. Assert constant and atomic predicates reject overlapping primitive names.
// 3. Assert unrelated primitive names are still allowed.
// 4. Assert template predicates reject a native string wrapper.
func TestAtomicPredicatorRejectsNativeOverlaps(t *testing.T) {
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Natives: []*metadata.MetadataNative{
			metadata.MetadataNative_create(metadata.MetadataNative{Name: "String"}),
			metadata.MetadataNative_create(metadata.MetadataNative{Name: "Number"}),
		},
	})

	if helpers.AtomicPredicator.Constant(struct {
		Metadata *metadata.MetadataSchema
		Name     string
	}{Metadata: meta, Name: "string"}) {
		t.Fatal("constant predicate should reject native String overlap")
	}
	if helpers.AtomicPredicator.Atomic(struct {
		Metadata *metadata.MetadataSchema
		Name     string
	}{Metadata: meta, Name: "number"}) {
		t.Fatal("atomic predicate should reject native Number overlap")
	}
	if !helpers.AtomicPredicator.Constant(struct {
		Metadata *metadata.MetadataSchema
		Name     string
	}{Metadata: meta, Name: "boolean"}) {
		t.Fatal("unrelated boolean primitive should still be allowed")
	}
	if helpers.AtomicPredicator.Template(meta) {
		t.Fatal("template predicate should reject native String overlap")
	}
}
