package functional

var FunctionalIsFunctionProgrammer = functionalIsFunctionProgrammerNamespace{}

type functionalIsFunctionProgrammerNamespace struct{}

func (functionalIsFunctionProgrammerNamespace) Write(typeText string) string {
	return functionalIsWrapper("function")
}
