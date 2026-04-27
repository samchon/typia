package llm

var LlmCoerceProgrammer = llmCoerceProgrammerNamespace{}

type llmCoerceProgrammerNamespace struct{}

func (llmCoerceProgrammerNamespace) Write(typeText string) string {
	return llmCoerceFunction(typeText)
}
