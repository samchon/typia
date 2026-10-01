package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversNativeNames verifies native coverage rules.
//
// Coverage is the containment counterpart to intersection. Equal native names
// must cover across distinct metadata instances, while different runtime
// constructors must remain separated.
//
// 1. Build two distinct `Date` native metadata instances.
// 2. Assert the source covers the same native name.
// 3. Assert it does not cover a different native name.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers compares two separately constructed Date natives and a Date with a Uint8Array native.
// @evidence contracts/testing.md#independent-expectations Native types are identified by their runtime constructor name; equal names contain each other and different names do not, as authored literals.
// @evidence contracts/testing.md#distinguishing-cases Equal names across distinct instances are positive and different names are the adjacent negative; wrapper natives and primitives are owned by the atomic-like case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaCoversNativeNames(t *testing.T) {
  if !metadata.MetadataSchema_covers(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Date")) {
    t.Fatal("same native names should cover across metadata instances")
  }
  if metadata.MetadataSchema_covers(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Uint8Array")) {
    t.Fatal("different native names should not cover")
  }
}
