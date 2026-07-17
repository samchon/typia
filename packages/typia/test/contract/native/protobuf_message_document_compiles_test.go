package typia_test

import (
  "testing"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  protobuforacle "github.com/samchon/typia/packages/typia/test/internal/protobuforacle"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestProtobufMessageDocumentCompiles verifies every emitted document compiles.
//
// `typia.protobuf.message<T>()` exists to hand a schema to another language, so
// the document must compile under the syntax it declares. It declared
// `syntax = "proto3"` while labelling required non-nullable scalars `required`,
// a label proto3 removed; because a Protobuf compiler rejects the whole file
// rather than the field, one required scalar invalidated the entire document.
// The substring assertions in the sibling suites cannot see this — a compiler
// is the only oracle that can, so the document goes to one here.
//
// 1. Build objects covering required scalars, the all-optional boundary,
//    nullable fields, arrays, maps, bytes, nested messages, and a `oneof`.
// 2. Render each through the message programmer's document writer.
// 3. Require a strict Protobuf compiler to accept every rendered document.
func TestProtobufMessageDocumentCompiles(t *testing.T) {
  for _, tuple := range []struct {
    name    string
    objects []*schemametadata.MetadataObjectType
  }{
    {
      // The reported defect: one required scalar invalidated the whole file.
      name: "required scalars",
      objects: []*schemametadata.MetadataObjectType{
        protobufMessageDocumentObject("IMember",
          testutil.Property("id", protobufMessageDocumentTagged("number", "int32")),
          testutil.Property("name", testutil.AtomicMetadata("string")),
          testutil.Property("active", testutil.AtomicMetadata("boolean")),
        ),
      },
    },
    {
      // The boundary: today's only passing shape must stay passing.
      name: "no required scalars",
      objects: []*schemametadata.MetadataObjectType{
        protobufMessageDocumentObject("IConfig",
          testutil.Property("timeout", protobufMessageDocumentOptional(protobufMessageDocumentTagged("number", "int32"))),
          testutil.Property("debug", protobufMessageDocumentOptional(testutil.AtomicMetadata("boolean"))),
        ),
      },
    },
    {
      name: "nullable scalars",
      objects: []*schemametadata.MetadataObjectType{
        protobufMessageDocumentObject("INullable",
          testutil.Property("nickname", protobufMessageDocumentNullable(testutil.AtomicMetadata("string"))),
          testutil.Property("score", protobufMessageDocumentNullable(protobufMessageDocumentTagged("number", "int32"))),
        ),
      },
    },
    {
      name: "arrays and maps",
      objects: []*schemametadata.MetadataObjectType{
        protobufMessageDocumentObject("IContainer",
          testutil.Property("tags", testutil.ArrayMetadata(testutil.AtomicMetadata("string"))),
          testutil.Property("data", testutil.MapMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("string"))),
          testutil.Property("counts", testutil.MapMetadata(testutil.AtomicMetadata("string"), protobufMessageDocumentTagged("number", "int32"))),
        ),
      },
    },
    {
      name: "bytes",
      objects: []*schemametadata.MetadataObjectType{
        protobufMessageDocumentObject("IBinary",
          testutil.Property("payload", testutil.NativeMetadata("Uint8Array")),
        ),
      },
    },
    {
      name: "oneof union",
      objects: []*schemametadata.MetadataObjectType{
        protobufMessageDocumentObject("IUnion",
          testutil.Property("value", schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
            Required: true,
            Atomics: []*schemametadata.MetadataAtomic{
              schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}),
              schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "boolean"}),
            },
          })),
        ),
      },
    },
  } {
    document := protobufMessageDocumentRender(tuple.objects)
    if err := protobuforacle.Compile(document); err != nil {
      t.Errorf("emitted document for %s must compile: %v\n%s", tuple.name, err, document)
    }
  }
}

func protobufMessageDocumentRender(objects []*schemametadata.MetadataObjectType) string {
  for _, object := range objects {
    nativefactories.ProtobufFactory.EmplaceObject(object)
  }
  return nativeprotobufprogrammers.ProtobufMessageProgrammer.Document(objects)
}

func protobufMessageDocumentObject(name string, properties ...*schemametadata.MetadataProperty) *schemametadata.MetadataObjectType {
  return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name:       name,
    Properties: properties,
  })
}

func protobufMessageDocumentTagged(kind string, tag string) *schemametadata.MetadataSchema {
  return schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
    Required: true,
    Atomics: []*schemametadata.MetadataAtomic{
      schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
        Type: kind,
        Tags: [][]schemametadata.IMetadataTypeTag{{testutil.TypeTag(tag)}},
      }),
    },
  })
}

func protobufMessageDocumentOptional(schema *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
  schema.Required = false
  schema.Optional = true
  return schema
}

func protobufMessageDocumentNullable(schema *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
  schema.Nullable = true
  return schema
}
