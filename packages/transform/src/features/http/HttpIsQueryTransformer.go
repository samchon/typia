package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpIsQueryTransformer = httpIsQueryTransformerNamespace{}

type httpIsQueryTransformerNamespace struct{}

func (httpIsQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpIsQueryProgrammer.Write(call.TypeText)
}
