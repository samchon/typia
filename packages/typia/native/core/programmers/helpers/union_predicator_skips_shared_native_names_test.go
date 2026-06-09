package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorSkipsSharedNativeNames verifies native fields are not discriminators.
//
// Object-union specialization may choose a required property only when it can
// separate one branch from its neighbors. Rebuilt native metadata instances with
// the same runtime constructor name still overlap, so shared `Date` or
// `Uint8Array` fields must not be selected as discriminators.
//
//  1. Build two object branches sharing a native property plus one unique field.
//  2. Assert the shared native property is not selected by UnionPredicator.
//  3. Repeat with tagged `Uint8Array` metadata whose runtime check is still name
//     based.
func TestUnionPredicatorSkipsSharedNativeNames(t *testing.T) {
  cases := []struct {
    name   string
    key    string
    left   *nativemetadata.MetadataSchema
    right  *nativemetadata.MetadataSchema
    expect []string
  }{
    {
      name:   "date",
      key:    "birthDate",
      left:   unionPredicatorNativeMetadata("Date", nil),
      right:  unionPredicatorNativeMetadata("Date", nil),
      expect: []string{"leftOnly", "rightOnly"},
    },
    {
      name: "tagged-bytes",
      key:  "bytes",
      left: unionPredicatorNativeMetadata("Uint8Array", [][]nativemetadata.IMetadataTypeTag{{
        {Name: "LeftBytes"},
      }}),
      right: unionPredicatorNativeMetadata("Uint8Array", [][]nativemetadata.IMetadataTypeTag{{
        {Name: "RightBytes"},
      }}),
      expect: []string{"leftOnly", "rightOnly"},
    },
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.name, func(t *testing.T) {
      left := unionPredicatorObject("Left",
        unionPredicatorProperty(tc.key, tc.left),
        unionPredicatorProperty("leftOnly", unionPredicatorAtomic("string")),
      )
      right := unionPredicatorObject("Right",
        unionPredicatorProperty(tc.key, tc.right),
        unionPredicatorProperty("rightOnly", unionPredicatorAtomic("string")),
      )

      specs := UnionPredicator.Object([]*nativemetadata.MetadataObjectType{left, right})
      assertUnionPredicatorKeys(t, specs, tc.key, tc.expect)
    })
  }
}

func unionPredicatorObject(name string, properties ...*nativemetadata.MetadataProperty) *nativemetadata.MetadataObjectType {
  return nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{
    Name:       name,
    Properties: properties,
  })
}

func unionPredicatorProperty(key string, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataProperty {
  return nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{
    Key:   unionPredicatorLiteral(key),
    Value: value,
  })
}

func unionPredicatorLiteral(value string) *nativemetadata.MetadataSchema {
  return nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Required: true,
    Constants: []*nativemetadata.MetadataConstant{
      nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
        Type: "string",
        Values: []*nativemetadata.MetadataConstantValue{
          nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: value}),
        },
      }),
    },
  })
}

func unionPredicatorAtomic(kind string) *nativemetadata.MetadataSchema {
  return nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Required: true,
    Atomics: []*nativemetadata.MetadataAtomic{
      nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: kind}),
    },
  })
}

func unionPredicatorNativeMetadata(name string, tags [][]nativemetadata.IMetadataTypeTag) *nativemetadata.MetadataSchema {
  return nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Required: true,
    Natives: []*nativemetadata.MetadataNative{
      nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{
        Name: name,
        Tags: tags,
      }),
    },
  })
}

func unionPredicatorSet(value *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  return nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Required: true,
    Sets: []*nativemetadata.MetadataSet{
      nativemetadata.MetadataSet_create(nativemetadata.MetadataSet{Value: value}),
    },
  })
}

func unionPredicatorMap(key *nativemetadata.MetadataSchema, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  return nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Required: true,
    Maps: []*nativemetadata.MetadataMap{
      nativemetadata.MetadataMap_create(nativemetadata.MetadataMap{Key: key, Value: value}),
    },
  })
}

func assertUnionPredicatorKeys(t *testing.T, specs []UnionPredicator_ISpecialized, shared string, expect []string) {
  t.Helper()
  if len(specs) != len(expect) {
    t.Fatalf("unexpected specialization count: got %d want %d", len(specs), len(expect))
  }
  for i, spec := range specs {
    key := spec.Property.Key.GetSoleLiteral()
    if key == nil {
      t.Fatal("specialized property should be a literal key")
    }
    if *key == shared {
      t.Fatalf("shared key %q should not be selected", shared)
    }
    if *key != expect[i] {
      t.Fatalf("unexpected specialized key at %d: got %q want %q", i, *key, expect[i])
    }
  }
}
