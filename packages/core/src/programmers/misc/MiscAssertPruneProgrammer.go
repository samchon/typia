package misc

var MiscAssertPruneProgrammer = miscAssertPruneProgrammerNamespace{}

type miscAssertPruneProgrammerNamespace struct{}

func (miscAssertPruneProgrammerNamespace) Write(typeText string) string {
	return miscAssertPruneFunction(typeText)
}
