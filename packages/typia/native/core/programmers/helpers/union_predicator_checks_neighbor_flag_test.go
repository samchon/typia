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
//
// @evidence contracts/testing.md#behavioral-verification Object-union specialization runs on two branches with a shared disjoint literal property and every specialization must carry Neighbor=true.
// @evidence contracts/testing.md#independent-expectations A disjoint shared property can discriminate only if emitters check its value, which the Neighbor flag requests; the authored branches state the disjointness.
// @evidence contracts/testing.md#distinguishing-cases One two-branch union; branches without a shared property are owned by the other predicator cases.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the predicator on constructed metadata with no checker, filesystem fixture or process.
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
