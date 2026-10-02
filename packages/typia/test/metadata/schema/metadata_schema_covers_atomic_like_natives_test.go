package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversAtomicLikeNatives verifies wrapper native coverage.
//
// The generated runtime predicate for primitive wrapper natives accepts the
// matching primitive values. Coverage must reflect that containment while still
// rejecting the reverse direction, where a primitive cannot cover wrapper
// instances.
//
// 1. Assert `String`, `Number`, `Boolean`, and `BigInt` natives cover matching primitives.
// 2. Assert `String` native covers template-literal strings.
// 3. Assert primitive string does not cover `String` native.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers and MetadataSchema_atomicLikeNative run on authored String, Number, Boolean and BigInt native schemas against matching atomic, constant and template-literal targets; a wrapper that stops covering its primitive, or a primitive that starts covering a wrapper, changes a Fatal.
// @evidence contracts/testing.md#independent-expectations Runtime predicates for the primitive wrapper natives accept the matching primitive, so containment is an authored truth about those values; the booleans are literals in the test and not produced by the covers function.
// @evidence contracts/testing.md#distinguishing-cases Four wrapper/primitive pairs, the String native over a template-literal string and the reverse primitive-over-wrapper negative separate the coverage direction. Wrapper natives against unrelated primitives are exercised by the intersection case, not here.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It builds schemas with the testutil constructors and calls the exported metadata functions directly, with no filesystem fixture, process or native command build.
func TestMetadataSchemaCoversAtomicLikeNatives(t *testing.T) {
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
    if !metadata.MetadataSchema_covers(testutil.NativeMetadata(tc.native), testutil.AtomicMetadata(tc.atomic)) {
      t.Fatalf("%s native should cover %s atomic", tc.native, tc.atomic)
    }
    if !metadata.MetadataSchema_covers(testutil.NativeMetadata(tc.native), testutil.ConstantMetadata(tc.atomic, tc.value)) {
      t.Fatalf("%s native should cover %s constant", tc.native, tc.atomic)
    }
  }
  if !metadata.MetadataSchema_covers(
    testutil.NativeMetadata("String"),
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("String native should cover template-literal strings")
  }
  if atomic, ok := metadata.MetadataSchema_atomicLikeNative("BigInt"); !ok || atomic != "bigint" {
    t.Fatal("BigInt should be treated as runtime atomic-like native")
  }
  if metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), testutil.NativeMetadata("String")) {
    t.Fatal("string atomic should not cover String wrapper native")
  }
}
