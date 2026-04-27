package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmCreateCoerceTransformer = llmCreateCoerceTransformerNamespace{}

type llmCreateCoerceTransformerNamespace struct{}

func (llmCreateCoerceTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmCoerceProgrammer.Write(call.TypeText)
}
