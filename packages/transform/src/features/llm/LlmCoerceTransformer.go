package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmCoerceTransformer = llmCoerceTransformerNamespace{}

type llmCoerceTransformerNamespace struct{}

func (llmCoerceTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmCoerceProgrammer.Write(call.TypeText)
}
