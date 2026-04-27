package json

var JsonSchemasProgrammer = jsonSchemasProgrammerNamespace{}

type jsonSchemasProgrammerNamespace struct{}

func (jsonSchemasProgrammerNamespace) Write(typeText string) string {
	return jsonSchemaCollection(typeText)
}
