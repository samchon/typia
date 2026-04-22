package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// iterateUnion walks every member of a union and merges the resulting schema
// into `out`. Mirrors typia's `iterate_metadata_union.ts` while keeping the
// current port simple: no discriminator grouping, and tsgo's checker already
// widens `true | false` to `boolean` via the Literal flag path.
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
	normalizeBooleanLiteralUnion(out)
	return true
}

func normalizeBooleanLiteralUnion(out *metadata.Schema) {
	if out == nil {
		return
	}
	for i := 0; i < len(out.Constants); i++ {
		constant := out.Constants[i]
		if constant.Type != metadata.AtomicBoolean {
			continue
		}
		seenTrue := false
		seenFalse := false
		for _, value := range constant.Values {
			literal, ok := value.Value.(bool)
			if !ok {
				continue
			}
			if literal {
				seenTrue = true
			} else {
				seenFalse = true
			}
		}
		if !seenTrue || !seenFalse {
			continue
		}
		out.Constants = append(out.Constants[:i], out.Constants[i+1:]...)
		out.AddAtomic(metadata.AtomicBoolean)
		return
	}
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
		merged := false
		for i := range dst.Atomics {
			if dst.Atomics[i].Type == a.Type {
				dst.Atomics[i].Tags = append(dst.Atomics[i].Tags, a.Tags...)
				merged = true
				break
			}
		}
		if !merged {
			dst.Atomics = append(dst.Atomics, a)
		}
	}
	for _, c := range src.Constants {
		merged := false
		for i := range dst.Constants {
			if dst.Constants[i].Type != c.Type {
				continue
			}
			merged = true
			for _, v := range c.Values {
				found := false
				for j := range dst.Constants[i].Values {
					if dst.Constants[i].Values[j].Value == v.Value {
						dst.Constants[i].Values[j].Tags = append(dst.Constants[i].Values[j].Tags, v.Tags...)
						found = true
						break
					}
				}
				if !found {
					dst.Constants[i].Values = append(dst.Constants[i].Values, v)
				}
			}
			break
		}
		if !merged {
			dst.Constants = append(dst.Constants, c)
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
