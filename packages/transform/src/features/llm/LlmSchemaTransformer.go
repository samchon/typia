package llm

import (
	corellm "github.com/samchon/typia/packages/core/src/programmers/llm"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var LlmSchemaTransformer = llmSchemaTransformerNamespace{}

type llmSchemaTransformerNamespace struct{}

func (llmSchemaTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corellm.LlmSchemaProgrammer.Write(call.TypeText)
}
