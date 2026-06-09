package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaIntersectsPrimitives verifies primitive intersection rules.
//
// Primitive intersection is the cheap path before codegen decides whether union
// branches overlap. Atomics intersect with constants of the same type, matching
// constants intersect by literal value, and different literals do not intersect.
//
//  1. Assert string atomic metadata intersects with a string literal.
//  2. Assert two equal string literals intersect.
//  3. Assert two different string literals do not intersect.
//  4. Assert equal native names intersect even when represented by different
//     metadata instances.
func TestMetadataSchemaIntersectsPrimitives(t *testing.T) {
  if !metadata.MetadataSchema_intersects(testutil.AtomicMetadata("string"), testutil.StringConstantMetadata("x")) {
    t.Fatal("string atomic should intersect string literal")
  }
  if !metadata.MetadataSchema_intersects(testutil.StringConstantMetadata("x"), testutil.StringConstantMetadata("x")) {
    t.Fatal("same string literal should intersect")
  }
  if metadata.MetadataSchema_intersects(testutil.StringConstantMetadata("x"), testutil.StringConstantMetadata("y")) {
    t.Fatal("different string literals should not intersect")
  }
  if !metadata.MetadataSchema_intersects(nativeMetadata("Date"), nativeMetadata("Date")) {
    t.Fatal("same native names should intersect across metadata instances")
  }
  if metadata.MetadataSchema_intersects(nativeMetadata("Date"), nativeMetadata("Uint8Array")) {
    t.Fatal("different native names should not intersect")
  }
  if !metadata.MetadataSchema_covers(nativeMetadata("Date"), nativeMetadata("Date")) {
    t.Fatal("same native names should cover across metadata instances")
  }
  if metadata.MetadataSchema_covers(nativeMetadata("Date"), nativeMetadata("Uint8Array")) {
    t.Fatal("different native names should not cover")
  }
}

func nativeMetadata(name string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Natives: []*metadata.MetadataNative{
      metadata.MetadataNative_create(metadata.MetadataNative{Name: name}),
    },
  })
}
