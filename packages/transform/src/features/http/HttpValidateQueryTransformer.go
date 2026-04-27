package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpValidateQueryTransformer = httpValidateQueryTransformerNamespace{}

type httpValidateQueryTransformerNamespace struct{}

func (httpValidateQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpValidateQueryProgrammer.Write(call.TypeText)
}
