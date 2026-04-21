package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// iterateIntersection walks each member of an intersection. Members that
// match typia's brand-type shape (`{ "typia.tag"?: {...} }`) are recognised
// as tag constraints and attached to matching atomic / array / object
// buckets instead of leaking through as real object members.
//
// Mirrors typia's `iterate_metadata_intersection.ts` + the brand-extraction
// pass in `MetadataTagFactory`.
func (a *Analyzer) iterateIntersection(out *metadata.Schema, t *shimchecker.Type) bool {
	inter := t.AsIntersectionType()
	if inter == nil {
		return false
	}
	children := make([]*metadata.Schema, 0, len(inter.Types()))
	for _, m := range inter.Types() {
		child := metadata.NewSchema()
		if !a.iterate(child, m) {
			return false
		}
		children = append(children, child)
	}
	var tags []metadata.TypeTag
	var regulars []*metadata.Schema
	for _, c := range children {
		if tag, ok := extractTag(c); ok {
			tags = append(tags, tag)
			continue
		}
		regulars = append(regulars, c)
	}
	for _, r := range regulars {
		mergeInto(out, r)
	}
	for _, tag := range tags {
		attachTag(out, tag)
	}
	return true
}
