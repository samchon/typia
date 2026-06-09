package helpers

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestCloneJoinerOptionalConditionDistinguishesExplicitUndefined verifies optional clone guards.
//
// Exact optional properties use two runtime branches: `optional?: T` must only
// emit the property when the decoded value is not undefined, while
// `optional?: T | undefined` must also preserve a present own `undefined`
// property.
//
//  1. Build a strict optional clone entry and assert it uses only value presence.
//  2. Build an explicit undefined-union optional entry and assert it also checks
//     property presence with the `in` operator.
func TestCloneJoinerOptionalConditionDistinguishesExplicitUndefined(t *testing.T) {
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("input")
  key := cloneJoinerTestLiteralKey("optionalUndefined")
  property := factory.NewPropertyAccessExpression(
    input,
    nil,
    factory.NewIdentifier("optionalUndefined"),
    shimast.NodeFlagsNone,
  )

  strict := cloneJoiner_optional_condition(IExpressionEntry{
    Input:                   property,
    Key:                     key,
    StrictOptionalUndefined: true,
  }, input)
  if strict.AsBinaryExpression().OperatorToken.Kind != shimast.KindExclamationEqualsEqualsToken {
    t.Fatal("strict optional condition should only test value presence")
  }

  explicit := cloneJoiner_optional_condition(IExpressionEntry{
    Input: property,
    Key:   key,
  }, input)
  outer := explicit.AsBinaryExpression()
  if outer.OperatorToken.Kind != shimast.KindBarBarToken {
    t.Fatal("explicit undefined union should add a property-presence branch")
  }
  if outer.Right.AsBinaryExpression().OperatorToken.Kind != shimast.KindInKeyword {
    t.Fatal("explicit undefined union should use the in operator")
  }
}

func cloneJoinerTestLiteralKey(value string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: value}),
    },
  }))
  return meta
}
