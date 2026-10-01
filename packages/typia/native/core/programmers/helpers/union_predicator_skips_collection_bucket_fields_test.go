package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorSkipsCollectionBucketFields verifies collection overlap.
//
// Empty Set and Map values can pass different element schemas, and an array can
// overlap a tuple. Shared collection properties are therefore not safe
// discriminators even when their contained metadata differs.
//
// 1. Build two branches sharing a Set property with different value schemas.
// 2. Build two branches sharing a Map property with different key/value schemas.
// 3. Build two branches sharing an array/tuple property with shared values.
// 4. Assert branch-unique properties are selected instead of the collection key.
//
// @evidence contracts/testing.md#behavioral-verification Union specialization runs on branches sharing Set, Map or array/tuple properties with different element schemas; none of them may be selected as a discriminator.
// @evidence contracts/testing.md#independent-expectations Empty collections satisfy any element schema and arrays overlap tuples, so shared collection properties are unsafe; the authored shapes state the sharing.
// @evidence contracts/testing.md#distinguishing-cases Set, Map and array-versus-tuple sharing are three negatives; collection properties unique to one branch are not asserted.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the predicator on constructed metadata with no checker, filesystem fixture or process.
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
    {
      name:   "array-tuple",
      key:    "items",
      left:   unionPredicatorArray(unionPredicatorAtomic("number")),
      right:  unionPredicatorTuple(unionPredicatorAtomic("number")),
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
