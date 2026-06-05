package iterate

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_union_array_likeProps struct {
  Config      Check_union_array_like_IConfig
  Accessor    Check_union_array_like_IAccessor
  Parameters  []*shimast.Node
  Input       *shimast.Expression
  Definitions []any
  Explore     any
  Emit        *shimprinter.EmitContext
}

type Check_union_array_like_IConfig struct {
  Checker func(props Check_union_array_like_CheckerProps) *shimast.Node
  Decoder func(props Check_union_array_like_DecoderProps) *shimast.Node
  Empty   *shimast.Node
  Success *shimast.Expression
  Failure func(props Check_union_array_like_FailureProps) *shimast.Node
}

type Check_union_array_like_CheckerProps struct {
  Input      *shimast.Expression
  Definition any
  Explore    any
  Container  *shimast.Expression
}

type Check_union_array_like_DecoderProps struct {
  Input      *shimast.Expression
  Definition any
  Explore    any
}

type Check_union_array_like_FailureProps struct {
  Input    *shimast.Expression
  Expected string
  Explore  any
}

type Check_union_array_like_IAccessor struct {
  Transform func(origin any) any
  Element   func(meta any) any
  Name      func(meta any, elem any) string
  Front     func(input *shimast.Expression) *shimast.Node
  Array     func(input *shimast.Expression) *shimast.Node
  Size      func(input *shimast.Expression) *shimast.Node
}

func Check_union_array_like(props Check_union_array_likeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_union_array_like_factory, props.Emit)
  targets := make([]any, 0, len(props.Definitions))
  for _, definition := range props.Definitions {
    targets = append(targets, props.Accessor.Transform(definition))
  }
  if len(targets) == 1 {
    return f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(props.Parameters),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      props.Config.Decoder(Check_union_array_like_DecoderProps{
        Input:      props.Accessor.Array(props.Input),
        Definition: targets[0],
        Explore:    props.Explore,
      }),
    )
  }

  array := f.NewIdentifier("array")
  top := f.NewIdentifier("top")
  statements := []*shimast.Node{}
  tupleList := []*nativemetadata.MetadataTuple{}
  arrayList := []*nativemetadata.MetadataArray{}
  for _, target := range targets {
    switch v := target.(type) {
    case *nativemetadata.MetadataTuple:
      tupleList = append(tupleList, v)
    case *nativemetadata.MetadataArray:
      arrayList = append(arrayList, v)
    }
  }

  predicate := func(meta any) *shimast.Node {
    inputType := f.NewTypeReferenceNode(f.NewIdentifier("any[]"), nil)
    postfix := ""
    if _, ok := meta.(*nativemetadata.MetadataArrayType); ok {
      inputType = nativefactories.TypeFactory.Keyword("any")
      postfix = "\"[0]\""
    }
    return f.NewAsExpression(
      f.NewArrayLiteralExpression(
        f.NewNodeList([]*shimast.Node{
          f.NewArrowFunction(
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              nativefactories.IdentifierFactory.Parameter("top", inputType, nil),
            }),
            nativefactories.TypeFactory.Keyword("any"),
            nil,
            f.NewToken(shimast.KindEqualsGreaterThanToken),
            props.Config.Checker(Check_union_array_like_CheckerProps{
              Input:      f.NewIdentifier("top"),
              Definition: props.Accessor.Element(meta),
              Explore:    check_union_array_like_explore(props.Explore, false, postfix),
              Container:  array,
            }),
          ),
          f.NewArrowFunction(
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              nativefactories.IdentifierFactory.Parameter(
                "entire",
                f.NewTypeReferenceNode(f.NewIdentifier("any[]"), nil),
                nil,
              ),
            }),
            nativefactories.TypeFactory.Keyword("any"),
            nil,
            f.NewToken(shimast.KindEqualsGreaterThanToken),
            props.Config.Decoder(Check_union_array_like_DecoderProps{
              Input:      f.NewIdentifier("entire"),
              Definition: meta,
              Explore:    check_union_array_like_explore_trace(props.Explore, true),
            }),
          ),
        }),
        true,
      ),
      f.NewTypeReferenceNode(f.NewIdentifier("const"), nil),
    )
  }

  iterate := func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node {
    return f.NewForInOrOfStatement(
      shimast.KindForOfStatement,
      nil,
      f.NewVariableDeclarationList(
        f.NewNodeList([]*shimast.Node{
          f.NewVariableDeclaration(
            f.NewIdentifier(init),
            nil,
            nil,
            nil,
          ),
        }),
        shimast.NodeFlagsConst,
      ),
      from,
      ifStatement,
    )
  }

  if len(tupleList) != 0 {
    tuplePredicates := make([]*shimast.Node, 0, len(tupleList))
    for _, x := range tupleList {
      tuplePredicates = append(tuplePredicates, predicate(x))
    }
    statements = append(statements,
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  "array",
        Value: props.Accessor.Array(props.Input),
      }),
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "tuplePredicators",
        Value: f.NewArrayLiteralExpression(
          f.NewNodeList(tuplePredicates),
          true,
        ),
      }),
      iterate(
        "pred",
        f.NewIdentifier("tuplePredicators"),
        f.NewIfStatement(
          f.NewCallExpression(
            f.NewIdentifier("pred[0]"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{array}),
            shimast.NodeFlagsNone,
          ),
          f.NewReturnStatement(
            f.NewCallExpression(
              f.NewIdentifier("pred[1]"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{array}),
              shimast.NodeFlagsNone,
            ),
          ),
          nil,
        ),
      ),
    )
  }
  if len(arrayList) != 0 {
    if len(tupleList) == 0 {
      statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  "array",
        Value: props.Accessor.Array(props.Input),
      }))
    }
    arrayPredicates := make([]*shimast.Node, 0, len(arrayList))
    for _, x := range arrayList {
      arrayPredicates = append(arrayPredicates, predicate(x))
    }
    statements = append(statements,
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  "top",
        Value: props.Accessor.Front(props.Input),
      }),
      f.NewIfStatement(
        f.NewBinaryExpression(
          nil,
          nativefactories.ExpressionFactory.Number(0),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          props.Accessor.Size(props.Input),
        ),
        check_union_array_like_return_or_statement(props.Config.Empty, props.Emit),
        nil,
      ),
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "arrayPredicators",
        Value: f.NewArrayLiteralExpression(
          f.NewNodeList(arrayPredicates),
          true,
        ),
      }),
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "passed",
        Value: f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, f.NewIdentifier("arrayPredicators"), "filter"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewArrowFunction(
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                nativefactories.IdentifierFactory.Parameter("pred", nil, nil),
              }),
              nil,
              nil,
              f.NewToken(shimast.KindEqualsGreaterThanToken),
              f.NewCallExpression(
                f.NewIdentifier("pred[0]"),
                nil,
                nil,
                f.NewNodeList([]*shimast.Node{top}),
                shimast.NodeFlagsNone,
              ),
            ),
          }),
          shimast.NodeFlagsNone,
        ),
      }),
      check_union_array_like_array_if(iterate, array, top, props.Config.Success, props.Emit),
    )
  }
  names := make([]string, 0, len(targets))
  for _, target := range targets {
    elem := props.Accessor.Element(target)
    names = append(names, props.Accessor.Name(target, elem))
  }
  statements = append(statements, props.Config.Failure(Check_union_array_like_FailureProps{
    Input:    props.Input,
    Expected: "(" + strings.Join(names, " | ") + ")",
    Explore:  props.Explore,
  }))
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList(props.Parameters),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewBlock(
      f.NewNodeList(statements),
      true,
    ),
  )
}

