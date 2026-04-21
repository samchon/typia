package analyzer

import (
	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

// iterateObject ports `iterate_metadata_object.ts` +
// `emplace_metadata_object.ts`. Walks every property via
// GetPropertiesOfType and recursively analyses each property's type, using
// the Collection to dedupe so recursive structures close under one
// ObjectType pointer.
func (a *Analyzer) iterateObject(out *metadata.Schema, t *shimchecker.Type) bool {
	key := typeKey(t)
	// Already visiting this type — register a back-reference to avoid
	// infinite recursion on self-referential structures.
	if existing, ok := a.visitingObjects[key]; ok {
		out.Objects = append(out.Objects, &metadata.ObjectRef{Type: existing})
		return true
	}

	name := typeName(a.Checker, t)
	obj, fresh := a.Collection.EmplaceObject(key, name)
	a.visitingObjects[key] = obj

	if fresh {
		if len(shimchecker.Checker_getIndexInfosOfType(a.Checker, t)) != 0 {
			delete(a.visitingObjects, key)
			return false
		}
		// Populate properties only once; subsequent references share the
		// same ObjectType pointer.
		properties := shimchecker.Checker_getPropertiesOfType(a.Checker, t)
		obj.Properties = make([]*metadata.Property, 0, len(properties))
		for _, sym := range properties {
			if sym == nil {
				continue
			}
			propType := shimchecker.Checker_getTypeOfSymbol(a.Checker, sym)
			if propType == nil {
				continue
			}
			valueSchema, ok := a.WalkWithTypeNode(propType, propertyTypeNode(sym))
			if !ok {
				delete(a.visitingObjects, key)
				return false
			}
			if sym.Flags&ast.SymbolFlagsOptional != 0 {
				valueSchema.Optional = true
				valueSchema.Required = false
			}
			keySchema := metadata.NewSchema()
			keySchema.AddConstant(metadata.AtomicString, sym.Name)
			obj.Properties = append(obj.Properties, &metadata.Property{
				Key:   keySchema,
				Value: valueSchema,
			})
		}
	}
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	delete(a.visitingObjects, key)
	return true
}
