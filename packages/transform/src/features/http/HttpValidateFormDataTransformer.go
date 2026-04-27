package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpValidateFormDataTransformer = httpValidateFormDataTransformerNamespace{}

type httpValidateFormDataTransformerNamespace struct{}

func (httpValidateFormDataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpValidateFormDataProgrammer.Write(call.TypeText)
}
