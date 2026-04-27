package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmStructuredOutputTransformer = llmStructuredOutputTransformerNamespace{}

type llmStructuredOutputTransformerNamespace struct{}

func (llmStructuredOutputTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmStructuredOutputProgrammer.Write(call.TypeText)
}
