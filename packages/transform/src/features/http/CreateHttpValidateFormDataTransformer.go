package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpValidateFormDataTransformer = createHttpValidateFormDataTransformerNamespace{}

type createHttpValidateFormDataTransformerNamespace struct{}

func (createHttpValidateFormDataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpValidateFormDataProgrammer.Write(call.TypeText)
}
