package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Feature_object_entriesProps struct {
  Config  Feature_object_entriesConfig
  Context nativecontext.ITypiaContext
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  From    string
}

type Feature_object_entriesConfig struct {
  Decoder func(props Feature_object_entriesDecoderProps) *shimast.Node
  Path    bool
  Trace   bool
}

type Feature_object_entriesDecoderProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  Feature_object_entriesExplore
}

type Feature_object_entriesExplore struct {
  Tracable bool
  Source   string
  From     string
  Postfix  string
}

func Feature_object_entries(props Feature_object_entriesProps) []nativehelpers.IExpressionEntry {
  output := make([]nativehelpers.IExpressionEntry, 0, len(props.Object.Properties))
  from := props.From
  if from == "" {
    from = "object"
  }
  for _, next := range props.Object.Properties {
    sole := next.Key.GetSoleLiteral()
    propInput := feature_object_entries_property_input(props.Input, sole)
    postfix := ""
    if props.Config.Trace {
      if sole != nil {
        postfix = nativefactories.IdentifierFactory.Postfix(*sole)
      } else {
        feature_object_entries_internal(props.Context, feature_object_entries_ACCESSOR)
        postfix = feature_object_entries_get_internal_text(props.Context, feature_object_entries_ACCESSOR) + "(key)"
      }
    }
    output = append(output, nativehelpers.IExpressionEntry{
      Input: propInput,
      Key:   next.Key,
      Meta:  next.Value,
      Expression: props.Config.Decoder(Feature_object_entriesDecoderProps{
        Input:    propInput,
        Metadata: next.Value,
        Explore: Feature_object_entriesExplore{
          Tracable: props.Config.Path || props.Config.Trace,
          Source:   "function",
          From:     from,
          Postfix:  postfix,
        },
      }),
    })
  }
  return output
}

func feature_object_entries_property_input(input *shimast.Expression, sole *string) *shimast.Node {
  if sole == nil {
    return feature_object_entries_factory.NewIdentifier("value")
  }
  if feature_object_entries_variable(*sole) {
    return feature_object_entries_factory.NewPropertyAccessExpression(
      input,
      nil,
      feature_object_entries_factory.NewIdentifier(*sole),
      shimast.NodeFlagsNone,
    )
  }
  return feature_object_entries_factory.NewElementAccessExpression(
    input,
    nil,
    feature_object_entries_factory.NewStringLiteral(*sole, shimast.TokenFlagsNone),
    shimast.NodeFlagsNone,
  )
}

func feature_object_entries_variable(str string) bool {
  if len(str) == 0 || feature_object_entries_reserved[str] {
    return false
  }
  for i := 0; i < len(str); i++ {
    c := str[i]
    if i == 0 {
      if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || c == '_' || c == '$') {
        return false
      }
    } else if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$') {
      return false
    }
  }
  return true
}

func feature_object_entries_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
    return importer.Internal(name)
  }
  return feature_object_entries_factory.NewIdentifier(name)
}

func feature_object_entries_get_internal_text(context nativecontext.ITypiaContext, name string) string {
  if importer, ok := context.Importer.(interface{ GetInternalText(string) string }); ok {
    return importer.GetInternalText(name)
  }
  return name
}

const feature_object_entries_ACCESSOR = "accessExpressionAsString"

var feature_object_entries_reserved = map[string]bool{
  "break":      true,
  "case":       true,
  "catch":      true,
  "class":      true,
  "const":      true,
  "continue":   true,
  "debugger":   true,
  "default":    true,
  "delete":     true,
  "do":         true,
  "else":       true,
  "enum":       true,
  "export":     true,
  "extends":    true,
  "false":      true,
  "finally":    true,
  "for":        true,
  "function":   true,
  "if":         true,
  "import":     true,
  "in":         true,
  "instanceof": true,
  "module":     true,
  "new":        true,
  "null":       true,
  "package":    true,
  "public":     true,
  "private":    true,
  "protected":  true,
  "return":     true,
  "super":      true,
  "switch":     true,
  "this":       true,
  "throw":      true,
  "true":       true,
  "try":        true,
  "typeof":     true,
  "var":        true,
  "void":       true,
  "while":      true,
  "with":       true,
}

var feature_object_entries_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
