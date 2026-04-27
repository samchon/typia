package misc

var MiscIsPruneProgrammer = miscIsPruneProgrammerNamespace{}

type miscIsPruneProgrammerNamespace struct{}

func (miscIsPruneProgrammerNamespace) Write(typeText string) string {
	return miscIsPruneFunction(typeText)
}
