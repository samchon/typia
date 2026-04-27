package http

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpParameterTransformer = httpParameterTransformerNamespace{}

type httpParameterTransformerNamespace struct{}

func (httpParameterTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	if programmers.ContainsType(call.TypeText, "number") {
		return "(input => Number(input))"
	}
	if programmers.ContainsType(call.TypeText, "boolean") {
		return `(input => input === "true")`
	}
	return "(input => input)"
}
