package json

var JsonIsStringifyProgrammer = jsonIsStringifyProgrammerNamespace{}

type jsonIsStringifyProgrammerNamespace struct{}

func (jsonIsStringifyProgrammerNamespace) Write(typeText string) string {
	return jsonIsStringifyFunction(typeText)
}
