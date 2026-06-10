package factories

import (
  "crypto/rand"
  "fmt"
  "math"
  "os"
  "path/filepath"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimparser "github.com/microsoft/typescript-go/shim/parser"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type expressionFactoryNamespace struct{}

var ExpressionFactory = expressionFactoryNamespace{}

type ExpressionFactory_IsObjectProps struct {
  CheckNull  bool
  CheckArray bool
  Input      *shimast.Expression
}

type ExpressionFactory_CurryingProps struct {
  Function  *shimast.Expression
  Arguments []*shimast.Expression
}

type ExpressionFactory_TranspileProps struct {
  Importer ExpressionFactory_Importer
  Script   string
}

type ExpressionFactory_Importer interface {
  Internal(name string) *shimast.Node
  Instance(props ExpressionFactory_IInstance) *shimast.Node
  Namespace(props ExpressionFactory_INamespace) *shimast.Node
  Default(props ExpressionFactory_IDefault) *shimast.Node
}

// 이 import 인자 타입들의 단일 정의처는 ImportProgrammer가 사는 core/context다.
// 여기서는 alias만 둔다.
type ExpressionFactory_IDefault = nativecontext.ImportProgrammer_IDefault
type ExpressionFactory_IInstance = nativecontext.ImportProgrammer_IInstance
type ExpressionFactory_INamespace = nativecontext.ImportProgrammer_INamespace

type ExpressionFactory_GetEscapedTextProps struct {
  Input *shimast.Expression
}

var expressionFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (expressionFactoryNamespace) Number(value any, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  text, numeric := expressionFactory_number_text(value)
  if numeric < 0 {
    return f.NewPrefixUnaryExpression(
      shimast.KindMinusToken,
      f.NewNumericLiteral(expressionFactory_number_abs_text(numeric), shimast.TokenFlagsNone),
    )
  }
  return f.NewNumericLiteral(text, shimast.TokenFlagsNone)
}

func (expressionFactoryNamespace) Bigint(value any, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  return f.NewCallExpression(
    f.NewIdentifier("BigInt"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewIdentifier(fmt.Sprint(value)),
    }),
    shimast.NodeFlagsNone,
  )
}

func (expressionFactoryNamespace) IsRequired(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    f.NewIdentifier("undefined"),
    nil,
    f.NewToken(shimast.KindExclamationEqualsEqualsToken),
    input,
  )
}

func (expressionFactoryNamespace) IsArray(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  return f.NewCallExpression(
    f.NewIdentifier("Array.isArray"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{input}),
    shimast.NodeFlagsNone,
  )
}

func (expressionFactoryNamespace) IsObject(props ExpressionFactory_IsObjectProps, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  conditions := []*shimast.Node{
    f.NewBinaryExpression(
      nil,
      f.NewStringLiteral("object", shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewTypeOfExpression(props.Input),
    ),
  }
  if props.CheckNull {
    conditions = append(conditions, f.NewBinaryExpression(
      nil,
      f.NewKeywordExpression(shimast.KindNullKeyword),
      nil,
      f.NewToken(shimast.KindExclamationEqualsEqualsToken),
      props.Input,
    ))
  }
  if props.CheckArray {
    conditions = append(conditions, f.NewBinaryExpression(
      nil,
      f.NewKeywordExpression(shimast.KindFalseKeyword),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      ExpressionFactory.IsArray(props.Input, emit...),
    ))
  }
  if len(conditions) == 1 {
    return conditions[0]
  }
  output := conditions[0]
  for _, condition := range conditions[1:] {
    output = f.NewBinaryExpression(
      nil,
      output,
      nil,
      f.NewToken(shimast.KindAmpersandAmpersandToken),
      condition,
    )
  }
  return output
}

func (expressionFactoryNamespace) IsInstanceOf(t string, input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    input,
    nil,
    f.NewToken(shimast.KindInstanceOfKeyword),
    f.NewIdentifier(t),
  )
}

func (expressionFactoryNamespace) Coalesce(x *shimast.Expression, y *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    x,
    nil,
    f.NewToken(shimast.KindQuestionQuestionToken),
    y,
  )
}

// Conditional builds `condition ? whenTrue : whenFalse` with its operator tokens
// supplied at construction. typia's programmers historically built conditional
// expressions with nil `?`/`:` tokens and relied on a post-emit tree walk
// (NormalizeSyntheticTokens) to fill them in; constructing them well-formed here
// removes that workaround. The node is structurally identical to the patched-up
// form, so emitted text is unchanged.
func (expressionFactoryNamespace) Conditional(condition *shimast.Expression, whenTrue *shimast.Expression, whenFalse *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  return f.NewConditionalExpression(
    condition,
    f.NewToken(shimast.KindQuestionToken),
    whenTrue,
    f.NewToken(shimast.KindColonToken),
    whenFalse,
  )
}

func (expressionFactoryNamespace) Currying(props ExpressionFactory_CurryingProps, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  if len(props.Arguments) == 0 {
    return f.NewCallExpression(props.Function, nil, nil, nil, shimast.NodeFlagsNone)
  }
  prev := f.NewCallExpression(
    props.Function,
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Arguments[0]}),
    shimast.NodeFlagsNone,
  )
  for _, param := range props.Arguments[1:] {
    prev = f.NewCallExpression(
      prev,
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{param}),
      shimast.NodeFlagsNone,
    )
  }
  return prev
}

