package analyzer

import (
	"github.com/samchon/typia/packages/typia/native/metadata"
)

// extractTag recognises the typia brand-type shape:
//
//	{ "typia.tag"?: { target, kind, value, validate?, exclusive?, schema? } }
//
// Returns (tag, true) when the given schema holds exactly such an object.
// Mirrors typia v12's `MetadataTagFactory.read`.
func extractTag(s *metadata.Schema) (metadata.TypeTag, bool) {
	if s == nil || len(s.Objects) != 1 {
		return metadata.TypeTag{}, false
	}
	obj := s.Objects[0].Type
	if obj == nil || len(obj.Properties) != 1 {
		return metadata.TypeTag{}, false
	}
	prop := obj.Properties[0]
	if prop == nil || prop.Key == nil || prop.Value == nil {
		return metadata.TypeTag{}, false
	}
	key, ok := prop.Key.GetSoleLiteral()
	if !ok || key != "typia.tag" {
		return metadata.TypeTag{}, false
	}
	if len(prop.Value.Objects) != 1 {
		return metadata.TypeTag{}, false
	}
	tagObj := prop.Value.Objects[0].Type
	if tagObj == nil {
		return metadata.TypeTag{}, false
	}

	tag := metadata.TypeTag{Name: obj.Name}
	for _, p := range tagObj.Properties {
		if p == nil || p.Key == nil || p.Value == nil {
			continue
		}
		name, ok := p.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		switch name {
		case "target":
			if v, ok := p.Value.GetSoleLiteral(); ok {
				tag.Target = v
			}
		case "kind":
			if v, ok := p.Value.GetSoleLiteral(); ok {
				tag.Kind = v
			}
		case "value":
			if len(p.Value.Constants) > 0 && len(p.Value.Constants[0].Values) > 0 {
				tag.Value = p.Value.Constants[0].Values[0].Value
			}
		case "validate":
			if v, ok := p.Value.GetSoleLiteral(); ok {
				tag.Validate = v
			}
		case "exclusive":
			// `exclusive` is typed `boolean | string[]`. iterate_metadata
			// widens boolean literals into the Atomics bucket, so check both.
			if len(p.Value.Constants) > 0 && len(p.Value.Constants[0].Values) > 0 {
				tag.Exclusive = p.Value.Constants[0].Values[0].Value
			} else if len(p.Value.Atomics) > 0 && p.Value.Atomics[0].Type == metadata.AtomicBoolean {
				// Non-literal boolean — assume the common `exclusive: true` case.
				tag.Exclusive = true
			}
		}
	}
	if tag.Kind == "" {
		return metadata.TypeTag{}, false
	}
	return tag, true
}

// attachTag adds the tag to every bucket whose category matches tag.Target.
// The tag joins the atomic's last tag row (intersection semantics) so that
// `string & Format<"email"> & MinLength<3>` composes AND-style.
func attachTag(out *metadata.Schema, tag metadata.TypeTag) {
	switch tag.Target {
	case "string", "boolean", "bigint", "number":
		for i := range out.Atomics {
			if string(out.Atomics[i].Type) == tag.Target {
				out.Atomics[i].Tags = appendTagRow(out.Atomics[i].Tags, tag)
				return
			}
		}
		for i := range out.Constants {
			if string(out.Constants[i].Type) == tag.Target {
				for j := range out.Constants[i].Values {
					out.Constants[i].Values[j].Tags = appendTagRow(out.Constants[i].Values[j].Tags, tag)
				}
				return
			}
		}
	case "array":
		for i := range out.Arrays {
			out.Arrays[i].Tags = appendTagRow(out.Arrays[i].Tags, tag)
		}
	case "object":
		for i := range out.Objects {
			out.Objects[i].Tags = appendTagRow(out.Objects[i].Tags, tag)
		}
	}
}

// appendTagRow adds tag to the last row of the matrix (or starts a new row
// if empty). AND-style composition inside a row, OR-style across rows.
func appendTagRow(m metadata.TagMatrix, tag metadata.TypeTag) metadata.TagMatrix {
	if len(m) == 0 {
		return metadata.TagMatrix{{tag}}
	}
	last := m[len(m)-1]
	m[len(m)-1] = append(last, tag)
	return m
}
