package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Check_bigintProps is the argument record of Check_bigint, which builds the
// check entry of a bigint atomic.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Check_bigint, which builds the check entry of a bigint atomic; its 3 fields (Context, Atomic, Input) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Check_bigintProps struct {
  Context nativecontext.ITypiaContext
  Atomic  *nativemetadata.MetadataAtomic
  Input   *shimast.Expression
}

// Check_bigint builds the check entry of a bigint atomic: a `typeof input ===
// "bigint"` guard plus the atomic's type-tag conditions.
//
// @evidence contracts/common.md#principled-implementation It builds the check entry of a bigint atomic: a `typeof input === "bigint"` guard plus the atomic's type-tag conditions.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Check_bigint(props Check_bigintProps) nativehelpers.ICheckEntry {
  f := nativecontext.EmitFactoryOf(check_bigint_factory, props.Context.Emit)
  conditions := check_bigint_type_tags(props)
  return nativehelpers.ICheckEntry{
    Expected: props.Atomic.GetName(),
    Expression: f.NewBinaryExpression(
      nil,
      f.NewStringLiteral("bigint", shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewTypeOfExpression(props.Input),
    ),
    Conditions: conditions,
  }
}

func check_bigint_type_tags(props Check_bigintProps) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range props.Atomic.Tags {
    tags := check_bigint_filter_validate(row)
    conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
    for _, tag := range tags {
      conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
        Expected:   "bigint & " + tag.Name,
        Expression: check_bigint_transpile(props.Context, tag.Validate)(props.Input),
      })
    }
    for _, tag := range row {
      if condition := check_exclude_condition("bigint", tag, props.Input, props.Context.Emit); condition != nil {
        conditions = append(conditions, *condition)
      }
    }
    if len(conditions) == 0 {
      continue
    }
    output = append(output, conditions)
  }
  return output
}

func check_bigint_filter_validate(row []nativemetadata.IMetadataTypeTag) []nativemetadata.IMetadataTypeTag {
  tags := []nativemetadata.IMetadataTypeTag{}
  for _, tag := range row {
    if tag.Validate != "" {
      tags = append(tags, tag)
    }
  }
  return tags
}

func check_bigint_transpile(context nativecontext.ITypiaContext, script string) func(input *shimast.Expression) *shimast.Node {
  var importer nativefactories.ExpressionFactory_Importer
  if v := context.Importer; v != nil {
    importer = v
  }
  return nativefactories.ExpressionFactory.Transpile(nativefactories.ExpressionFactory_TranspileProps{
    Importer: importer,
    Script:   script,
  })
}

var check_bigint_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
