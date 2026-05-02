package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_bigintProps struct {
  Context nativecontext.ITypiaContext
  Atomic  *nativemetadata.MetadataAtomic
  Input   *shimast.Expression
}

func Check_bigint(props Check_bigintProps) nativehelpers.ICheckEntry {
  conditions := check_bigint_type_tags(props)
  return nativehelpers.ICheckEntry{
    Expected: props.Atomic.GetName(),
    Expression: check_bigint_factory.NewBinaryExpression(
      nil,
      check_bigint_factory.NewStringLiteral("bigint", shimast.TokenFlagsNone),
      nil,
      check_bigint_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
      check_bigint_factory.NewTypeOfExpression(props.Input),
    ),
    Conditions: conditions,
  }
}

func check_bigint_type_tags(props Check_bigintProps) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range props.Atomic.Tags {
    tags := check_bigint_filter_validate(row)
    if len(tags) == 0 {
      continue
    }
    conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
    for _, tag := range tags {
      conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
        Expected:   "bigint & " + tag.Name,
        Expression: check_bigint_transpile(props.Context, tag.Validate)(props.Input),
      })
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
  if v, ok := context.Importer.(nativefactories.ExpressionFactory_Importer); ok {
    importer = v
  }
  return nativefactories.ExpressionFactory.Transpile(nativefactories.ExpressionFactory_TranspileProps{
    Transformer: context.Transformer,
    Importer:    importer,
    Script:      script,
  })
}

var check_bigint_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
