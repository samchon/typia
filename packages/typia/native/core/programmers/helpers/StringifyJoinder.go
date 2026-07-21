package helpers

import (
  "encoding/json"
  "strings"

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
  Context nativecontext.ITypiaContext
  Input   *shimast.Expression
  Arrow   *shimast.Expression
  Emit    *shimprinter.EmitContext
}

type StringifyJoiner_TupleProps struct {
  Elements []*shimast.Expression
  Rest     *shimast.Expression
  Emit     *shimprinter.EmitContext
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
  expressions := stringifyJoiner_regular_properties(props.Context, regular, dynamic, props.Context.Emit)
  if len(dynamic) != 0 {
    keys := make([]string, 0, len(regular))
    for _, entry := range regular {
      keys = append(keys, *entry.Key.GetSoleLiteral())
    }
    expressions = append(expressions, stringifyJoiner_dynamic_properties(props.Context, dynamic, keys, props.Context.Emit))
  }

  // The tail helper removes the separator left behind when the last written
  // member drops out at runtime, so it may only be skipped when the last regular
  // member cannot drop. Required is not the same as cannot-drop: a required
  // `any` member is omitted whenever its value serializes to `undefined`, which
  // without this produced a trailing comma before `}` (#2253).
  filtered := expressions
  if !((len(regular) != 0 && !stringifyJoiner_entry_omittable(regular[len(regular)-1]) && len(dynamic) == 0) ||
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

// Array serializes elements through the `_jsonStringifyArray` helper rather than
// `input.map(...).join(",")`.
//
// `map` never visits a hole and leaves one behind, and `join` renders both a
// hole and a mapped `undefined` as empty text, so the two cases ECMAScript's
// SerializeJSONArray answers with `null` were emitted as nothing at all: a
// sparse array produced the malformed text `[,1]`, and an element serializing to
// `undefined` — a function, a symbol, or a `toJSON` returning nothing in an
// `any` or `unknown` slot — silently collapsed its position. A hole exists at
// runtime whatever the element type declares, so this is not confined to `any`
// (#2253).
func (stringifyJoinerNamespace) Array(props StringifyJoiner_ArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, props.Emit)
  return nativefactories.TemplateFactory.Generate([]*shimast.Node{
    f.NewStringLiteral("[", shimast.TokenFlagsNone),
    f.NewCallExpression(
      stringifyJoiner_internal(props.Context, "jsonStringifyArray"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input, props.Arrow}),
      shimast.NodeFlagsNone,
    ),
    f.NewStringLiteral("]", shimast.TokenFlagsNone),
  }, props.Emit)
}

func (stringifyJoinerNamespace) Tuple(props StringifyJoiner_TupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, props.Emit)
  if len(props.Elements) == 0 {
    return f.NewStringLiteral("[]", shimast.TokenFlagsNone)
  }
  if props.Rest == nil && stringifyJoiner_all_string_literals(props.Elements) {
    texts := make([]string, 0, len(props.Elements))
    for _, child := range props.Elements {
      texts = append(texts, child.Text())
    }
    return f.NewStringLiteral("["+joinStrings(texts, ",")+"]", shimast.TokenFlagsNone)
  }
  expressions := []*shimast.Node{f.NewStringLiteral("[", shimast.TokenFlagsNone)}
  for i, child := range props.Elements {
    expressions = append(expressions, child)
    if i != len(props.Elements)-1 {
      expressions = append(expressions, f.NewStringLiteral(",", shimast.TokenFlagsNone))
    }
  }
  if props.Rest != nil {
    expressions = append(expressions, props.Rest)
  }
  expressions = append(expressions, f.NewStringLiteral("]", shimast.TokenFlagsNone))
  return nativefactories.TemplateFactory.Generate(expressions, props.Emit)
}

