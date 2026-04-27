package functional

var FunctionalAssertFunctionProgrammer = functionalAssertFunctionProgrammerNamespace{}

type functionalAssertFunctionProgrammerNamespace struct{}

func (functionalAssertFunctionProgrammerNamespace) Write(typeText string) string {
	return functionalWithPrelude(functionalAssertWrapper("function"))
}
