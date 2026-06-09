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
// 1. Assert `String`, `Number`, and `Boolean` natives cover matching primitives.
// 2. Assert `String` native covers template-literal strings.
// 3. Assert unrelated sources do not cover template-literal strings.
// 4. Assert primitive string does not cover `String` native.
func TestMetadataSchemaCoversAtomicLikeNatives(t *testing.T) {
  cases := []struct {
    native string
    atomic string
    value  any
  }{
    {native: "String", atomic: "string", value: "x"},
    {native: "Number", atomic: "number", value: 1},
    {native: "Boolean", atomic: "boolean", value: true},
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
  if metadata.MetadataSchema_covers(
    testutil.AtomicMetadata("number"),
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("number atomic should not cover template-literal strings")
  }
  if metadata.MetadataSchema_covers(
    testutil.TemplateMetadata(testutil.StringConstantMetadata("name-"), testutil.AtomicMetadata("number")),
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("different template-literal strings should not cover each other")
  }
  if metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), testutil.NativeMetadata("String")) {
    t.Fatal("string atomic should not cover String wrapper native")
  }
}
