package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

// iterate ports the dispatcher in typia's
// `factories/internal/metadata/iterate_metadata.ts`. Returns `true` when any
// case accepted the type (even if it also appended errors), `false` when no
// case recognised it — callers bail gracefully.
//
// Order of inspection mirrors the TS original:
//
//  1. `any` / `unknown` short-circuit (top type).
//  2. Null / undefined / void / never modifier bits.
//  3. Intersection / union fan-out.
//  4. Constant, atomic, tuple, array, native, object — in that order.
func (a *Analyzer) iterate(out *metadata.Schema, t *shimchecker.Type) bool {
	flags := t.Flags()

	if flags&shimchecker.TypeFlagsAny != 0 || flags&shimchecker.TypeFlagsUnknown != 0 {
		out.Any = true
		return true
	}

	if flags&shimchecker.TypeFlagsNull != 0 {
		out.Nullable = true
		return true
	}
	if flags&shimchecker.TypeFlagsUndefined != 0 {
		out.Required = false
		return true
	}
	if flags&shimchecker.TypeFlagsVoid != 0 {
		out.Required = false
		return true
	}
	if flags&shimchecker.TypeFlagsNever != 0 {
		return true
	}

	if flags&shimchecker.TypeFlagsUnion != 0 {
		return a.iterateUnion(out, t)
	}
	if flags&shimchecker.TypeFlagsIntersection != 0 {
		return a.iterateIntersection(out, t)
	}

	if a.iterateConstant(out, t) {
		return true
	}
	if a.iterateAtomic(out, t) {
		return true
	}
	if shimchecker.IsTupleType(t) {
		return a.iterateTuple(out, t)
	}
	if a.isArray(t) {
		return a.iterateArray(out, t)
	}
	if a.iterateFunction(out, t) {
		return true
	}
	if flags&shimchecker.TypeFlagsObject != 0 {
		if native, ok := nativeName(a.Checker, t); ok {
			out.Natives = append(out.Natives, metadata.Native{Name: native})
			return true
		}
		return a.iterateObject(out, t)
	}
	return false
}
