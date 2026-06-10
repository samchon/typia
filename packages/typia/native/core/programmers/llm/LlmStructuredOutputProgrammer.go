package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmStructuredOutputProgrammerNamespace struct{}

var LlmStructuredOutputProgrammer = llmStructuredOutputProgrammerNamespace{}

type LlmStructuredOutputProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
  Config  map[string]any
}

type LlmStructuredOutputProgrammer_IWriteProps struct {
  Context  nativecontext.ITypiaContext
  Modulo   *shimast.Node
  Type     *shimchecker.Type
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
  Name     *string
}

var llmStructuredOutputProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmStructuredOutputProgrammerNamespace) Write(props LlmStructuredOutputProgrammer_IWriteProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(llmProgrammer_method_text(props.Modulo), props.Context.Emit)
  equals := false
  if props.Config != nil {
    if v, ok := props.Config["equals"].(bool); ok {
      equals = v
    }
  }
  validateDecomposed := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: equals},
    Type:    props.Type,
    Name:    props.Name,
  })
  typeName := "unknown"
  if props.Name != nil {
    typeName = *props.Name
  }
  f := nativecontext.EmitFactoryOf(llmStructuredOutputProgrammer_factory, props.Context.Emit)
  statements := []*shimast.Node{
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "__parameters",
      Type: llmProgrammer_import_type(props.Context, ImportTypeIParameters(props.Context.Emit)),
      Value: LlmParametersProgrammer.WriteParametersExpression(LlmParametersProgrammer_IWriteProps{
        Context:  props.Context,
        Metadata: props.Metadata,
        Config:   props.Config,
      }),
    }, props.Context.Emit),
  }
  statements = append(statements, validateDecomposed.Statements...)
  statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
    Name:  "__validate",
    Value: validateDecomposed.Arrow,
  }, props.Context.Emit))
  result := nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  validateDecomposed.Functions,
    Statements: statements,
    Arrow: f.NewAsExpression(
      f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
        f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("parameters", props.Context.Emit), nil, nil, f.NewIdentifier("__parameters")),
        f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("parse", props.Context.Emit), nil, nil, f.NewArrowFunction(
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
              f.NewIdentifier("__parameters"),
            }),
            shimast.NodeFlagsNone,
          ),
        )),
        f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("coerce", props.Context.Emit), nil, nil, f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter("input", llmProgrammer_type_reference(typeName, props.Context.Emit), nil, props.Context.Emit),
          }),
          llmProgrammer_type_reference(typeName, props.Context.Emit),
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          f.NewCallExpression(
            llmProgrammer_internal(props.Context, "coerceLlmArguments"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewIdentifier("input"),
              f.NewIdentifier("__parameters"),
            }),
            shimast.NodeFlagsNone,
          ),
        )),
        f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("validate", props.Context.Emit), nil, nil, f.NewIdentifier("__validate")),
      }), true),
      llmProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "ILlmStructuredOutput",
        Arguments: []*shimast.TypeNode{llmProgrammer_type_reference(typeName, props.Context.Emit)},
      }),
    ),
  }
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func (llmStructuredOutputProgrammerNamespace) Validate(props struct {
  Config   map[string]any
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
}) []string {
  return LlmParametersProgrammer.Validate(props)
}
