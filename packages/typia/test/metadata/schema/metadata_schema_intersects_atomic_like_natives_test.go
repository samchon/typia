package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaIntersectsAtomicLikeNatives verifies wrapper native overlap.
//
// Runtime native checks for `String`, `Number`, and `Boolean` accept both the
// wrapper instance and the matching primitive. Union specialization must keep
// those wrapper natives overlapping primitive metadata so primitive values do
// not become false discriminators.
//
// 1. Assert wrapper natives intersect matching primitive and constant metadata.
// 2. Assert `String` also intersects template-literal strings.
// 3. Assert a wrapper native does not intersect an unrelated primitive.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_intersects runs wrapper natives against matching atomic, constant and template-literal strings and against a number atomic.
// @evidence contracts/testing.md#independent-expectations Wrapper natives accept their matching primitive at runtime, so overlap is an authored truth about values; the booleans are literals.
// @evidence contracts/testing.md#distinguishing-cases Four wrapper/primitive pairs, constants and a template are positives, and String against number atomic is the adjacent negative.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported intersection function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaIntersectsAtomicLikeNatives(t *testing.T) {
  cases := []struct {
    native string
    atomic string
    value  any
  }{
    {native: "String", atomic: "string", value: "x"},
    {native: "Number", atomic: "number", value: 1},
    {native: "Boolean", atomic: "boolean", value: true},
    {native: "BigInt", atomic: "bigint", value: "1"},
  }
  for _, tc := range cases {
    if !metadata.MetadataSchema_intersects(testutil.NativeMetadata(tc.native), testutil.AtomicMetadata(tc.atomic)) {
      t.Fatalf("%s native should intersect %s atomic", tc.native, tc.atomic)
    }
    if !metadata.MetadataSchema_intersects(testutil.ConstantMetadata(tc.atomic, tc.value), testutil.NativeMetadata(tc.native)) {
      t.Fatalf("%s native should intersect %s constant", tc.native, tc.atomic)
    }
  }
  if !metadata.MetadataSchema_intersects(
    testutil.NativeMetadata("String"),
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("String native should intersect template-literal strings")
  }
  if metadata.MetadataSchema_intersects(testutil.NativeMetadata("String"), testutil.AtomicMetadata("number")) {
    t.Fatal("String native should not intersect number atomic")
  }
}
