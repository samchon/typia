package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpIsFormDataTransformer = httpIsFormDataTransformerNamespace{}

type httpIsFormDataTransformerNamespace struct{}

func (httpIsFormDataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpIsFormDataProgrammer.Write(call.TypeText)
}
