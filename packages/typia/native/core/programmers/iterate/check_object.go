package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

type Check_objectProps struct {
  Config  Check_object_IConfig
  Context nativecontext.ITypiaContext
  Input   *shimast.Expression
  Entries []nativehelpers.IExpressionEntry
}

type Check_object_IConfig struct {
  Equals      bool
  Assert      bool
  Undefined   bool
  Halt        func(exp *shimast.Expression) *shimast.Node
  Reduce      func(a *shimast.Expression, b *shimast.Expression) *shimast.Node
  Positive    *shimast.Expression
  Superfluous func(value *shimast.Expression, description *shimast.Expression) *shimast.Node
  Entries     *shimast.Expression
}

func Check_object(props Check_objectProps) *shimast.Node {
  regular := []nativehelpers.IExpressionEntry{}
  dynamic := []nativehelpers.IExpressionEntry{}
  for _, entry := range props.Entries {
    if entry.Key.IsSoleLiteral() {
      regular = append(regular, entry)
    } else {
      dynamic = append(dynamic, entry)
    }
  }
  flags := make([]*shimast.Node, 0, len(regular)+1)
  for _, entry := range regular {
    flags = append(flags, check_object_regular_expression(props, entry))
  }

  if props.Config.Equals == false && len(dynamic) == 0 {
    if len(regular) == 0 {
      return props.Config.Positive
    }
    return check_object_reduce(check_object_reduceProps{
      Config:      props.Config,
      Expressions: flags,
    }, props.Context.Emit)
  }

  flags = append(flags, Check_dynamic_properties(Check_dynamic_propertiesProps{
    Config:  props.Config,
    Context: props.Context,
    Input:   props.Input,
    Regular: regular,
    Dynamic: dynamic,
  }))
  return check_object_reduce(check_object_reduceProps{
    Config:      props.Config,
    Expressions: flags,
  }, props.Context.Emit)
}

func check_object_regular_expression(props Check_objectProps, entry nativehelpers.IExpressionEntry) *shimast.Node {
  key := entry.Key.GetSoleLiteral()
  if !entry.StrictOptionalUndefined || key == nil {
    return entry.Expression
  }
  f := nativecontext.EmitFactoryOf(check_object_factory, props.Context.Emit)
  present := f.NewBinaryExpression(
    nil,
    f.NewStringLiteral(*key, shimast.TokenFlagsNone),
    nil,
    f.NewToken(shimast.KindInKeyword),
    props.Input,
  )
  return f.NewBinaryExpression(
    nil,
    f.NewPrefixUnaryExpression(shimast.KindExclamationToken, present),
    nil,
    f.NewToken(shimast.KindBarBarToken),
    entry.Expression,
  )
}

type check_object_reduceProps struct {
  Config      Check_object_IConfig
  Expressions []*shimast.Node
}

func check_object_reduce(props check_object_reduceProps, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_object_factory, emit...)
  if len(props.Expressions) == 0 {
    return props.Config.Positive
  }
  if props.Config.Assert {
    output := props.Expressions[0]
    for _, next := range props.Expressions[1:] {
      output = props.Config.Reduce(output, next)
    }
    return output
  }
  return Check_everything(
    f.NewArrayLiteralExpression(
      f.NewNodeList(props.Expressions),
      false,
    ),
  )
}

var check_object_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
