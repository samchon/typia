package functional

var FunctionAssertReturnProgrammer = functionAssertReturnProgrammerNamespace{}
var FunctionalAssertReturnProgrammer = FunctionAssertReturnProgrammer

type functionAssertReturnProgrammerNamespace struct{}

func (functionAssertReturnProgrammerNamespace) Write(typeText string) string {
	return functionalWithPrelude(functionalAssertWrapper("return"))
}
