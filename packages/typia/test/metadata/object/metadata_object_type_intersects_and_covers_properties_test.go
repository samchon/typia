package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypeIntersectsAndCoversProperties verifies property matching.
//
// Object union reduction uses property-name overlap to decide whether object
// branches intersect and whether one object property set covers another. The
// comparison is intentionally based on metadata key names rather than pointer
// identity.
//
// 1. Build two object types that share an `id` property.
// 2. Assert they intersect by property name.
// 3. Assert equal property sets cover each other.
// 4. Assert a smaller property set does not cover a larger one.
//
// @evidence contracts/testing.md#behavioral-verification Intersects and covers are called on object types sharing an id property, equal property sets and a smaller set.
// @evidence contracts/testing.md#independent-expectations Property-name overlap and set containment are the authored rules; verdicts are literals.
// @evidence contracts/testing.md#distinguishing-cases Shared name, equal sets and strictly smaller set cover positive and negative directions; disjoint objects are not asserted.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported methods on constructed types with no filesystem fixture, process or native command build.
func TestMetadataObjectTypeIntersectsAndCoversProperties(t *testing.T) {
  left := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
    Name: "Left",
    Properties: []*metadata.MetadataProperty{
      testutil.Property("id", testutil.AtomicMetadata("string")),
      testutil.Property("name", testutil.AtomicMetadata("string")),
    },
  })
  same := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
    Name: "Same",
    Properties: []*metadata.MetadataProperty{
      testutil.Property("id", testutil.AtomicMetadata("number")),
      testutil.Property("name", testutil.AtomicMetadata("string")),
    },
  })
  smaller := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
    Name: "Smaller",
    Properties: []*metadata.MetadataProperty{
      testutil.Property("id", testutil.AtomicMetadata("string")),
    },
  })

  if !metadata.MetadataObjectType_covers(left, same) {
    t.Fatal("equal property-name sets should cover each other")
  }
  if metadata.MetadataObjectType_covers(smaller, left) {
    t.Fatal("smaller property set should not cover larger object")
  }
}
