package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmCoerceProgrammerNamespace struct{}

var LlmCoerceProgrammer = llmCoerceProgrammerNamespace{}

type LlmCoerceProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    any
  Name    *string
  Init    *shimast.Node
  Config  map[string]any
}

type LlmCoerceProgrammer_DecomposeProps struct {
  Context  nativecontext.ITypiaContext
  Config   map[string]any
  Modulo   *shimast.Node
  Functor  *nativehelpers.FunctionProgrammer
  Metadata *schemametadata.MetadataSchema
  Name     *string
}

type LlmCoerceProgrammer_IWriteProps struct {
  Context  nativecontext.ITypiaContext
  Modulo   *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
  Name     *string
}

var llmCoerceProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmCoerceProgrammerNamespace) Decompose(props LlmCoerceProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  typeName := "unknown"
  if props.Name != nil {
    typeName = *props.Name
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: map[string]*shimast.Node{},
    Statements: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "__schema",
        Type: llmProgrammer_import_type(props.Context, ImportTypeIParameters()),
        Value: LlmParametersProgrammer.WriteParametersExpression(LlmParametersProgrammer_IWriteProps{
          Context:  props.Context,
          Metadata: props.Metadata,
          Config:   props.Config,
        }),
      }),
    },
    Arrow: llmCoerceProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      llmCoerceProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", llmProgrammer_type_reference(typeName), nil),
      }),
      llmProgrammer_type_reference(typeName),
      nil,
      llmCoerceProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      llmCoerceProgrammer_factory.NewCallExpression(
        llmProgrammer_internal(props.Context, "coerceLlmArguments"),
        nil,
        nil,
        llmCoerceProgrammer_factory.NewNodeList([]*shimast.Node{
          llmCoerceProgrammer_factory.NewIdentifier("input"),
          llmCoerceProgrammer_factory.NewIdentifier("__schema"),
        }),
        shimast.NodeFlagsNone,
      ),
    ),
  }
}

func (llmCoerceProgrammerNamespace) Write(props LlmCoerceProgrammer_IWriteProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(llmProgrammer_method_text(props.Modulo))
  result := LlmCoerceProgrammer.Decompose(LlmCoerceProgrammer_DecomposeProps{
    Context:  props.Context,
    Config:   props.Config,
    Modulo:   props.Modulo,
    Functor:  functor,
    Metadata: props.Metadata,
    Name:     props.Name,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func (llmCoerceProgrammerNamespace) Validate(props struct {
  Config   map[string]any
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
}) []string {
  return LlmParametersProgrammer.Validate(props)
}
