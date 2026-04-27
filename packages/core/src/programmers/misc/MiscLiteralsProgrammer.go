package misc

var MiscLiteralsProgrammer = miscLiteralsProgrammerNamespace{}

type miscLiteralsProgrammerNamespace struct{}

func (miscLiteralsProgrammerNamespace) Write(typeText string) string {
	return literalArray(typeText)
}
