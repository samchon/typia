package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// Check_objectProps is the argument record of Check_object, which combines the
// checks of an object's property entries.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Check_object, which combines the checks of an object's property entries; its 4 fields (Config, Context, Input, Entries) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Check_objectProps struct {
  Config  Check_object_IConfig
  Context nativecontext.ITypiaContext
  Input   *shimast.Expression
  Entries []nativehelpers.IExpressionEntry
}

// Check_object_IConfig is the configuration of Check_object and
// Check_dynamic_properties, which tells how the checks of an object are combined
// and reported. Equals rejects properties beyond the declared ones. Assert
// combines the checks with Reduce, and otherwise they are collected with
// `every`. Positive is the expression that stands for success. Undefined makes
// the key count exact and combines it with the key test by `||` instead of `&&`.
// Halt wraps the key check, and Superfluous reports a surplus property.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of Check_object and Check_dynamic_properties, which tells how the checks of an object are combined and reported; its 9 members (Equals, Assert, Undefined, Halt, Reduce, Positive, Superfluous, InvalidKey, Entries) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 9-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type Check_object_IConfig struct {
  Equals      bool
  Assert      bool
  Undefined   bool
  Halt        func(exp *shimast.Expression) *shimast.Node
  Reduce      func(a *shimast.Expression, b *shimast.Expression) *shimast.Node
  Positive    *shimast.Expression
  Superfluous func(value *shimast.Expression, description *shimast.Expression) *shimast.Node
  // InvalidKey reports a dynamic key an index signature declares but whose type
  // tag it breaks. A key no signature declares at all is a surplus property and
  // goes to `Superfluous` instead.
  //
  // `Superfluous` is the wrong report for this one: it says the property is not
  // defined in the object type and advises removing it, which is false and
  // unhelpful when the property *is* declared and only its key broke a
  // constraint. A programmer that has no better answer may leave this nil, and
  // `Superfluous` is used instead -- the outcome is identical, only the message
  // differs.
  InvalidKey func(value *shimast.Expression, expected string, description *shimast.Expression) *shimast.Node
  Entries    *shimast.Expression
}

// Check_object splits the entries into regular and dynamic properties, checks
// each regular one and, for an exact object or one with dynamic properties, adds
// the key check, then combines every check.
//
// @evidence contracts/common.md#principled-implementation It splits the entries into regular and dynamic properties, checks each regular one and, for an exact object or one with dynamic properties, adds the key check, then combines every check.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
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
