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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_intersects compares two Date native instances and a Date with another native.
// @evidence contracts/testing.md#independent-expectations Equal native constructor names overlap and different ones do not, as authored literals.
// @evidence contracts/testing.md#distinguishing-cases Equal names across instances are positive and different names are the adjacent negative.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported intersection function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaIntersectsNativeNames(t *testing.T) {
  if !metadata.MetadataSchema_intersects(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Date")) {
    t.Fatal("same native names should intersect across metadata instances")
  }
  if metadata.MetadataSchema_intersects(testutil.NativeMetadata("Date"), testutil.NativeMetadata("Uint8Array")) {
    t.Fatal("different native names should not intersect")
  }
}
