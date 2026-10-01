package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
)

// TestProtobufFactoryBigintKeepsEachWidth verifies that a bigint with two width
// tags yields one entry per width.
//
// The bigint emplacer keyed every row by the default width while naming the
// entry by the tagged width, so `bigint & Type<"int64"> | bigint &
// Type<"uint64">` collapsed to the last row. The number emplacer keys by the
// resolved name, and the bigint emplacer must do the same.
//
//  1. Emplace two rows tagged int64 and uint64 under a default of int64.
//  2. Assert both widths are present and named by their own tag.
//  3. Emplace untagged rows and assert the default width is the only entry.
//
// @evidence contracts/testing.md#behavioral-verification The emplacer is called with tagged rows and the resulting map is read for both keys and names.
// @evidence contracts/testing.md#independent-expectations The expected keys are the two protobuf widths named in the tags and not values read back from the implementation.
// @evidence contracts/testing.md#distinguishing-cases Two widths against none are the cases, and the collapse of the first is what the old key hid.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on an in-memory map with no checker, filesystem fixture or process.
func TestProtobufFactoryBigintKeepsEachWidth(t *testing.T) {
  row := func(width string) []schemametadata.IMetadataTypeTag {
    return []schemametadata.IMetadataTypeTag{{Kind: "type", Value: width}}
  }
  output := map[string]nativeprotobuf.IProtobufPropertyType{}
  protobufFactory_emplaceBigint(output, [][]schemametadata.IMetadataTypeTag{row("int64"), row("uint64")}, "int64")
  if len(output) != 2 {
    t.Fatalf("expected one entry per width, got %d", len(output))
  }
  for _, width := range []string{"int64", "uint64"} {
    entry, ok := output[width].(*nativeprotobuf.IProtobufPropertyType_IBigint)
    if ok == false || entry.Name != width {
      t.Fatalf("entry %s missing or misnamed: %#v", width, output[width])
    }
  }

  plain := map[string]nativeprotobuf.IProtobufPropertyType{}
  protobufFactory_emplaceBigint(plain, nil, "int64")
  if len(plain) != 1 || plain["int64"] == nil {
    t.Fatalf("untagged bigint should keep the default width only, got %v", plain)
  }
}
