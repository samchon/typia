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
	Transformer any
	Importer    ExpressionFactory_Importer
	Script      string
}

type ExpressionFactory_Importer interface {
	Internal(name string) *shimast.Node
	Instance(props ExpressionFactory_IInstance) *shimast.Node
	Namespace(props ExpressionFactory_INamespace) *shimast.Node
	Default(props ExpressionFactory_IDefault) *shimast.Node
}

type ExpressionFactory_IDefault struct {
	File string
	Name string
	Type bool
}

type ExpressionFactory_IInstance struct {
	File  string
	Name  string
	Alias *string
}

type ExpressionFactory_INamespace struct {
	File string
	Name string
}

type ExpressionFactory_GetEscapedTextProps struct {
	Printer any
	Input   *shimast.Expression
}

var expressionFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (expressionFactoryNamespace) Number(value any) *shimast.Node {
	text, numeric := expressionFactory_number_text(value)
	if numeric < 0 {
		return expressionFactory_factory.NewPrefixUnaryExpression(
			shimast.KindMinusToken,
			expressionFactory_factory.NewNumericLiteral(expressionFactory_number_abs_text(numeric), shimast.TokenFlagsNone),
		)
	}
	return expressionFactory_factory.NewNumericLiteral(text, shimast.TokenFlagsNone)
}

func (expressionFactoryNamespace) Bigint(value any) *shimast.Node {
	return expressionFactory_factory.NewCallExpression(
		expressionFactory_factory.NewIdentifier("BigInt"),
		nil,
		nil,
		expressionFactory_factory.NewNodeList([]*shimast.Node{
			expressionFactory_factory.NewIdentifier(fmt.Sprint(value)),
		}),
		shimast.NodeFlagsNone,
	)
}

func (expressionFactoryNamespace) IsRequired(input *shimast.Expression) *shimast.Node {
	return expressionFactory_factory.NewBinaryExpression(
		nil,
		expressionFactory_factory.NewIdentifier("undefined"),
		nil,
		expressionFactory_factory.NewToken(shimast.KindExclamationEqualsEqualsToken),
		input,
	)
}

func (expressionFactoryNamespace) IsArray(input *shimast.Expression) *shimast.Node {
	return expressionFactory_factory.NewCallExpression(
		expressionFactory_factory.NewIdentifier("Array.isArray"),
		nil,
		nil,
		expressionFactory_factory.NewNodeList([]*shimast.Node{input}),
		shimast.NodeFlagsNone,
	)
}

func (expressionFactoryNamespace) IsObject(props ExpressionFactory_IsObjectProps) *shimast.Node {
	conditions := []*shimast.Node{
		expressionFactory_factory.NewBinaryExpression(
			nil,
			expressionFactory_factory.NewStringLiteral("object", shimast.TokenFlagsNone),
			nil,
			expressionFactory_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
			expressionFactory_factory.NewTypeOfExpression(props.Input),
		),
	}
	if props.CheckNull {
		conditions = append(conditions, expressionFactory_factory.NewBinaryExpression(
			nil,
			expressionFactory_factory.NewKeywordExpression(shimast.KindNullKeyword),
			nil,
			expressionFactory_factory.NewToken(shimast.KindExclamationEqualsEqualsToken),
			props.Input,
		))
	}
	if props.CheckArray {
		conditions = append(conditions, expressionFactory_factory.NewBinaryExpression(
			nil,
			expressionFactory_factory.NewKeywordExpression(shimast.KindFalseKeyword),
			nil,
			expressionFactory_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
			ExpressionFactory.IsArray(props.Input),
		))
	}
	if len(conditions) == 1 {
		return conditions[0]
	}
	output := conditions[0]
	for _, condition := range conditions[1:] {
		output = expressionFactory_factory.NewBinaryExpression(
			nil,
			output,
			nil,
			expressionFactory_factory.NewToken(shimast.KindAmpersandAmpersandToken),
			condition,
		)
	}
	return output
}

func (expressionFactoryNamespace) IsInstanceOf(t string, input *shimast.Expression) *shimast.Node {
	return expressionFactory_factory.NewBinaryExpression(
		nil,
		input,
		nil,
		expressionFactory_factory.NewToken(shimast.KindInstanceOfKeyword),
		expressionFactory_factory.NewIdentifier(t),
	)
}

func (expressionFactoryNamespace) Coalesce(x *shimast.Expression, y *shimast.Expression) *shimast.Node {
	return expressionFactory_factory.NewBinaryExpression(
		nil,
		x,
		nil,
		expressionFactory_factory.NewToken(shimast.KindQuestionQuestionToken),
		y,
	)
}

func (expressionFactoryNamespace) Currying(props ExpressionFactory_CurryingProps) *shimast.Node {
	if len(props.Arguments) == 0 {
		return expressionFactory_factory.NewCallExpression(props.Function, nil, nil, nil, shimast.NodeFlagsNone)
	}
	prev := expressionFactory_factory.NewCallExpression(
		props.Function,
		nil,
		nil,
		expressionFactory_factory.NewNodeList([]*shimast.Node{props.Arguments[0]}),
		shimast.NodeFlagsNone,
	)
	for _, param := range props.Arguments[1:] {
		prev = expressionFactory_factory.NewCallExpression(
			prev,
			nil,
			nil,
			expressionFactory_factory.NewNodeList([]*shimast.Node{param}),
			shimast.NodeFlagsNone,
		)
	}
	return prev
}

func (expressionFactoryNamespace) SelfCall(body *shimast.ConciseBody, typeNode ...*shimast.TypeNode) *shimast.Node {
	if body != nil && body.Kind == shimast.KindCallExpression {
		return body
	}
	var output *shimast.TypeNode
	if len(typeNode) != 0 {
		output = typeNode[0]
	}
	arrow := expressionFactory_factory.NewArrowFunction(
		nil,
		nil,
		expressionFactory_factory.NewNodeList(nil),
		output,
		nil,
		expressionFactory_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		body,
	)
	return expressionFactory_factory.NewCallExpression(
		expressionFactory_factory.NewParenthesizedExpression(arrow),
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

func (expressionFactoryNamespace) Transpile(props ExpressionFactory_TranspileProps) func(input *shimast.Expression) *shimast.Node {
	file := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.Join(os.TempDir(), expressionFactory_random_format_uuid()+".ts")},
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
	expression := expressionFactory_factory.DeepCloneNode(statement.AsExpressionStatement().Expression)
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
		}, expressionFactory_factory, shimast.NodeVisitorHooks{})
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
