package factories

import (
  "math"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestExpressionFactoryNumberSpellsNonFiniteValues verifies number literals for
// NaN and the infinities.
//
// ExpressionFactory.Number built the literal text with `fmt.Sprint`, which
// spells positive infinity `+Inf` and prints the magnitude of negative infinity
// as `Inf`. Both reached the emit as identifiers JavaScript does not declare, so
// every emitted schema, validator, or random bound carrying one threw
// `ReferenceError: Inf is not defined` on its first run (samchon/typia#2452).
// The expected shapes are the JavaScript globals TypeScript's own factory
// prints. Finite values are the negative twin and must keep their literal.
//
//  1. Build numbers for NaN, positive and negative infinity.
//  2. Assert they are the `NaN` / `Infinity` identifiers, negated for -Infinity.
//  3. Assert finite values, negative ones, and zero keep numeric literals, with
//     negative zero negated like any negative value rather than spelled `-0`
//     inside one literal.
//
// @evidence contracts/testing.md#behavioral-verification ExpressionFactory.Number is called with NaN, both infinities, finite values, negatives and negative zero, and the produced AST node kinds and texts are compared; the pre-fix +Inf and Inf spellings would fail the identifier checks.
// @evidence contracts/testing.md#independent-expectations The expected shapes are the JavaScript globals NaN and Infinity (negated for minus infinity) as TypeScript's own factory prints them, authored in the test rather than read from the factory.
// @evidence contracts/testing.md#distinguishing-cases Finite values and zero are the negative twins that must keep numeric literals, negative values must be negated and negative zero is checked separately from positive zero.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It builds AST nodes in memory and reads their kinds, with no checker, filesystem fixture or process.
func TestExpressionFactoryNumberSpellsNonFiniteValues(t *testing.T) {
  identifier := func(node *shimast.Node, name string) bool {
    return node != nil && node.Kind == shimast.KindIdentifier && node.Text() == name
  }

  if node := ExpressionFactory.Number(math.NaN()); identifier(node, "NaN") == false {
    t.Fatalf("NaN should be the NaN identifier, got kind %v", node.Kind)
  }
  if node := ExpressionFactory.Number(math.Inf(1)); identifier(node, "Infinity") == false {
    t.Fatalf("+Inf should be the Infinity identifier, got kind %v", node.Kind)
  }
  negative := ExpressionFactory.Number(math.Inf(-1))
  if negative.Kind != shimast.KindPrefixUnaryExpression {
    t.Fatalf("-Inf should be a negation, got kind %v", negative.Kind)
  }
  unary := negative.AsPrefixUnaryExpression()
  if unary.Operator != shimast.KindMinusToken || identifier(unary.Operand, "Infinity") == false {
    t.Fatal("-Inf should negate the Infinity identifier")
  }

  for _, item := range []struct {
    value    any
    negative bool
    text     string
  }{
    {3, false, "3"},
    {1.5, false, "1.5"},
    {int64(0), false, "0"},
    {-12, true, "12"},
    {-2.5, true, "2.5"},
    {math.Copysign(0, -1), true, "0"},
  } {
    node := ExpressionFactory.Number(item.value)
    if item.negative {
      if node.Kind != shimast.KindPrefixUnaryExpression {
        t.Fatalf("%v should be a negation, got kind %v", item.value, node.Kind)
      }
      node = node.AsPrefixUnaryExpression().Operand
    }
    if node.Kind != shimast.KindNumericLiteral || node.Text() != item.text {
      t.Fatalf("%v should be the numeric literal %q, got kind %v", item.value, item.text, node.Kind)
    }
  }
}
