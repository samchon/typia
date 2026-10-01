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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_intersects compares Set pairs, Map pairs, an array with a tuple and a Set with a Map.
// @evidence contracts/testing.md#independent-expectations Empty collections satisfy any element schema and an array and tuple share concrete values, so overlap is authored from value sets; Set versus Map share none.
// @evidence contracts/testing.md#distinguishing-cases Three overlapping bucket kinds are positives, and Set versus Map is the negative that shows buckets are not conflated.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported intersection function on constructed metadata with no filesystem fixture, process or native command build.
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
