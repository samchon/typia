package llm

var LlmSchemaProgrammer = llmSchemaProgrammerNamespace{}

type llmSchemaProgrammerNamespace struct{}

func (llmSchemaProgrammerNamespace) Write(typeText string) string {
	return llmSchemaLiteral(typeText)
}
