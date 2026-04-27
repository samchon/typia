package http

import (
	corehttp "github.com/samchon/typia/packages/core/src/programmers/http"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateHttpAssertFormDataTransformer = createHttpAssertFormDataTransformerNamespace{}

type createHttpAssertFormDataTransformerNamespace struct{}

func (createHttpAssertFormDataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corehttp.HttpAssertFormDataProgrammer.Write(call.TypeText)
}
