package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// iterateEscape ports typia's iterate_metadata_escape.ts. JSON-oriented
// analyzers enable Options.Escape so classes with a toJSON() method are
// represented as the original shape plus the return shape of toJSON().
func (a *Analyzer) iterateEscape(out *metadata.Schema, t *shimchecker.Type) bool {
	if a == nil || a.Checker == nil || !a.Options.Escape || t == nil {
		return false
	}
	returnType := a.toJSONReturnType(t)
	if returnType == nil {
		return false
	}

	escaped := &metadata.Escaped{
		Original: metadata.NewSchema(),
		Returns:  metadata.NewSchema(),
	}

	previous := a.Options.Escape
	a.Options.Escape = false
	defer func() {
		a.Options.Escape = previous
	}()

	if !a.iterate(escaped.Original, t) {
		return false
	}
	if !a.iterate(escaped.Returns, returnType) {
		return false
	}
	out.Escaped = escaped
	return true
}

func (a *Analyzer) toJSONReturnType(t *shimchecker.Type) *shimchecker.Type {
	properties := shimchecker.Checker_getPropertiesOfType(a.Checker, t)
	if len(properties) == 0 {
		properties = shimchecker.Checker_getApparentProperties(a.Checker, t)
	}
	for _, sym := range properties {
		if sym == nil || sym.Name != "toJSON" {
			continue
		}
		methodType := a.Checker.GetTypeOfSymbol(sym)
		if methodType == nil {
			continue
		}
		for _, sig := range a.Checker.GetSignaturesOfType(methodType, shimchecker.SignatureKindCall) {
			if sig == nil || len(sig.Parameters()) != 0 {
				continue
			}
			if output := a.Checker.GetReturnTypeOfSignature(sig); output != nil {
				return output
			}
		}
	}
	return nil
}
