package iterate

import (
  "encoding/json"
  "sort"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Stringify_regular_propertiesProps struct {
  Regular []nativehelpers.IExpressionEntry
  Dynamic []nativehelpers.IExpressionEntry
  Emit    *shimprinter.EmitContext
}

func Stringify_regular_properties(props Stringify_regular_propertiesProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_regular_properties_factory, props.Emit)
  output := []*shimast.Node{}

  sort.Slice(props.Regular, func(i int, j int) bool {
    return stringify_regular_properties_sequence(props.Regular[i].Meta) < stringify_regular_properties_sequence(props.Regular[j].Meta)
  })
  for index, entry := range props.Regular {
    key := entry.Key.GetSoleLiteral()
    if key == nil {
      continue
    }
    encoded, err := json.Marshal(*key)
    if err != nil {
      encoded = []byte("\"" + *key + "\"")
    }
    base := []*shimast.Node{
      f.NewStringLiteral(string(encoded)+":", shimast.TokenFlagsNone),
      entry.Expression,
    }
    if index != len(props.Regular)-1 || len(props.Dynamic) != 0 {
      base = append(base, f.NewStringLiteral(",", shimast.TokenFlagsNone))
    }

    empty := (!entry.Meta.IsRequired() && !entry.Meta.Nullable && entry.Meta.Size() == 0) ||
      (len(entry.Meta.Functions) != 0 && !entry.Meta.Nullable && entry.Meta.Size() == 1)
    if empty {
      continue
    }
    if !entry.Meta.IsRequired() || len(entry.Meta.Functions) != 0 || entry.Meta.Any {
      output = append(output, nativefactories.ExpressionFactory.Conditional(
        stringify_regular_properties_condition(entry, props.Emit),
        f.NewStringLiteral("", shimast.TokenFlagsNone),
        nativefactories.TemplateFactory.Generate(base),
      ))
    } else {
      output = append(output, base...)
    }
  }
  return output
}

func stringify_regular_properties_condition(entry nativehelpers.IExpressionEntry, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_regular_properties_factory, emit...)
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
      nativefactories.ValueFactory.TYPEOF(entry.Input),
    ))
  }
  return stringify_regular_properties_reduce(conditions, shimast.KindBarBarToken, emit...)
}

func stringify_regular_properties_reduce(expressions []*shimast.Node, operator shimast.Kind, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_regular_properties_factory, emit...)
  if len(expressions) == 0 {
    return f.NewKeywordExpression(shimast.KindFalseKeyword)
  }
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = f.NewBinaryExpression(
      nil,
      output,
      nil,
      f.NewToken(operator),
      next,
    )
  }
  return output
}

func stringify_regular_properties_sequence(meta *nativemetadata.MetadataSchema) int {
  if meta.Any || !meta.IsRequired() || len(meta.Functions) != 0 {
    return 0
  }
  return 1
}

var stringify_regular_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
