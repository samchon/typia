package reflect

import (
  "encoding/json"
  "strings"
  "unicode"
  "unicode/utf8"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type reflectSchemaTransformerNamespace struct{}

var ReflectSchemaTransformer = reflectSchemaTransformerNamespace{}

func (reflectSchemaTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.reflect.schema",
      Message: "no generic argument.",
    }))
  }

  top := props.Expression.TypeArguments.Nodes[0]
  if top == nil {
    return props.Expression.AsNode()
  }

  typ := props.Context.Checker.GetTypeFromTypeNode(top)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.reflect.schema",
      Message: "non-specified generic argument.",
    }))
  }

  components := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:     true,
      Constant:   true,
      Absorb:     true,
      Functional: true,
    },
    Components: components,
    Type:       typ,
  })
  if result.Success == false {
    panic(nativetransform.TransformerError_from(struct {
      Code   string
      Errors []nativetransform.TransformerError_MetadataFactory_IError
    }{
      Code:   "typia.reflect.schema",
      Errors: reflectTransformer_errors(result.Errors),
    }))
  }

  return reflectTransformer_literal(map[string]any{
    "schema":     result.Data.ToJSON(),
    "components": components.ToJSON(),
  })
}

func reflectTransformer_literal(value any) *shimast.Node {
  return nativefactories.LiteralFactory.Write(reflectTransformer_toPrimitive(value))
}

func reflectTransformer_toPrimitive(value any) any {
  data, err := json.Marshal(value)
  if err != nil {
    return nil
  }
  var decoded any
  if err := json.Unmarshal(data, &decoded); err != nil {
    return nil
  }
  return reflectTransformer_lowerKeys(decoded)
}

func reflectTransformer_lowerKeys(value any) any {
  switch v := value.(type) {
  case map[string]any:
    output := map[string]any{}
    for key, elem := range v {
      output[reflectTransformer_lowerInitial(key)] = reflectTransformer_lowerKeys(elem)
    }
    return output
  case []any:
    output := make([]any, 0, len(v))
    for _, elem := range v {
      output = append(output, reflectTransformer_lowerKeys(elem))
    }
    return output
  default:
    return value
  }
}

func reflectTransformer_lowerInitial(str string) string {
  if str == "" {
    return str
  }
  r, size := utf8.DecodeRuneInString(str)
  if r == utf8.RuneError && size == 0 {
    return str
  }
  return string(unicode.ToLower(r)) + str[size:]
}

func reflectTransformer_errors(errors []nativefactories.MetadataFactory_IError) []nativetransform.TransformerError_MetadataFactory_IError {
  output := make([]nativetransform.TransformerError_MetadataFactory_IError, 0, len(errors))
  for _, err := range errors {
    output = append(output, nativetransform.TransformerError_MetadataFactory_IError{
      Name: err.Name,
      Explore: nativetransform.TransformerError_MetadataFactory_IExplore{
        Object:    err.Explore.Object,
        Property:  err.Explore.Property,
        Parameter: err.Explore.Parameter,
        Output:    err.Explore.Output,
      },
      Messages: append([]string{}, err.Messages...),
    })
  }
  return output
}

func reflectTransformer_tupleElements(node *shimast.Node) []*shimast.Node {
  if node == nil || node.Kind != shimast.KindTupleType {
    return nil
  }
  tuple := node.AsTupleTypeNode()
  if tuple == nil || tuple.Elements == nil {
    return []*shimast.Node{}
  }
  return tuple.Elements.Nodes
}

func reflectTransformer_sourceTextFallback(node *shimast.Node) string {
  if node == nil {
    return ""
  }
  text := strings.TrimSpace(shimscanner.GetTextOfNode(node))
  if text != "" {
    return text
  }
  return ""
}
