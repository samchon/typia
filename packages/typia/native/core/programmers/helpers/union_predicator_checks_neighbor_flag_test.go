package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionPredicatorChecksNeighborFlag verifies shared-key specialization.
//
// A shared property can still be a discriminator when branch metadata is
// disjoint. Such specializations must set Neighbor so downstream emitters check
// the discriminator value instead of only checking property presence.
//
// 1. Build two branches with a shared disjoint literal property.
// 2. Assert both specializations select that shared property.
// 3. Assert both specializations carry Neighbor=true.
func TestUnionPredicatorChecksNeighborFlag(t *testing.T) {
  objects := []*nativemetadata.MetadataObjectType{
    unionPredicatorObject("Left",
      unionPredicatorProperty("kind", unionPredicatorLiteral("left")),
    ),
    unionPredicatorObject("Right",
      unionPredicatorProperty("kind", unionPredicatorLiteral("right")),
    ),
  }
  specs := UnionPredicator.Object(objects)
  assertUnionPredicatorKeys(t, objects, specs, "", []string{"kind", "kind"})
  for i, spec := range specs {
    if spec.Neighbor == false {
      t.Fatalf("specialization %d should carry Neighbor=true", i)
    }
  }
}
