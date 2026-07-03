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
func TestMetadataSchemaCoversNativeNames(t *testing.T) {
  if !metadata.MetadataSchema_covers(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Date")) {
    t.Fatal("same native names should cover across metadata instances")
  }
  if metadata.MetadataSchema_covers(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Uint8Array")) {
    t.Fatal("different native names should not cover")
  }
}
