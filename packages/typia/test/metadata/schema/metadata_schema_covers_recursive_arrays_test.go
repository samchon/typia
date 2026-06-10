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
// 2. Assert they cover each other through the visited-pair guard.
// 3. Assert mismatched atomic buckets still fail despite the recursion guard.
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
