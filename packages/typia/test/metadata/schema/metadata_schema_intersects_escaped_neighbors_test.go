package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaIntersectsEscapedNeighbors verifies escaped coexistence.
//
// A schema can carry an escaped (toJSON) bucket next to primitive buckets.
// The intersection check used to return the escaped-only comparison whenever
// both sides carried an escaped bucket, hiding shared primitives — an unsafe
// discriminator for unions mixing toJSON classes with primitives.
//
// 1. Build two schemas with disjoint escaped pairs but a shared number atomic.
// 2. Assert they intersect through the shared primitive bucket.
// 3. Assert matching escaped pairs still intersect on their own.
// 4. Assert fully disjoint escaped schemas still do not intersect.
func TestMetadataSchemaIntersectsEscapedNeighbors(t *testing.T) {
  escaped := func(original *metadata.MetadataSchema, returns *metadata.MetadataSchema, atomic string) *metadata.MetadataSchema {
    schema := metadata.MetadataSchema_create(metadata.MetadataSchema{
      Required: true,
      Escaped: metadata.MetadataEscaped_create(metadata.MetadataEscaped{
        Original: original,
        Returns:  returns,
      }),
    })
    if atomic != "" {
      schema.Atomics = append(schema.Atomics, metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: atomic}))
    }
    return schema
  }
  if !metadata.MetadataSchema_intersects(
    escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("string"), "number"),
    escaped(testutil.NativeMetadata("Uint8Array"), testutil.AtomicMetadata("boolean"), "number"),
  ) {
    t.Fatal("shared number atomic should intersect despite disjoint escaped buckets")
  }
  if !metadata.MetadataSchema_intersects(
    escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("string"), ""),
    escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("number"), ""),
  ) {
    t.Fatal("matching escaped originals should intersect on their own")
  }
  if metadata.MetadataSchema_intersects(
    escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("string"), ""),
    escaped(testutil.NativeMetadata("Uint8Array"), testutil.AtomicMetadata("boolean"), ""),
  ) {
    t.Fatal("fully disjoint escaped schemas should not intersect")
  }
}
