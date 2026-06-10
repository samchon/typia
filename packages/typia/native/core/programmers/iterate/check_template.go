package iterate

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_templateProps struct {
  Context   nativecontext.ITypiaContext
  Templates []*nativemetadata.MetadataTemplate
  Input     *shimast.Expression
  Emit      *shimprinter.EmitContext
}

func Check_template(props Check_templateProps) nativehelpers.ICheckEntry {
  f := nativecontext.EmitFactoryOf(check_template_factory, props.Emit)
  conditions := []*shimast.Node{
    f.NewBinaryExpression(
      nil,
      f.NewStringLiteral("string", shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewTypeOfExpression(props.Input),
    ),
  }
  internal := make([]*shimast.Node, 0, len(props.Templates))
  for _, tpl := range props.Templates {
    expression := f.NewCallExpression(
      f.NewIdentifier("RegExp(/"+template_to_pattern(struct {
        top      bool
        template []*nativemetadata.MetadataSchema
      }{
        top:      true,
        template: tpl.Row,
      })+"/).test"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    )
    // A template with more than one neighbor cannot route its type tags
    // through the entry conditions (those gate the whole entry), so inline
    // them into the member expression instead.
    if len(props.Templates) > 1 {
      if tags := check_template_inline_tags(props, tpl); tags != nil {
        expression = f.NewBinaryExpression(
          nil,
          expression,
          nil,
          f.NewToken(shimast.KindAmpersandAmpersandToken),
          tags,
        )
      }
    }
    internal = append(internal, expression)
  }
  if len(internal) != 0 {
    conditions = append(conditions, check_template_reduce(internal, shimast.KindBarBarToken, props.Emit))
  }
  names := make([]string, 0, len(props.Templates))
  for _, tpl := range props.Templates {
    names = append(names, tpl.GetName())
  }
  entry := nativehelpers.ICheckEntry{
    Expression: check_template_reduce(conditions, shimast.KindAmpersandAmpersandToken, props.Emit),
    Conditions: nil,
    Expected:   strings.Join(names, " | "),
  }
  if len(props.Templates) == 1 {
    entry.Conditions = check_template_type_tags(props, props.Templates[0])
  }
  return entry
}

// check_template_type_tags mirrors check_string_type_tags: a sole template
// reports each violated type tag individually through the entry conditions.
func check_template_type_tags(props Check_templateProps, tpl *nativemetadata.MetadataTemplate) [][]nativehelpers.ICheckEntry_ICondition {
  output := [][]nativehelpers.ICheckEntry_ICondition{}
  for _, row := range tpl.Tags {
    tags := check_string_filter_validate(row)
    if len(tags) == 0 {
      continue
    }
    conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
    for _, tag := range tags {
      conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
        Expected:   tpl.GetBaseName() + " & " + tag.Name,
        Expression: check_string_transpile(props.Context, tag.Validate)(props.Input),
      })
    }
    output = append(output, conditions)
  }
  return output
}

// check_template_inline_tags folds a template's tag matrix (OR of AND rows)
// into a single expression for union members that cannot carry conditions.
func check_template_inline_tags(props Check_templateProps, tpl *nativemetadata.MetadataTemplate) *shimast.Node {
  rows := make([]*shimast.Node, 0, len(tpl.Tags))
  for _, row := range tpl.Tags {
    tags := check_string_filter_validate(row)
    if len(tags) == 0 {
      continue
    }
    expressions := make([]*shimast.Node, 0, len(tags))
    for _, tag := range tags {
      expressions = append(expressions, check_string_transpile(props.Context, tag.Validate)(props.Input))
    }
    rows = append(rows, check_template_reduce(expressions, shimast.KindAmpersandAmpersandToken, props.Emit))
  }
  if len(rows) == 0 {
    return nil
  }
  return check_template_reduce(rows, shimast.KindBarBarToken, props.Emit)
}

func check_template_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_template_factory, emit...)
  if len(expressions) == 0 {
    return f.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = f.NewBinaryExpression(
      nil,
      output,
      nil,
      f.NewToken(operator),
      next,
    )
  }
  return output
}

var check_template_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
