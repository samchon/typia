package factories

import (
	"encoding/json"
	"fmt"
	"regexp"
)

type identifierFactory struct{}

var IdentifierFactory identifierFactory

var variableNamePattern = regexp.MustCompile(`^[A-Za-z_$][A-Za-z0-9_$]*$`)

func (identifierFactory) Identifier(name string) Expression {
	if isVariableName(name) {
		return Identifier(name)
	}
	return StringLiteral(name)
}

func (identifierFactory) Access(input Expression, key string, chain ...bool) Expression {
	postfix := IdentifierFactory.Identifier(key)
	kind := "propertyAccess"
	if postfix.Kind == "stringLiteral" {
		kind = "elementAccess"
	}
	return Node(kind, Field("input", input), Field("key", postfix), Field("optional", len(chain) > 0 && chain[0]))
}

func (identifierFactory) GetName(input Expression) string {
	if input.Text != "" {
		return input.Text
	}
	switch input.Kind {
	case "propertyAccess":
		return fmt.Sprintf("%s.%s", IdentifierFactory.GetName(asExpression(input.Fields["input"])), IdentifierFactory.GetName(asExpression(input.Fields["key"])))
	case "elementAccess":
		return fmt.Sprintf("%s[%s]", IdentifierFactory.GetName(asExpression(input.Fields["input"])), IdentifierFactory.GetName(asExpression(input.Fields["key"])))
	default:
		return "unknown"
	}
}

func (identifierFactory) Postfix(str string) string {
	if isVariableName(str) {
		return `".` + str + `"`
	}
	raw, _ := json.Marshal(str)
	return `"[` + string(raw) + `]"`
}

func (identifierFactory) Parameter(name any, typeNode ...TypeNode) ParameterDeclaration {
	param := ParameterDeclaration{Name: name}
	if len(typeNode) != 0 {
		param.Type = typeNode[0]
	} else {
		param.Type = TypeFactory.Keyword("any")
	}
	return param
}

func isVariableName(name string) bool {
	return variableNamePattern.MatchString(name)
}
