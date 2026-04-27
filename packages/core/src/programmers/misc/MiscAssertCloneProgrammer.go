package misc

var MiscAssertCloneProgrammer = miscAssertCloneProgrammerNamespace{}

type miscAssertCloneProgrammerNamespace struct{}

func (miscAssertCloneProgrammerNamespace) Write(typeText string) string {
	return miscAssertCloneFunction(typeText)
}
