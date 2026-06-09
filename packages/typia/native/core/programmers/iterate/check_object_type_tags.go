package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_object_type_tagsProps struct {
  Context nativecontext.ITypiaContext
  Object  *nativemetadata.MetadataObject
  Input   *shimast.Expression
}

func Check_object_type_tags(props Check_object_type_tagsProps) nativehelpers.ICheckEntry {
  conditions := check_object_type_tags(props)
  return nativehelpers.ICheckEntry{
    Expected:   props.Object.GetName(),
    Expression: nil,
    Conditions: conditions,
  }
}

func check_object_type_tags(props Check_object_type_tagsProps) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range props.Object.Tags {
    tags := check_object_type_tags_filter_validate(row)
    if len(tags) == 0 {
      continue
    }
    conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
    for _, tag := range tags {
      conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
        Expected:   "object & " + tag.Name,
        Expression: check_object_type_tags_transpile(props.Context, tag.Validate)(props.Input),
      })
    }
    output = append(output, conditions)
  }
  return output
}

func check_object_type_tags_filter_validate(row []nativemetadata.IMetadataTypeTag) []nativemetadata.IMetadataTypeTag {
  tags := []nativemetadata.IMetadataTypeTag{}
  for _, tag := range row {
    if tag.Validate != "" {
      tags = append(tags, tag)
    }
  }
  return tags
}

func check_object_type_tags_transpile(context nativecontext.ITypiaContext, script string) func(input *shimast.Expression) *shimast.Node {
  var importer nativefactories.ExpressionFactory_Importer
  if v := context.Importer; v != nil {
    importer = v
  }
  return nativefactories.ExpressionFactory.Transpile(nativefactories.ExpressionFactory_TranspileProps{
    Importer: importer,
    Script:   script,
  })
}
