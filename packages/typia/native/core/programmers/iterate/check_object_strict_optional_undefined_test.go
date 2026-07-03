package iterate

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestCheckObjectStrictOptionalUndefinedAllowsMissingKey verifies strict optional guards.
//
// Exact optional properties must reject a present own `undefined` value without
// rejecting a missing optional key. The object checker therefore wraps strict
// optional property expressions with a key-presence short circuit.
//
// 1. Build a strict optional regular entry.
// 2. Assert its object-check expression first tests property absence.
// 3. Assert the original strict property expression stays on the right branch.
func TestCheckObjectStrictOptionalUndefinedAllowsMissingKey(t *testing.T) {
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("input")
  expression := factory.NewIdentifier("strict")
  entry := nativehelpers.IExpressionEntry{
    Input:                   factory.NewPropertyAccessExpression(input, nil, factory.NewIdentifier("optional"), shimast.NodeFlagsNone),
    Key:                     checkObjectLiteralKey("optional"),
    Meta:                    nativemetadata.MetadataSchema_initialize(),
    Expression:              expression,
    StrictOptionalUndefined: true,
  }

  wrapped := check_object_regular_expression(Check_objectProps{
    Config:  Check_object_IConfig{Positive: factory.NewKeywordExpression(shimast.KindTrueKeyword)},
    Context: nativecontext.ITypiaContext{},
    Input:   input,
  }, entry)
  outer := wrapped.AsBinaryExpression()
  if outer.OperatorToken.Kind != shimast.KindBarBarToken {
    t.Fatal("strict optional expression should short-circuit with ||")
  }
  if outer.Left.Kind != shimast.KindPrefixUnaryExpression {
    t.Fatal("left branch should negate property presence")
  }
  prefix := outer.Left.AsPrefixUnaryExpression()
  if prefix.Operator != shimast.KindExclamationToken {
    t.Fatal("left branch should use a ! prefix")
  }
  presence := prefix.Operand.AsBinaryExpression()
  if presence.OperatorToken.Kind != shimast.KindInKeyword {
    t.Fatal("left branch should use the in operator")
  }
  if presence.Left.Kind != shimast.KindStringLiteral ||
    shimast.NodeText(presence.Left) != "optional" {
    t.Fatal("left branch should test the literal property key")
  }
  if presence.Right != input {
    t.Fatal("left branch should test presence on the original input")
  }
  if outer.Right != expression {
    t.Fatal("right branch should be the original strict decoder expression")
  }
}

func checkObjectLiteralKey(value string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: value}),
    },
  }))
  return meta
}
