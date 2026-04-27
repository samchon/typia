package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpAssertFormDataTransformer = httpAssertFormDataTransformerNamespace{}

type httpAssertFormDataTransformerNamespace struct{}

func (httpAssertFormDataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpAssertFormDataProgrammer.Write(call.TypeText)
}