// SelfCall takes a required emit context (nil for context-free callers) for the
// same reason as IdentifierFactory.Access: its trailing typeNode variadic blocks
// the optional-emit form.
func (expressionFactoryNamespace) SelfCall(ec *shimprinter.EmitContext, body *shimast.ConciseBody, typeNode ...*shimast.TypeNode) *shimast.Node {
  if body != nil && body.Kind == shimast.KindCallExpression {
    return body
  }
  f := nativecontext.EmitFactory(ec, expressionFactory_factory)
  var output *shimast.TypeNode
  if len(typeNode) != 0 {
    output = typeNode[0]
  }
  arrow := f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList(nil),
    output,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    body,
  )
  return f.NewCallExpression(
    f.NewParenthesizedExpression(arrow),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func (expressionFactoryNamespace) GetEscapedText(props ExpressionFactory_GetEscapedTextProps) string {
  if props.Input == nil {
    return ""
  }
  if props.Input.Kind == shimast.KindIdentifier || shimast.IsStringLiteral(props.Input) {
    return props.Input.Text()
  }
  return IdentifierFactory.GetName(props.Input)
}

func (expressionFactoryNamespace) Transpile(props ExpressionFactory_TranspileProps, emit ...*shimprinter.EmitContext) func(input *shimast.Expression) *shimast.Node {
  f := nativecontext.EmitFactoryOf(expressionFactory_factory, emit...)
  fileName := filepath.Join(os.TempDir(), expressionFactory_random_format_uuid()+".ts")
  if absolute, err := filepath.Abs(fileName); err == nil {
    fileName = absolute
  }
  file := shimparser.ParseSourceFile(
    shimast.SourceFileParseOptions{FileName: filepath.ToSlash(fileName)},
    props.Script,
    shimcore.ScriptKindTS,
  )
  if file == nil || file.Statements == nil || len(file.Statements.Nodes) == 0 {
    panic("Error on ExpressionFactory.transpile(): no statement exists.")
  }
  statement := file.Statements.Nodes[0]
  if statement.Kind != shimast.KindExpressionStatement {
    panic("Error on ExpressionFactory.transpile(): statement is not an expression statement.")
  }
  expression := f.DeepCloneNode(statement.AsExpressionStatement().Expression)
  return func(input *shimast.Expression) *shimast.Node {
    var visitor *shimast.NodeVisitor
    visitor = shimast.NewNodeVisitor(func(node *shimast.Node) *shimast.Node {
      if node == nil {
        return nil
      }
      if node.Kind == shimast.KindIdentifier && node.Text() == "$input" {
        return input
      }
      if props.Importer != nil && node.Kind == shimast.KindCallExpression {
        if imported := expressionFactory_import(props.Importer, node); imported != nil {
          return imported
        }
      }
      return node.VisitEachChild(visitor)
    }, f, shimast.NodeVisitorHooks{})
    return visitor.VisitNode(expression)
  }
}

func expressionFactory_import(importer ExpressionFactory_Importer, node *shimast.Node) *shimast.Node {
  call := node.AsCallExpression()
  if call == nil || call.Expression == nil || call.Expression.Kind != shimast.KindIdentifier {
    return nil
  }
  name := call.Expression.Text()
  args := []*shimast.Node{}
  if call.Arguments != nil {
    args = call.Arguments.Nodes
  }
  if name == "$importInternal" && len(args) == 1 && shimast.IsStringLiteral(args[0]) {
    return importer.Internal(args[0].Text())
  }
  if name == "$importInstance" && len(args) == 2 && shimast.IsStringLiteral(args[0]) && shimast.IsStringLiteral(args[1]) {
    return importer.Instance(ExpressionFactory_IInstance{
      Name: args[0].Text(),
      File: args[1].Text(),
    })
  }
  if name == "$importNamespace" && len(args) == 2 && shimast.IsStringLiteral(args[0]) && shimast.IsStringLiteral(args[1]) {
    return importer.Namespace(ExpressionFactory_INamespace{
      Name: args[0].Text(),
      File: args[1].Text(),
    })
  }
  if name == "$importDefault" && len(args) == 3 && shimast.IsStringLiteral(args[0]) && shimast.IsStringLiteral(args[1]) {
    return importer.Default(ExpressionFactory_IDefault{
      Name: args[0].Text(),
      File: args[1].Text(),
      Type: false,
    })
  }
  return nil
}

func expressionFactory_number_text(value any) (string, float64) {
  switch v := value.(type) {
  case int:
    return fmt.Sprint(v), float64(v)
  case int64:
    return fmt.Sprint(v), float64(v)
  case float32:
    return fmt.Sprint(v), float64(v)
  case float64:
    return fmt.Sprint(v), v
  default:
    text := fmt.Sprint(value)
    var f float64
    fmt.Sscan(text, &f)
    return text, f
  }
}

func expressionFactory_number_abs_text(value float64) string {
  text := fmt.Sprint(math.Abs(value))
  return strings.TrimSuffix(text, ".0")
}

func expressionFactory_random_format_uuid() string {
  bytes := make([]byte, 16)
  if _, err := rand.Read(bytes); err != nil {
    return "00000000-0000-4000-8000-000000000000"
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  return fmt.Sprintf("%08x-%04x-%04x-%04x-%012x", bytes[0:4], bytes[4:6], bytes[6:8], bytes[8:10], bytes[10:16])
}
