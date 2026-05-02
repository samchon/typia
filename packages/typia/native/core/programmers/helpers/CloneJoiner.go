package helpers

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

type cloneJoinerNamespace struct{}

var CloneJoiner = cloneJoinerNamespace{}

type CloneJoiner_ObjectProps struct {
  Input   *shimast.Expression
  Entries []IExpressionEntry
}

type CloneJoiner_TupleProps struct {
  Elements []*shimast.Expression
  Rest     *shimast.Expression
}

type CloneJoiner_ArrayProps struct {
  Input *shimast.Expression
  Arrow *shimast.Expression
}

var cloneJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (cloneJoinerNamespace) Object(props CloneJoiner_ObjectProps) *shimast.Node {
  if len(props.Entries) == 0 {
    return cloneJoiner_factory.NewIdentifier("{}")
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
    str := entry.Key.GetSoleLiteral()
    properties = append(properties, cloneJoiner_factory.NewPropertyAssignment(
      nil,
      nativefactories.IdentifierFactory.Identifier(*str),
      nil,
      nil,
      entry.Expression,
    ))
  }
  literal := cloneJoiner_factory.NewObjectLiteralExpression(
    cloneJoiner_factory.NewNodeList(properties),
    true,
  )
  if len(dynamic) == 0 {
    return literal
  }

  key := cloneJoiner_factory.NewIdentifier("key")
  output := cloneJoiner_factory.NewIdentifier("output")
  statements := []*shimast.Node{}
  if len(regular) != 0 {
    statements = append(statements, cloneJoiner_regular_skip(regular))
  }
  for _, entry := range dynamic {
    statements = append(statements, cloneJoiner_factory.NewIfStatement(
      cloneJoiner_factory.NewCallExpression(
        cloneJoiner_factory.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
          top      bool
          metadata *nativemetadata.MetadataSchema
        }{top: true, metadata: entry.Key})+"/).test"),
        nil,
        nil,
        cloneJoiner_factory.NewNodeList([]*shimast.Node{key}),
        shimast.NodeFlagsNone,
      ),
      cloneJoiner_factory.NewBlock(
        cloneJoiner_factory.NewNodeList([]*shimast.Node{
          cloneJoiner_factory.NewExpressionStatement(
            cloneJoiner_factory.NewBinaryExpression(
              nil,
              cloneJoiner_factory.NewElementAccessExpression(output, nil, key, shimast.NodeFlagsNone),
              nil,
              cloneJoiner_factory.NewToken(shimast.KindEqualsToken),
              entry.Expression,
            ),
          ),
          cloneJoiner_factory.NewContinueStatement(nil),
        }),
        false,
      ),
      nil,
    ))
  }

  return cloneJoiner_factory.NewBlock(
    cloneJoiner_factory.NewNodeList([]*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "output",
        Value: cloneJoiner_factory.NewAsExpression(
          literal,
          nativefactories.TypeFactory.Keyword("any"),
        ),
      }),
      cloneJoiner_factory.NewForInOrOfStatement(
        shimast.KindForOfStatement,
        nil,
        nativefactories.StatementFactory.Entry(nativefactories.StatementFactory_EntryProps{Key: "key", Value: "value"}),
        cloneJoiner_factory.NewCallExpression(
          cloneJoiner_factory.NewIdentifier("Object.entries"),
          nil,
          nil,
          cloneJoiner_factory.NewNodeList([]*shimast.Node{props.Input}),
          shimast.NodeFlagsNone,
        ),
        cloneJoiner_factory.NewBlock(cloneJoiner_factory.NewNodeList(statements), false),
      ),
      cloneJoiner_factory.NewReturnStatement(output),
    }),
    false,
  )
}

