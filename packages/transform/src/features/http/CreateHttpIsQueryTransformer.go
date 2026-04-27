package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpIsQueryTransformer = createHttpIsQueryTransformerNamespace{}

type createHttpIsQueryTransformerNamespace struct{}

func (createHttpIsQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpIsQueryProgrammer.Write(call.TypeText)
}
