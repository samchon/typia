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
      specs := UnionPredicator.Object([]*nativemetadata.MetadataObjectType{
        unionPredicatorObject("Left",
          unionPredicatorProperty(tc.key, tc.left),
          unionPredicatorProperty("leftOnly", unionPredicatorAtomic("string")),
        ),
        unionPredicatorObject("Right",
          unionPredicatorProperty(tc.key, tc.right),
          unionPredicatorProperty("rightOnly", unionPredicatorAtomic("string")),
        ),
      })
      assertUnionPredicatorKeys(t, specs, tc.key, tc.expect)
    })
  }
}
