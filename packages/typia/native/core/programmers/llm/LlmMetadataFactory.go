package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmMetadataFactoryNamespace struct{}

var LlmMetadataFactory = llmMetadataFactoryNamespace{}

func (llmMetadataFactoryNamespace) GetConfig(props struct {
  Context nativecontext.ITypiaContext
  Method  string
  Node    *shimast.Node
}) map[string]any {
  if props.Node == nil {
    return nil
  }

  typ := props.Context.Checker.GetTypeFromTypeNode(props.Node)
  collection := nativemetadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
    Options: nativefactories.MetadataFactory_IOptions{
      Absorb:     true,
      Escape:     false,
      Constant:   true,
      Functional: false,
    },
    Components: collection,
    Type:       typ,
  })
  if result.Success == false {
    panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
      Code:    "typia.llm." + props.Method,
      Message: "Failed to analyze generic argument \"Config\".",
    }))
  }

  meta := result.Data
  if meta.Size() != 1 ||
    len(meta.Objects) != 1 ||
    meta.Nullable == true ||
    meta.IsRequired() == false {
    panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
      Code:    "typia.llm." + props.Method,
      Message: "Invalid generic argument \"Config\". It must be a literal object type.",
    }))
  }

  obj := meta.Objects[0]
  for _, p := range obj.Type.Properties {
    if p.Key.IsSoleLiteral() == false {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    "typia.llm." + props.Method,
        Message: "Invalid generic argument \"Config\". It must be a literal object type. Do not allow dynamic properties.",
      }))
    }
  }
  for _, p := range obj.Type.Properties {
    if p.Value.Size() != 1 ||
      len(p.Value.Constants) != 1 ||
      p.Value.Nullable == true ||
      p.Value.IsRequired() == false {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    "typia.llm." + props.Method,
        Message: "Invalid generic argument \"Config\". It must be a literal object type. Do not allow variable type.",
      }))
    }
  }

  config := map[string]any{}
  for _, prop := range obj.Type.Properties {
    key := prop.Key.GetSoleLiteral()
    constant := prop.Value.Constants[0]
    value := constant.Values[0].Value
    if constant.Type == "bigint" {
      panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
        Code:    "typia.llm." + props.Method,
        Message: "Invalid generic argument \"Config\". It must be a literal object type. Do not allow bigint.",
      }))
    }
    config[*key] = value
  }
  return config
}
