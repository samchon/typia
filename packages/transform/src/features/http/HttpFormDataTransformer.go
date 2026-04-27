package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpFormDataTransformer = httpFormDataTransformerNamespace{}

type httpFormDataTransformerNamespace struct{}

func (httpFormDataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpFormDataProgrammer.Write(call.TypeText)
}
