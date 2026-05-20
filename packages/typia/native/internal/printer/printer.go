package printer

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

func EmitWithIdentifierSubstitutions(node *shimast.Node, sourceFile *shimast.SourceFile, substitutions map[string]string) string {
  node = stripTypeSyntax(node)
  node = rewriteIdentifiers(node, substitutions)
  normalizeSyntheticTokens(node)
  return emit(node, sourceFile)
}

func EmitPreservingTypesWithIdentifierSubstitutions(node *shimast.Node, sourceFile *shimast.SourceFile, substitutions map[string]string) string {
  node = rewriteIdentifiers(node, substitutions)
  normalizeSyntheticTokens(node)
  return emit(node, sourceFile)
}

func emit(node *shimast.Node, sourceFile *shimast.SourceFile) string {
  return shimprinter.NewPrinter(shimprinter.PrinterOptions{
    RemoveComments: true,
    NewLine:        2,
  }, shimprinter.PrintHandlers{}, nil).Emit(node, sourceFile)
}

func stripTypeSyntax(node *shimast.Node) *shimast.Node {
  if node == nil {
    return nil
  }
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  var visitor *shimast.NodeVisitor
  visitor = shimast.NewNodeVisitor(func(current *shimast.Node) *shimast.Node {
    if current == nil {
      return nil
    }
    switch current.Kind {
    case shimast.KindAsExpression, shimast.KindSatisfiesExpression, shimast.KindTypeAssertionExpression, shimast.KindNonNullExpression:
      return visitor.VisitNode(current.Expression())
    case shimast.KindVariableDeclaration:
      decl := current.AsVariableDeclaration()
      return factory.UpdateVariableDeclaration(
        decl,
        visitor.VisitNode(decl.Name()),
        nil,
        nil,
        visitor.VisitNode(decl.Initializer),
      )
    case shimast.KindParameter:
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
    case shimast.KindArrowFunction:
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
    case shimast.KindCallExpression:
      call := current.AsCallExpression()
      return factory.UpdateCallExpression(
        call,
        visitor.VisitNode(call.Expression),
        visitor.VisitNode(call.QuestionDotToken),
        nil,
        visitor.VisitNodes(call.Arguments),
        call.Flags,
      )
    case shimast.KindNewExpression:
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
  }, factory, shimast.NodeVisitorHooks{})
  return visitor.VisitNode(node)
}

func rewriteIdentifiers(node *shimast.Node, substitutions map[string]string) *shimast.Node {
  if node == nil || len(substitutions) == 0 {
    return node
  }
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  var visitor *shimast.NodeVisitor
  visitor = shimast.NewNodeVisitor(func(current *shimast.Node) *shimast.Node {
    if current == nil {
      return nil
    }
    switch current.Kind {
    case shimast.KindIdentifier:
      if replacement, ok := substitutions[current.Text()]; ok {
        return rewriteIdentifierExpression(factory, replacement)
      }
      return current
    case shimast.KindVariableDeclaration:
      decl := current.AsVariableDeclaration()
      return factory.UpdateVariableDeclaration(
        decl,
        decl.Name(),
        nil,
        nil,
        visitor.VisitNode(decl.Initializer),
      )
    case shimast.KindParameter:
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
    case shimast.KindPropertyAssignment:
      assignment := current.AsPropertyAssignment()
      return factory.UpdatePropertyAssignment(
        assignment,
        assignment.Modifiers(),
        assignment.Name(),
        assignment.PostfixToken,
        nil,
        visitor.VisitNode(assignment.Initializer),
      )
    case shimast.KindShorthandPropertyAssignment:
      assignment := current.AsShorthandPropertyAssignment()
      name := assignment.Name()
      if name != nil && name.Kind == shimast.KindIdentifier {
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
    case shimast.KindPropertyAccessExpression:
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
  }, factory, shimast.NodeVisitorHooks{})
  return visitor.VisitNode(node)
}

func rewriteIdentifierExpression(factory *shimast.NodeFactory, replacement string) *shimast.Node {
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
      shimast.NodeFlagsNone,
    )
  }
  return output
}

func normalizeSyntheticTokens(node *shimast.Node) {
  if node == nil {
    return
  }
  if node.Kind == shimast.KindConditionalExpression {
    conditional := node.AsConditionalExpression()
    factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
    if conditional.QuestionToken == nil {
      conditional.QuestionToken = factory.NewToken(shimast.KindQuestionToken)
    }
    if conditional.ColonToken == nil {
      conditional.ColonToken = factory.NewToken(shimast.KindColonToken)
    }
  }
  node.ForEachChild(func(child *shimast.Node) bool {
    normalizeSyntheticTokens(child)
    return false
  })
}
