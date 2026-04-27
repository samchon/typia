package json

var JsonValidateParseProgrammer = jsonValidateParseProgrammerNamespace{}

type jsonValidateParseProgrammerNamespace struct{}

func (jsonValidateParseProgrammerNamespace) Write(typeText string) string {
	return jsonParseValidate(typeText)
}
