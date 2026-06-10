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
// 1. Assert string atomic metadata intersects with a string literal.
// 2. Assert two equal string literals intersect.
// 3. Assert two different string literals do not intersect.
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
}
