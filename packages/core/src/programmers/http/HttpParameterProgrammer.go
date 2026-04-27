package http

var HttpParameterProgrammer = httpParameterProgrammerNamespace{}

type httpParameterProgrammerNamespace struct{}

func (httpParameterProgrammerNamespace) Write(typeText string) string {
	return httpParameterFunction(typeText)
}
