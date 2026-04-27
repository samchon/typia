package functional

var FunctionalIsReturnProgrammer = functionalIsReturnProgrammerNamespace{}

type functionalIsReturnProgrammerNamespace struct{}

func (functionalIsReturnProgrammerNamespace) Write(typeText string) string {
	return functionalIsWrapper("return")
}
