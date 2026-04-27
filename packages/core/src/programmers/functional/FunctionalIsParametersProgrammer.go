package functional

var FunctionalIsParametersProgrammer = functionalIsParametersProgrammerNamespace{}

type functionalIsParametersProgrammerNamespace struct{}

func (functionalIsParametersProgrammerNamespace) Write(typeText string) string {
	return functionalIsWrapper("parameters")
}
