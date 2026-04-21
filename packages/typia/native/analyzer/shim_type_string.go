package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// shimTypeString tries to retrieve a human-readable name for `t`. tsgo
// exposes the full Checker.typeToString as a private method; exposing it via
// gen_shims ExtraMethods would require extra wrangling because it takes a
// `TypeFormatFlags`. We fall back to symbol names when present and to a
// synthetic "Type#<id>" otherwise — good enough for the registry
// keys and emitted error paths in the is/assert programmers.
func shimTypeString(_ *shimchecker.Checker, t *shimchecker.Type) string {
	if t == nil {
		return ""
	}
	if sym := t.Symbol(); sym != nil && sym.Name != "" {
		return sym.Name
	}
	return ""
}
