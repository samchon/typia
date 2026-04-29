package printer

import (
	innerast "github.com/microsoft/typescript-go/internal/ast"
	innercore "github.com/microsoft/typescript-go/internal/core"
	innerprinter "github.com/microsoft/typescript-go/internal/printer"
)

type Printer = innerprinter.Printer
type PrinterOptions = innerprinter.PrinterOptions
type PrintHandlers = innerprinter.PrintHandlers
type EmitContext = innerprinter.EmitContext

func NewPrinter(options PrinterOptions, handlers PrintHandlers, emitContext *EmitContext) *Printer {
	return innerprinter.NewPrinter(options, handlers, emitContext)
}

func NewEmitContext() *EmitContext {
	return innerprinter.NewEmitContext()
}

func Emit(node *innerast.Node, sourceFile *innerast.SourceFile) string {
	node = stripTypeSyntax(node)
	normalizeSyntheticTokens(node)
	return NewPrinter(PrinterOptions{
		RemoveComments: true,
		NewLine:        innercore.NewLineKindLF,
	}, PrintHandlers{}, nil).Emit(node, sourceFile)
}

func EmitWithIdentifierSubstitutions(node *innerast.Node, sourceFile *innerast.SourceFile, substitutions map[string]string) string {
	node = stripTypeSyntax(node)
	node = rewriteIdentifiers(node, substitutions)
	normalizeSyntheticTokens(node)
	return NewPrinter(PrinterOptions{
		RemoveComments: true,
		NewLine:        innercore.NewLineKindLF,
	}, PrintHandlers{}, nil).Emit(node, sourceFile)
}

func EmitPreservingTypesWithIdentifierSubstitutions(node *innerast.Node, sourceFile *innerast.SourceFile, substitutions map[string]string) string {
	node = rewriteIdentifiers(node, substitutions)
	normalizeSyntheticTokens(node)
	return NewPrinter(PrinterOptions{
		RemoveComments: true,
		NewLine:        innercore.NewLineKindLF,
	}, PrintHandlers{}, nil).Emit(node, sourceFile)
}

func stripTypeSyntax(node *innerast.Node) *innerast.Node {
	if node == nil {
		return nil
	}
	factory := innerast.NewNodeFactory(innerast.NodeFactoryHooks{})
	var visitor *innerast.NodeVisitor
	visitor = innerast.NewNodeVisitor(func(current *innerast.Node) *innerast.Node {
		if current == nil {
			return nil
		}
		switch current.Kind {
		case innerast.KindAsExpression, innerast.KindSatisfiesExpression, innerast.KindTypeAssertionExpression, innerast.KindNonNullExpression:
			return visitor.VisitNode(current.Expression())
		case innerast.KindVariableDeclaration:
			decl := current.AsVariableDeclaration()
			return factory.UpdateVariableDeclaration(
				decl,
				visitor.VisitNode(decl.Name()),
				nil,
				nil,
				visitor.VisitNode(decl.Initializer),
			)
		case innerast.KindParameter:
			parameter := current.AsParameterDeclaration()
			return factory.UpdateParameterDeclaration(
				parameter,
				visitor.VisitModifiers(parameter.Modifiers()),
				visitor.VisitNode(parameter.DotDotDotToken),
				visitor.VisitNode(parameter.Name()),
				nil,
				nil,
				visitor.VisitNode(parameter.Initializer),
			)
		case innerast.KindArrowFunction:
			arrow := current.AsArrowFunction()
			return factory.UpdateArrowFunction(
				arrow,
				visitor.VisitModifiers(arrow.Modifiers()),
				nil,
				visitor.VisitNodes(arrow.Parameters),
				nil,
				nil,
				visitor.VisitNode(arrow.EqualsGreaterThanToken),
				visitor.VisitNode(arrow.Body),
			)
		case innerast.KindCallExpression:
			call := current.AsCallExpression()
			return factory.UpdateCallExpression(
				call,
				visitor.VisitNode(call.Expression),
				visitor.VisitNode(call.QuestionDotToken),
				nil,
				visitor.VisitNodes(call.Arguments),
				call.Flags,
			)
		case innerast.KindNewExpression:
			expr := current.AsNewExpression()
			return factory.UpdateNewExpression(
				expr,
				visitor.VisitNode(expr.Expression),
				nil,
				visitor.VisitNodes(expr.Arguments),
			)
		default:
			return visitor.VisitEachChild(current)
		}
	}, factory, innerast.NodeVisitorHooks{})
	return visitor.VisitNode(node)
}

