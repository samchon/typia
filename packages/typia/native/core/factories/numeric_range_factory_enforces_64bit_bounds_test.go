package factories

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestNumericRangeFactoryEnforces64BitBounds verifies 64-bit range predicates check something.
//
// ProtobufFactory routes only "int64" and "uint64" into the bigint path, so its
// fall-through was the int64 case and returned a bare `true` keyword: a union
// candidate typed `bigint & Type<"int64">` matched every magnitude. The bigint
// path must therefore emit a real comparison, while every number predicate
// bounds inclusively at its maximum (`2 ** 63 - 1`, `2 ** 64 - 1`, and the
// exactly-representable 32-bit bounds).
//
// 1. Require number and bigint comparisons to use their exact signed/unsigned limits.
// 2. Require both bounds to be inclusive, with unknown types unrestricted.
//
// @evidence contracts/testing.md#behavioral-verification Generated number and bigint comparison trees contain exactly two inclusive bound checks with the authored lower and upper values and input operand; bigint limits are constructed from exact decimal strings. Unknown types retain the unrestricted true result.
// @evidence contracts/testing.md#independent-expectations Signed N-bit integers range from minus 2^(N-1) to 2^(N-1)-1 and unsigned integers from zero to 2^N-1. Decimal expectations are written independently of the factory; checking both values and operand positions rejects shifted or swapped limits.
// @evidence contracts/testing.md#distinguishing-cases Number int32/uint32/int64/uint64, bigint int64/uint64 and unknown controls distinguish signedness, width, exact string construction and unrestricted fallback.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It builds AST nodes in memory with no checker, filesystem fixture or process.
func TestNumericRangeFactoryEnforces64BitBounds(t *testing.T) {
  input := numericRangeFactory_factory.NewIdentifier("input")

  for _, name := range []string{"int64", "uint64"} {
    node := NumericRangeFactory.Bigint(name, input)
    if node == nil {
      t.Fatalf("bigint range %s returned nil", name)
    }
    if node.Kind == shimast.KindTrueKeyword {
      t.Fatalf("bigint range %s emits a bare true keyword, so it checks nothing", name)
    }
  }

  for _, name := range []string{"int32", "uint32", "int64", "uint64"} {
    if numericRangeFactoryCountTokens(NumericRangeFactory.Number(name, input), shimast.KindLessThanToken) != 0 {
      t.Fatalf("number range %s must bound its maximum inclusively", name)
    }
    if numericRangeFactoryCountTokens(NumericRangeFactory.Number(name, input), shimast.KindLessThanEqualsToken) != 2 {
      t.Fatalf("number range %s must compare both bounds inclusively", name)
    }
  }

  for _, tc := range []struct{ name, lower, upper string }{
    {"int32", "-2147483648", "2147483647"},
    {"uint32", "0", "4294967295"},
    {"int64", "-9223372036854775808", "9223372036854775807"},
    {"uint64", "0", "18446744073709551615"},
  } {
    numericRangeFactoryAssertBounds(t, NumericRangeFactory.Number(tc.name, input), tc.lower, tc.upper, false)
    if tc.name == "int64" || tc.name == "uint64" {
      numericRangeFactoryAssertBounds(t, NumericRangeFactory.Bigint(tc.name, input), tc.lower, tc.upper, true)
    }
  }
  if NumericRangeFactory.Number("unknown", input).Kind != shimast.KindTrueKeyword || NumericRangeFactory.Bigint("unknown", input).Kind != shimast.KindTrueKeyword {
    t.Fatal("unknown numeric types must remain unrestricted")
  }
}

func numericRangeFactoryAssertBounds(t *testing.T, node *shimast.Node, lower, upper string, bigint bool) {
  t.Helper()
  bounds := []*shimast.BinaryExpression{}
  var walk func(*shimast.Node) bool
  walk = func(n *shimast.Node) bool {
    if n.Kind == shimast.KindBinaryExpression {
      b := n.AsBinaryExpression()
      if b.OperatorToken.Kind == shimast.KindLessThanEqualsToken {
        bounds = append(bounds, b)
      }
    }
    n.ForEachChild(walk)
    return false
  }
  walk(node)
  if len(bounds) != 2 {
    t.Fatalf("range must have two inclusive bounds, got %d", len(bounds))
  }
  decimal := func(n *shimast.Node) string {
    if bigint {
      if n.Kind != shimast.KindCallExpression {
        t.Fatalf("bigint bound must be a decimal-string constructor, got %v", n.Kind)
      }
      call := n.AsCallExpression()
      if call.Expression.Text() != "BigInt" || call.Arguments == nil || len(call.Arguments.Nodes) != 1 || call.Arguments.Nodes[0].Kind != shimast.KindStringLiteral {
        t.Fatal("bigint bound lost its exact string constructor")
      }
      return call.Arguments.Nodes[0].Text()
    }
    return n.Text()
  }
  if decimal(bounds[0].Left) != lower || bounds[0].Right.Text() != "input" || bounds[1].Left.Text() != "input" || decimal(bounds[1].Right) != upper {
    t.Fatalf("wrong bound values or operand positions: expected %s <= input <= %s", lower, upper)
  }
}

// numericRangeFactoryCountTokens counts binary operators of one kind in a predicate tree.
func numericRangeFactoryCountTokens(node *shimast.Node, kind shimast.Kind) int {
  if node == nil {
    return 0
  }
  count := 0
  var walk func(*shimast.Node)
  walk = func(current *shimast.Node) {
    if current == nil {
      return
    }
    if current.Kind != shimast.KindBinaryExpression {
      return
    }
    binary := current.AsBinaryExpression()
    if binary == nil {
      return
    }
    if binary.OperatorToken != nil && binary.OperatorToken.Kind == kind {
      count++
    }
    walk(binary.Left)
    walk(binary.Right)
  }
  walk(node)
  return count
}
