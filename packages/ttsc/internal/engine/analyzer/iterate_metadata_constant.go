package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// iterateConstant handles StringLiteral / NumberLiteral / BigIntLiteral /
// BooleanLiteral — the individual enumeration cases of a union of literal
// values. Mirrors typia's `iterate_metadata_constant.ts` (boolean literals
// widen to the atomic bucket, matching typia's `emend_metadata_atomics`).
func (a *Analyzer) iterateConstant(out *metadata.Schema, t *shimchecker.Type) bool {
	flags := t.Flags()
	switch {
	case flags&shimchecker.TypeFlagsBooleanLiteral != 0:
		out.AddAtomic(metadata.AtomicBoolean)
		return true
	case flags&shimchecker.TypeFlagsStringLiteral != 0:
		if v, ok := literalValue(t); ok {
			out.AddConstant(metadata.AtomicString, v)
		}
		return true
	case flags&shimchecker.TypeFlagsNumberLiteral != 0:
		if v, ok := literalValue(t); ok {
			out.AddConstant(metadata.AtomicNumber, v)
		}
		return true
	case flags&shimchecker.TypeFlagsBigIntLiteral != 0:
		if v, ok := literalValue(t); ok {
			out.AddConstant(metadata.AtomicBigint, v)
		}
		return true
	}
	return false
}

// literalValue pulls a literal value off a ts type. tsgo stores them on
// `intrinsicType.value`; we expose that via `Type.AsLiteralType().Value()`.
func literalValue(t *shimchecker.Type) (any, bool) {
	lit := t.AsLiteralType()
	if lit == nil {
		return nil, false
	}
	return lit.Value(), true
}
