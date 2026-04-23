package analyzer

import (
	"sort"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// iterateIntersection walks each member of an intersection. Members that
// match typia's brand-type shape (`{ "typia.tag"?: {...} }`) are recognized
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
		if ignorableIntersectionType(a.Checker, m) {
			continue
		}
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
	if len(regulars) == 1 {
		mergeInto(out, regulars[0])
		for _, tag := range tags {
			attachTag(out, tag)
		}
		return true
	}
	if merged, ok := mergeObjectIntersection(regulars); ok {
		mergeInto(out, merged)
		for _, tag := range tags {
			attachTag(out, tag)
		}
		return true
	}
	// typia treats multi-branch intersections that are neither pure tag
	// decoration nor mergeable object intersections as nonsensible.
	return false
}

func ignorableIntersectionType(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
) bool {
	if checker == nil || t == nil || t.Flags()&shimchecker.TypeFlagsObject == 0 {
		return false
	}
	if len(shimchecker.Checker_getIndexInfosOfType(checker, t)) != 0 {
		return false
	}
	properties := shimchecker.Checker_getPropertiesOfType(checker, t)
	if len(properties) == 0 {
		properties = shimchecker.Checker_getApparentProperties(checker, t)
	}
	if len(properties) == 0 {
		return false
	}
	for _, prop := range properties {
		if prop == nil || prop.Flags&ast.SymbolFlagsOptional == 0 {
			return false
		}
	}
	return true
}

func mergeObjectIntersection(children []*metadata.Schema) (*metadata.Schema, bool) {
	if len(children) == 0 {
		return nil, false
	}
	merged := metadata.NewSchema()
	object := &metadata.ObjectType{
		Name:              "Intersection<unknown>",
		Properties:        []*metadata.Property{},
		DynamicProperties: []*metadata.Property{},
	}
	names := make([]string, 0, len(children))
	props := make(map[string]*metadata.Property)
	dynamics := make([]*metadata.Property, 0)
	var additional *metadata.Schema
	for _, child := range children {
		if child == nil ||
			child.Any ||
			child.Nullable ||
			child.Optional ||
			!child.IsRequired() ||
			len(child.Objects) != 1 ||
			child.Bucket() != 1 ||
			child.Size() != 1 {
			return nil, false
		}
		ref := child.Objects[0]
		if ref == nil || ref.Type == nil {
			return nil, false
		}
		names = append(names, ref.Type.Name)
		if ref.Type.AdditionalProperties != nil {
			if additional == nil {
				additional = metadata.NewSchema()
			}
			mergeInto(additional, ref.Type.AdditionalProperties)
		}
		dynamics = append(dynamics, ref.Type.DynamicProperties...)
		for _, prop := range ref.Type.Properties {
			if prop == nil || prop.Key == nil || prop.Value == nil {
				return nil, false
			}
			key, ok := prop.Key.GetSoleLiteral()
			if !ok {
				return nil, false
			}
			if _, exists := props[key]; exists {
				return nil, false
			}
			props[key] = prop
		}
	}
	object.Name = "Intersection<" + strings.Join(names, " & ") + ">"
	keys := make([]string, 0, len(props))
	for key := range props {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	for _, key := range keys {
		object.Properties = append(object.Properties, props[key])
	}
	object.DynamicProperties = append(object.DynamicProperties, dynamics...)
	object.AdditionalProperties = additional
	merged.Objects = append(merged.Objects, &metadata.ObjectRef{Type: object})
	return merged, true
}
