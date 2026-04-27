package functional

var FunctionalValidateParametersProgrammer = functionalValidateParametersProgrammerNamespace{}

type functionalValidateParametersProgrammerNamespace struct{}

func (functionalValidateParametersProgrammerNamespace) Write(typeText string) string {
	return functionalWithPrelude(functionalValidateWrapper("parameters"))
}
