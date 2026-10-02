package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  "testing"
)

// TestCheckNumberOptionContractMatrix verifies numeric/finite admission ASTs.
//
// The untagged number contract always guards typeof, numeric rejects NaN and
// finite rejects NaN and both infinities. The Numeric producer switch can
// deliberately suppress both additions without suppressing the number guard.
//
// @evidence contracts/testing.md#behavioral-verification Builds actual Check_number results for five numeric/finite option rows and both producer-switch values, inspecting guards, operators, callee names and input identity.
// @evidence contracts/testing.md#independent-expectations The authored rows require no extra predicate, !Number.isNaN or Number.isFinite according to number admission semantics. No generated snapshot supplies expectations.
// @evidence contracts/testing.md#distinguishing-cases Finite-only must reject infinities even with numeric off; both flags use finite rather than only NaN rejection. Numeric producer false suppresses additions in every row while retaining rejection of ill-typed values through typeof.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes this same-package unit using in-memory AST nodes, with no compiler or JavaScript subprocess. Runtime NaN and infinity input verdicts remain owned by the four actual TS producer profiles.
func TestCheckNumberOptionContractMatrix(t *testing.T) {
  yes, no := true, false
  rows := []struct {
    name            string
    numeric, finite *bool
    addition        string
  }{
    {"default", nil, nil, ""}, {"explicit-off", &no, &no, ""},
    {"numeric-only", &yes, &no, "Number.isNaN"},
    {"finite-only", &no, &yes, "Number.isFinite"},
    {"numeric-and-finite", &yes, &yes, "Number.isFinite"},
  }
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("candidate")
  for _, row := range rows {
    for _, enabled := range []bool{false, true} {
      name := row.name + "/producer-off"
      if enabled {
        name = row.name + "/producer-on"
      }
      t.Run(name, func(t *testing.T) {
        entry := Check_number(Check_numberProps{Numeric: enabled, Context: nativecontext.ITypiaContext{Options: nativecontext.ITransformOptions{Numeric: row.numeric, Finite: row.finite}}, Atomic: metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "number"}), Input: input})
        if entry.Expected != "number" || len(entry.Conditions) != 0 {
          t.Fatalf("untagged number contract changed: %#v", entry)
        }
        expression := entry.Expression
        expected := row.addition
        if !enabled {
          expected = ""
        }
        var addition *shimast.Node
        if expected != "" {
          if expression.Kind != shimast.KindBinaryExpression || expression.AsBinaryExpression().OperatorToken.Kind != shimast.KindAmpersandAmpersandToken {
            t.Fatal("number guard must precede additional admission through &&")
          }
          addition = expression.AsBinaryExpression().Right
          expression = expression.AsBinaryExpression().Left
        }
        if expression.Kind != shimast.KindBinaryExpression {
          t.Fatal("missing number typeof equality")
        }
        guard := expression.AsBinaryExpression()
        if guard.OperatorToken.Kind != shimast.KindEqualsEqualsEqualsToken || guard.Left.Kind != shimast.KindStringLiteral || shimast.NodeText(guard.Left) != "number" || guard.Right.Kind != shimast.KindTypeOfExpression || guard.Right.AsTypeOfExpression().Expression != input {
          t.Fatal("guard must compare literal number with typeof the original input")
        }
        if expected == "" {
          return
        }
        if expected == "Number.isNaN" {
          if addition.Kind != shimast.KindPrefixUnaryExpression || addition.AsPrefixUnaryExpression().Operator != shimast.KindExclamationToken {
            t.Fatal("numeric must negate isNaN")
          }
          addition = addition.AsPrefixUnaryExpression().Operand
        }
        if addition.Kind != shimast.KindCallExpression {
          t.Fatal("missing numeric admission call")
        }
        call := addition.AsCallExpression()
        if shimast.NodeText(call.Expression) != expected || call.Arguments == nil || len(call.Arguments.Nodes) != 1 || call.Arguments.Nodes[0] != input {
          t.Fatalf("admission must call %s on the original input", expected)
        }
      })
    }
  }
}
