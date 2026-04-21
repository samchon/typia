package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

// iterateArray ports `iterate_metadata_array.ts`. Handles both `T[]` and
// `Array<T>` by delegating to the single-element type argument tsgo exposes.
func (a *Analyzer) iterateArray(out *metadata.Schema, t *shimchecker.Type) bool {
	key := typeKey(t)
	if existing, ok := a.visitingArrays[key]; ok {
		out.Arrays = append(out.Arrays, &metadata.ArrayRef{Type: existing})
		return true
	}
	name := typeName(a.Checker, t)
	arr, fresh := a.Collection.EmplaceArray(key, name)
	a.visitingArrays[key] = arr
	if fresh {
		if elem := arrayElement(a.Checker, t); elem != nil {
			elemSchema, ok := a.Walk(elem)
			if !ok {
				delete(a.visitingArrays, key)
				return false
			}
			arr.Value = elemSchema
		}
	}
	out.Arrays = append(out.Arrays, &metadata.ArrayRef{Type: arr})
	delete(a.visitingArrays, key)
	return true
}

// isArray detects array types (`T[]` / `Array<T>`) via tsgo's checker helper.
func (a *Analyzer) isArray(t *shimchecker.Type) bool {
	return shimchecker.Checker_isArrayType(a.Checker, t)
}

// arrayElement returns the element type of an array.
func arrayElement(checker *shimchecker.Checker, t *shimchecker.Type) *shimchecker.Type {
	args := shimchecker.Checker_getTypeArguments(checker, t)
	if len(args) == 0 {
		return nil
	}
	return args[0]
}
