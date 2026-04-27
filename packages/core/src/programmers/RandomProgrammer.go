package programmers

var RandomProgrammer = randomProgrammerNamespace{}

type randomProgrammerNamespace struct{}

func (randomProgrammerNamespace) Write(typeText string) string {
	return "(() => undefined)"
}
