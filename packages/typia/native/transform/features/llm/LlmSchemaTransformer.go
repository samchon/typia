package llm

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmSchemaTransformerNamespace struct{}

var LlmSchemaTransformer = llmSchemaTransformerNamespace{}

var llmTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmSchemaTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  top, typ, ok := llmTransformer_type_argument(props, "typia.llm.schema")
  if ok == false {
    return props.Expression.AsNode()
  }
  config := llmTransformer_config(props, "schema")
  analyze := func(validate bool) *schemametadata.MetadataSchema {
    return llmTransformer_analyze(llmTransformer_analyzeProps{
      Context: props.Context,
      Type:    typ,
      Code:    "typia.llm.schema",
      Absorb:  validate,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        if validate == false {
          return nil
        }
        return nativellmprogrammers.LlmSchemaProgrammer.Validate(struct {
          Config   map[string]any
          Metadata *schemametadata.MetadataSchema
          Explore  nativefactories.MetadataFactory_IExplore
        }{Config: config, Metadata: next.Metadata, Explore: next.Explore})
      },
    })
  }
  analyze(true)
  expr := nativellmprogrammers.LlmSchemaProgrammer.Write(nativellmprogrammers.LlmSchemaProgrammer_IWriteProps{
    Context:  props.Context,
    Metadata: analyze(false),
    Config:   config,
  })
  if props.Expression.Arguments != nil && len(props.Expression.Arguments.Nodes) != 0 && expr.Kind == shimast.KindArrowFunction {
    return llmTransformer_factory.NewCallExpression(
      expr,
      nil,
      nil,
      llmTransformer_factory.NewNodeList([]*shimast.Node{props.Expression.Arguments.Nodes[0]}),
      shimast.NodeFlagsNone,
    )
  }
  _ = top
  return expr
}

type llmTransformer_analyzeProps struct {
  Context    nativecontext.ITypiaContext
  Type       *shimchecker.Type
  Code       string
  Absorb     bool
  Functional bool
  Validate   func(props struct {
    Metadata *schemametadata.MetadataSchema
    Explore  nativefactories.MetadataFactory_IExplore
    Top      *schemametadata.MetadataSchema
  }) []string
}

func llmTransformer_type_argument(props nativetransform.ITransformProps, code string) (*shimast.Node, *shimchecker.Type, bool) {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{Code: code, Message: "no generic argument."}))
  }
  top := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(top)
  return top, typ, true
}

func llmTransformer_config(props nativetransform.ITransformProps, method string) map[string]any {
  var node *shimast.Node
  if props.Expression != nil && props.Expression.TypeArguments != nil && len(props.Expression.TypeArguments.Nodes) > 1 {
    node = props.Expression.TypeArguments.Nodes[1]
  }
  return nativellmprogrammers.LlmMetadataFactory.GetConfig(struct {
    Context nativecontext.ITypiaContext
    Method  string
    Node    *shimast.Node
  }{Context: props.Context, Method: method, Node: node})
}

func llmTransformer_analyze(props llmTransformer_analyzeProps) *schemametadata.MetadataSchema {
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
    Options: nativefactories.MetadataFactory_IOptions{
      Absorb:     props.Absorb,
      Escape:     true,
      Constant:   true,
      Functional: props.Functional,
      Validate:   props.Validate,
    },
    Components: schemametadata.NewMetadataCollection(&schemametadata.MetadataCollection_IOptions{
      Replace: schemametadata.MetadataCollection_replace,
    }),
    Type: props.Type,
  })
  if result.Success == false {
    panic(nativetransform.TransformerError_from(struct {
      Code   string
      Errors []nativetransform.TransformerError_MetadataFactory_IError
    }{
      Code:   props.Code,
      Errors: llmTransformer_errors(result.Errors),
    }))
  }
  return result.Data
}

func llmTransformer_errors(errors []nativefactories.MetadataFactory_IError) []nativetransform.TransformerError_MetadataFactory_IError {
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

func llmTransformer_type_name(node *shimast.Node) *string {
  if node == nil {
    return nil
  }
  name := strings.TrimSpace(shimscanner.GetTextOfNode(node))
  return &name
}

func llmTransformer_argument(props nativetransform.ITransformProps, index int) *shimast.Node {
  if props.Expression == nil || props.Expression.Arguments == nil || len(props.Expression.Arguments.Nodes) <= index {
    return nil
  }
  return props.Expression.Arguments.Nodes[index]
}

func llmTransformer_require_argument(props nativetransform.ITransformProps, code string, index int, message string) {
  if llmTransformer_argument(props, index) == nil {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{Code: code, Message: message}))
  }
}
