package misc

var MiscCloneProgrammer = miscCloneProgrammerNamespace{}

type miscCloneProgrammerNamespace struct{}

func (miscCloneProgrammerNamespace) Write(typeText string) string {
	return miscCloneFunction(typeText)
}
