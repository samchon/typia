package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpHeadersTransformer = httpHeadersTransformerNamespace{}

type httpHeadersTransformerNamespace struct{}

func (httpHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpHeadersProgrammer.Write(call.TypeText)
}
