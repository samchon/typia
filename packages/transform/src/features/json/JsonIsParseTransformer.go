package json

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonIsParseTransformer = jsonIsParseTransformerNamespace{}

type jsonIsParseTransformerNamespace struct{}

func (jsonIsParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => { try { const value = JSON.parse(input); return " + programmers.IsProgrammer.Write(call.TypeText) + "(value) ? value : null; } catch { return null; } })"
}
