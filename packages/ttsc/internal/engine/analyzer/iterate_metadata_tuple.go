package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// iterateTuple handles fixed-length tuple types — mirrors typia's
// `iterate_metadata_tuple.ts`. Element types come from tsgo's
// GetTypeArguments on the underlying reference type.
func (a *Analyzer) iterateTuple(out *metadata.Schema, t *shimchecker.Type) bool {
	key := typeKey(t)
	if existing, ok := a.visitingTuples[key]; ok {
		out.Tuples = append(out.Tuples, &metadata.TupleRef{Type: existing})
		return true
	}
	name := typeName(a.Checker, t)
	tup, fresh := a.Collection.EmplaceTuple(key, name)
	a.visitingTuples[key] = tup
	if fresh {
		args := shimchecker.Checker_getTypeArguments(a.Checker, t)
		tup.Elements = make([]*metadata.Schema, 0, len(args))
		for _, arg := range args {
			s, ok := a.Walk(arg)
			if !ok {
				delete(a.visitingTuples, key)
				return false
			}
			tup.Elements = append(tup.Elements, s)
		}
	}
	out.Tuples = append(out.Tuples, &metadata.TupleRef{Type: tup})
	delete(a.visitingTuples, key)
	return true
}
