package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmControllerProgrammerNamespace struct{}

var LlmControllerProgrammer = llmControllerProgrammerNamespace{}

type LlmControllerProgrammer_IWriteProps struct {
  Context         nativecontext.ITypiaContext
  Modulo          *shimast.Node
  Metadata        *schemametadata.MetadataSchema
  Config          map[string]any
  ClassName       *string
  Node            *shimast.Node
  NameArgument    *shimast.Node
  ExecuteArgument *shimast.Node
  ConfigArgument  *shimast.Node
}

var llmControllerProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmControllerProgrammerNamespace) Write(props LlmControllerProgrammer_IWriteProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(llmControllerProgrammer_factory, props.Context.Emit)
  typeNode := llmProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
    File:      "typia",
    Name:      "ILlmController",
    Arguments: []*shimast.TypeNode{props.Node},
  })
  value := f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
    f.NewPropertyAssignment(nil, f.NewStringLiteral("protocol", shimast.TokenFlagsNone), nil, nil, f.NewStringLiteral("class", shimast.TokenFlagsNone)),
    f.NewPropertyAssignment(nil, f.NewStringLiteral("name", shimast.TokenFlagsNone), nil, nil, props.NameArgument),
    f.NewPropertyAssignment(nil, f.NewStringLiteral("execute", shimast.TokenFlagsNone), nil, nil, props.ExecuteArgument),
    f.NewPropertyAssignment(nil, f.NewStringLiteral("application", shimast.TokenFlagsNone), nil, nil, LlmApplicationProgrammer.Write(LlmApplicationProgrammer_IWriteProps{
      Context:        props.Context,
      Modulo:         props.Modulo,
      Metadata:       props.Metadata,
      Config:         props.Config,
      Name:           props.ClassName,
      ConfigArgument: props.ConfigArgument,
    })),
  }), true)
  return f.NewAsExpression(
    f.NewSatisfiesExpression(value, typeNode),
    typeNode,
  )
}
