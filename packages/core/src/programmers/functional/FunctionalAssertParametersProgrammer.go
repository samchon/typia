package functional

var FunctionalAssertParametersProgrammer = functionalAssertParametersProgrammerNamespace{}

type functionalAssertParametersProgrammerNamespace struct{}

func (functionalAssertParametersProgrammerNamespace) Write(typeText string) string {
	return functionalWithPrelude(functionalAssertWrapper("parameters"))
}
