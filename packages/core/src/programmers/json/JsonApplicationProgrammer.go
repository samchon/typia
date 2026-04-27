package json

var JsonApplicationProgrammer = jsonApplicationProgrammerNamespace{}

type jsonApplicationProgrammerNamespace struct{}

func (jsonApplicationProgrammerNamespace) Write(typeText string) string {
	return jsonApplication(typeText)
}
