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
    internal = append(internal, f.NewCallExpression(
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
    ))
  }
  if len(internal) != 0 {
    conditions = append(conditions, check_template_reduce(internal, shimast.KindBarBarToken, props.Emit))
  }
  names := make([]string, 0, len(props.Templates))
  for _, tpl := range props.Templates {
    names = append(names, tpl.GetName())
  }
  return nativehelpers.ICheckEntry{
    Expression: check_template_reduce(conditions, shimast.KindAmpersandAmpersandToken, props.Emit),
    Conditions: nil,
    Expected:   strings.Join(names, " | "),
  }
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
