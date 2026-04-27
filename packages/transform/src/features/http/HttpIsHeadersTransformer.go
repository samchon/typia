package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpIsHeadersTransformer = httpIsHeadersTransformerNamespace{}

type httpIsHeadersTransformerNamespace struct{}

func (httpIsHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpIsHeadersProgrammer.Write(call.TypeText)
}
