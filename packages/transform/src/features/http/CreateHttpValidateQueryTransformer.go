package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpValidateQueryTransformer = createHttpValidateQueryTransformerNamespace{}

type createHttpValidateQueryTransformerNamespace struct{}

func (createHttpValidateQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpValidateQueryProgrammer.Write(call.TypeText)
}
