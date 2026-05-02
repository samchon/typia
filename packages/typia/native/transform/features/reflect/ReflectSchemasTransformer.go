package reflect

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type reflectSchemasTransformerNamespace struct{}

var ReflectSchemasTransformer = reflectSchemasTransformerNamespace{}

func (reflectSchemasTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.reflect.schemas",
      Message: "no generic argument.",
    }))
  }

  top := props.Expression.TypeArguments.Nodes[0]
  elements := reflectTransformer_tupleElements(top)
  if elements == nil {
    return props.Expression.AsNode()
  }

  components := schemametadata.NewMetadataCollection()
  schemas := make([]any, 0, len(elements))
  for _, node := range elements {
    if node == nil {
      return props.Expression.AsNode()
    }
    typ := props.Context.Checker.GetTypeFromTypeNode(node)
    if typ != nil && typ.IsTypeParameter() {
      panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
        Code:    "typia.reflect.schemas",
        Message: "non-specified generic argument(s).",
      }))
    }
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
        Code:   "typia.reflect.schemas",
        Errors: reflectTransformer_errors(result.Errors),
      }))
    }
    schemas = append(schemas, result.Data.ToJSON())
  }

  return reflectTransformer_literal(map[string]any{
    "schemas":    schemas,
    "components": components.ToJSON(),
  })
}
