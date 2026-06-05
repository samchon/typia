package helpers

import (
  "encoding/json"
  "sort"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type stringifyJoinerNamespace struct{}

var StringifyJoiner = stringifyJoinerNamespace{}

type StringifyJoiner_ObjectProps struct {
  Context nativecontext.ITypiaContext
  Entries []IExpressionEntry
}

type StringifyJoiner_ArrayProps struct {
  Input *shimast.Expression
  Arrow *shimast.Expression
}

type StringifyJoiner_TupleProps struct {
  Elements []*shimast.Expression
  Rest     *shimast.Expression
}

var stringifyJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (stringifyJoinerNamespace) Object(props StringifyJoiner_ObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, props.Context.Emit)
  if len(props.Entries) == 0 {
    return f.NewStringLiteral("{}", shimast.TokenFlagsNone)
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
  expressions := stringifyJoiner_regular_properties(regular, dynamic, props.Context.Emit)
  if len(dynamic) != 0 {
    keys := make([]string, 0, len(regular))
    for _, entry := range regular {
      keys = append(keys, *entry.Key.GetSoleLiteral())
    }
    expressions = append(expressions, stringifyJoiner_dynamic_properties(dynamic, keys, props.Context.Emit))
  }

  filtered := expressions
  if !((len(regular) != 0 && regular[len(regular)-1].Meta.IsRequired() && len(dynamic) == 0) ||
    (len(regular) == 0 && len(dynamic) != 0)) {
    filtered = []*shimast.Node{
      f.NewCallExpression(
        stringifyJoiner_internal(props.Context, "jsonStringifyTail"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.TemplateFactory.Generate(expressions, props.Context.Emit),
        }),
        shimast.NodeFlagsNone,
      ),
    }
  }
  output := []*shimast.Node{f.NewStringLiteral("{", shimast.TokenFlagsNone)}
  output = append(output, filtered...)
  output = append(output, f.NewStringLiteral("}", shimast.TokenFlagsNone))
  return nativefactories.TemplateFactory.Generate(output, props.Context.Emit)
}

func (stringifyJoinerNamespace) Array(props StringifyJoiner_ArrayProps) *shimast.Node {
  return nativefactories.TemplateFactory.Generate([]*shimast.Node{
    stringifyJoiner_factory.NewStringLiteral("[", shimast.TokenFlagsNone),
    stringifyJoiner_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        nil,
        stringifyJoiner_factory.NewCallExpression(
          nativefactories.IdentifierFactory.Access(nil, props.Input, "map"),
          nil,
          nil,
          stringifyJoiner_factory.NewNodeList([]*shimast.Node{props.Arrow}),
          shimast.NodeFlagsNone,
        ),
        "join",
      ),
      nil,
      nil,
      stringifyJoiner_factory.NewNodeList([]*shimast.Node{
        stringifyJoiner_factory.NewStringLiteral(",", shimast.TokenFlagsNone),
      }),
      shimast.NodeFlagsNone,
    ),
    stringifyJoiner_factory.NewStringLiteral("]", shimast.TokenFlagsNone),
  })
}

func (stringifyJoinerNamespace) Tuple(props StringifyJoiner_TupleProps) *shimast.Node {
  if len(props.Elements) == 0 {
    return stringifyJoiner_factory.NewStringLiteral("[]", shimast.TokenFlagsNone)
  }
  if props.Rest == nil && stringifyJoiner_all_string_literals(props.Elements) {
    texts := make([]string, 0, len(props.Elements))
    for _, child := range props.Elements {
      texts = append(texts, child.Text())
    }
    return stringifyJoiner_factory.NewStringLiteral("["+joinStrings(texts, ",")+"]", shimast.TokenFlagsNone)
  }
  expressions := []*shimast.Node{stringifyJoiner_factory.NewStringLiteral("[", shimast.TokenFlagsNone)}
  for i, child := range props.Elements {
    expressions = append(expressions, child)
    if i != len(props.Elements)-1 {
      expressions = append(expressions, stringifyJoiner_factory.NewStringLiteral(",", shimast.TokenFlagsNone))
    }
  }
  if props.Rest != nil {
    expressions = append(expressions, props.Rest)
  }
  expressions = append(expressions, stringifyJoiner_factory.NewStringLiteral("]", shimast.TokenFlagsNone))
  return nativefactories.TemplateFactory.Generate(expressions)
}

func stringifyJoiner_regular_properties(regular []IExpressionEntry, dynamic []IExpressionEntry, emit ...*shimprinter.EmitContext) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  output := []*shimast.Node{}
  sort.Slice(regular, func(i int, j int) bool {
    return stringifyJoiner_sequence(regular[i].Meta) < stringifyJoiner_sequence(regular[j].Meta)
  })
  for index, entry := range regular {
    key := entry.Key.GetSoleLiteral()
    encoded, err := json.Marshal(*key)
    if err != nil {
      encoded = []byte("\"" + *key + "\"")
    }
    base := []*shimast.Node{
      f.NewStringLiteral(string(encoded)+":", shimast.TokenFlagsNone),
      entry.Expression,
    }
    if index != len(regular)-1 || len(dynamic) != 0 {
      base = append(base, f.NewStringLiteral(",", shimast.TokenFlagsNone))
    }
    empty := (!entry.Meta.IsRequired() && !entry.Meta.Nullable && entry.Meta.Size() == 0) ||
      (len(entry.Meta.Functions) != 0 && !entry.Meta.Nullable && entry.Meta.Size() == 1)
    if empty {
      continue
    }
    if !entry.Meta.IsRequired() || len(entry.Meta.Functions) != 0 || entry.Meta.Any {
      output = append(output, nativefactories.ExpressionFactory.Conditional(
        stringifyJoiner_regular_condition(entry, emit...),
        f.NewStringLiteral("", shimast.TokenFlagsNone),
        nativefactories.TemplateFactory.Generate(base, emit...),
        emit...,
      ))
    } else {
      output = append(output, base...)
    }
  }
  return output
}

