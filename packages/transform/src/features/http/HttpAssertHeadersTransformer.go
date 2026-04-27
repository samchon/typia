package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpAssertHeadersTransformer = httpAssertHeadersTransformerNamespace{}

type httpAssertHeadersTransformerNamespace struct{}

func (httpAssertHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpAssertHeadersProgrammer.Write(call.TypeText)
}
