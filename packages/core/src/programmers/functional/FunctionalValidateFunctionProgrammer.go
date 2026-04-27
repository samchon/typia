package functional

var FunctionalValidateFunctionProgrammer = functionalValidateFunctionProgrammerNamespace{}

type functionalValidateFunctionProgrammerNamespace struct{}

func (functionalValidateFunctionProgrammerNamespace) Write(typeText string) string {
	return functionalWithPrelude(functionalValidateWrapper("function"))
}
