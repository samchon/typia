package llm

var LlmControllerProgrammer = llmControllerProgrammerNamespace{}

type llmControllerProgrammerNamespace struct{}

func (llmControllerProgrammerNamespace) Write(typeText string) string {
	return llmControllerFunction(typeText)
}
