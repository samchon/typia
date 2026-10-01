package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Check_object_type_tagsProps is the argument record of Check_object_type_tags,
// which builds the check entry of an object type's type-tag conditions.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Check_object_type_tags, which builds the check entry of an object type's type-tag conditions; its 3 fields (Context, Object, Input) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Check_object_type_tagsProps struct {
  Context nativecontext.ITypiaContext
  Object  *nativemetadata.MetadataObject
  Input   *shimast.Expression
}

// Check_object_type_tags builds the check entry of an object type: its display
// name as the expected description and its type-tag conditions, with no guard
// expression of its own.
//
// @evidence contracts/common.md#principled-implementation It builds the check entry of an object type: its display name as the expected description and its type-tag conditions, with no guard expression of its own.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Check_object_type_tags(props Check_object_type_tagsProps) nativehelpers.ICheckEntry {
  conditions := check_object_type_tags(props)
  return nativehelpers.ICheckEntry{
    Expected:   props.Object.GetDisplayName(),
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
