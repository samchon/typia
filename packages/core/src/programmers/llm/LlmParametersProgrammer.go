package llm

var LlmParametersProgrammer = llmParametersProgrammerNamespace{}

type llmParametersProgrammerNamespace struct{}

func (llmParametersProgrammerNamespace) Write(typeText string) string {
	return llmParametersLiteral(typeText)
}
