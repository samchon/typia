package llm

var LlmStructuredOutputProgrammer = llmStructuredOutputProgrammerNamespace{}

type llmStructuredOutputProgrammerNamespace struct{}

func (llmStructuredOutputProgrammerNamespace) Write(typeText string) string {
	return llmStructuredOutputLiteral(typeText)
}
