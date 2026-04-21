package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// iterateUnion walks every member of a union and merges the resulting schema
// into `out`. Mirrors typia's `iterate_metadata_union.ts` — simplified for
// Phase 0 (no discriminator grouping; tsgo's checker already widens
// `true | false` to `boolean` via the Literal flag path).
func (a *Analyzer) iterateUnion(out *metadata.Schema, t *shimchecker.Type) bool {
	union := t.AsUnionType()
	if union == nil {
		return false
	}
	members := union.Types()
	if len(members) == 0 {
		return false
	}
	for _, m := range members {
		if !a.iterate(out, m) {
			return false
		}
	}
	return true
}

// mergeInto folds `src` into `dst` using typia's union-of-members merge
// semantics — atomics/constants dedup, collection references append, and
// modifier bits OR. Used by `iterateIntersection` after splitting tags out
// of the children.
func mergeInto(dst, src *metadata.Schema) {
	if src.Any {
		dst.Any = true
	}
	if src.Nullable {
		dst.Nullable = true
	}
	if src.Optional {
		dst.Optional = true
	}
	if !src.Required {
		dst.Required = dst.Required && src.Required
	}
	for _, a := range src.Atomics {
		dst.AddAtomic(a.Type)
	}
	for _, c := range src.Constants {
		for _, v := range c.Values {
			dst.AddConstant(c.Type, v.Value)
		}
	}
	dst.Templates = append(dst.Templates, src.Templates...)
	dst.Arrays = append(dst.Arrays, src.Arrays...)
	dst.Tuples = append(dst.Tuples, src.Tuples...)
	dst.Objects = append(dst.Objects, src.Objects...)
	dst.Aliases = append(dst.Aliases, src.Aliases...)
	dst.Natives = append(dst.Natives, src.Natives...)
	dst.Sets = append(dst.Sets, src.Sets...)
	dst.Maps = append(dst.Maps, src.Maps...)
	dst.Functions = append(dst.Functions, src.Functions...)
}
