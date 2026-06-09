package typia_test

import (
  "testing"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestProtobufFactorySmallerIntegerNormalization verifies protobuf scalar aliasing.
//
// Protobuf does not have int8, uint8, int16, or uint16 scalar types. The factory
// path must still consume those typia numeric tags through its exported object
// emplacement API without falling back to double.
//
// 1. Build object properties for each smaller integer alias and for a mixed row.
// 2. Emplace protobuf property metadata through ProtobufFactory.EmplaceObject.
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
    object := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
      Name: "SmallerIntegerProtobuf",
      Properties: []*schemametadata.MetadataProperty{
        testutil.Property(tuple.tag, schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
          Required: true,
          Atomics: []*schemametadata.MetadataAtomic{
            schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
              Type: "number",
              Tags: [][]schemametadata.IMetadataTypeTag{{
                testutil.TypeTag(tuple.tag),
                testutil.SequenceTag(tuple.sequence),
              }},
            }),
          },
        })),
      },
    })
    nativefactories.ProtobufFactory.EmplaceObject(object)

    property := object.Properties[0].Of_protobuf_
    if property == nil || property.Fixed == false || len(property.Union) != 1 {
      t.Fatalf("protobuf property for %s was not fixed as a single union: %#v", tuple.tag, property)
    }
    number, ok := property.Union[0].(*nativeprotobuf.IProtobufPropertyType_INumber)
    if ok == false {
      t.Fatalf("protobuf property for %s should be a number: %#v", tuple.tag, property.Union[0])
    }
    if number.Name != tuple.scalar {
      t.Fatalf("protobuf number tag %s should normalize to %s: %#v", tuple.tag, tuple.scalar, number)
    }
    if number.Index == nil || *number.Index != tuple.sequence {
      t.Fatalf("protobuf number tag %s should preserve its sequence: %#v", tuple.tag, number.Index)
    }
  }

  mixed := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name: "MixedSmallerIntegerProtobuf",
    Properties: []*schemametadata.MetadataProperty{
      testutil.Property("mixed", schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
        Required: true,
        Atomics: []*schemametadata.MetadataAtomic{
          schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
            Type: "number",
            Tags: [][]schemametadata.IMetadataTypeTag{
              {
                testutil.TypeTag("int8"),
                testutil.SequenceTag(31),
              },
              {
                testutil.TypeTag("uint8"),
                testutil.SequenceTag(32),
              },
            },
          }),
        },
      })),
    },
  })
  nativefactories.ProtobufFactory.EmplaceObject(mixed)

  property := mixed.Properties[0].Of_protobuf_
  if property == nil || property.Fixed == false || len(property.Union) != 2 {
    t.Fatalf("mixed smaller integer property should have two fixed unions: %#v", property)
  }
  sequences := map[string]int{}
  for _, union := range property.Union {
    number, ok := union.(*nativeprotobuf.IProtobufPropertyType_INumber)
    if ok == false || number.Index == nil {
      t.Fatalf("mixed smaller integer union should be a numbered protobuf number: %#v", union)
    }
    sequences[number.Name] = *number.Index
  }
  if sequences["int32"] != 31 || sequences["uint32"] != 32 {
    t.Fatalf("mixed smaller integer aliases should keep separate protobuf buckets: %#v", sequences)
  }
}
