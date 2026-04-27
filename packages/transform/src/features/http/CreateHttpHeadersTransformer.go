package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpHeadersTransformer = createHttpHeadersTransformerNamespace{}

type createHttpHeadersTransformerNamespace struct{}

func (createHttpHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpHeadersProgrammer.Write(call.TypeText)
}
