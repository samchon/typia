package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorSkipsSharedTemplateFields verifies template overlap.
//
// Template-literal properties are checked by runtime string patterns. Two
// template buckets may overlap, so a shared template-literal property must not
// become the object-union discriminator.
//
// 1. Build two branches with overlapping template-literal-like properties.
// 2. Give each branch its own required property.
// 3. Assert UnionPredicator selects the branch-unique properties instead.
func TestUnionPredicatorSkipsSharedTemplateFields(t *testing.T) {
  cases := []struct {
    name  string
    left  *nativemetadata.MetadataSchema
    right *nativemetadata.MetadataSchema
  }{
    {
      name:  "template-template",
      left:  unionPredicatorTemplate(unionPredicatorLiteral("id-"), unionPredicatorAtomic("number")),
      right: unionPredicatorTemplate(unionPredicatorLiteral("id-"), unionPredicatorAtomic("number")),
    },
    {
      name:  "template-literal",
      left:  unionPredicatorTemplate(unionPredicatorLiteral("id-"), unionPredicatorAtomic("number")),
      right: unionPredicatorLiteral("id-1"),
    },
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.name, func(t *testing.T) {
      objects := []*nativemetadata.MetadataObjectType{
        unionPredicatorObject("Left",
          unionPredicatorProperty("code", tc.left),
          unionPredicatorProperty("leftOnly", unionPredicatorAtomic("string")),
        ),
        unionPredicatorObject("Right",
          unionPredicatorProperty("code", tc.right),
          unionPredicatorProperty("rightOnly", unionPredicatorAtomic("string")),
        ),
      }
      specs := UnionPredicator.Object(objects)
      assertUnionPredicatorKeys(t, objects, specs, "code", []string{"leftOnly", "rightOnly"})
    })
  }
}
