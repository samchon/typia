package metadata

import "testing"

// TestMetadataSchemaMergeKeepsInputs verifies that MetadataSchema_merge builds
// its result without editing either input.
//
// The merge started from the left schema's own atomic, array, set and constant
// records and then appended the right schema's tag rows and constant values to
// them, so merging the property schemas of an object changed those properties
// for every later reader, and a record taken from the right schema could be
// edited by the next merge of a chain.
//
//  1. Merge two schemas whose atomic of the same type and constant bucket of the
//     same type carry different tag rows and values.
//  2. Assert the result holds both tag rows and the union of the values.
//  3. Assert neither input changed.
//  4. Merge the result with a third schema and assert the second input is still
//     unchanged, which is the chained use.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_merge is called on authored schemas and the tag rows and constant values of the result and of both inputs are read back; the in-place implementation fails the unchanged-input assertions.
// @evidence contracts/testing.md#independent-expectations The expected rows and values are the authored ones in the test, a union that follows from the definition of merging, and not values read from the implementation.
// @evidence contracts/testing.md#distinguishing-cases The result must change (both rows, three values) while each input must not, and the chained merge separates editing the left record from editing a record taken from the right.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on constructed schemas, with no checker, filesystem fixture or process.
func TestMetadataSchemaMergeKeepsInputs(t *testing.T) {
  build := func(tag string, values ...any) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Atomics = append(schema.Atomics, MetadataAtomic_create(MetadataAtomic{
      Type: "string",
      Tags: [][]IMetadataTypeTag{{{Name: tag, Kind: "format", Validate: "true"}}},
    }))
    constants := []*MetadataConstantValue{}
    for _, value := range values {
      constants = append(constants, MetadataConstantValue_create(MetadataConstantValue{Value: value}))
    }
    schema.Constants = append(schema.Constants, MetadataConstant_create(MetadataConstant{Type: "string", Values: constants}))
    return schema
  }
  left := build("A", "a")
  right := build("B", "b", "c")
  third := build("C", "d")

  merged := MetadataSchema_merge(left, right)
  if len(merged.Atomics) != 1 || len(merged.Atomics[0].Tags) != 2 {
    t.Fatalf("merged atomic should carry both tag rows: %+v", merged.Atomics)
  }
  if len(merged.Constants) != 1 || len(merged.Constants[0].Values) != 3 {
    t.Fatalf("merged constants should carry the three values: %+v", merged.Constants)
  }

  if len(left.Atomics[0].Tags) != 1 || left.Atomics[0].Tags[0][0].Name != "A" {
    t.Fatalf("the left atomic was edited by the merge: %+v", left.Atomics[0].Tags)
  }
  if len(left.Constants[0].Values) != 1 {
    t.Fatalf("the left constants were edited by the merge: %+v", left.Constants[0].Values)
  }
  if len(right.Atomics[0].Tags) != 1 || len(right.Constants[0].Values) != 2 {
    t.Fatalf("the right schema was edited by the merge: %+v %+v", right.Atomics[0].Tags, right.Constants[0].Values)
  }

  chained := MetadataSchema_merge(merged, third)
  if len(chained.Atomics[0].Tags) != 3 || len(chained.Constants[0].Values) != 4 {
    t.Fatalf("chained merge should carry every row and value: %+v %+v", chained.Atomics[0].Tags, chained.Constants[0].Values)
  }
  if len(merged.Atomics[0].Tags) != 2 || len(merged.Constants[0].Values) != 3 {
    t.Fatalf("the first merge result was edited by the chained merge: %+v %+v", merged.Atomics[0].Tags, merged.Constants[0].Values)
  }
  if len(third.Atomics[0].Tags) != 1 || len(third.Constants[0].Values) != 1 {
    t.Fatalf("the third schema was edited by the chained merge: %+v %+v", third.Atomics[0].Tags, third.Constants[0].Values)
  }
}