func check_union_array_like_array_if(iterate func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node, array *shimast.Node, top *shimast.Node, success *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_union_array_like_factory, emit...)
  return f.NewIfStatement(
    f.NewBinaryExpression(
      nil,
      nativefactories.ExpressionFactory.Number(1),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      f.NewIdentifier("passed.length"),
    ),
    f.NewReturnStatement(
      f.NewCallExpression(
        f.NewElementAccessExpression(
          f.NewNonNullExpression(
            f.NewIdentifier("passed[0]"),
            shimast.NodeFlagsNone,
          ),
          nil,
          nativefactories.ExpressionFactory.Number(1),
          shimast.NodeFlagsNone,
        ),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{array}),
        shimast.NodeFlagsNone,
      ),
    ),
    f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        nativefactories.ExpressionFactory.Number(1),
        nil,
        f.NewToken(shimast.KindLessThanToken),
        f.NewIdentifier("passed.length"),
      ),
      iterate(
        "pred",
        f.NewIdentifier("passed"),
        f.NewIfStatement(
          f.NewCallExpression(
            nativefactories.IdentifierFactory.Access(nil, array, "every"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewArrowFunction(
                nil,
                nil,
                f.NewNodeList([]*shimast.Node{
                  nativefactories.IdentifierFactory.Parameter("value", nativefactories.TypeFactory.Keyword("any"), nil),
                }),
                nil,
                nil,
                f.NewToken(shimast.KindEqualsGreaterThanToken),
                f.NewBinaryExpression(
                  nil,
                  success,
                  nil,
                  f.NewToken(shimast.KindEqualsEqualsEqualsToken),
                  f.NewCallExpression(
                    f.NewIdentifier("pred[0]"),
                    nil,
                    nil,
                    f.NewNodeList([]*shimast.Node{
                      f.NewIdentifier("value"),
                    }),
                    shimast.NodeFlagsNone,
                  ),
                ),
              ),
            }),
            shimast.NodeFlagsNone,
          ),
          f.NewReturnStatement(
            f.NewCallExpression(
              f.NewIdentifier("pred[1]"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                f.NewIdentifier("array"),
              }),
              shimast.NodeFlagsNone,
            ),
          ),
          nil,
        ),
      ),
      nil,
    ),
  )
}

func check_union_array_like_return_or_statement(node *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_union_array_like_factory, emit...)
  if node == nil || node.Kind == shimast.KindReturnStatement {
    return node
  }
  return f.NewReturnStatement(node)
}

func check_union_array_like_explore(base any, tracable bool, postfix string) any {
  if value, ok := base.(map[string]any); ok {
    next := map[string]any{}
    for k, v := range value {
      next[k] = v
    }
    next["tracable"] = tracable
    next["postfix"] = postfix
    return next
  }
  return base
}

func check_union_array_like_explore_trace(base any, tracable bool) any {
  if value, ok := base.(map[string]any); ok {
    next := map[string]any{}
    for k, v := range value {
      next[k] = v
    }
    next["tracable"] = tracable
    return next
  }
  return base
}

var check_union_array_like_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
