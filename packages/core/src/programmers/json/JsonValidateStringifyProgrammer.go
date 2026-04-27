package json

var JsonValidateStringifyProgrammer = jsonValidateStringifyProgrammerNamespace{}

type jsonValidateStringifyProgrammerNamespace struct{}

func (jsonValidateStringifyProgrammerNamespace) Write(typeText string) string {
	return jsonValidateStringifyFunction(typeText)
}
