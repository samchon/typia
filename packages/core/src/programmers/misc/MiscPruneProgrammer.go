package misc

var MiscPruneProgrammer = miscPruneProgrammerNamespace{}

type miscPruneProgrammerNamespace struct{}

func (miscPruneProgrammerNamespace) Write(typeText string) string {
	return miscPruneFunction(typeText)
}
