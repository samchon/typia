package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmParseProgrammerNamespace struct{}

var LlmParseProgrammer = llmParseProgrammerNamespace{}

type LlmParseProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    any
  Name    *string
  Init    *shimast.Node
  Config  map[string]any
}

type LlmParseProgrammer_DecomposeProps struct {
  Context  nativecontext.ITypiaContext
  Config   map[string]any
  Modulo   *shimast.Node
  Functor  *nativehelpers.FunctionProgrammer
  Metadata *schemametadata.MetadataSchema
  Name     *string
}

type LlmParseProgrammer_IWriteProps struct {
  Context  nativecontext.ITypiaContext
  Modulo   *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
  Name     *string
}

var llmParseProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmParseProgrammerNamespace) Decompose(props LlmParseProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  typeName := "unknown"
  if props.Name != nil {
    typeName = *props.Name
  }
  f := nativecontext.EmitFactoryOf(llmParseProgrammer_factory, props.Context.Emit)
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: map[string]*shimast.Node{},
    Statements: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "__schema",
        Type: llmProgrammer_import_type(props.Context, ImportTypeIParameters(props.Context.Emit)),
        Value: LlmParametersProgrammer.WriteParametersExpression(LlmParametersProgrammer_IWriteProps{
          Context:  props.Context,
          Metadata: props.Metadata,
          Config:   props.Config,
        }),
      }, props.Context.Emit),
    },
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string", props.Context.Emit), nil, props.Context.Emit),
      }),
      llmProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IJsonParseResult",
        Arguments: []*shimast.TypeNode{llmProgrammer_type_reference(typeName, props.Context.Emit)},
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        llmProgrammer_internal(props.Context, "parseLlmArguments"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewIdentifier("input"),
          f.NewIdentifier("__schema"),
        }),
        shimast.NodeFlagsNone,
      ),
    ),
  }
}

func (llmParseProgrammerNamespace) Write(props LlmParseProgrammer_IWriteProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(llmProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := LlmParseProgrammer.Decompose(LlmParseProgrammer_DecomposeProps{
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

func (llmParseProgrammerNamespace) Validate(props struct {
  Config   map[string]any
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
}) []string {
  return LlmParametersProgrammer.Validate(props)
}

func ImportTypeIParameters(emit ...*shimprinter.EmitContext) nativecontext.ImportProgrammer_TypeProps {
  return nativecontext.ImportProgrammer_TypeProps{
    File: "typia",
    Name: nativecontext.EmitFactoryOf(llmParseProgrammer_factory, emit...).NewIdentifier("ILlmSchema.IParameters"),
  }
}
