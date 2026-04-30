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
	functor := nativehelpers.NewFunctionProgrammer(llmProgrammer_method_text(props.Modulo))
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
	statements := []*shimast.Node{
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: "__parameters",
			Type: llmProgrammer_import_type(props.Context, ImportTypeIParameters()),
			Value: LlmParametersProgrammer.WriteParametersExpression(LlmParametersProgrammer_IWriteProps{
				Context:  props.Context,
				Metadata: props.Metadata,
				Config:   props.Config,
			}),
		}),
	}
	statements = append(statements, validateDecomposed.Statements...)
	statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
		Name:  "__validate",
		Value: validateDecomposed.Arrow,
	}))
	result := nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  validateDecomposed.Functions,
		Statements: statements,
		Arrow: llmStructuredOutputProgrammer_factory.NewAsExpression(
			llmStructuredOutputProgrammer_factory.NewObjectLiteralExpression(llmStructuredOutputProgrammer_factory.NewNodeList([]*shimast.Node{
				llmStructuredOutputProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("parameters"), nil, nil, llmStructuredOutputProgrammer_factory.NewIdentifier("__parameters")),
				llmStructuredOutputProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("parse"), nil, nil, llmStructuredOutputProgrammer_factory.NewArrowFunction(
					nil,
					nil,
					llmStructuredOutputProgrammer_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string"), nil),
					}),
					llmProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
						File:      "typia",
						Name:      "IJsonParseResult",
						Arguments: []*shimast.TypeNode{llmProgrammer_type_reference(typeName)},
					}),
					nil,
					llmStructuredOutputProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					llmStructuredOutputProgrammer_factory.NewCallExpression(
						llmProgrammer_internal(props.Context, "parseLlmArguments"),
						nil,
						nil,
						llmStructuredOutputProgrammer_factory.NewNodeList([]*shimast.Node{
							llmStructuredOutputProgrammer_factory.NewIdentifier("input"),
							llmStructuredOutputProgrammer_factory.NewIdentifier("__parameters"),
						}),
						shimast.NodeFlagsNone,
					),
				)),
				llmStructuredOutputProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("coerce"), nil, nil, llmStructuredOutputProgrammer_factory.NewArrowFunction(
					nil,
					nil,
					llmStructuredOutputProgrammer_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter("input", llmProgrammer_type_reference(typeName), nil),
					}),
					llmProgrammer_type_reference(typeName),
					nil,
					llmStructuredOutputProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					llmStructuredOutputProgrammer_factory.NewCallExpression(
						llmProgrammer_internal(props.Context, "coerceLlmArguments"),
						nil,
						nil,
						llmStructuredOutputProgrammer_factory.NewNodeList([]*shimast.Node{
							llmStructuredOutputProgrammer_factory.NewIdentifier("input"),
							llmStructuredOutputProgrammer_factory.NewIdentifier("__parameters"),
						}),
						shimast.NodeFlagsNone,
					),
				)),
				llmStructuredOutputProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("validate"), nil, nil, llmStructuredOutputProgrammer_factory.NewIdentifier("__validate")),
			}), true),
			llmProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File:      "typia",
				Name:      "ILlmStructuredOutput",
				Arguments: []*shimast.TypeNode{llmProgrammer_type_reference(typeName)},
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
