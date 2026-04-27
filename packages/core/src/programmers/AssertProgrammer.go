package programmers

var AssertProgrammer = assertProgrammerNamespace{}

type assertProgrammerNamespace struct{}

func (assertProgrammerNamespace) Write(typeText string) string {
	expected := Quote("expected " + normalizeType(typeText))
	return `(input => { if (` + predicateExpr("input", normalizeType(typeText)) + `) return input; const error = new Error(` + expected + `); error.name = "TypeGuardError"; throw error; })`
}
