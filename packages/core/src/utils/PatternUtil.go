package utils

import "strings"

const NUMBER = "[+-]?" +
	"\\d+(?:\\.\\d+)?" +
	"(?:[eE][+-]?\\d+)?"
const BOOLEAN = "true|false"
const STRING = "(.*)"

var PatternUtil = patternUtilNamespace{
	NUMBER:  NUMBER,
	BOOLEAN: BOOLEAN,
	STRING:  STRING,
}

type patternUtilNamespace struct {
	NUMBER  string
	BOOLEAN string
	STRING  string
}

func (patternUtilNamespace) Fix(str string) string {
	first := strings.Index(str, STRING)
	last := strings.LastIndex(str, STRING)
	prefix := ""
	if first == -1 || none("(")(str[:first]) {
		prefix = "^"
	}
	suffix := ""
	if last == -1 || none(")")(str[last+len(STRING):]) {
		suffix = "$"
	}
	return strings.Join([]string{prefix, str, suffix}, "")
}

func (patternUtilNamespace) Escape(str string) string {
	var builder strings.Builder
	for _, ch := range str {
		switch ch {
		case '|', '\\', '/', '{', '}', '(', ')', '[', ']', '^', '$', '+', '*', '?', '.':
			builder.WriteRune('\\')
			builder.WriteRune(ch)
		case '-':
			builder.WriteString("\\x2d")
		default:
			builder.WriteRune(ch)
		}
	}
	return builder.String()
}

func none(parenthesis string) func(string) bool {
	return func(str string) bool {
		for _, ch := range str {
			if string(ch) != parenthesis {
				return true
			}
		}
		return false
	}
}
