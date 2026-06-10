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
// 1. Build metadata with `String`, `Number`, and `BigInt` native references.
// 2. Assert the constant predicate rejects overlapping primitive names.
// 3. Assert runtime predicates reject primitive names covered by wrapper natives.
// 4. Assert unrelated primitive names are still allowed.
// 5. Assert template predicates reject a native string wrapper.
func TestAtomicPredicatorRejectsNativeOverlaps(t *testing.T) {
  meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
    Natives: []*metadata.MetadataNative{
      metadata.MetadataNative_create(metadata.MetadataNative{Name: "String"}),
      metadata.MetadataNative_create(metadata.MetadataNative{Name: "Number"}),
      metadata.MetadataNative_create(metadata.MetadataNative{Name: "BigInt"}),
    },
  })

  if helpers.AtomicPredicator.Constant(struct {
    Metadata *metadata.MetadataSchema
    Name     string
  }{Metadata: meta, Name: "string"}) {
    t.Fatal("constant predicate should reject native String overlap")
  }
  if helpers.AtomicPredicator.RuntimeAtomic(struct {
    Metadata *metadata.MetadataSchema
    Name     string
  }{Metadata: meta, Name: "number"}) {
    t.Fatal("runtime atomic predicate should reject native Number overlap")
  }
  if !helpers.AtomicPredicator.Constant(struct {
    Metadata *metadata.MetadataSchema
    Name     string
  }{Metadata: meta, Name: "boolean"}) {
    t.Fatal("unrelated boolean primitive should still be allowed")
  }
  if helpers.AtomicPredicator.RuntimeAtomic(struct {
    Metadata *metadata.MetadataSchema
    Name     string
  }{Metadata: meta, Name: "bigint"}) {
    t.Fatal("runtime atomic predicate should reject native BigInt overlap")
  }
  if helpers.AtomicPredicator.RuntimeConstant(struct {
    Metadata *metadata.MetadataSchema
    Name     string
  }{Metadata: meta, Name: "bigint"}) {
    t.Fatal("runtime constant predicate should reject native BigInt overlap")
  }
  if helpers.AtomicPredicator.RuntimeAtomic(struct {
    Metadata *metadata.MetadataSchema
    Name     string
  }{Metadata: meta, Name: "String"}) {
    t.Fatal("runtime atomic predicate should compare primitive names case-insensitively")
  }
  if helpers.AtomicPredicator.Template(meta) {
    t.Fatal("template predicate should reject native String overlap")
  }
}
