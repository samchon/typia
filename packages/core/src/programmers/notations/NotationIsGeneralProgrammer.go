package notations

var NotationIsGeneralProgrammer = notationIsGeneralProgrammerNamespace{}

type notationIsGeneralProgrammerNamespace struct{}

func (notationIsGeneralProgrammerNamespace) Write(rename string, typeText string) string {
	return notationWithPrelude(notationIsFunction(rename, typeText))
}
