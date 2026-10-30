package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Check_stringProps is the argument record of Check_string, which builds the
// check entry of a string atomic.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Check_string, which builds the check entry of a string atomic; its 3 fields (Context, Atomic, Input) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Check_stringProps struct {
  Context nativecontext.ITypiaContext
  Atomic  *nativemetadata.MetadataAtomic
  Input   *shimast.Expression
}

// Check_string builds the check entry of a string atomic: a `typeof input ===
// "string"` guard plus the atomic's type-tag conditions.
//
// @evidence contracts/common.md#principled-implementation It builds the string guard and type-tag conditions. A static flag-free RegExp(source).test(input) whose source agrees with pattern metadata uses the file's lazy reusable slot; other validation expressions retain their authored AST.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Check_string(props Check_stringProps) nativehelpers.ICheckEntry {
  f := nativecontext.NodeFactoryOf(props.Context.Emit)
  conditions := check_string_type_tags(props)
  return nativehelpers.ICheckEntry{
    Expected: props.Atomic.GetName(),
    Expression: f.NewBinaryExpression(
      nil,
      f.NewStringLiteral("string", shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewTypeOfExpression(props.Input),
    ),
    Conditions: conditions,
  }
}

func check_string_type_tags(props Check_stringProps) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range props.Atomic.Tags {
    tags := check_string_filter_validate(row)
    conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
    for _, tag := range tags {
      expression := check_string_transpile(props.Context, tag.Validate)(props.Input)
      expression = check_string_pattern(props, tag, expression)
      conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
        Expected:   "string & " + tag.Name,
        Expression: expression,
      })
    }
    for _, tag := range row {
      if condition := check_exclude_condition("string", tag, props.Input, props.Context.Emit); condition != nil {
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

// Recognize only the standard flag-free RegExp(source).test(input) form. A
// custom pattern-kind tag may supply arbitrary validation code or flags, and
// must retain that code and its state rather than being lowered from value alone.
func check_string_pattern(props Check_stringProps, tag nativemetadata.IMetadataTypeTag, expression *shimast.Node) *shimast.Node {
  source, ok := tag.Value.(string)
  if !ok || tag.Kind != "pattern" || props.Context.Importer == nil || expression.Kind != shimast.KindCallExpression {
    return expression
  }
  test := expression.AsCallExpression()
  if test.Arguments == nil || len(test.Arguments.Nodes) != 1 || test.Arguments.Nodes[0] != props.Input || test.Expression.Kind != shimast.KindPropertyAccessExpression {
    return expression
  }
  member := test.Expression.AsPropertyAccessExpression()
  if member.Name().Text() != "test" || member.Expression.Kind != shimast.KindCallExpression {
    return expression
  }
  constructor := member.Expression.AsCallExpression()
  if constructor.Expression.Kind != shimast.KindIdentifier || constructor.Expression.Text() != "RegExp" || constructor.Arguments == nil || len(constructor.Arguments.Nodes) != 1 {
    return expression
  }
  argument := constructor.Arguments.Nodes[0]
  if !shimast.IsStringLiteral(argument) || argument.Text() != source {
    return expression
  }
  f := nativecontext.NodeFactoryOf(props.Context.Emit)
  return f.NewCallExpression(f.NewPropertyAccessExpression(
    props.Context.Importer.Pattern(source, member.Expression), nil, f.NewIdentifier("test"), shimast.NodeFlagsNone,
  ), nil, nil, test.Arguments, shimast.NodeFlagsNone)
}

func check_string_filter_validate(row []nativemetadata.IMetadataTypeTag) []nativemetadata.IMetadataTypeTag {
  tags := []nativemetadata.IMetadataTypeTag{}
  for _, tag := range row {
    if tag.Validate != "" {
      tags = append(tags, tag)
    }
  }
  return tags
}

func check_string_transpile(context nativecontext.ITypiaContext, script string) func(input *shimast.Expression) *shimast.Node {
  var importer nativefactories.ExpressionFactory_Importer
  if v := context.Importer; v != nil {
    importer = v
  }
  return nativefactories.ExpressionFactory.Transpile(nativefactories.ExpressionFactory_TranspileProps{
    Importer: importer,
    Script:   script,
  }, context.Emit)
}
