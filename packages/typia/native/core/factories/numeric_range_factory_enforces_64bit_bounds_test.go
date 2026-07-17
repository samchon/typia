package factories

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestNumericRangeFactoryEnforces64BitBounds verifies 64-bit range predicates check something.
//
// ProtobufFactory routes only "int64" and "uint64" into the bigint path, so its
// fall-through was the int64 case and returned a bare `true` keyword: a union
// candidate typed `bigint & Type<"int64">` matched every magnitude. The number
// path had the mirror defect -- an inclusive maximum whose literal is not a
// representable double -- so it must now compare exclusively against the power
// of two, while the exactly-representable 32-bit bounds stay inclusive.
//
// 1. Require neither bigint type to emit a bare `true` keyword.
// 2. Require the 64-bit number predicates to use an exclusive upper bound.
// 3. Require the 32-bit number predicates to keep their inclusive bound.
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

  for _, name := range []string{"int64", "uint64"} {
    if numericRangeFactoryCountTokens(NumericRangeFactory.Number(name, input), shimast.KindLessThanToken) != 1 {
      t.Fatalf("number range %s must bound its unrepresentable maximum exclusively", name)
    }
  }
  for _, name := range []string{"int32", "uint32"} {
    if numericRangeFactoryCountTokens(NumericRangeFactory.Number(name, input), shimast.KindLessThanToken) != 0 {
      t.Fatalf("number range %s has an exactly representable maximum and must stay inclusive", name)
    }
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
