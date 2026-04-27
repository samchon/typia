package notations

var NotationValidateGeneralProgrammer = notationValidateGeneralProgrammerNamespace{}

type notationValidateGeneralProgrammerNamespace struct{}

func (notationValidateGeneralProgrammerNamespace) Write(rename string, typeText string) string {
	return notationWithPrelude(notationValidateFunction(rename, typeText))
}
