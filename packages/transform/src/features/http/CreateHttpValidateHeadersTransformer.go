package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpValidateHeadersTransformer = createHttpValidateHeadersTransformerNamespace{}

type createHttpValidateHeadersTransformerNamespace struct{}

func (createHttpValidateHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpValidateHeadersProgrammer.Write(call.TypeText)
}
