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

// LlmParseProgrammer_DecomposeProps is the argument record of
// LlmParseProgrammer.Decompose, which builds the `llm.parse` function. Config is
// the call's literal configuration.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of LlmParseProgrammer.Decompose, which builds the `llm.parse` function; its 6 fields (Context, Config, Modulo, Functor, Metadata, Name) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type LlmParseProgrammer_DecomposeProps struct {
  Context  nativecontext.ITypiaContext
  Config   map[string]any
  Modulo   *shimast.Node
  Functor  *nativehelpers.FunctionProgrammer
  Metadata *schemametadata.MetadataSchema
  Name     *string
}

// LlmParseProgrammer_IWriteProps is the argument record of
// LlmParseProgrammer.Write, which builds the `llm.parse` function. Config is the
// call's literal configuration.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of LlmParseProgrammer.Write, which builds the `llm.parse` function; its 5 fields (Context, Modulo, Metadata, Config, Name) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
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

// ImportTypeIParameters returns the import type request that refers to
// `ILlmSchema.IParameters` of the typia package, using the emit context when one
// is given.
//
// @evidence contracts/common.md#principled-implementation It returns the import type request that refers to `ILlmSchema.IParameters` of the typia package, using the emit context when one is given.
// @evidence contracts/common.md#clear-and-simple-design One function returns the package and qualified type identifier together, shared by the parse and coerce schema declarations.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func ImportTypeIParameters(emit ...*shimprinter.EmitContext) nativecontext.ImportProgrammer_TypeProps {
  return nativecontext.ImportProgrammer_TypeProps{
    File: "typia",
    Name: nativecontext.EmitFactoryOf(llmParseProgrammer_factory, emit...).NewIdentifier("ILlmSchema.IParameters"),
  }
}
