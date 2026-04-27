package json

import "github.com/samchon/typia/packages/core/src/programmers"

var JsonAssertParseProgrammer = jsonAssertParseProgrammerNamespace{}

type jsonAssertParseProgrammerNamespace struct{}

func (jsonAssertParseProgrammerNamespace) Write(typeText string) string {
	return jsonParseApply(programmers.AssertProgrammer.Write(typeText))
}
