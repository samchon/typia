package json

import "github.com/samchon/typia/packages/core/src/programmers"

var JsonIsParseProgrammer = jsonIsParseProgrammerNamespace{}

type jsonIsParseProgrammerNamespace struct{}

func (jsonIsParseProgrammerNamespace) Write(typeText string) string {
	is := programmers.IsProgrammer.Write(typeText)
	return "(input => { input = JSON.parse(input); return " + is + "(input) ? input : null; })"
}
