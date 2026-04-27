package helpers

import "strings"

type stringifyPredicatorNamespace struct{}

var StringifyPredicator = stringifyPredicatorNamespace{}

func (stringifyPredicatorNamespace) RequireEscape(metadata Metadata) bool {
	for _, constant := range GetSlice(metadata, "constants") {
		for _, value := range GetSlice(constant, "values") {
			literal, ok := SoleLiteral(value)
			if !ok {
				continue
			}
			if strings.ContainsAny(literal, "\\\"\b\f\n\r\t") {
				return true
			}
		}
	}
	return false
}

func (stringifyPredicatorNamespace) Undefindable(metadata Metadata) bool {
	if !IsRequired(metadata) {
		return true
	}
	return StringifyPredicator.RequireEscape(metadata)
}
