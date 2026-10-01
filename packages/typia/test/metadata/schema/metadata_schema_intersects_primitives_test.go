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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_intersects compares a string atomic with literals, equal literals and different literals.
// @evidence contracts/testing.md#independent-expectations Atomic string overlaps a string literal, equal literals overlap and different literals do not; the verdicts are authored.
// @evidence contracts/testing.md#distinguishing-cases Atomic-with-literal and equal-literal positives against the different-literal negative; other primitive kinds are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported intersection function on constructed metadata with no filesystem fixture, process or native command build.
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
