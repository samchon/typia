package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorSkipsAtomicLikeNativeFields verifies primitive wrapper overlap.
//
// `String`, `Number`, and `Boolean` native checks also accept matching primitive
// values. A shared property typed as a primitive on one branch and a wrapper
// native on another branch must not become the discriminator.
//
// 1. Build branches sharing a primitive/native-wrapper property.
// 2. Assert UnionPredicator chooses the branch-unique properties instead.
// 3. Repeat for every atomic-like native wrapper.
//
// @evidence contracts/testing.md#behavioral-verification Union specialization runs on branches sharing a property typed as a primitive on one side and a wrapper native on the other; the property must not be chosen as the discriminator.
// @evidence contracts/testing.md#independent-expectations String, Number and Boolean natives accept matching primitives at runtime, so the property overlaps; the authored branches and the expected choice of unique properties follow that.
// @evidence contracts/testing.md#distinguishing-cases Primitive-versus-wrapper sharing is the negative case for discriminator selection; disjoint primitives are owned by the neighbor-flag case.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the predicator on constructed metadata with no checker, filesystem fixture or process.
func TestUnionPredicatorSkipsAtomicLikeNativeFields(t *testing.T) {
  cases := []struct {
    name   string
    key    string
    left   *nativemetadata.MetadataSchema
    right  *nativemetadata.MetadataSchema
    expect []string
  }{
    {
      name:   "string-wrapper",
      key:    "value",
      left:   unionPredicatorAtomic("string"),
      right:  unionPredicatorNativeMetadata("String", nil),
      expect: []string{"leftOnly", "rightOnly"},
    },
    {
      name:   "number-wrapper",
      key:    "count",
      left:   unionPredicatorAtomic("number"),
      right:  unionPredicatorNativeMetadata("Number", nil),
      expect: []string{"leftOnly", "rightOnly"},
    },
    {
      name:   "boolean-wrapper",
      key:    "enabled",
      left:   unionPredicatorAtomic("boolean"),
      right:  unionPredicatorNativeMetadata("Boolean", nil),
      expect: []string{"leftOnly", "rightOnly"},
    },
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.name, func(t *testing.T) {
      objects := []*nativemetadata.MetadataObjectType{
        unionPredicatorObject("Left",
          unionPredicatorProperty(tc.key, tc.left),
          unionPredicatorProperty("leftOnly", unionPredicatorAtomic("string")),
        ),
        unionPredicatorObject("Right",
          unionPredicatorProperty(tc.key, tc.right),
          unionPredicatorProperty("rightOnly", unionPredicatorAtomic("string")),
        ),
      }
      specs := UnionPredicator.Object(objects)
      assertUnionPredicatorKeys(t, objects, specs, tc.key, tc.expect)
    })
  }
}
