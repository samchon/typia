package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func (a *Analyzer) iterateMapSet(out *metadata.Schema, t *shimchecker.Type) bool {
	if t == nil {
		return false
	}
	if t.Flags()&shimchecker.TypeFlagsObject == 0 {
		return false
	}
	if t.ObjectFlags()&shimchecker.ObjectFlagsReference == 0 {
		return false
	}
	name, ok := nativeName(a.Checker, t)
	if !ok {
		return false
	}
	args := shimchecker.Checker_getTypeArguments(a.Checker, t)
	switch name {
	case "Set":
		if len(args) != 1 {
			return false
		}
		value, ok := a.Walk(args[0])
		if !ok {
			return false
		}
		out.Sets = append(out.Sets, &metadata.SetRef{Value: value})
		return true
	case "Map":
		if len(args) != 2 {
			return false
		}
		key, ok := a.Walk(args[0])
		if !ok {
			return false
		}
		value, ok := a.Walk(args[1])
		if !ok {
			return false
		}
		out.Maps = append(out.Maps, &metadata.MapRef{Key: key, Value: value})
		return true
	}
	return false
}
