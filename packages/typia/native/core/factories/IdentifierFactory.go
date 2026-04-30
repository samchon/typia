package factories

import (
	"strconv"
	"strings"
)

import shimast "github.com/microsoft/typescript-go/shim/ast"

type identifierFactoryNamespace struct{}

var IdentifierFactory = identifierFactoryNamespace{}

var identifierFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (identifierFactoryNamespace) Identifier(name string) *shimast.Node {
	if identifierFactory_variable(name) {
		return identifierFactory_factory.NewIdentifier(name)
	}
	return identifierFactory_factory.NewStringLiteral(name, shimast.TokenFlagsNone)
}

func (identifierFactoryNamespace) Access(input *shimast.Expression, key string, chain ...bool) *shimast.Node {
	postfix := IdentifierFactory.Identifier(key)
	optional := len(chain) != 0 && chain[0]
	var questionDot *shimast.QuestionDotToken
	flags := shimast.NodeFlagsNone
	if optional {
		questionDot = identifierFactory_factory.NewToken(shimast.KindQuestionDotToken)
		flags = shimast.NodeFlagsOptionalChain
	}
	if shimast.IsStringLiteral(postfix) {
		return identifierFactory_factory.NewElementAccessExpression(
			input,
			questionDot,
			postfix,
			flags,
		)
	}
	return identifierFactory_factory.NewPropertyAccessExpression(
		input,
		questionDot,
		postfix,
		flags,
	)
}

func (identifierFactoryNamespace) GetName(input *shimast.Expression) string {
	if input == nil {
		return "unknown"
	}
	if shimast.IsPropertyAccessExpression(input) {
		access := input.AsPropertyAccessExpression()
		return IdentifierFactory.GetName(access.Expression) + "." + access.Name().Text()
	}
	if shimast.IsElementAccessExpression(input) {
		access := input.AsElementAccessExpression()
		return IdentifierFactory.GetName(access.Expression) + "[" + IdentifierFactory.GetName(access.ArgumentExpression) + "]"
	}
	if input.Kind == shimast.KindIdentifier || shimast.IsStringLiteral(input) {
		return input.Text()
	}
	return "unknown"
}

func (identifierFactoryNamespace) Postfix(str string) string {
	if identifierFactory_variable(str) {
		return "\"." + str + "\""
	}
	quoted := strings.ReplaceAll(strconv.Quote(str), "\"", "\\\"")
	return "\"[" + quoted + "]\""
}

func (identifierFactoryNamespace) Parameter(name any, typeNode *shimast.TypeNode, init *shimast.Node) *shimast.Node {
	var binding *shimast.BindingName
	switch v := name.(type) {
	case string:
		binding = identifierFactory_factory.NewIdentifier(v)
	case *shimast.Node:
		binding = v
	default:
		binding = identifierFactory_factory.NewIdentifier("input")
	}
	if typeNode == nil {
		typeNode = TypeFactory.Keyword("any")
	}
	var question *shimast.QuestionToken
	var initializer *shimast.Expression
	if init != nil && init.Kind == shimast.KindQuestionToken {
		question = identifierFactory_factory.NewToken(shimast.KindQuestionToken)
	} else {
		initializer = init
	}
	return identifierFactory_factory.NewParameterDeclaration(
		nil,
		nil,
		binding,
		question,
		typeNode,
		initializer,
	)
}

func identifierFactory_variable(str string) bool {
	if identifierFactory_reserved[str] || len(str) == 0 {
		return false
	}
	for i := 0; i < len(str); i++ {
		c := str[i]
		if i == 0 {
			if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || c == '_' || c == '$') {
				return false
			}
		} else if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$') {
			return false
		}
	}
	return true
}

var identifierFactory_reserved = map[string]bool{
	"break":      true,
	"case":       true,
	"catch":      true,
	"class":      true,
	"const":      true,
	"continue":   true,
	"debugger":   true,
	"default":    true,
	"delete":     true,
	"do":         true,
	"else":       true,
	"enum":       true,
	"export":     true,
	"extends":    true,
	"false":      true,
	"finally":    true,
	"for":        true,
	"function":   true,
	"if":         true,
	"import":     true,
	"in":         true,
	"instanceof": true,
	"module":     true,
	"new":        true,
	"null":       true,
	"package":    true,
	"public":     true,
	"private":    true,
	"protected":  true,
	"return":     true,
	"super":      true,
	"switch":     true,
	"this":       true,
	"throw":      true,
	"true":       true,
	"try":        true,
	"typeof":     true,
	"var":        true,
	"void":       true,
	"while":      true,
	"with":       true,
}