func stringifyJoiner_regular_properties(context nativecontext.ITypiaContext, regular []IExpressionEntry, dynamic []IExpressionEntry, emit ...*shimprinter.EmitContext) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  output := []*shimast.Node{}
  // Members keep their declaration order, which is what the guide promises and
  // what `JSON.stringify` produces for a value assigned in that order. They used
  // to be sorted so every omissible member sat ahead of the required ones,
  // because the separator is appended to every entry but the last and a last
  // member that drops at runtime would leave a trailing comma. The caller
  // already repairs exactly that with `_jsonStringifyTail`, whose condition
  // reads the last member and now sees the declared one, so the ordering
  // constraint the sort existed for no longer applies (#2295).
  for index, entry := range regular {
    key := entry.Key.GetSoleLiteral()
    encoded, err := json.Marshal(*key)
    if err != nil {
      encoded = []byte("\"" + *key + "\"")
    }
    // encoded is escaped for a JSON string, but the literal becomes a part of a
    // template literal (TemplateFactory.Generate). The two contexts disagree, so
    // re-escape the JSON bytes for the template-literal context: otherwise `\"`
    // decays to `"`, `\\` to `\`, a control-char escape's backslash is dropped, a
    // raw backtick closes the template, and `${` starts a live interpolation.
    separator := ""
    if index != len(regular)-1 || len(dynamic) != 0 {
      separator = ","
    }
    base := []*shimast.Node{
      f.NewStringLiteral(stringifyJoiner_escape_template(string(encoded))+":", shimast.TokenFlagsNone),
      entry.Expression,
    }
    if separator != "" {
      base = append(base, f.NewStringLiteral(separator, shimast.TokenFlagsNone))
    }
    empty := (!entry.Meta.IsRequired() && !entry.Meta.Nullable && entry.Meta.Size() == 0) ||
      (len(entry.Meta.Functions) != 0 && !entry.Meta.Nullable && entry.Meta.Size() == 1)
    if empty {
      continue
    }
    if stringifyJoiner_result_undefinable(entry.Meta) {
      // An `any` or `unknown` member is serialized by JSON.stringify, which
      // answers `undefined` for a function, a symbol, and a `toJSON` returning
      // nothing while the value itself is present. Only the serialized result
      // distinguishes those from a value that has text, so the member is written
      // through the helper that reads that result — once, because a `toJSON` may
      // answer differently on a second call (#2253). The input tests below stay
      // for members whose serializer must not run on a missing value at all.
      output = append(output, f.NewCallExpression(
        stringifyJoiner_internal(context, "jsonStringifyProperty"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewStringLiteral(string(encoded)+":", shimast.TokenFlagsNone),
          entry.Expression,
          f.NewStringLiteral(separator, shimast.TokenFlagsNone),
        }),
        shimast.NodeFlagsNone,
      ))
      continue
    }
    if !entry.Meta.IsRequired() || len(entry.Meta.Functions) != 0 {
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

// stringifyJoiner_entry_omittable reports whether a member can be absent from
// the emitted object at runtime, which is exactly the set of members that are
// written through a conditional or through the property helper.
func stringifyJoiner_entry_omittable(entry IExpressionEntry) bool {
  return !entry.Meta.IsRequired() || len(entry.Meta.Functions) != 0 ||
    stringifyJoiner_result_undefinable(entry.Meta)
}

// stringifyJoiner_result_undefinable reports whether a value that is present can
// still serialize to nothing, which is the case an input test cannot see.
//
// `any` and `unknown` are serialized by JSON.stringify, which answers
// `undefined` for a function, a symbol, and a `toJSON` returning nothing. A
// declared `toJSON` is the same case without `any`: the member's text is its
// return value, so a return type that admits `undefined` admits a member with no
// text (#2253).
// StringifyJoiner_ResultUndefinable exposes the same question to the element
// positions the joiner does not build itself, so a tuple slot and an object
// member classify a value identically.
func StringifyJoiner_ResultUndefinable(meta *nativemetadata.MetadataSchema) bool {
  return stringifyJoiner_result_undefinable(meta)
}

func stringifyJoiner_result_undefinable(meta *nativemetadata.MetadataSchema) bool {
  if meta == nil {
    return false
  }
  if meta.Any {
    return true
  }
  return meta.Escaped != nil && meta.Escaped.Returns != nil && !meta.Escaped.Returns.IsRequired()
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

func stringifyJoiner_dynamic_properties(context nativecontext.ITypiaContext, dynamic []IExpressionEntry, regular []string, emit ...*shimprinter.EmitContext) *shimast.Node {
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
    statements = append(statements, stringifyJoiner_stringify(context, dynamic[0], emit...))
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
      stringifyJoiner_stringify(context, entry, emit...),
      nil,
    ))
  }
  statements = append(statements, f.NewReturnStatement(f.NewStringLiteral("", shimast.TokenFlagsNone)))
  return output()
}

func stringifyJoiner_stringify(context nativecontext.ITypiaContext, entry IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringifyJoiner_factory, emit...)
  head := nativefactories.TemplateFactory.Generate([]*shimast.Node{
    f.NewCallExpression(
      f.NewIdentifier("JSON.stringify"),
      nil,
      f.NewNodeList(nil),
      f.NewNodeList([]*shimast.Node{f.NewIdentifier("key")}),
      shimast.NodeFlagsNone,
    ),
    f.NewStringLiteral(":", shimast.TokenFlagsNone),
  }, emit...)
  if entry.Meta.Any {
    // An index-signature member takes the same contextual decision a static one
    // takes: `any` and `unknown` values are serialized by JSON.stringify, which
    // answers `undefined` for a present function, symbol, or empty `toJSON`.
    // Returning the empty string hands the surrounding filter the same sentinel
    // it already uses for a missing value, so the member and its separator drop
    // together instead of rendering the literal `undefined` (#2253).
    return f.NewReturnStatement(f.NewCallExpression(
      stringifyJoiner_internal(context, "jsonStringifyProperty"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        head,
        entry.Expression,
        f.NewStringLiteral("", shimast.TokenFlagsNone),
      }),
      shimast.NodeFlagsNone,
    ))
  }
  return f.NewReturnStatement(
    nativefactories.TemplateFactory.Generate([]*shimast.Node{head, entry.Expression}, emit...),
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

// stringifyJoiner_escape_template escapes an already-JSON-encoded key so that,
// spliced verbatim into a backtick template literal, it reproduces the exact
// JSON bytes at runtime. It doubles every backslash (so JSON escapes such as
// `\"`, `\\`, `\t`, `<` survive), escapes a backtick (which would close the
// template), and escapes the `$` of a `${` pair (which would start a live
// interpolation). A `$` not followed by `{` and every ordinary character stay
// byte-identical, so keys that need none of these are unchanged.
func stringifyJoiner_escape_template(text string) string {
  var builder strings.Builder
  builder.Grow(len(text))
  for i := 0; i < len(text); i++ {
    switch c := text[i]; {
    case c == '\\':
      builder.WriteString("\\\\")
    case c == '`':
      builder.WriteString("\\`")
    case c == '$' && i+1 < len(text) && text[i+1] == '{':
      builder.WriteString("\\$")
    default:
      builder.WriteByte(c)
    }
  }
  return builder.String()
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
