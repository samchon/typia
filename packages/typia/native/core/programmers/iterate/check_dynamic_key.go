package iterate

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_dynamic_keyProps struct {
  Context  nativecontext.ITypiaContext
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
}

func Check_dynamic_key(props Check_dynamic_keyProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_key_factory, props.Context.Emit)
  if check_dynamic_key_has_pure_string(props.Metadata) {
    return f.NewKeywordExpression(shimast.KindTrueKeyword)
  }

  conditions := []*shimast.Node{}
  if props.Metadata.Nullable {
    conditions = append(conditions, check_dynamic_key_strict_equal(
      f.NewStringLiteral("null", shimast.TokenFlagsNone),
      props.Input,
      props.Context.Emit,
    ))
  }
  if !props.Metadata.IsRequired() {
    conditions = append(conditions, check_dynamic_key_strict_equal(
      f.NewStringLiteral("undefined", shimast.TokenFlagsNone),
      props.Input,
      props.Context.Emit,
    ))
  }

  for _, atom := range props.Metadata.Atomics {
    switch atom.Type {
    case "boolean":
      conditions = append(conditions, f.NewBinaryExpression(
        nil,
        check_dynamic_key_strict_equal(
          f.NewStringLiteral("false", shimast.TokenFlagsNone),
          props.Input,
          props.Context.Emit,
        ),
        nil,
        f.NewToken(shimast.KindBarBarToken),
        check_dynamic_key_strict_equal(
          f.NewStringLiteral("true", shimast.TokenFlagsNone),
          props.Input,
          props.Context.Emit,
        ),
      ))
    case "bigint":
      bigintInput := f.NewCallExpression(
        f.NewIdentifier("BigInt"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{props.Input}),
        shimast.NodeFlagsNone,
      )
      conditions = append(conditions, f.NewBinaryExpression(
        nil,
        f.NewCallExpression(
          check_dynamic_key_internal(props.Context, "isBigintString"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{props.Input}),
          shimast.NodeFlagsNone,
        ),
        nil,
        f.NewToken(shimast.KindAmpersandAmpersandToken),
        check_dynamic_key_atomist(Check_bigint(Check_bigintProps{
          Context: props.Context,
          Atomic:  atom,
          Input:   bigintInput,
        }), props.Context.Emit),
      ))
    case "number":
      numberInput := f.NewCallExpression(
        f.NewIdentifier("Number"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{props.Input}),
        shimast.NodeFlagsNone,
      )
      conditions = append(conditions, check_dynamic_key_atomist(Check_number(Check_numberProps{
        Context: props.Context,
        Numeric: true,
        Atomic:  atom,
        Input:   numberInput,
      }), props.Context.Emit))
    default:
      conditions = append(conditions, check_dynamic_key_atomist(Check_string(Check_stringProps{
        Context: props.Context,
        Atomic:  atom,
        Input:   props.Input,
      }), props.Context.Emit))
    }
  }

  for _, constant := range props.Metadata.Constants {
    for _, value := range constant.Values {
      conditions = append(conditions, check_dynamic_key_strict_equal(
        f.NewStringLiteral(fmt.Sprint(value.Value), shimast.TokenFlagsNone),
        props.Input,
        props.Context.Emit,
      ))
    }
  }

  if len(props.Metadata.Templates) != 0 {
    conditions = append(conditions, check_dynamic_key_atomist(Check_template(Check_templateProps{
      Context:   props.Context,
      Templates: props.Metadata.Templates,
      Input:     props.Input,
    }), props.Context.Emit))
  }

  for _, native := range props.Metadata.Natives {
    switch native.Name {
    case "Boolean":
      conditions = append(conditions, f.NewBinaryExpression(
        nil,
        check_dynamic_key_strict_equal(
          f.NewStringLiteral("false", shimast.TokenFlagsNone),
          props.Input,
          props.Context.Emit,
        ),
        nil,
        f.NewToken(shimast.KindBarBarToken),
        check_dynamic_key_strict_equal(
          f.NewStringLiteral("true", shimast.TokenFlagsNone),
          props.Input,
          props.Context.Emit,
        ),
      ))
    case "BigInt":
      conditions = append(conditions, f.NewCallExpression(
        check_dynamic_key_internal(props.Context, "isBigintString"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{props.Input}),
        shimast.NodeFlagsNone,
      ))
    case "Number":
      conditions = append(conditions, check_dynamic_key_strict_equal(
        f.NewKeywordExpression(shimast.KindFalseKeyword),
        f.NewCallExpression(
          f.NewIdentifier("Number.isNaN"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewCallExpression(
              f.NewIdentifier("Number"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{props.Input}),
              shimast.NodeFlagsNone,
            ),
          }),
          shimast.NodeFlagsNone,
        ),
        props.Context.Emit,
      ))
    }
  }

  if len(conditions) == 0 {
    return f.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  return check_dynamic_key_reduce(conditions, shimast.KindBarBarToken, props.Context.Emit)
}

func check_dynamic_key_has_pure_string(metadata *nativemetadata.MetadataSchema) bool {
  if len(metadata.Atomics) != 0 {
    for _, atomic := range metadata.Atomics {
      if atomic.Type == "string" && len(check_dynamic_key_fully_validated_tag_rows(atomic.Tags)) == 0 {
        return true
      }
    }
  }
  if len(metadata.Natives) != 0 {
    for _, native := range metadata.Natives {
      if native.Name == "String" {
        return true
      }
    }
  }
  return false
}

func check_dynamic_key_fully_validated_tag_rows(rows [][]nativemetadata.IMetadataTypeTag) [][]nativemetadata.IMetadataTypeTag {
  output := [][]nativemetadata.IMetadataTypeTag{}
  for _, row := range rows {
    passed := true
    for _, tag := range row {
      if tag.Validate == "" {
        passed = false
        break
      }
    }
    if passed {
      output = append(output, row)
    }
  }
  return output
}

func check_dynamic_key_atomist(entry nativehelpers.ICheckEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  expressions := []*shimast.Node{}
  if entry.Expression != nil {
    expressions = append(expressions, entry.Expression)
  }
  if len(entry.Conditions) != 0 {
    rows := make([]*shimast.Node, 0, len(entry.Conditions))
    for _, set := range entry.Conditions {
      pieces := make([]*shimast.Node, 0, len(set))
      for _, condition := range set {
        pieces = append(pieces, condition.Expression)
      }
      rows = append(rows, check_dynamic_key_reduce(pieces, shimast.KindAmpersandAmpersandToken, emit...))
    }
    expressions = append(expressions, check_dynamic_key_reduce(rows, shimast.KindBarBarToken, emit...))
  }
  return check_dynamic_key_reduce(expressions, shimast.KindAmpersandAmpersandToken, emit...)
}

func check_dynamic_key_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_key_factory, emit...)
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

func check_dynamic_key_strict_equal(left *shimast.Expression, right *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_key_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    left,
    nil,
    f.NewToken(shimast.KindEqualsEqualsEqualsToken),
    right,
  )
}

func check_dynamic_key_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(check_dynamic_key_factory, context.Emit)
  return f.NewIdentifier(name)
}

var check_dynamic_key_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
