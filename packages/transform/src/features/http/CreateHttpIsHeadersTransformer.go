package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpIsHeadersTransformer = createHttpIsHeadersTransformerNamespace{}

type createHttpIsHeadersTransformerNamespace struct{}

func (createHttpIsHeadersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpIsHeadersProgrammer.Write(call.TypeText)
}
