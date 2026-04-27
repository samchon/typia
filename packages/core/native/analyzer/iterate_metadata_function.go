package analyzer

import (
	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// iterateFunction ports the function/call-signature branch of typia's
// metadata analyze. It records every callable signature on `t` into the
// schema's Functions bucket so higher-level emitters (llm.controller,
// json.application, etc.) can inspect parameter and return shapes.
func (a *Analyzer) iterateFunction(out *metadata.Schema, t *shimchecker.Type) bool {
	signatures := a.Checker.GetSignaturesOfType(t, shimchecker.SignatureKindCall)
	if len(signatures) == 0 {
		return false
	}

	for _, sig := range signatures {
		if sig == nil {
			continue
		}
		fn, ok := a.signatureToFunction(sig)
		if !ok {
			continue
		}
		out.Functions = append(out.Functions, fn)
	}
	return len(out.Functions) != 0
}

func (a *Analyzer) signatureToFunction(sig *shimchecker.Signature) (*metadata.Function, bool) {
	if sig == nil {
		return nil, false
	}
	fn := &metadata.Function{
		Parameters: make([]*metadata.Parameter, 0, len(sig.Parameters())),
		Async:      isPromiseLike(a.Checker.GetReturnTypeOfSignature(sig)),
	}

	for _, sym := range sig.Parameters() {
		if sym == nil {
			continue
		}
		paramType := a.Checker.GetTypeOfSymbol(sym)
		if paramType == nil {
			return nil, false
		}
		schema, ok := a.Walk(paramType)
		if !ok {
			return nil, false
		}
		optional := sym.Flags&ast.SymbolFlagsOptional != 0
		if optional {
			schema.Optional = true
			schema.Required = false
		}
		fn.Parameters = append(fn.Parameters, &metadata.Parameter{
			Name:          sym.Name,
			Type:          schema,
			Optional:      optional,
			Description:   symbolDescription(sym),
			JsDocTags:     jsDocTagsFromSymbol(sym),
			JsDocTexts:    jsDocTextsFromSymbol(sym),
			JsDocTagInfos: jsDocTagInfosFromSymbol(sym),
		})
	}

	if outputType := a.Checker.GetReturnTypeOfSignature(sig); outputType != nil {
		schema, ok := a.Walk(outputType)
		if !ok {
			return nil, false
		}
		fn.Output = schema
	}
	return fn, true
}

func isPromiseLike(t *shimchecker.Type) bool {
	if t == nil {
		return false
	}
	sym := t.Symbol()
	if sym == nil {
		return false
	}
	return sym.Name == "Promise" || sym.Name == "PromiseLike"
}
