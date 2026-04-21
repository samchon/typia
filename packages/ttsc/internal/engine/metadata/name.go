package metadata

import (
	"sort"
	"strings"
)

// computeName synthesises the Name() output of a Schema by joining the names
// of every populated bucket. Matches typia's `getName` / `MetadataSchema.name`
// implementation — the format is `"(string | number | Member)"` for unions,
// `"Member"` for a sole reference, and `"unknown"` for an empty schema.
func computeName(s *Schema) string {
	if s.Any {
		return "any"
	}
	elems := make([]string, 0, s.Size()+2)
	if s.Nullable {
		elems = append(elems, "null")
	}
	if !s.IsRequired() {
		elems = append(elems, "undefined")
	}
	for _, a := range s.Atomics {
		if len(a.Tags) == 0 {
			elems = append(elems, string(a.Type))
			continue
		}
		first := []string{string(a.Type)}
		for _, tag := range a.Tags[0] {
			first = append(first, tag.Name)
		}
		elems = append(elems, "("+strings.Join(first, " & ")+")")
	}
	for _, c := range s.Constants {
		for _, v := range c.Values {
			elems = append(elems, literalName(c.Type, v.Value))
		}
	}
	for _, t := range s.Templates {
		elems = append(elems, t.RawName)
	}
	for _, n := range s.Natives {
		elems = append(elems, n.Name)
	}
	for _, set := range s.Sets {
		if set == nil {
			continue
		}
		elems = append(elems, "Set<"+safeName(set.Value)+">")
	}
	for _, m := range s.Maps {
		if m == nil {
			continue
		}
		elems = append(elems, "Map<"+safeName(m.Key)+", "+safeName(m.Value)+">")
	}
	if s.Rest != nil {
		elems = append(elems, "..."+s.Rest.Name())
	}
	for _, t := range s.Tuples {
		if t == nil || t.Type == nil {
			continue
		}
		elems = append(elems, t.Type.Name)
	}
	for _, a := range s.Arrays {
		if a == nil || a.Type == nil {
			continue
		}
		elems = append(elems, a.Type.Name+"[]")
	}
	for _, o := range s.Objects {
		if o == nil || o.Type == nil {
			continue
		}
		elems = append(elems, o.Type.Name)
	}
	for _, a := range s.Aliases {
		if a == nil || a.Type == nil {
			continue
		}
		elems = append(elems, a.Type.Name)
	}
	if s.Escaped != nil {
		elems = append(elems, "escape<"+safeName(s.Escaped.Original)+", "+safeName(s.Escaped.Returns)+">")
	}
	switch len(elems) {
	case 0:
		return "unknown"
	case 1:
		return elems[0]
	}
	sort.Strings(elems)
	return "(" + strings.Join(elems, " | ") + ")"
}

// safeName guards a schema pointer dereference so `Name()` of a partially
// populated collection entry cannot panic.
func safeName(s *Schema) string {
	if s == nil {
		return "unknown"
	}
	return s.Name()
}
