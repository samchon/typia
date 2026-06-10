package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversTupleEntries verifies tuple element containment.
//
// Tuple coverage must inspect each covered element. Otherwise same-length
// tuples with incompatible element schemas incorrectly cover each other.
//
//  1. Assert a tuple covers another tuple with compatible elements.
//  2. Assert same-length tuples with incompatible elements are not covered.
//  3. Assert the existing repeated-extra-element behavior stays pinned, and
//     that a mismatched repeated-extra element fails.
//  4. Assert repeated-extra coverage can wrap across multiple extra elements.
//  5. Assert repeated-extra coverage also works for reused element pointers.
//  6. Assert empty tuple targets and rest wrappers cannot fall through.
//  7. Assert source tuple rest elements cover fixed target tail elements and
//     align with compatible target rest tails only.
func TestMetadataSchemaCoversTupleEntries(t *testing.T) {
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("number")),
    testutil.TupleMetadata(testutil.NumberConstantMetadata(1)),
  ) {
    t.Fatal("tuple source should cover compatible literal element schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("number")),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("tuple source should not cover mismatched element schema")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("string")),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("tuple source should preserve repeated-extra-element coverage")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("number")),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("mismatched repeated-extra element should fail tuple coverage")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(
      testutil.AtomicMetadata("string"),
      testutil.AtomicMetadata("string"),
      testutil.AtomicMetadata("string"),
    ),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("tuple source should preserve repeated-extra-element coverage across multiple extra elements")
  }
  shared := testutil.ArrayMetadata(testutil.AtomicMetadata("string"))
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(shared, shared),
    testutil.TupleMetadata(shared),
  ) {
    t.Fatal("tuple source should preserve repeated-extra-element coverage for reused element schemas")
  }
  if metadata.MetadataSchema_covers(
    testutil.AtomicMetadata("string"),
    testutil.TupleMetadata(),
  ) {
    t.Fatal("atomic source should not cover an empty tuple target")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
    testutil.TupleMetadata(),
  ) {
    t.Fatal("tuple source with required elements should not cover an empty tuple target")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(),
    testutil.TupleMetadata(),
  ) {
    t.Fatal("empty tuple source should cover an empty tuple target")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(restElement(testutil.AtomicMetadata("string"))),
    testutil.TupleMetadata(),
  ) {
    t.Fatal("rest-only tuple source should cover an empty tuple target")
  }
  if metadata.MetadataSchema_covers(
    testutil.AtomicMetadata("string"),
    restElement(testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("non-rest source should not cover a rest target")
  }
  if metadata.MetadataSchema_covers(
    restElement(testutil.AtomicMetadata("string")),
    restElement(testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("rest source should not cover a mismatched rest target")
  }
  if !metadata.MetadataSchema_covers(
    restElement(testutil.AtomicMetadata("string")),
    restElement(testutil.StringConstantMetadata("value")),
  ) {
    t.Fatal("rest source should cover a compatible rest target")
  }
  if metadata.MetadataSchema_covers(
    restElement(testutil.AtomicMetadata("string")),
    restAndAtomicElement(testutil.AtomicMetadata("string"), "number"),
  ) {
    t.Fatal("rest coverage should not skip other target buckets")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(
      testutil.AtomicMetadata("string"),
      restElement(testutil.AtomicMetadata("number")),
    ),
    testutil.TupleMetadata(
      testutil.StringConstantMetadata("head"),
      testutil.NumberConstantMetadata(1),
      testutil.NumberConstantMetadata(2),
    ),
  ) {
    t.Fatal("source tuple rest should cover fixed target tail elements")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(restElement(testutil.AtomicMetadata("number"))),
    testutil.TupleMetadata(
      testutil.NumberConstantMetadata(1),
      testutil.NumberConstantMetadata(2),
    ),
  ) {
    t.Fatal("source rest-only tuple should cover non-empty fixed target tuple")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(
      testutil.AtomicMetadata("string"),
      restElement(testutil.AtomicMetadata("number")),
    ),
    testutil.TupleMetadata(
      testutil.StringConstantMetadata("head"),
      testutil.StringConstantMetadata("tail"),
    ),
  ) {
    t.Fatal("source tuple rest should not cover mismatched target tail elements")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(
      testutil.AtomicMetadata("string"),
      restElement(testutil.AtomicMetadata("number")),
    ),
    testutil.TupleMetadata(
      testutil.StringConstantMetadata("head"),
      restElement(testutil.NumberConstantMetadata(1)),
    ),
  ) {
    t.Fatal("source tuple rest should align with a compatible target tuple rest tail")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(
      testutil.AtomicMetadata("string"),
      restElement(testutil.AtomicMetadata("number")),
    ),
    testutil.TupleMetadata(
      testutil.StringConstantMetadata("head"),
      restElement(testutil.AtomicMetadata("string")),
    ),
  ) {
    t.Fatal("source tuple rest should not align with a mismatched target tuple rest tail")
  }
}

func restElement(value *metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Rest:     value,
  })
}

func restAndAtomicElement(value *metadata.MetadataSchema, kind string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Rest:     value,
    Atomics: []*metadata.MetadataAtomic{
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: kind}),
    },
  })
}
