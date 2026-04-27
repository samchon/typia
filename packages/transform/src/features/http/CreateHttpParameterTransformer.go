package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpParameterTransformer = createHttpParameterTransformerNamespace{}

type createHttpParameterTransformerNamespace struct{}

func (createHttpParameterTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpParameterProgrammer.Write(call.TypeText)
}