func stringifyJoiner_regular_condition(entry IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  conditions := []*shimast.Node{}
  if !entry.Meta.IsRequired() || entry.Meta.Any {
    conditions = append(conditions, f.NewBinaryExpression(
      nil,
      f.NewIdentifier("undefined"),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      entry.Input,
    ))
  }
  if len(entry.Meta.Functions) != 0 || entry.Meta.Any {
    conditions = append(conditions, f.NewBinaryExpression(
      nil,
      f.NewStringLiteral("function", shimast.TokenFlagsNone),
      nil,
      f.NewToken(shimast.KindEqualsEqualsEqualsToken),
      nativefactories.ValueFactory.TYPEOF(entry.Input, emit...),
    ))
  }
  return stringifyJoiner_reduce(conditions, shimast.KindBarBarToken, emit...)
}

func stringifyJoiner_dynamic_properties(dynamic []IExpressionEntry, regular []string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  statements := []*shimast.Node{
    f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier("undefined"),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        f.NewIdentifier("value"),
      ),
      f.NewReturnStatement(f.NewStringLiteral("", shimast.TokenFlagsNone)),
      nil,
    ),
  }
  output := func() *shimast.Node {
    mapped := f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        nil,
        f.NewCallExpression(
          f.NewIdentifier("Object.entries"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        ),
        "map",
      ),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter(stringifyJoiner_binding_pattern(emit...), f.NewTypeReferenceNode(f.NewIdentifier("[string, any]"), nil), nil, emit...),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBlock(f.NewNodeList(statements), false),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    filtered := f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(nil, mapped, "filter"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Parameter("str", nil, nil, emit...)}),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewBinaryExpression(
            nil,
            f.NewStringLiteral("", shimast.TokenFlagsNone),
            nil,
            f.NewToken(shimast.KindExclamationEqualsEqualsToken),
            f.NewIdentifier("str"),
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    return f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(nil, filtered, "join"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{f.NewStringLiteral(",", shimast.TokenFlagsNone)}),
      shimast.NodeFlagsNone,
    )
  }
  if len(regular) != 0 {
    elements := make([]*shimast.Node, 0, len(regular))
    for _, key := range regular {
      elements = append(elements, f.NewStringLiteral(key, shimast.TokenFlagsNone))
    }
    statements = append(statements, f.NewIfStatement(
      f.NewCallExpression(
        nativefactories.IdentifierFactory.Access(
          nil,
          f.NewArrayLiteralExpression(f.NewNodeList(elements), false),
          "some",
        ),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{stringifyJoiner_regular_arrow(emit...)}),
        shimast.NodeFlagsNone,
      ),
      f.NewReturnStatement(f.NewStringLiteral("", shimast.TokenFlagsNone)),
      nil,
    ))
  }
  simple := len(dynamic) == 1 && dynamic[0].Key.Size() == 1 && len(dynamic[0].Key.Atomics) != 0 && dynamic[0].Key.Atomics[0].Type == "string"
  if simple {
    statements = append(statements, stringifyJoiner_stringify(dynamic[0], emit...))
    return output()
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
        f.NewNodeList([]*shimast.Node{f.NewIdentifier("key")}),
        shimast.NodeFlagsNone,
      ),
      stringifyJoiner_stringify(entry, emit...),
      nil,
    ))
  }
  statements = append(statements, f.NewReturnStatement(f.NewStringLiteral("", shimast.TokenFlagsNone)))
  return output()
}

func stringifyJoiner_stringify(entry IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  return f.NewReturnStatement(
    nativefactories.TemplateFactory.Generate([]*shimast.Node{
      f.NewCallExpression(
        f.NewIdentifier("JSON.stringify"),
        nil,
        f.NewNodeList(nil),
        f.NewNodeList([]*shimast.Node{f.NewIdentifier("key")}),
        shimast.NodeFlagsNone,
      ),
      f.NewStringLiteral(":", shimast.TokenFlagsNone),
      entry.Expression,
    }, emit...),
  )
}

func stringifyJoiner_regular_arrow(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Parameter("regular", nil, nil, emit...)}),
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
  )
}

func stringifyJoiner_binding_pattern(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  return f.NewBindingPattern(
    shimast.KindArrayBindingPattern,
    f.NewNodeList([]*shimast.Node{
      f.NewBindingElement(nil, nil, f.NewIdentifier("key"), nil),
      f.NewBindingElement(nil, nil, f.NewIdentifier("value"), nil),
    }),
  )
}

func stringifyJoiner_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  if len(expressions) == 0 {
    return f.NewKeywordExpression(shimast.KindFalseKeyword)
  }
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = f.NewBinaryExpression(nil, output, nil, f.NewToken(operator), next)
  }
  return output
}

func stringifyJoiner_sequence(meta *nativemetadata.MetadataSchema) int {
  if meta.Any || !meta.IsRequired() || len(meta.Functions) != 0 {
    return 0
  }
  return 1
}

func stringifyJoiner_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  return nativecontext.EmitFactoryOf(stringifyJoiner_factory, context.Emit).NewIdentifier(name)
}

func stringifyJoiner_all_string_literals(elements []*shimast.Expression) bool {
  for _, child := range elements {
    if !shimast.IsStringLiteral(child) {
      return false
    }
  }
  return true
}

func joinStrings(values []string, sep string) string {
  if len(values) == 0 {
    return ""
  }
  output := values[0]
  for _, value := range values[1:] {
    output += sep + value
  }
  return output
}
