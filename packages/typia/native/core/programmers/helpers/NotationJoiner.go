package helpers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type notationJoinerNamespace struct{}

var NotationJoiner = notationJoinerNamespace{}

type NotationJoiner_ObjectProps struct {
  Rename  func(str string) string
  Input   *shimast.Expression
  Entries []IExpressionEntry
  Emit    *shimprinter.EmitContext
}

type NotationJoiner_TupleProps struct {
  Elements []*shimast.Expression
  Rest     *shimast.Expression
  Emit     *shimprinter.EmitContext
}

type NotationJoiner_ArrayProps struct {
  Input *shimast.Expression
  Arrow *shimast.Expression
  Emit  *shimprinter.EmitContext
}

var notationJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (notationJoinerNamespace) Object(props NotationJoiner_ObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(notationJoiner_factory, props.Emit)
  if len(props.Entries) == 0 {
    return f.NewIdentifier("{}")
  }

  regular := []IExpressionEntry{}
  dynamic := []IExpressionEntry{}
  for _, entry := range props.Entries {
    if entry.Key.IsSoleLiteral() {
      regular = append(regular, entry)
    } else {
      dynamic = append(dynamic, entry)
    }
  }

  properties := make([]*shimast.Node, 0, len(regular))
  for _, entry := range regular {
    str := props.Rename(*entry.Key.GetSoleLiteral())
    properties = append(properties, f.NewPropertyAssignment(
      nil,
      nativefactories.IdentifierFactory.Identifier(str, props.Emit),
      nil,
      nil,
      entry.Expression,
    ))
  }
  literal := f.NewObjectLiteralExpression(
    f.NewNodeList(properties),
    true,
  )
  if len(dynamic) == 0 {
    return literal
  }

  key := f.NewIdentifier("key")
  output := f.NewIdentifier("output")
  statements := []*shimast.Node{}
  if len(regular) != 0 {
    statements = append(statements, notationJoiner_regular_skip(regular, props.Emit))
  }
  for _, entry := range dynamic {
    statements = append(statements, f.NewIfStatement(
      f.NewCallExpression(
        f.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
          top      bool
          metadata *nativemetadata.MetadataSchema
        }{top: true, metadata: entry.Key})+"/).test"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{key}),
        shimast.NodeFlagsNone,
      ),
      f.NewBlock(
        f.NewNodeList([]*shimast.Node{
          f.NewExpressionStatement(
            f.NewBinaryExpression(
              nil,
              f.NewElementAccessExpression(output, nil, key, shimast.NodeFlagsNone),
              nil,
              f.NewToken(shimast.KindEqualsToken),
              entry.Expression,
            ),
          ),
          f.NewContinueStatement(nil),
        }),
        false,
      ),
      nil,
    ))
  }

  return f.NewBlock(
    f.NewNodeList([]*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "output",
        Value: f.NewAsExpression(
          literal,
          nativefactories.TypeFactory.Keyword("any", props.Emit),
        ),
      }, props.Emit),
      f.NewForInOrOfStatement(
        shimast.KindForOfStatement,
        nil,
        nativefactories.StatementFactory.Entry(nativefactories.StatementFactory_EntryProps{Key: "key", Value: "value"}, props.Emit),
        f.NewCallExpression(
          f.NewIdentifier("Object.entries"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{props.Input}),
          shimast.NodeFlagsNone,
        ),
        f.NewBlock(f.NewNodeList(statements), false),
      ),
      f.NewReturnStatement(output),
    }),
    false,
  )
}

func (notationJoinerNamespace) Tuple(props NotationJoiner_TupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(notationJoiner_factory, props.Emit)
  elements := make([]*shimast.Node, 0, len(props.Elements)+1)
  for _, elem := range props.Elements {
    elements = append(elements, elem)
  }
  if props.Rest != nil {
    elements = append(elements, f.NewSpreadElement(props.Rest))
  }
  return f.NewAsExpression(
    f.NewArrayLiteralExpression(
      f.NewNodeList(elements),
      true,
    ),
    nativefactories.TypeFactory.Keyword("any", props.Emit),
  )
}

func (notationJoinerNamespace) Array(props NotationJoiner_ArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(notationJoiner_factory, props.Emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(nil, props.Input, "map"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Arrow}),
    shimast.NodeFlagsNone,
  )
}

func notationJoiner_regular_skip(regular []IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(notationJoiner_factory, emit...)
  elements := make([]*shimast.Node, 0, len(regular))
  for _, entry := range regular {
    elements = append(elements, f.NewStringLiteral(*entry.Key.GetSoleLiteral(), shimast.TokenFlagsNone))
  }
  return f.NewIfStatement(
    f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        nil,
        f.NewArrayLiteralExpression(f.NewNodeList(elements), false),
        "some",
      ),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter("regular", nil, nil, emit...),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBinaryExpression(
            nil,
            f.NewIdentifier("regular"),
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            f.NewIdentifier("key"),
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    ),
    f.NewContinueStatement(nil),
    nil,
  )
}
