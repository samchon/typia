package llm

var LlmMetadataFactory = llmMetadataFactoryNamespace{}

type llmMetadataFactoryNamespace struct{}

func (llmMetadataFactoryNamespace) Schema(typeText string) string {
	return llmSchemaLiteral(typeText)
}
