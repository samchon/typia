package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaCoversRecursiveArrays verifies cyclic containment guarding.
//
// Recursive array types reference their own schema through the array value, so
// naive containment would recurse forever. The visited-pair guard must treat an
// in-progress pair as covered (coinduction) while still rejecting pairs whose
// non-recursive buckets disagree.
//
// 1. Build two self-referential array schemas with matching atomic buckets.
// 2. Assert one covers the other through the visited-pair guard.
// 3. Assert mismatched atomic buckets still fail despite the recursion guard.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers runs on two self-referential array schemas; matching atomics must terminate and cover, and mismatched atomics must still fail while the guard is active.
// @evidence contracts/testing.md#independent-expectations Coinduction (an in-progress pair is assumed covered) with disagreement in a non-recursive bucket is the stated definition; both authored graphs and verdicts are independent of the function.
// @evidence contracts/testing.md#distinguishing-cases Matching recursive arrays are positive; changing only the atomic bucket is the negative twin. Termination itself is observed by the test completing.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed cyclic metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaCoversRecursiveArrays(t *testing.T) {
  recursive := func(atomic string) *metadata.MetadataSchema {
    arrayType := metadata.MetadataArrayType_create(metadata.MetadataArrayType{
      Name:      "Recursive<" + atomic + ">",
      Recursive: true,
      Nullables: []bool{},
    })
    schema := metadata.MetadataSchema_create(metadata.MetadataSchema{
      Required: true,
      Atomics: []*metadata.MetadataAtomic{
        metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: atomic}),
      },
      Arrays: []*metadata.MetadataArray{
        metadata.MetadataArray_create(metadata.MetadataArray{Type: arrayType}),
      },
    })
    arrayType.Value = schema
    return schema
  }
  if !metadata.MetadataSchema_covers(recursive("string"), recursive("string")) {
    t.Fatal("matching recursive array schemas should cover through the cycle guard")
  }
  if metadata.MetadataSchema_covers(recursive("string"), recursive("number")) {
    t.Fatal("recursive array schemas with mismatched atomics should not cover")
  }
}
