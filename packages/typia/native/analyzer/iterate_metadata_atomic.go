package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

// iterateAtomic mirrors typia's `iterate_metadata_atomic.ts`. Accepts a type
// when it maps to one of the four primitive atomics and the literal bit is
// zero (literal values are picked up by `iterateConstant`).
func (a *Analyzer) iterateAtomic(out *metadata.Schema, t *shimchecker.Type) bool {
	flags := t.Flags()
	if flags&shimchecker.TypeFlagsTemplateLiteral != 0 || flags&shimchecker.TypeFlagsStringMapping != 0 {
		return false
	}
	table := []struct {
		flag metadata.AtomicKind
		mask shimchecker.TypeFlags
	}{
		{metadata.AtomicBoolean, shimchecker.TypeFlagsBooleanLike},
		{metadata.AtomicNumber, shimchecker.TypeFlagsNumberLike},
		{metadata.AtomicBigint, shimchecker.TypeFlagsBigIntLike},
		{metadata.AtomicString, shimchecker.TypeFlagsStringLike},
	}
	for _, row := range table {
		if flags&row.mask != 0 && flags&shimchecker.TypeFlagsLiteral == 0 {
			out.AddAtomic(row.flag)
			return true
		}
	}
	return false
}
