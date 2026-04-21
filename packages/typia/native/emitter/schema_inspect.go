package emitter

import "github.com/samchon/typia/packages/typia/native/metadata"

type schemaWalker struct {
	schemas map[*metadata.Schema]struct{}
	arrays  map[*metadata.ArrayType]struct{}
	tuples  map[*metadata.TupleType]struct{}
	objects map[*metadata.ObjectType]struct{}
	aliases map[*metadata.AliasType]struct{}
}

func newSchemaWalker() *schemaWalker {
	return &schemaWalker{
		schemas: map[*metadata.Schema]struct{}{},
		arrays:  map[*metadata.ArrayType]struct{}{},
		tuples:  map[*metadata.TupleType]struct{}{},
		objects: map[*metadata.ObjectType]struct{}{},
		aliases: map[*metadata.AliasType]struct{}{},
	}
}

func (w *schemaWalker) walkSchema(s *metadata.Schema, visit func(*metadata.Schema) bool) bool {
	if s == nil {
		return false
	}
	if _, ok := w.schemas[s]; ok {
		return false
	}
	w.schemas[s] = struct{}{}
	if visit(s) {
		return true
	}
	if w.walkSchema(s.Rest, visit) {
		return true
	}
	if s.Escaped != nil {
		if w.walkSchema(s.Escaped.Original, visit) || w.walkSchema(s.Escaped.Returns, visit) {
			return true
		}
	}
	for _, ref := range s.Arrays {
		if ref == nil || ref.Type == nil {
			continue
		}
		if _, ok := w.arrays[ref.Type]; ok {
			continue
		}
		w.arrays[ref.Type] = struct{}{}
		if w.walkSchema(ref.Type.Value, visit) {
			return true
		}
	}
	for _, ref := range s.Tuples {
		if ref == nil || ref.Type == nil {
			continue
		}
		if _, ok := w.tuples[ref.Type]; ok {
			continue
		}
		w.tuples[ref.Type] = struct{}{}
		for _, el := range ref.Type.Elements {
			if w.walkSchema(el, visit) {
				return true
			}
		}
	}
	for _, ref := range s.Objects {
		if ref == nil || ref.Type == nil {
			continue
		}
		if _, ok := w.objects[ref.Type]; ok {
			continue
		}
		w.objects[ref.Type] = struct{}{}
		for _, prop := range ref.Type.Properties {
			if prop == nil {
				continue
			}
			if w.walkSchema(prop.Key, visit) || w.walkSchema(prop.Value, visit) {
				return true
			}
		}
	}
	for _, ref := range s.Aliases {
		if ref == nil || ref.Type == nil {
			continue
		}
		if _, ok := w.aliases[ref.Type]; ok {
			continue
		}
		w.aliases[ref.Type] = struct{}{}
		if w.walkSchema(ref.Type.Value, visit) {
			return true
		}
	}
	for _, ref := range s.Sets {
		if ref != nil && w.walkSchema(ref.Value, visit) {
			return true
		}
	}
	for _, ref := range s.Maps {
		if ref == nil {
			continue
		}
		if w.walkSchema(ref.Key, visit) || w.walkSchema(ref.Value, visit) {
			return true
		}
	}
	for _, fn := range s.Functions {
		if fn == nil {
			continue
		}
		for _, param := range fn.Parameters {
			if param != nil && w.walkSchema(param.Type, visit) {
				return true
			}
		}
		if w.walkSchema(fn.Output, visit) {
			return true
		}
	}
	return false
}
