package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpQueryTransformer = createHttpQueryTransformerNamespace{}

type createHttpQueryTransformerNamespace struct{}

func (createHttpQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpQueryProgrammer.Write(call.TypeText)
}
