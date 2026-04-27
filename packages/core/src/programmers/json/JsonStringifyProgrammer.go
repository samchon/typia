package json

var JsonStringifyProgrammer = jsonStringifyProgrammerNamespace{}

type jsonStringifyProgrammerNamespace struct{}

func (jsonStringifyProgrammerNamespace) Write(typeText string) string {
	return jsonStringifyFunction(typeText)
}
