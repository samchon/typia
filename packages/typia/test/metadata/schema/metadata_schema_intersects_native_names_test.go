package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaIntersectsNativeNames verifies native intersection rules.
//
// Native metadata can be rebuilt as separate instances while still naming the
// same runtime constructor. Union branch specialization must treat equal native
// names as overlapping so it does not use repeated `Date` fields as if they were
// discriminators.
//
// 1. Build two distinct `Date` native metadata instances.
// 2. Assert they intersect by native name.
// 3. Assert different native names do not intersect.
func TestMetadataSchemaIntersectsNativeNames(t *testing.T) {
  if !metadata.MetadataSchema_intersects(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Date")) {
    t.Fatal("same native names should intersect across metadata instances")
  }
  if metadata.MetadataSchema_intersects(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Uint8Array")) {
    t.Fatal("different native names should not intersect")
  }
}
