package notations

var NotationGeneralProgrammer = notationGeneralProgrammerNamespace{}

type notationGeneralProgrammerNamespace struct{}

func (notationGeneralProgrammerNamespace) Write(rename string, typeText string) string {
	return notationWithPrelude(notationFunction(rename))
}
