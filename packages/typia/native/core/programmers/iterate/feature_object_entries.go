package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Feature_object_entriesProps is the argument record of Feature_object_entries,
// which turns the properties of an object type into expression entries. From
// names the parent kind and defaults to `object`.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Feature_object_entries, which turns the properties of an object type into expression entries; its 5 fields (Config, Context, Object, Input, From) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type Feature_object_entriesProps struct {
  Config  Feature_object_entriesConfig
  Context nativecontext.ITypiaContext
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  From    string
}

// Feature_object_entriesConfig is the configuration of Feature_object_entries.
// Decoder decodes one property, and Path and Trace say whether the generated
// function tracks the value path and whether it reports the exception.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of Feature_object_entries; its 3 members (Decoder, Path, Trace) are supplied by the caller, so the shared programmer holds no feature-specific behavior.
// @evidence contracts/common.md#clear-and-simple-design A 3-member record of values and callbacks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the role and the meaning of the members that are not obvious.
type Feature_object_entriesConfig struct {
  Decoder func(props Feature_object_entriesDecoderProps) *shimast.Node
  Path    bool
  Trace   bool
}

// Feature_object_entriesDecoderProps is the argument of the Decoder callback of
// Feature_object_entries: the property, its metadata, its sole key and input
// accessor, and the explore state.
//
// @evidence contracts/common.md#principled-implementation It is the argument of the Decoder callback of Feature_object_entries: the property, its metadata, its sole key and input accessor, and the explore state; its 5 fields (Metadata, Property, Key, Input, Explore) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Feature_object_entriesDecoderProps struct {
  Metadata *nativemetadata.MetadataSchema
  Property *nativemetadata.MetadataProperty
  Key      *string
  Input    *shimast.Expression
  Explore  Feature_object_entriesExplore
}

// Feature_object_entriesExplore is the explore state that Feature_object_entries
// hands to its decoder. Tracable says whether the path is tracked, Source and
// From name the position and Postfix is the path suffix of the property.
//
// @evidence contracts/common.md#principled-implementation It is the explore state that Feature_object_entries hands to its decoder; its 4 fields (Tracable, Source, From, Postfix) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type Feature_object_entriesExplore struct {
  Tracable bool
  Source   string
  From     string
  Postfix  string
}

// Feature_object_entries decodes every property of an object type into an
// IExpressionEntry, with the optional flags decided by the options and, when
// tracing, a path postfix.
//
// @evidence contracts/common.md#principled-implementation It decodes every property of an object type into an IExpressionEntry, with the optional flags decided by the options and, when tracing, a path postfix.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Feature_object_entries(props Feature_object_entriesProps) []nativehelpers.IExpressionEntry {
  output := make([]nativehelpers.IExpressionEntry, 0, len(props.Object.Properties))
  from := props.From
  if from == "" {
    from = "object"
  }
  for _, next := range props.Object.Properties {
    sole := next.Key.GetSoleLiteral()
    propInput := feature_object_entries_property_input(props.Input, sole, props.Context.Emit)
    optionalProperty := sole != nil && nativehelpers.OptionPredicator.ExactOptionalProperty(props.Context, next.Value)
    strictOptionalUndefined := sole != nil && nativehelpers.OptionPredicator.StrictOptionalUndefined(props.Context, next.Value)
    metadata := next.Value
    if strictOptionalUndefined {
      metadata = next.Value.ShallowClone()
      metadata.Optional = false
    }
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
      Input:                   propInput,
      Key:                     next.Key,
      Meta:                    next.Value,
      OptionalProperty:        optionalProperty,
      StrictOptionalUndefined: strictOptionalUndefined,
      Expression: props.Config.Decoder(Feature_object_entriesDecoderProps{
        Input:    propInput,
        Metadata: metadata,
        Property: next,
        Key:      sole,
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

func feature_object_entries_property_input(input *shimast.Expression, sole *string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(feature_object_entries_factory, emit...)
  if sole == nil {
    return f.NewIdentifier("value")
  }
  if feature_object_entries_variable(*sole) {
    return f.NewPropertyAccessExpression(
      input,
      nil,
      f.NewIdentifier(*sole),
      shimast.NodeFlagsNone,
    )
  }
  return f.NewElementAccessExpression(
    input,
    nil,
    f.NewStringLiteral(*sole, shimast.TokenFlagsNone),
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
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(feature_object_entries_factory, context.Emit)
  return f.NewIdentifier(name)
}

func feature_object_entries_get_internal_text(context nativecontext.ITypiaContext, name string) string {
  if importer := context.Importer; importer != nil {
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
