package factories

import (
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type identifierFactoryNamespace struct{}

var IdentifierFactory = identifierFactoryNamespace{}

var identifierFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (identifierFactoryNamespace) Identifier(name string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(identifierFactory_factory, emit...)
  if identifierFactory_variable(name) {
    return f.NewIdentifier(name)
  }
  return f.NewStringLiteral(name, shimast.TokenFlagsNone)
}

// Access takes a required emit context (nil for genuinely context-free callers)
// because its trailing `chain` variadic blocks the optional-emit form the other
// factories use; a required parameter also makes a forgotten context a compile
// error rather than a silent metadata gap.
func (identifierFactoryNamespace) Access(ec *shimprinter.EmitContext, input *shimast.Expression, key string, chain ...bool) *shimast.Node {
  f := nativecontext.EmitFactory(ec, identifierFactory_factory)
  postfix := IdentifierFactory.Identifier(key, ec)
  optional := len(chain) != 0 && chain[0]
  var questionDot *shimast.QuestionDotToken
  flags := shimast.NodeFlagsNone
  if optional {
    questionDot = f.NewToken(shimast.KindQuestionDotToken)
    flags = shimast.NodeFlagsOptionalChain
  }
  if shimast.IsStringLiteral(postfix) {
    return f.NewElementAccessExpression(
      input,
      questionDot,
      postfix,
      flags,
    )
  }
  return f.NewPropertyAccessExpression(
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

func (identifierFactoryNamespace) Parameter(name any, typeNode *shimast.TypeNode, init *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(identifierFactory_factory, emit...)
  var binding *shimast.BindingName
  switch v := name.(type) {
  case string:
    binding = f.NewIdentifier(v)
  case *shimast.Node:
    binding = v
  default:
    binding = f.NewIdentifier("input")
  }
  if typeNode == nil {
    typeNode = TypeFactory.Keyword("any", emit...)
  }
  var question *shimast.QuestionToken
  var initializer *shimast.Expression
  if init != nil && init.Kind == shimast.KindQuestionToken {
    question = f.NewToken(shimast.KindQuestionToken)
  } else {
    initializer = init
  }
  return f.NewParameterDeclaration(
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
