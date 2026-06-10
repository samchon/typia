package helpers

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

type cloneJoinerNamespace struct{}

var CloneJoiner = cloneJoinerNamespace{}

type CloneJoiner_ObjectProps struct {
  Input   *shimast.Expression
  Entries []IExpressionEntry
  Emit    *shimprinter.EmitContext
}

type CloneJoiner_TupleProps struct {
  Elements []*shimast.Expression
  Rest     *shimast.Expression
  Emit     *shimprinter.EmitContext
}

type CloneJoiner_ArrayProps struct {
  Input *shimast.Expression
  Arrow *shimast.Expression
  Emit  *shimprinter.EmitContext
}

var cloneJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (cloneJoinerNamespace) Object(props CloneJoiner_ObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(cloneJoiner_factory, props.Emit)
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
    str := entry.Key.GetSoleLiteral()
    property := f.NewPropertyAssignment(
      nil,
      nativefactories.IdentifierFactory.Identifier(*str, props.Emit),
      nil,
      nil,
      entry.Expression,
    )
    if entry.OptionalProperty {
      properties = append(properties, f.NewSpreadAssignment(
        f.NewParenthesizedExpression(nativefactories.ExpressionFactory.Conditional(
          cloneJoiner_optional_condition(entry, props.Input, props.Emit),
          f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{property}), false),
          f.NewObjectLiteralExpression(f.NewNodeList(nil), false),
          props.Emit,
        )),
      ))
    } else {
      properties = append(properties, property)
    }
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
    statements = append(statements, cloneJoiner_regular_skip(regular, props.Emit))
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

func cloneJoiner_optional_condition(entry IExpressionEntry, input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  if entry.StrictOptionalUndefined {
    return nativefactories.ExpressionFactory.IsRequired(entry.Input, emit...)
  }
  key := entry.Key.GetSoleLiteral()
  if key == nil {
    return nativefactories.ExpressionFactory.IsRequired(entry.Input, emit...)
  }
  f := nativecontext.EmitFactoryOf(cloneJoiner_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    nativefactories.ExpressionFactory.IsRequired(entry.Input, emit...),
    nil,
    f.NewToken(shimast.KindBarBarToken),
    f.NewBinaryExpression(
      nil,
      f.NewStringLiteral(*key, shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindInKeyword),
      input,
    ),
  )
}

func (cloneJoinerNamespace) Tuple(props CloneJoiner_TupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(cloneJoiner_factory, props.Emit)
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

func (cloneJoinerNamespace) Array(props CloneJoiner_ArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(cloneJoiner_factory, props.Emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(nil, props.Input, "map"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Arrow}),
    shimast.NodeFlagsNone,
  )
}

func cloneJoiner_regular_skip(regular []IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(cloneJoiner_factory, emit...)
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