func (cloneJoinerNamespace) Tuple(props CloneJoiner_TupleProps) *shimast.Node {
  elements := make([]*shimast.Node, 0, len(props.Elements)+1)
  for _, elem := range props.Elements {
    elements = append(elements, elem)
  }
  if props.Rest != nil {
    elements = append(elements, cloneJoiner_factory.NewSpreadElement(props.Rest))
  }
  return cloneJoiner_factory.NewAsExpression(
    cloneJoiner_factory.NewArrayLiteralExpression(
      cloneJoiner_factory.NewNodeList(elements),
      true,
    ),
    nativefactories.TypeFactory.Keyword("any"),
  )
}

func (cloneJoinerNamespace) Array(props CloneJoiner_ArrayProps) *shimast.Node {
  return cloneJoiner_factory.NewCallExpression(
    nativefactories.IdentifierFactory.Access(props.Input, "map"),
    nil,
    nil,
    cloneJoiner_factory.NewNodeList([]*shimast.Node{props.Arrow}),
    shimast.NodeFlagsNone,
  )
}

func cloneJoiner_regular_skip(regular []IExpressionEntry) *shimast.Node {
  elements := make([]*shimast.Node, 0, len(regular))
  for _, entry := range regular {
    elements = append(elements, cloneJoiner_factory.NewStringLiteral(*entry.Key.GetSoleLiteral(), shimast.TokenFlagsNone))
  }
  return cloneJoiner_factory.NewIfStatement(
    cloneJoiner_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        cloneJoiner_factory.NewArrayLiteralExpression(cloneJoiner_factory.NewNodeList(elements), false),
        "some",
      ),
      nil,
      nil,
      cloneJoiner_factory.NewNodeList([]*shimast.Node{
        cloneJoiner_factory.NewArrowFunction(
          nil,
          nil,
          cloneJoiner_factory.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter("regular", nil, nil),
          }),
          nil,
          nil,
          cloneJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
          cloneJoiner_factory.NewBinaryExpression(
            nil,
            cloneJoiner_factory.NewIdentifier("regular"),
            nil,
            cloneJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
            cloneJoiner_factory.NewIdentifier("key"),
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    ),
    cloneJoiner_factory.NewContinueStatement(nil),
    nil,
  )
}

func cloneJoiner_metadata_to_pattern(props struct {
  top      bool
  metadata *nativemetadata.MetadataSchema
}) string {
  for _, atomic := range props.metadata.Atomics {
    if atomic.Type == "string" {
      return "(.*)"
    }
  }
  values := []string{}
  for _, constant := range props.metadata.Constants {
    if constant.Type != "string" {
      for _, value := range constant.Values {
        values = append(values, fmt.Sprint(value.Value))
      }
      continue
    }
    for _, value := range constant.Values {
      values = append(values, nativeutils.PatternUtil.Escape(fmt.Sprint(value.Value)))
    }
  }
  for _, atomic := range props.metadata.Atomics {
    if atomic.Type == "number" || atomic.Type == "bigint" {
      values = append(values, nativeutils.PatternUtil.NUMBER)
    } else if atomic.Type == "boolean" {
      values = append(values, nativeutils.PatternUtil.BOOLEAN)
    }
  }
  for _, template := range props.metadata.Templates {
    values = append(values, "("+cloneJoiner_template_to_pattern(struct {
      top      bool
      template []*nativemetadata.MetadataSchema
    }{top: false, template: template.Row})+")")
  }
  pattern := ""
  if len(values) == 1 {
    pattern = values[0]
  } else {
    pattern = "(" + strings.Join(values, "|") + ")"
  }
  if props.top {
    return nativeutils.PatternUtil.Fix(pattern)
  }
  return pattern
}

func cloneJoiner_template_to_pattern(props struct {
  top      bool
  template []*nativemetadata.MetadataSchema
}) string {
  patterns := make([]string, 0, len(props.template))
  for _, meta := range props.template {
    patterns = append(patterns, cloneJoiner_metadata_to_pattern(struct {
      top      bool
      metadata *nativemetadata.MetadataSchema
    }{top: false, metadata: meta}))
  }
  pattern := strings.Join(patterns, "")
  if props.top {
    return nativeutils.PatternUtil.Fix(pattern)
  }
  return pattern
}
