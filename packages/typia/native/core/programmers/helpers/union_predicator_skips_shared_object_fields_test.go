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
//
// @evidence contracts/testing.md#behavioral-verification Union specialization runs on two branches sharing an object-valued property plus one unique primitive each; the unique properties must be chosen.
// @evidence contracts/testing.md#independent-expectations Both branches can accept object-shaped values for the shared key, so only unique properties discriminate; authored from that rule.
// @evidence contracts/testing.md#distinguishing-cases Shared object key versus unique primitives; shared primitive keys are owned by other cases.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the predicator on constructed metadata with no checker, filesystem fixture or process.
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
