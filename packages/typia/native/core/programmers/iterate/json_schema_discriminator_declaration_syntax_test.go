package iterate

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemaDiscriminatorDeclarationSyntax verifies discriminator eligibility ignores declaration syntax.
//
// A union member declared with `interface` lands in `MetadataSchema.Objects`
// while a `type` alias of an object literal lands in `MetadataSchema.Aliases`,
// yet both export the very same `$ref`. The gate used to compare `Size()` with
// `len(Objects)` alone, so a single alias member silently dropped the whole
// union's discriminator. Eligibility must depend on every member resolving to a
// referenced object type carrying a common literal tag, never on which bucket
// the metadata factory happened to file it under.
//
// 1. Build the interface, alias, and mixed forms of one tagged union.
// 2. Assert each emits the identical propertyName and mapping.
// 3. Assert the negative shapes -- no common tag, a non-object member, a
//    literal (inline) member, and an alias that does not name a lone object --
//    still emit no discriminator, so the resolution cannot over-emit.
func TestJsonSchemaDiscriminatorDeclarationSyntax(t *testing.T) {
  circle := func() *nativemetadata.MetadataObject {
    return discriminatorObject("Circle", "type", "circle")
  }
  square := func() *nativemetadata.MetadataObject {
    return discriminatorObject("Square", "type", "square")
  }

  expected := JsonSchema{
    "propertyName": "type",
    "mapping": JsonSchema{
      "circle": "#/components/schemas/Circle",
      "square": "#/components/schemas/Square",
    },
  }

  positives := []struct {
    label    string
    metadata *nativemetadata.MetadataSchema
  }{
    {
      label:    "interface | interface",
      metadata: discriminatorSchema([]*nativemetadata.MetadataObject{circle(), square()}, nil),
    },
    {
      label: "alias | alias",
      metadata: discriminatorSchema(nil, []*nativemetadata.MetadataAlias{
        discriminatorAlias("Circle", circle()),
        discriminatorAlias("Square", square()),
      }),
    },
    {
      label: "interface | alias",
      metadata: discriminatorSchema(
        []*nativemetadata.MetadataObject{circle()},
        []*nativemetadata.MetadataAlias{discriminatorAlias("Square", square())},
      ),
    },
  }
  for _, positive := range positives {
    actual := json_schema_discriminator(positive.metadata)
    if actual == nil {
      t.Fatalf("%s: discriminator must be emitted regardless of declaration syntax", positive.label)
    }
    if actual["propertyName"] != expected["propertyName"] {
      t.Fatalf("%s: propertyName mismatch: %v", positive.label, actual["propertyName"])
    }
    mapping, ok := actual["mapping"].(JsonSchema)
    if ok == false {
      t.Fatalf("%s: mapping must be a JSON schema object", positive.label)
    }
    want := expected["mapping"].(JsonSchema)
    if len(mapping) != len(want) {
      t.Fatalf("%s: mapping size mismatch: %v", positive.label, mapping)
    }
    for key, value := range want {
      if mapping[key] != value {
        t.Fatalf("%s: mapping[%s] mismatch: %v", positive.label, key, mapping[key])
      }
    }
  }

  literal := discriminatorObject("__type", "type", "circle")
  atomic := nativemetadata.MetadataSchema_initialize()
  atomic.Atomics = append(atomic.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "string"}))

  nonObjectAlias := discriminatorSchema(nil, []*nativemetadata.MetadataAlias{
    discriminatorAlias("Circle", circle()),
    nativemetadata.MetadataAlias_create(nativemetadata.MetadataAlias{
      Type: nativemetadata.MetadataAliasType_create(nativemetadata.MetadataAliasType{
        Name:  "Name",
        Value: atomic,
      }),
    }),
  })
  withAtomic := discriminatorSchema(nil, []*nativemetadata.MetadataAlias{
    discriminatorAlias("Circle", circle()),
    discriminatorAlias("Square", square()),
  })
  withAtomic.Atomics = append(withAtomic.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "string"}))

  negatives := []struct {
    label    string
    metadata *nativemetadata.MetadataSchema
  }{
    {
      label:    "empty",
      metadata: discriminatorSchema(nil, nil),
    },
    {
      label: "no common literal tag",
      metadata: discriminatorSchema(nil, []*nativemetadata.MetadataAlias{
        discriminatorAlias("Circle", discriminatorObject("Circle", "kind", "circle")),
        discriminatorAlias("Square", discriminatorObject("Square", "name", "square")),
      }),
    },
    {
      label:    "non-object member beside aliases",
      metadata: withAtomic,
    },
    {
      label:    "alias naming a non-object value",
      metadata: nonObjectAlias,
    },
    {
      label: "literal (inline) alias member",
      metadata: discriminatorSchema(nil, []*nativemetadata.MetadataAlias{
        discriminatorAlias("__type", literal),
        discriminatorAlias("Square", square()),
      }),
    },
  }
  for _, negative := range negatives {
    if actual := json_schema_discriminator(negative.metadata); actual != nil {
      t.Fatalf("%s: discriminator must stay absent, got %v", negative.label, actual)
    }
  }
}

func discriminatorSchema(
  objects []*nativemetadata.MetadataObject,
  aliases []*nativemetadata.MetadataAlias,
) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Objects = append(meta.Objects, objects...)
  meta.Aliases = append(meta.Aliases, aliases...)
  return meta
}

func discriminatorAlias(name string, object *nativemetadata.MetadataObject) *nativemetadata.MetadataAlias {
  value := nativemetadata.MetadataSchema_initialize()
  value.Objects = append(value.Objects, object)
  return nativemetadata.MetadataAlias_create(nativemetadata.MetadataAlias{
    Type: nativemetadata.MetadataAliasType_create(nativemetadata.MetadataAliasType{
      Name:  name,
      Value: value,
    }),
  })
}

func discriminatorObject(name string, key string, value string) *nativemetadata.MetadataObject {
  return nativemetadata.MetadataObject_create(nativemetadata.MetadataObject{
    Type: nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{
      Name: name,
      Properties: []*nativemetadata.MetadataProperty{
        nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{
          Key:   discriminatorLiteral(key),
          Value: discriminatorLiteral(value),
        }),
      },
    }),
  })
}

func discriminatorLiteral(value string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: value}),
    },
  }))
  return meta
}
