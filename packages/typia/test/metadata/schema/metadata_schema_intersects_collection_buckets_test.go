package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaIntersectsCollectionBuckets verifies Set and Map overlap.
//
// Empty collections can satisfy different element schemas at once. Union
// specialization therefore must treat shared Set or Map properties as
// overlapping buckets instead of using them as discriminators.
//
// 1. Assert two Set schemas intersect even when their values differ.
// 2. Assert two Map schemas intersect even when key/value schemas differ.
// 3. Assert Set and Map remain distinct buckets.
func TestMetadataSchemaIntersectsCollectionBuckets(t *testing.T) {
  if !metadata.MetadataSchema_intersects(
    testutil.SetMetadata(testutil.AtomicMetadata("string")),
    testutil.SetMetadata(testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("set buckets should intersect through the empty Set value")
  }
  if !metadata.MetadataSchema_intersects(
    testutil.MapMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("number")),
    testutil.MapMetadata(testutil.AtomicMetadata("number"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("map buckets should intersect through the empty Map value")
  }
  if metadata.MetadataSchema_intersects(
    testutil.SetMetadata(testutil.AtomicMetadata("string")),
    testutil.MapMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("set and map buckets should not intersect")
  }
}
