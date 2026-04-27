package json

var JsonAssertStringifyProgrammer = jsonAssertStringifyProgrammerNamespace{}

type jsonAssertStringifyProgrammerNamespace struct{}

func (jsonAssertStringifyProgrammerNamespace) Write(typeText string) string {
	return jsonAssertStringifyFunction(typeText)
}
