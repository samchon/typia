package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmControllerTransformer = llmControllerTransformerNamespace{}

type llmControllerTransformerNamespace struct{}

func (llmControllerTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmControllerProgrammer.Write(call.TypeText)
}
