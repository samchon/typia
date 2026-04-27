package functional

var FunctionalValidateReturnProgrammer = functionalValidateReturnProgrammerNamespace{}

type functionalValidateReturnProgrammerNamespace struct{}

func (functionalValidateReturnProgrammerNamespace) Write(typeText string) string {
	return functionalWithPrelude(functionalValidateWrapper("return"))
}
