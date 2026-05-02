package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
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
  typeNode := llmProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
    File:      "typia",
    Name:      "ILlmController",
    Arguments: []*shimast.TypeNode{props.Node},
  })
  value := llmControllerProgrammer_factory.NewObjectLiteralExpression(llmControllerProgrammer_factory.NewNodeList([]*shimast.Node{
    llmControllerProgrammer_factory.NewPropertyAssignment(nil, llmControllerProgrammer_factory.NewStringLiteral("protocol", shimast.TokenFlagsNone), nil, nil, llmControllerProgrammer_factory.NewStringLiteral("class", shimast.TokenFlagsNone)),
    llmControllerProgrammer_factory.NewPropertyAssignment(nil, llmControllerProgrammer_factory.NewStringLiteral("name", shimast.TokenFlagsNone), nil, nil, props.NameArgument),
    llmControllerProgrammer_factory.NewPropertyAssignment(nil, llmControllerProgrammer_factory.NewStringLiteral("execute", shimast.TokenFlagsNone), nil, nil, props.ExecuteArgument),
    llmControllerProgrammer_factory.NewPropertyAssignment(nil, llmControllerProgrammer_factory.NewStringLiteral("application", shimast.TokenFlagsNone), nil, nil, LlmApplicationProgrammer.Write(LlmApplicationProgrammer_IWriteProps{
      Context:        props.Context,
      Modulo:         props.Modulo,
      Metadata:       props.Metadata,
      Config:         props.Config,
      Name:           props.ClassName,
      ConfigArgument: props.ConfigArgument,
    })),
  }), true)
  return llmControllerProgrammer_factory.NewAsExpression(
    llmControllerProgrammer_factory.NewSatisfiesExpression(value, typeNode),
    typeNode,
  )
}
