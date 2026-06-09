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
// 1. Build two branches sharing a template-literal property.
// 2. Give each branch its own required property.
// 3. Assert UnionPredicator selects the branch-unique properties instead.
func TestUnionPredicatorSkipsSharedTemplateFields(t *testing.T) {
  specs := UnionPredicator.Object([]*nativemetadata.MetadataObjectType{
    unionPredicatorObject("Left",
      unionPredicatorProperty(
        "code",
        unionPredicatorTemplate(unionPredicatorLiteral("id-"), unionPredicatorAtomic("number")),
      ),
      unionPredicatorProperty("leftOnly", unionPredicatorAtomic("string")),
    ),
    unionPredicatorObject("Right",
      unionPredicatorProperty(
        "code",
        unionPredicatorTemplate(unionPredicatorLiteral("id-"), unionPredicatorAtomic("number")),
      ),
      unionPredicatorProperty("rightOnly", unionPredicatorAtomic("string")),
    ),
  })
  assertUnionPredicatorKeys(t, specs, "code", []string{"leftOnly", "rightOnly"})
}
