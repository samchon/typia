package reflect

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type reflectNameTransformerNamespace struct{}

var ReflectNameTransformer = reflectNameTransformerNamespace{}

var reflectNameTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (reflectNameTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.reflect.metadata",
      Message: "no generic argument.",
    }))
  }

  top := props.Expression.TypeArguments.Nodes[0]
  regular := false
  if len(props.Expression.TypeArguments.Nodes) > 1 {
    value := reflectNameTransformer_getMetadata(struct {
      Context nativecontext.ITypiaContext
      Node    *shimast.Node
    }{
      Context: props.Context,
      Node:    props.Expression.TypeArguments.Nodes[1],
    })
    if value.Size() == 1 && len(value.Constants) == 1 && value.Constants[0].Type == "boolean" && len(value.Constants[0].Values) == 1 {
      if b, ok := value.Constants[0].Values[0].Value.(bool); ok {
        regular = b
      }
    }
  }

  name := reflectNameTransformer_fullText(top)
  if regular {
    name = reflectNameTransformer_getMetadata(struct {
      Context nativecontext.ITypiaContext
      Node    *shimast.Node
    }{
      Context: props.Context,
      Node:    top,
    }).GetName()
  }
  return reflectNameTransformer_factory.NewStringLiteral(name, shimast.TokenFlagsNone)
}

func reflectNameTransformer_getMetadata(props struct {
  Context nativecontext.ITypiaContext
  Node    *shimast.Node
}) *schemametadata.MetadataSchema {
  typ := props.Context.Checker.GetTypeFromTypeNode(props.Node)
  collection := schemametadata.NewMetadataCollection(&schemametadata.MetadataCollection_IOptions{
    Replace: schemametadata.MetadataCollection_replace,
  })
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
    Options: nativefactories.MetadataFactory_IOptions{
      Absorb:   false,
      Constant: true,
      Escape:   false,
    },
    Components: collection,
    Type:       typ,
  })
  if result.Success == false {
    panic(nativetransform.TransformerError_from(struct {
      Code   string
      Errors []nativetransform.TransformerError_MetadataFactory_IError
    }{
      Code:   "typia.reflect.name",
      Errors: reflectTransformer_errors(result.Errors),
    }))
  }
  return result.Data
}

func reflectNameTransformer_fullText(node *shimast.Node) string {
  if node == nil {
    return ""
  }
  sourceFile := shimast.GetSourceFileOfNode(node)
  if sourceFile != nil {
    return shimscanner.GetSourceTextOfNodeFromSourceFile(sourceFile, node, true)
  }
  text := shimscanner.GetTextOfNode(node)
  if text != "" {
    return text
  }
  return reflectTransformer_sourceTextFallback(node)
}
