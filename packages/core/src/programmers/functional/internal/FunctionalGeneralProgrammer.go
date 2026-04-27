package internal

var FunctionalGeneralProgrammer = functionalGeneralProgrammerNamespace{}

type functionalGeneralProgrammerNamespace struct{}

func (functionalGeneralProgrammerNamespace) GetReturnType(typeText string) string {
	return typeText
}
