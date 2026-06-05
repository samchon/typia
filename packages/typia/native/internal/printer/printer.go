package printer

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
)

const kindColonToken = shimast.KindQuestionToken + 1

// NormalizeSyntheticTokens fills in the operator tokens (e.g. a conditional
// expression's `?` and `:`) that typia's programmers leave nil when building
// nodes. The AST-integration emit path must run it, since tsgo's printer
// dereferences those tokens.
func NormalizeSyntheticTokens(node *shimast.Node) {
  normalizeSyntheticTokens(node)
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
      conditional.ColonToken = factory.NewToken(kindColonToken)
    }
  }
  node.ForEachChild(func(child *shimast.Node) bool {
    normalizeSyntheticTokens(child)
    return false
  })
}
