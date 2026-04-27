package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmParseTransformer = llmParseTransformerNamespace{}

type llmParseTransformerNamespace struct{}

func (llmParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmParseProgrammer.Write(call.TypeText)
}
