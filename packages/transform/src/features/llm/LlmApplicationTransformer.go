package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmApplicationTransformer = llmApplicationTransformerNamespace{}

type llmApplicationTransformerNamespace struct{}

func (llmApplicationTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmApplicationProgrammer.Write(call.TypeText)
}
