package helpers

import (
  "encoding/json"
  "sort"

  shimast "github.com/microsoft/typescript-go/shim/ast"
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
  if len(props.Entries) == 0 {
    return stringifyJoiner_factory.NewStringLiteral("{}", shimast.TokenFlagsNone)
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
  expressions := stringifyJoiner_regular_properties(regular, dynamic)
  if len(dynamic) != 0 {
    keys := make([]string, 0, len(regular))
    for _, entry := range regular {
      keys = append(keys, *entry.Key.GetSoleLiteral())
    }
    expressions = append(expressions, stringifyJoiner_dynamic_properties(dynamic, keys))
  }

  filtered := expressions
  if !((len(regular) != 0 && regular[len(regular)-1].Meta.IsRequired() && len(dynamic) == 0) ||
    (len(regular) == 0 && len(dynamic) != 0)) {
    filtered = []*shimast.Node{
      stringifyJoiner_factory.NewCallExpression(
        stringifyJoiner_internal(props.Context, "jsonStringifyTail"),
        nil,
        nil,
        stringifyJoiner_factory.NewNodeList([]*shimast.Node{
          nativefactories.TemplateFactory.Generate(expressions),
        }),
        shimast.NodeFlagsNone,
      ),
    }
  }
  output := []*shimast.Node{stringifyJoiner_factory.NewStringLiteral("{", shimast.TokenFlagsNone)}
  output = append(output, filtered...)
  output = append(output, stringifyJoiner_factory.NewStringLiteral("}", shimast.TokenFlagsNone))
  return nativefactories.TemplateFactory.Generate(output)
}

func (stringifyJoinerNamespace) Array(props StringifyJoiner_ArrayProps) *shimast.Node {
  return nativefactories.TemplateFactory.Generate([]*shimast.Node{
    stringifyJoiner_factory.NewStringLiteral("[", shimast.TokenFlagsNone),
    stringifyJoiner_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        stringifyJoiner_factory.NewCallExpression(
          nativefactories.IdentifierFactory.Access(props.Input, "map"),
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

func stringifyJoiner_regular_properties(regular []IExpressionEntry, dynamic []IExpressionEntry) []*shimast.Node {
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
      stringifyJoiner_factory.NewStringLiteral(string(encoded)+":", shimast.TokenFlagsNone),
      entry.Expression,
    }
    if index != len(regular)-1 || len(dynamic) != 0 {
      base = append(base, stringifyJoiner_factory.NewStringLiteral(",", shimast.TokenFlagsNone))
    }
    empty := (!entry.Meta.IsRequired() && !entry.Meta.Nullable && entry.Meta.Size() == 0) ||
      (len(entry.Meta.Functions) != 0 && !entry.Meta.Nullable && entry.Meta.Size() == 1)
    if empty {
      continue
    }
    if !entry.Meta.IsRequired() || len(entry.Meta.Functions) != 0 || entry.Meta.Any {
      output = append(output, stringifyJoiner_factory.NewConditionalExpression(
        stringifyJoiner_regular_condition(entry),
        nil,
        stringifyJoiner_factory.NewStringLiteral("", shimast.TokenFlagsNone),
        nil,
        nativefactories.TemplateFactory.Generate(base),
      ))
    } else {
      output = append(output, base...)
    }
  }
  return output
}

func stringifyJoiner_regular_condition(entry IExpressionEntry) *shimast.Node {
  conditions := []*shimast.Node{}
  if !entry.Meta.IsRequired() || entry.Meta.Any {
    conditions = append(conditions, stringifyJoiner_factory.NewBinaryExpression(
      nil,
      stringifyJoiner_factory.NewIdentifier("undefined"),
      nil,
      stringifyJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
      entry.Input,
    ))
  }
  if len(entry.Meta.Functions) != 0 || entry.Meta.Any {
    conditions = append(conditions, stringifyJoiner_factory.NewBinaryExpression(
      nil,
      stringifyJoiner_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
      nil,
      stringifyJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
      nativefactories.ValueFactory.TYPEOF(entry.Input),
    ))
  }
  return stringifyJoiner_reduce(conditions, shimast.KindBarBarToken)
}

func stringifyJoiner_dynamic_properties(dynamic []IExpressionEntry, regular []string) *shimast.Node {
  statements := []*shimast.Node{
    stringifyJoiner_factory.NewIfStatement(
      stringifyJoiner_factory.NewBinaryExpression(
        nil,
        stringifyJoiner_factory.NewIdentifier("undefined"),
        nil,
        stringifyJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
        stringifyJoiner_factory.NewIdentifier("value"),
      ),
      stringifyJoiner_factory.NewReturnStatement(stringifyJoiner_factory.NewStringLiteral("", shimast.TokenFlagsNone)),
      nil,
    ),
  }
  output := func() *shimast.Node {
    mapped := stringifyJoiner_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        stringifyJoiner_factory.NewCallExpression(
          stringifyJoiner_factory.NewIdentifier("Object.entries"),
          nil,
          nil,
          stringifyJoiner_factory.NewNodeList([]*shimast.Node{stringifyJoiner_factory.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        ),
        "map",
      ),
      nil,
      nil,
      stringifyJoiner_factory.NewNodeList([]*shimast.Node{
        stringifyJoiner_factory.NewArrowFunction(
          nil,
          nil,
          stringifyJoiner_factory.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter(stringifyJoiner_binding_pattern(), stringifyJoiner_factory.NewTypeReferenceNode(stringifyJoiner_factory.NewIdentifier("[string, any]"), nil), nil),
          }),
          nil,
          nil,
          stringifyJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
          stringifyJoiner_factory.NewBlock(stringifyJoiner_factory.NewNodeList(statements), false),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    filtered := stringifyJoiner_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(mapped, "filter"),
      nil,
      nil,
      stringifyJoiner_factory.NewNodeList([]*shimast.Node{
        stringifyJoiner_factory.NewArrowFunction(
          nil,
          nil,
          stringifyJoiner_factory.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Parameter("str", nil, nil)}),
          nil,
          nil,
          stringifyJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
          stringifyJoiner_factory.NewBinaryExpression(
            nil,
            stringifyJoiner_factory.NewStringLiteral("", shimast.TokenFlagsNone),
            nil,
            stringifyJoiner_factory.NewToken(shimast.KindExclamationEqualsEqualsToken),
            stringifyJoiner_factory.NewIdentifier("str"),
          ),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    return stringifyJoiner_factory.NewCallExpression(
      nativefactories.IdentifierFactory.Access(filtered, "join"),
      nil,
      nil,
      stringifyJoiner_factory.NewNodeList([]*shimast.Node{stringifyJoiner_factory.NewStringLiteral(",", shimast.TokenFlagsNone)}),
      shimast.NodeFlagsNone,
    )
  }
  if len(regular) != 0 {
    elements := make([]*shimast.Node, 0, len(regular))
    for _, key := range regular {
      elements = append(elements, stringifyJoiner_factory.NewStringLiteral(key, shimast.TokenFlagsNone))
    }
    statements = append(statements, stringifyJoiner_factory.NewIfStatement(
      stringifyJoiner_factory.NewCallExpression(
        nativefactories.IdentifierFactory.Access(
          stringifyJoiner_factory.NewArrayLiteralExpression(stringifyJoiner_factory.NewNodeList(elements), false),
          "some",
        ),
        nil,
        nil,
        stringifyJoiner_factory.NewNodeList([]*shimast.Node{stringifyJoiner_regular_arrow()}),
        shimast.NodeFlagsNone,
      ),
      stringifyJoiner_factory.NewReturnStatement(stringifyJoiner_factory.NewStringLiteral("", shimast.TokenFlagsNone)),
      nil,
    ))
  }
  simple := len(dynamic) == 1 && dynamic[0].Key.Size() == 1 && len(dynamic[0].Key.Atomics) != 0 && dynamic[0].Key.Atomics[0].Type == "string"
  if simple {
    statements = append(statements, stringifyJoiner_stringify(dynamic[0]))
    return output()
  }
  for _, entry := range dynamic {
    statements = append(statements, stringifyJoiner_factory.NewIfStatement(
      stringifyJoiner_factory.NewCallExpression(
        stringifyJoiner_factory.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
          top      bool
          metadata *nativemetadata.MetadataSchema
        }{top: true, metadata: entry.Key})+"/).test"),
        nil,
        nil,
        stringifyJoiner_factory.NewNodeList([]*shimast.Node{stringifyJoiner_factory.NewIdentifier("key")}),
        shimast.NodeFlagsNone,
      ),
      stringifyJoiner_stringify(entry),
      nil,
    ))
  }
  statements = append(statements, stringifyJoiner_factory.NewReturnStatement(stringifyJoiner_factory.NewStringLiteral("", shimast.TokenFlagsNone)))
  return output()
}

func stringifyJoiner_stringify(entry IExpressionEntry) *shimast.Node {
  return stringifyJoiner_factory.NewReturnStatement(
    nativefactories.TemplateFactory.Generate([]*shimast.Node{
      stringifyJoiner_factory.NewCallExpression(
        stringifyJoiner_factory.NewIdentifier("JSON.stringify"),
        nil,
        stringifyJoiner_factory.NewNodeList(nil),
        stringifyJoiner_factory.NewNodeList([]*shimast.Node{stringifyJoiner_factory.NewIdentifier("key")}),
        shimast.NodeFlagsNone,
      ),
      stringifyJoiner_factory.NewStringLiteral(":", shimast.TokenFlagsNone),
      entry.Expression,
    }),
  )
}

func stringifyJoiner_regular_arrow() *shimast.Node {
  return stringifyJoiner_factory.NewArrowFunction(
    nil,
    nil,
    stringifyJoiner_factory.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Parameter("regular", nil, nil)}),
    nil,
    nil,
    stringifyJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    stringifyJoiner_factory.NewBinaryExpression(
      nil,
      stringifyJoiner_factory.NewIdentifier("regular"),
      nil,
      stringifyJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
      stringifyJoiner_factory.NewIdentifier("key"),
    ),
  )
}

func stringifyJoiner_binding_pattern() *shimast.Node {
  return stringifyJoiner_factory.NewBindingPattern(
    shimast.KindArrayBindingPattern,
    stringifyJoiner_factory.NewNodeList([]*shimast.Node{
      stringifyJoiner_factory.NewBindingElement(nil, nil, stringifyJoiner_factory.NewIdentifier("key"), nil),
      stringifyJoiner_factory.NewBindingElement(nil, nil, stringifyJoiner_factory.NewIdentifier("value"), nil),
    }),
  )
}

func stringifyJoiner_reduce(expressions []*shimast.Node, operator shimast.Kind) *shimast.Node {
  if len(expressions) == 0 {
    return stringifyJoiner_factory.NewKeywordExpression(shimast.KindFalseKeyword)
  }
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = stringifyJoiner_factory.NewBinaryExpression(nil, output, nil, stringifyJoiner_factory.NewToken(operator), next)
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
  if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
    return importer.Internal(name)
  }
  return stringifyJoiner_factory.NewIdentifier(name)
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
