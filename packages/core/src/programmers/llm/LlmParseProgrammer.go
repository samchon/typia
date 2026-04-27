package llm

var LlmParseProgrammer = llmParseProgrammerNamespace{}

type llmParseProgrammerNamespace struct{}

func (llmParseProgrammerNamespace) Write(typeText string) string {
	return llmParseFunction(typeText)
}
