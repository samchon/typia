package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmParametersTransformer = llmParametersTransformerNamespace{}

type llmParametersTransformerNamespace struct{}

func (llmParametersTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmParametersProgrammer.Write(call.TypeText)
}