func rewriteIdentifiers(node *innerast.Node, substitutions map[string]string) *innerast.Node {
	if node == nil || len(substitutions) == 0 {
		return node
	}
	factory := innerast.NewNodeFactory(innerast.NodeFactoryHooks{})
	var visitor *innerast.NodeVisitor
	visitor = innerast.NewNodeVisitor(func(current *innerast.Node) *innerast.Node {
		if current == nil {
			return nil
		}
		switch current.Kind {
		case innerast.KindIdentifier:
			if replacement, ok := substitutions[current.Text()]; ok {
				return rewriteIdentifierExpression(factory, replacement)
			}
			return current
		case innerast.KindVariableDeclaration:
			decl := current.AsVariableDeclaration()
			return factory.UpdateVariableDeclaration(
				decl,
				decl.Name(),
				nil,
				nil,
				visitor.VisitNode(decl.Initializer),
			)
		case innerast.KindParameter:
			parameter := current.AsParameterDeclaration()
			return factory.UpdateParameterDeclaration(
				parameter,
				parameter.Modifiers(),
				parameter.DotDotDotToken,
				parameter.Name(),
				nil,
				nil,
				visitor.VisitNode(parameter.Initializer),
			)
		case innerast.KindPropertyAssignment:
			assignment := current.AsPropertyAssignment()
			return factory.UpdatePropertyAssignment(
				assignment,
				assignment.Modifiers(),
				assignment.Name(),
				assignment.PostfixToken,
				nil,
				visitor.VisitNode(assignment.Initializer),
			)
		case innerast.KindShorthandPropertyAssignment:
			assignment := current.AsShorthandPropertyAssignment()
			name := assignment.Name()
			if name != nil && name.Kind == innerast.KindIdentifier {
				if replacement, ok := substitutions[name.Text()]; ok && assignment.ObjectAssignmentInitializer == nil {
					return factory.NewPropertyAssignment(
						assignment.Modifiers(),
						name,
						assignment.PostfixToken,
						nil,
						rewriteIdentifierExpression(factory, replacement),
					)
				}
			}
			return factory.UpdateShorthandPropertyAssignment(
				assignment,
				assignment.Modifiers(),
				name,
				assignment.PostfixToken,
				nil,
				nil,
				visitor.VisitNode(assignment.ObjectAssignmentInitializer),
			)
		case innerast.KindPropertyAccessExpression:
			access := current.AsPropertyAccessExpression()
			return factory.UpdatePropertyAccessExpression(
				access,
				visitor.VisitNode(access.Expression),
				access.QuestionDotToken,
				access.Name(),
				access.Flags,
			)
		default:
			return visitor.VisitEachChild(current)
		}
	}, factory, innerast.NodeVisitorHooks{})
	return visitor.VisitNode(node)
}

func rewriteIdentifierExpression(factory *innerast.NodeFactory, replacement string) *innerast.Node {
	parts := []string{}
	start := 0
	for i := 0; i <= len(replacement); i++ {
		if i == len(replacement) || replacement[i] == '.' {
			if start < i {
				parts = append(parts, replacement[start:i])
			}
			start = i + 1
		}
	}
	if len(parts) == 0 {
		return factory.NewIdentifier(replacement)
	}
	output := factory.NewIdentifier(parts[0])
	for _, part := range parts[1:] {
		output = factory.NewPropertyAccessExpression(
			output,
			nil,
			factory.NewIdentifier(part),
			innerast.NodeFlagsNone,
		)
	}
	return output
}

func normalizeSyntheticTokens(node *innerast.Node) {
	if node == nil {
		return
	}
	if node.Kind == innerast.KindConditionalExpression {
		conditional := node.AsConditionalExpression()
		factory := innerast.NewNodeFactory(innerast.NodeFactoryHooks{})
		if conditional.QuestionToken == nil {
			conditional.QuestionToken = factory.NewToken(innerast.KindQuestionToken)
		}
		if conditional.ColonToken == nil {
			conditional.ColonToken = factory.NewToken(innerast.KindColonToken)
		}
	}
	node.ForEachChild(func(child *innerast.Node) bool {
		normalizeSyntheticTokens(child)
		return false
	})
}
