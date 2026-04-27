package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpValidateHeadersTransformer = httpValidateHeadersTransformerNamespace{}

type httpValidateHeadersTransformerNamespace struct{}

func (httpValidateHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpValidateHeadersProgrammer.Write(call.TypeText)
}
