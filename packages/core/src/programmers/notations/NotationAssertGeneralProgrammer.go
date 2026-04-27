package notations

var NotationAssertGeneralProgrammer = notationAssertGeneralProgrammerNamespace{}

type notationAssertGeneralProgrammerNamespace struct{}

func (notationAssertGeneralProgrammerNamespace) Write(rename string, typeText string) string {
	return notationWithPrelude(notationAssertFunction(rename, typeText))
}
