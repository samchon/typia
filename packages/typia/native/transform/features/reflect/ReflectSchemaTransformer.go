package reflect

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
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
    Checker: props.Context.Checker,
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
  }, props.Context.Emit)
}

// reflectTransformer_literal lowers a metadata tree into its object literal.
//
// This used to round-trip the tree through `encoding/json` and then lowercase
// each key's initial, which is exactly what `LiteralFactory` already does when
// it reflects a struct. The round trip was not merely redundant: JSON has no
// bigint, so a `bigint` constant -- the one value in the tree that is neither
// a string nor a JSON number -- could not survive it. It came back as the
// object its fields happened to spell, and `IMetadataSchema.IValue` declares
// `bigint` there.
//
// Writing the tree directly leaves every other member identical (diffed over a
// metadata tree spanning objects, optional and nullable members, tags, arrays,
// tuples, sets, maps, natives, functions, aliases, and unions: the bigint
// values were the only difference) and lets a bigint stay a bigint.
func reflectTransformer_literal(value any, emit ...*shimprinter.EmitContext) *shimast.Node {
  return nativefactories.LiteralFactory.Write(value, emit...)
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
