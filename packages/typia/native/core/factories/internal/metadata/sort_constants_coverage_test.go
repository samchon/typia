//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
  "reflect"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestSortConstantsCoverage exercises metadata sort helpers.
//
// Metadata sorting is usually reached after TypeScript checker traversal, but
// the final constant ordering and numeric conversion logic are pure metadata
// operations. This test feeds each supported numeric representation directly.
//
// 1. Convert float, integer, unsigned, and unknown values into sort numbers.
// 2. Sort number, string, bigint, and boolean constant buckets.
// 3. Verify the metadata union index path runs with an empty collection.
// 4. Assert sorted values land in deterministic ascending order.
//
// @evidence contracts/testing.md#behavioral-verification Numeric conversion helpers are compared with exact authored float values, including zero and a negative value; unknown input must convert to zero. Every sorted bucket is compared with its complete authored value sequence, preserving each value's representation.
// @evidence contracts/testing.md#independent-expectations Numeric ordering of authored constants defines the expected order.
// @evidence contracts/testing.md#distinguishing-cases Each numeric representation and four constant types are exercised, with unknown conversion, zero and a negative input as controls. Complete sequence checks detect lost or incorrectly ordered trailing values; stability and bigint lexical-versus-numeric ordering are not distinguished by these inputs.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls the helpers on constructed metadata with no program load or process.
func TestSortConstantsCoverage(t *testing.T) {
  for _, item := range []struct {
    value    any
    expected float64
  }{{float64(1.5), 1.5}, {float32(2.5), 2.5}, {int(3), 3}, {int64(4), 4}, {int32(5), 5}, {uint(6), 6}, {uint64(7), 7}, {uint32(8), 8}, {int(0), 0}, {int(-1), -1}} {
    if actual := iterate_metadata_sort_float(item.value); actual != item.expected {
      t.Fatalf("numeric conversion for %T: got %v, want %v", item.value, actual, item.expected)
    }
  }
  if iterate_metadata_sort_float(struct{}{}) != 0 {
    t.Fatal("unknown numeric conversion should return zero")
  }
  meta := schemametadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants,
    sortCoverageConstant("number", 3, float32(1.5), uint64(2)),
    sortCoverageConstant("string", "b", "a"),
    sortCoverageConstant("bigint", uint64(3), int64(-1)),
    sortCoverageConstant("boolean", true, false),
  )
  Iterate_metadata_sort(struct {
    Collection *schemametadata.MetadataCollection
    Metadata   *schemametadata.MetadataSchema
  }{
    Collection: schemametadata.NewMetadataCollection(),
    Metadata:   meta,
  })
  for index, expected := range [][]any{{float32(1.5), uint64(2), int(3)}, {"a", "b"}, {int64(-1), uint64(3)}, {false, true}} {
    actual := make([]any, len(meta.Constants[index].Values))
    for position, value := range meta.Constants[index].Values {
      actual[position] = value.Value
    }
    if !reflect.DeepEqual(actual, expected) {
      t.Fatalf("%s constants: got %#v, want %#v", meta.Constants[index].Type, actual, expected)
    }
  }
}

func sortCoverageConstant(kind string, values ...any) *schemametadata.MetadataConstant {
  output := make([]*schemametadata.MetadataConstantValue, 0, len(values))
  for _, value := range values {
    output = append(output, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}))
  }
  return schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type:   kind,
    Values: output,
  })
}
