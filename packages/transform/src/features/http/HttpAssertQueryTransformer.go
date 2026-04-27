package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var HttpAssertQueryTransformer = httpAssertQueryTransformerNamespace{}

type httpAssertQueryTransformerNamespace struct{}

func (httpAssertQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpAssertQueryProgrammer.Write(call.TypeText)
}
