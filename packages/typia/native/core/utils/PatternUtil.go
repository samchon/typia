package utils

import "strings"

type patternUtilNamespace struct {
  NUMBER  string
  BOOLEAN string
  STRING  string
}

var PatternUtil = patternUtilNamespace{
  NUMBER:  "[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?",
  BOOLEAN: "true|false",
  STRING:  "(.*)",
}

func (p patternUtilNamespace) Fix(str string) string {
  first := strings.Index(str, p.STRING)
  last := strings.LastIndex(str, p.STRING)

  prefix := ""
  if first == -1 || none("(")(str[:first]) {
    prefix = "^"
  }
  suffix := ""
  if last == -1 || none(")")(str[last+len(p.STRING):]) {
    suffix = "$"
  }
  return prefix + str + suffix
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
    // The four ECMAScript LineTerminators cannot appear raw inside a regex
    // literal (`RegExp(/.../)`) -- the sink every structural pattern feeds -- so a
    // raw one turns the emitted module into a SyntaxError. Emit the regex escape
    // instead; it stays valid in the literal and keeps matching the terminator
    // (#2211).
    case '\n':
      builder.WriteString("\\n")
    case '\r':
      builder.WriteString("\\r")
    case '\u2028':
      builder.WriteString("\\u2028")
    case '\u2029':
      builder.WriteString("\\u2029")
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
