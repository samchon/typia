package iterate

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// check_exclude_condition synthesizes the runtime condition of an `exclude`
// kind type tag. Excluded literals travel in the tag's JSON schema fragment
// (`schema.not.enum`) instead of a validate script, because the tag accepts a
// tuple of values that no single validate literal could template, so the
// checker builds the `!==` chain itself.
func check_exclude_condition(
  typ string,
  tag nativemetadata.IMetadataTypeTag,
  input *shimast.Expression,
  emit *shimprinter.EmitContext,
) *nativehelpers.ICheckEntry_ICondition {
  if tag.Kind != "exclude" {
    return nil
  }
  values := check_exclude_values(tag)
  if len(values) == 0 {
    return nil
  }
  f := nativecontext.EmitFactoryOf(check_exclude_factory, emit)
  var expression *shimast.Node
  for _, value := range values {
    comparison := f.NewBinaryExpression(
      nil,
      input,
      nil,
      f.NewToken(shimast.KindExclamationEqualsEqualsToken),
      check_exclude_literal(typ, value, emit),
    )
    if expression == nil {
      expression = comparison
    } else {
      expression = f.NewBinaryExpression(
        nil,
        expression,
        nil,
        f.NewToken(shimast.KindAmpersandAmpersandToken),
        comparison,
      )
    }
  }
  return &nativehelpers.ICheckEntry_ICondition{
    Expected:   typ + " & " + tag.Name,
    Expression: expression,
  }
}

func check_exclude_values(tag nativemetadata.IMetadataTypeTag) []any {
  schema, ok := tag.Schema.(map[string]any)
  if ok == false {
    return nil
  }
  not, ok := schema["not"].(map[string]any)
  if ok == false {
    return nil
  }
  enum, ok := not["enum"].([]any)
  if ok == false {
    return nil
  }
  return enum
}

func check_exclude_literal(typ string, value any, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_exclude_factory, emit)
  switch typ {
  case "string":
    return f.NewStringLiteral(fmt.Sprint(value), shimast.TokenFlagsNone)
  case "bigint":
    return nativefactories.ExpressionFactory.Bigint(value, emit)
  default:
    return f.NewIdentifier(fmt.Sprint(value))
  }
}

var check_exclude_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
