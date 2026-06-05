package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

type Check_dynamic_propertiesProps struct {
  Config  Check_object_IConfig
  Context nativecontext.ITypiaContext
  Regular []nativehelpers.IExpressionEntry
  Dynamic []nativehelpers.IExpressionEntry
  Input   *shimast.Expression
}

func Check_dynamic_properties(props Check_dynamic_propertiesProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, props.Context.Emit)
  length := nativefactories.IdentifierFactory.Access(
    props.Context.Emit,
    f.NewCallExpression(
      f.NewIdentifier("Object.keys"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    ),
    "length",
  )

  var left *shimast.Node
  if props.Config.Equals && len(props.Dynamic) == 0 {
    required := check_dynamic_properties_required_count(props.Regular)
    if props.Config.Undefined || check_dynamic_properties_every_required(props.Regular) {
      left = f.NewBinaryExpression(
        nil,
        nativefactories.ExpressionFactory.Number(required, props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        length,
      )
    } else {
      left = f.NewCallExpression(
        check_dynamic_properties_internal(props.Context, "isBetween"),
        nil,
        f.NewNodeList(nil),
        f.NewNodeList([]*shimast.Node{
          length,
          nativefactories.ExpressionFactory.Number(required, props.Context.Emit),
          nativefactories.ExpressionFactory.Number(len(props.Regular), props.Context.Emit),
        }),
        shimast.NodeFlagsNone,
      )
    }
  }
  if left != nil && !props.Config.Undefined && check_dynamic_properties_every_required(props.Regular) {
    return left
  }

  var criteria *shimast.Node
  property := check_dynamic_property(props)
  keys := f.NewCallExpression(
    f.NewIdentifier("Object.keys"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Input}),
    shimast.NodeFlagsNone,
  )
  if props.Config.Entries != nil {
    criteria = f.NewCallExpression(
      props.Config.Entries,
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{keys, property}),
      shimast.NodeFlagsNone,
    )
  } else {
    method := "map"
    if props.Config.Assert {
      method = "every"
    }
    criteria = f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(props.Context.Emit, keys, method),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{property}),
      shimast.NodeFlagsNone,
    )
  }

  right := criteria
  if !props.Config.Assert {
    right = Check_everything(criteria, props.Context.Emit)
  }
  if props.Config.Halt != nil {
    right = props.Config.Halt(right)
  }
  if left == nil {
    return right
  }
  operator := shimast.KindAmpersandAmpersandToken
  if props.Config.Undefined {
    operator = shimast.KindBarBarToken
  }
  return f.NewBinaryExpression(
    nil,
    left,
    nil,
    f.NewToken(operator),
    right,
  )
}

func check_dynamic_property(props Check_dynamic_propertiesProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, props.Context.Emit)
  key := f.NewIdentifier("key")
  value := f.NewIdentifier("value")

  statements := []*shimast.Node{}
  add := func(expression *shimast.Expression, output *shimast.Expression) {
    statements = append(statements, f.NewIfStatement(
      expression,
      f.NewReturnStatement(output),
      nil,
    ))
  }
  broken := false

  if len(props.Regular) != 0 {
    add(is_regular_property(props.Regular, props.Context.Emit), props.Config.Positive)
  }
  statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
    Name:  "value",
    Value: f.NewElementAccessExpression(props.Input, nil, key, shimast.NodeFlagsNone),
  }, props.Context.Emit))
  if props.Config.Undefined {
    add(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier("undefined"),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        value,
      ),
      props.Config.Positive,
    )
  }

  for _, entry := range props.Dynamic {
    condition := Check_dynamic_key(Check_dynamic_keyProps{
      Context:  props.Context,
      Metadata: entry.Key,
      Input:    key,
    })
    if condition.Kind == shimast.KindTrueKeyword {
      statements = append(statements, f.NewReturnStatement(entry.Expression))
      broken = true
      break
    }
    add(condition, entry.Expression)
  }

  if !broken {
    output := props.Config.Positive
    if props.Config.Equals {
      output = props.Config.Superfluous(value, check_dynamic_properties_superfluous_description(props.Context.Emit))
    }
    statements = append(statements, f.NewReturnStatement(output))
  }

  block := f.NewBlock(
    f.NewNodeList(statements),
    true,
  )
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("key", nil, nil, props.Context.Emit),
    }),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    block,
  )
}

func is_regular_property(regular []nativehelpers.IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, emit...)
  elements := make([]*shimast.Node, 0, len(regular))
  for _, entry := range regular {
    key := entry.Key.GetSoleLiteral()
    if key != nil {
      elements = append(elements, f.NewStringLiteral(*key, shimast.TokenFlagsNone))
    }
  }
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      nil,
      f.NewArrayLiteralExpression(
        f.NewNodeList(elements),
        false,
      ),
      "some",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("prop", nil, nil, emit...),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewBinaryExpression(
          nil,
          f.NewIdentifier("key"),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          f.NewIdentifier("prop"),
        ),
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

func check_dynamic_properties_required_count(entries []nativehelpers.IExpressionEntry) int {
  count := 0
  for _, entry := range entries {
    if entry.Meta.IsRequired() {
      count++
    }
  }
  return count
}

func check_dynamic_properties_every_required(entries []nativehelpers.IExpressionEntry) bool {
  for _, entry := range entries {
    if !entry.Meta.IsRequired() {
      return false
    }
  }
  return true
}

func check_dynamic_properties_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, context.Emit)
  return f.NewIdentifier(name)
}

func check_dynamic_properties_superfluous_description(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_dynamic_properties_factory, emit...)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      nil,
      f.NewArrayLiteralExpression(
        f.NewNodeList([]*shimast.Node{
          f.NewTemplateExpression(
            f.NewTemplateHead("The property `", "The property \\`", shimast.TokenFlagsNone),
            f.NewNodeList([]*shimast.Node{
              f.NewTemplateSpan(
                f.NewIdentifier("key"),
                f.NewTemplateTail("` is not defined in the object type.", "\\` is not defined in the object type.", shimast.TokenFlagsNone),
              ),
            }),
          ),
          f.NewStringLiteral("", shimast.TokenFlagsNone),
          f.NewStringLiteral("Please remove the property next time.", shimast.TokenFlagsNone),
        }),
        true,
      ),
      "join",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral("\n", shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
}

var check_dynamic_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
