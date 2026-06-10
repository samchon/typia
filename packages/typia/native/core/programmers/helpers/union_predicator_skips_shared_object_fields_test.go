package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorSkipsSharedObjectFields verifies object-valued overlap.
//
// Shared object properties are unsafe discriminators because both branches can
// accept object-shaped values. The specialization must therefore select the
// branch-unique properties instead of the shared object key.
//
// 1. Build two branches sharing an object-valued property.
// 2. Give each branch one unique primitive property.
// 3. Assert UnionPredicator selects only the branch-unique properties.
func TestUnionPredicatorSkipsSharedObjectFields(t *testing.T) {
  objects := []*nativemetadata.MetadataObjectType{
    unionPredicatorObject("Left",
      unionPredicatorProperty("payload", unionPredicatorObjectMetadata("LeftPayload")),
      unionPredicatorProperty("leftOnly", unionPredicatorAtomic("string")),
    ),
    unionPredicatorObject("Right",
      unionPredicatorProperty("payload", unionPredicatorObjectMetadata("RightPayload")),
      unionPredicatorProperty("rightOnly", unionPredicatorAtomic("string")),
    ),
  }

  specs := UnionPredicator.Object(objects)
  assertUnionPredicatorKeys(t, objects, specs, "payload", []string{"leftOnly", "rightOnly"})
}

func unionPredicatorObjectMetadata(name string) *nativemetadata.MetadataSchema {
  return nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Required: true,
    Objects: []*nativemetadata.MetadataObject{
      nativemetadata.MetadataObject_create(nativemetadata.MetadataObject{
        Type: unionPredicatorObject(name),
      }),
    },
  })
}
