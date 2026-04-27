package misc

var MiscValidateCloneProgrammer = miscValidateCloneProgrammerNamespace{}

type miscValidateCloneProgrammerNamespace struct{}

func (miscValidateCloneProgrammerNamespace) Write(typeText string) string {
	return miscValidateCloneFunction(typeText)
}
