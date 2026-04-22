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
		elems = append(elems, nativeName(n))
	}
	for _, set := range s.Sets {
		elems = append(elems, setRefName(set))
	}
	for _, m := range s.Maps {
		elems = append(elems, mapRefName(m))
	}
	if s.Rest != nil {
		elems = append(elems, "..."+s.Rest.Name())
	}
	for _, t := range s.Tuples {
		elems = append(elems, tupleRefName(t))
	}
	for _, a := range s.Arrays {
		elems = append(elems, arrayRefName(a))
	}
	for _, o := range s.Objects {
		elems = append(elems, objectRefName(o))
	}
	for _, a := range s.Aliases {
		elems = append(elems, aliasRefName(a))
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

func nativeName(n Native) string {
	return referenceName(n.Name, n.Tags)
}

func setRefName(s *SetRef) string {
	if s == nil {
		return "Set<unknown>"
	}
	return referenceName("Set<"+safeName(s.Value)+">", s.Tags)
}

func mapRefName(m *MapRef) string {
	if m == nil {
		return "Map<unknown, unknown>"
	}
	return referenceName("Map<"+safeName(m.Key)+", "+safeName(m.Value)+">", m.Tags)
}

func arrayRefName(a *ArrayRef) string {
	if a == nil || a.Type == nil {
		return "unknown[]"
	}
	return referenceName(arrayTypeName(a.Type), a.Tags)
}

func arrayTypeName(a *ArrayType) string {
	if a == nil {
		return "unknown[]"
	}
	if strings.TrimSpace(a.Name) != "" {
		return a.Name
	}
	return safeName(a.Value) + "[]"
}

func tupleRefName(t *TupleRef) string {
	if t == nil || t.Type == nil {
		return "[]"
	}
	return referenceName(tupleTypeName(t.Type), t.Tags)
}

func tupleTypeName(t *TupleType) string {
	if t == nil {
		return "[]"
	}
	if strings.TrimSpace(t.Name) != "" {
		return t.Name
	}
	parts := make([]string, 0, len(t.Elements))
	for _, el := range t.Elements {
		parts = append(parts, safeName(el))
	}
	return "[" + strings.Join(parts, ", ") + "]"
}

func objectRefName(o *ObjectRef) string {
	if o == nil || o.Type == nil {
		return "unknown"
	}
	return referenceName(o.Type.Name, o.Tags)
}

func aliasRefName(a *AliasRef) string {
	if a == nil || a.Type == nil {
		return "unknown"
	}
	return referenceName(a.Type.Name, a.Tags)
}

func referenceName(base string, tags TagMatrix) string {
	if strings.TrimSpace(base) == "" {
		base = "unknown"
	}
	if len(tags) == 0 {
		return base
	}
	if len(tags) == 1 {
		parts := []string{base}
		for _, tag := range tags[0] {
			parts = append(parts, tag.Name)
		}
		return "(" + strings.Join(parts, " & ") + ")"
	}
	rows := make([]string, 0, len(tags))
	for _, row := range tags {
		names := make([]string, 0, len(row))
		for _, tag := range row {
			names = append(names, tag.Name)
		}
		switch len(names) {
		case 0:
			continue
		case 1:
			rows = append(rows, names[0])
		default:
			rows = append(rows, "("+strings.Join(names, " & ")+")")
		}
	}
	if len(rows) == 0 {
		return base
	}
	return "(" + base + " & (" + strings.Join(rows, " | ") + "))"
}
