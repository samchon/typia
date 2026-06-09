package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufUtilAtomicsAndSequences verifies protobuf atomic type extraction.
//
// Protobuf generation maps typia number and bigint metadata to concrete
// protobuf scalar types. It also preserves explicit sequence tags, which are the
// field-number source for generated schemas. This test keeps those two concerns
// together because a wrong scalar bucket also loses the attached sequence.
//
// 1. Build metadata with a tagged uint32 number, bigint atomic, and string constant.
// 2. Extract protobuf atomic buckets.
// 3. Assert tagged numeric and string sequences are preserved.
// 4. Assert bigint defaults to int64 and scalar ordering ranks bool before string.
// 5. Build smaller integer tag metadata and assert protobuf scalar normalization.
func TestProtobufUtilAtomicsAndSequences(t *testing.T) {
  sequence := 7
  meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
    Atomics: []*metadata.MetadataAtomic{
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{
        Type: "number",
        Tags: [][]metadata.IMetadataTypeTag{{
          {Kind: "type", Value: "uint32"},
          testutil.SequenceTag(sequence),
        }},
      }),
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "bigint"}),
    },
    Constants: []*metadata.MetadataConstant{
      metadata.MetadataConstant_create(metadata.MetadataConstant{
        Type: "string",
        Values: []*metadata.MetadataConstantValue{
          metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
            Value: "ok",
            Tags:  [][]metadata.IMetadataTypeTag{{testutil.SequenceTag(3)}},
          }),
        },
      }),
    },
  })

  atomics := helpers.ProtobufUtil.GetAtomics(meta)
  if got := atomics["uint32"]; got == nil || *got != sequence {
    t.Fatalf("uint32 sequence mismatch: %#v", got)
  }
  if _, ok := atomics["int64"]; !ok {
    t.Fatalf("bigint atomic should default to int64: %#v", atomics)
  }
  if got := atomics["string"]; got == nil || *got != 3 {
    t.Fatalf("string sequence mismatch: %#v", got)
  }
  if helpers.ProtobufUtil.Compare("bool", "string") >= 0 {
    t.Fatal("protobuf atomic ordering should rank bool before string")
  }

  smaller := metadata.MetadataSchema_create(metadata.MetadataSchema{
    Atomics: []*metadata.MetadataAtomic{
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{
        Type: "number",
        Tags: [][]metadata.IMetadataTypeTag{{
          testutil.TypeTag("int8"),
          testutil.SequenceTag(8),
        }},
      }),
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{
        Type: "number",
        Tags: [][]metadata.IMetadataTypeTag{{
          testutil.TypeTag("uint16"),
          testutil.SequenceTag(9),
        }},
      }),
    },
  })
  normalized := helpers.ProtobufUtil.GetAtomics(smaller)
  if got := normalized["int32"]; got == nil || *got != 8 {
    t.Fatalf("int8 should normalize to int32 with its sequence: %#v", normalized)
  }
  if got := normalized["uint32"]; got == nil || *got != 9 {
    t.Fatalf("uint16 should normalize to uint32 with its sequence: %#v", normalized)
  }
}
