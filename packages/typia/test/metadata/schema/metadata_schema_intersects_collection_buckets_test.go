package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaIntersectsCollectionBuckets verifies collection overlap.
//
// Empty collections can satisfy different Set or Map element schemas at once,
// and an array/tuple pair can share concrete values. Union specialization must
// therefore treat those shared collection properties as overlapping buckets.
//
// 1. Assert two Set schemas intersect even when their values differ.
// 2. Assert two Map schemas intersect even when key/value schemas differ.
// 3. Assert an array and tuple intersect.
// 4. Assert Set and Map remain distinct buckets.
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
  if !metadata.MetadataSchema_intersects(
    testutil.ArrayMetadata(testutil.AtomicMetadata("number")),
    testutil.TupleMetadata(testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("array and tuple buckets should intersect through shared array values")
  }
  if metadata.MetadataSchema_intersects(
    testutil.SetMetadata(testutil.AtomicMetadata("string")),
    testutil.MapMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("set and map buckets should not intersect")
  }
}
