package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
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
  length := nativefactories.IdentifierFactory.Access(
    check_dynamic_properties_factory.NewCallExpression(
      check_dynamic_properties_factory.NewIdentifier("Object.keys"),
      nil,
      nil,
      check_dynamic_properties_factory.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    ),
    "length",
  )

  var left *shimast.Node
  if props.Config.Equals && len(props.Dynamic) == 0 {
    required := check_dynamic_properties_required_count(props.Regular)
    if props.Config.Undefined || check_dynamic_properties_every_required(props.Regular) {
      left = check_dynamic_properties_factory.NewBinaryExpression(
        nil,
        nativefactories.ExpressionFactory.Number(required),
        nil,
        check_dynamic_properties_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
        length,
      )
    } else {
      left = check_dynamic_properties_factory.NewCallExpression(
        check_dynamic_properties_internal(props.Context, "isBetween"),
        nil,
        check_dynamic_properties_factory.NewNodeList(nil),
        check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
          length,
          nativefactories.ExpressionFactory.Number(required),
          nativefactories.ExpressionFactory.Number(len(props.Regular)),
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
  keys := check_dynamic_properties_factory.NewCallExpression(
    check_dynamic_properties_factory.NewIdentifier("Object.keys"),
    nil,
    nil,
    check_dynamic_properties_factory.NewNodeList([]*shimast.Node{props.Input}),
    shimast.NodeFlagsNone,
  )
  if props.Config.Entries != nil {
    criteria = check_dynamic_properties_factory.NewCallExpression(
      props.Config.Entries,
      nil,
      nil,
      check_dynamic_properties_factory.NewNodeList([]*shimast.Node{keys, property}),
      shimast.NodeFlagsNone,
    )
  } else {
    method := "map"
    if props.Config.Assert {
      method = "every"
    }
    criteria = check_dynamic_properties_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(keys, method),
      nil,
      nil,
      check_dynamic_properties_factory.NewNodeList([]*shimast.Node{property}),
      shimast.NodeFlagsNone,
    )
  }

  right := criteria
  if !props.Config.Assert {
    right = Check_everything(criteria)
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
  return check_dynamic_properties_factory.NewBinaryExpression(
    nil,
    left,
    nil,
    check_dynamic_properties_factory.NewToken(operator),
    right,
  )
}

func check_dynamic_property(props Check_dynamic_propertiesProps) *shimast.Node {
  key := check_dynamic_properties_factory.NewIdentifier("key")
  value := check_dynamic_properties_factory.NewIdentifier("value")

  statements := []*shimast.Node{}
  add := func(expression *shimast.Expression, output *shimast.Expression) {
    statements = append(statements, check_dynamic_properties_factory.NewIfStatement(
      expression,
      check_dynamic_properties_factory.NewReturnStatement(output),
      nil,
    ))
  }
  broken := false

  if len(props.Regular) != 0 {
    add(is_regular_property(props.Regular), props.Config.Positive)
  }
  statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
    Name:  "value",
    Value: check_dynamic_properties_factory.NewElementAccessExpression(props.Input, nil, key, shimast.NodeFlagsNone),
  }))
  if props.Config.Undefined {
    add(
      check_dynamic_properties_factory.NewBinaryExpression(
        nil,
        check_dynamic_properties_factory.NewIdentifier("undefined"),
        nil,
        check_dynamic_properties_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
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
      statements = append(statements, check_dynamic_properties_factory.NewReturnStatement(entry.Expression))
      broken = true
      break
    }
    add(condition, entry.Expression)
  }

  if !broken {
    output := props.Config.Positive
    if props.Config.Equals {
      output = props.Config.Superfluous(value, check_dynamic_properties_superfluous_description())
    }
    statements = append(statements, check_dynamic_properties_factory.NewReturnStatement(output))
  }

  block := check_dynamic_properties_factory.NewBlock(
    check_dynamic_properties_factory.NewNodeList(statements),
    true,
  )
  return check_dynamic_properties_factory.NewArrowFunction(
    nil,
    nil,
    check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("key", nil, nil),
    }),
    nil,
    nil,
    check_dynamic_properties_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    block,
  )
}

func is_regular_property(regular []nativehelpers.IExpressionEntry) *shimast.Node {
  elements := make([]*shimast.Node, 0, len(regular))
  for _, entry := range regular {
    key := entry.Key.GetSoleLiteral()
    if key != nil {
      elements = append(elements, check_dynamic_properties_factory.NewStringLiteral(*key, shimast.TokenFlagsNone))
    }
  }
  return check_dynamic_properties_factory.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      check_dynamic_properties_factory.NewArrayLiteralExpression(
        check_dynamic_properties_factory.NewNodeList(elements),
        false,
      ),
      "some",
    ),
    nil,
    nil,
    check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
      check_dynamic_properties_factory.NewArrowFunction(
        nil,
        nil,
        check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("prop", nil, nil),
        }),
        nil,
        nil,
        check_dynamic_properties_factory.NewToken(shimast.KindEqualsGreaterThanToken),
        check_dynamic_properties_factory.NewBinaryExpression(
          nil,
          check_dynamic_properties_factory.NewIdentifier("key"),
          nil,
          check_dynamic_properties_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
          check_dynamic_properties_factory.NewIdentifier("prop"),
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
  if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
    return importer.Internal(name)
  }
  return check_dynamic_properties_factory.NewIdentifier(name)
}

func check_dynamic_properties_superfluous_description() *shimast.Node {
  return check_dynamic_properties_factory.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      check_dynamic_properties_factory.NewArrayLiteralExpression(
        check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
          check_dynamic_properties_factory.NewTemplateExpression(
            check_dynamic_properties_factory.NewTemplateHead("The property `", "The property \\`", shimast.TokenFlagsNone),
            check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
              check_dynamic_properties_factory.NewTemplateSpan(
                check_dynamic_properties_factory.NewIdentifier("key"),
                check_dynamic_properties_factory.NewTemplateTail("` is not defined in the object type.", "\\` is not defined in the object type.", shimast.TokenFlagsNone),
              ),
            }),
          ),
          check_dynamic_properties_factory.NewStringLiteral("", shimast.TokenFlagsNone),
          check_dynamic_properties_factory.NewStringLiteral("Please remove the property next time.", shimast.TokenFlagsNone),
        }),
        true,
      ),
      "join",
    ),
    nil,
    nil,
    check_dynamic_properties_factory.NewNodeList([]*shimast.Node{
      check_dynamic_properties_factory.NewStringLiteral("\n", shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
}

var check_dynamic_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
