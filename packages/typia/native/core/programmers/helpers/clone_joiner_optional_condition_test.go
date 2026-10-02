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
// `optional?: T | undefined` must also preserve a present `undefined`
// property.
//
//  1. Build a strict optional clone entry and assert it uses only value presence.
//  2. Build an explicit undefined-union optional entry and assert it also checks
//     property presence with the `in` operator.
//
// @evidence contracts/testing.md#behavioral-verification The clone joiner builds entries for optional?: T and optional?: T | undefined; the strict entry must test only value presence and the explicit-union entry must add an in-operator presence test on the literal key of the original input.
// @evidence contracts/testing.md#independent-expectations Exact optional property semantics decide which guard each form needs; the expected condition shapes are authored in the test and inspected on the AST.
// @evidence contracts/testing.md#distinguishing-cases Strict optional is the baseline and explicit undefined union the one-axis variant; required properties are not asserted here.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It builds AST nodes in memory and inspects them, with no checker, filesystem fixture or process.
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
  strictValue := strict.AsBinaryExpression()
  if strictValue.Right != property || strictValue.Left.Kind != shimast.KindIdentifier || strictValue.Left.Text() != "undefined" {
    t.Fatal("strict optional condition must compare the requested value with undefined")
  }

  explicit := cloneJoiner_optional_condition(IExpressionEntry{
    Input: property,
    Key:   key,
  }, input)
  outer := explicit.AsBinaryExpression()
  if outer.OperatorToken.Kind != shimast.KindBarBarToken {
    t.Fatal("explicit undefined union should add a property-presence branch")
  }
  valuePresence := outer.Left.AsBinaryExpression()
  if valuePresence.OperatorToken.Kind != shimast.KindExclamationEqualsEqualsToken || valuePresence.Right != property || valuePresence.Left.Kind != shimast.KindIdentifier || valuePresence.Left.Text() != "undefined" {
    t.Fatal("explicit undefined union must retain the requested value-presence comparison")
  }
  if outer.Right.AsBinaryExpression().OperatorToken.Kind != shimast.KindInKeyword {
    t.Fatal("explicit undefined union should use the in operator")
  }
  presence := outer.Right.AsBinaryExpression()
  if presence.Left.Kind != shimast.KindStringLiteral ||
    shimast.NodeText(presence.Left) != "optionalUndefined" {
    t.Fatal("explicit undefined union should test the literal property key")
  }
  if presence.Right != input {
    t.Fatal("explicit undefined union should test presence on the original input")
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
