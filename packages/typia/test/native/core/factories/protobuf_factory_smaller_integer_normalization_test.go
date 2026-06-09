//go:build typia_native_internal
// +build typia_native_internal

package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufFactorySmallerIntegerNormalization verifies protobuf scalar aliasing.
//
// Protobuf does not have int8, uint8, int16, or uint16 scalar types. The factory
// path must still consume those typia numeric tags without falling back to
// double, because protobuf message generation and sequence validation use this
// decoder directly.
//
// 1. Build tagged number constants for each smaller integer alias.
// 2. Decode protobuf number tags through the factory helper.
// 3. Assert signed aliases become int32 and unsigned aliases become uint32.
func TestProtobufFactorySmallerIntegerNormalization(t *testing.T) {
  for _, tuple := range []struct {
    tag      string
    scalar   string
    sequence int
  }{
    {tag: "int8", scalar: "int32", sequence: 21},
    {tag: "uint8", scalar: "uint32", sequence: 22},
    {tag: "int16", scalar: "int32", sequence: 23},
    {tag: "uint16", scalar: "uint32", sequence: 24},
  } {
    output := map[string]*int{}
    protobufFactory_decodeNumber(output, []*schemametadata.MetadataConstantValue{
      schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
        Value: 3,
        Tags: [][]schemametadata.IMetadataTypeTag{{
          {Kind: "type", Value: tuple.tag},
          protobufFactorySmallerIntegerSequenceTag(tuple.sequence),
        }},
      }),
    }, "double")
    if got := output[tuple.scalar]; got == nil || *got != tuple.sequence {
      t.Fatalf("protobuf number tag %s should normalize to %s with its sequence: %#v", tuple.tag, tuple.scalar, output)
    }
    if _, ok := output[tuple.tag]; ok {
      t.Fatalf("protobuf number tag %s should not remain under its non-scalar alias: %#v", tuple.tag, output)
    }
  }
}

func protobufFactorySmallerIntegerSequenceTag(value int) schemametadata.IMetadataTypeTag {
  return schemametadata.IMetadataTypeTag{
    Kind:   "sequence",
    Schema: map[string]any{"x-protobuf-sequence": value},
  }
}
