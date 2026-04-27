package misc

var MiscIsCloneProgrammer = miscIsCloneProgrammerNamespace{}

type miscIsCloneProgrammerNamespace struct{}

func (miscIsCloneProgrammerNamespace) Write(typeText string) string {
	return miscIsCloneFunction(typeText)
}
