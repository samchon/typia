package misc

var MiscValidatePruneProgrammer = miscValidatePruneProgrammerNamespace{}

type miscValidatePruneProgrammerNamespace struct{}

func (miscValidatePruneProgrammerNamespace) Write(typeText string) string {
	return miscValidatePruneFunction(typeText)
}
