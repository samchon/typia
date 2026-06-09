package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorSkipsCollectionBucketFields verifies Set and Map overlap.
//
// Empty collections can pass different element schemas, so shared Set or Map
// properties are not safe discriminators even when their key/value metadata
// differ.
//
// 1. Build two branches sharing a Set property with different value schemas.
// 2. Build two branches sharing a Map property with different key/value schemas.
// 3. Assert branch-unique properties are selected instead of the collection key.
func TestUnionPredicatorSkipsCollectionBucketFields(t *testing.T) {
  cases := []struct {
    name   string
    key    string
    left   *nativemetadata.MetadataSchema
    right  *nativemetadata.MetadataSchema
    expect []string
  }{
    {
      name:   "set",
      key:    "items",
      left:   unionPredicatorSet(unionPredicatorAtomic("string")),
      right:  unionPredicatorSet(unionPredicatorAtomic("number")),
      expect: []string{"leftOnly", "rightOnly"},
    },
    {
      name: "map",
      key:  "lookup",
      left: unionPredicatorMap(
        unionPredicatorAtomic("string"),
        unionPredicatorAtomic("number"),
      ),
      right: unionPredicatorMap(
        unionPredicatorAtomic("number"),
        unionPredicatorAtomic("string"),
      ),
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
