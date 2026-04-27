package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmCreateParseTransformer = llmCreateParseTransformerNamespace{}

type llmCreateParseTransformerNamespace struct{}

func (llmCreateParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmParseProgrammer.Write(call.TypeText)
}
