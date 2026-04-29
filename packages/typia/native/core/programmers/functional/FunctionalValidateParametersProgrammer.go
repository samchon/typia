package functional

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalValidateParametersProgrammerNamespace struct{}

var FunctionalValidateParametersProgrammer = functionalValidateParametersProgrammerNamespace{}

type FunctionalValidateParametersProgrammer_IConfig struct {
	Equals bool
}

type FunctionalValidateParametersProgrammer_IProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalValidateParametersProgrammer_IConfig
	Declaration *shimast.Node
	Expression  *shimast.Node
	Init        *shimast.Node
}

type FunctionalValidateParametersProgrammer_IDecomposeProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalValidateParametersProgrammer_IConfig
	Declaration *shimast.Node
}

type FunctionalValidateParametersProgrammer_IDecomposeOutput struct {
	Functions  []*shimast.Node
	Statements []*shimast.Node
}

func (functionalValidateParametersProgrammerNamespace) Write(props FunctionalValidateParametersProgrammer_IProps) *shimast.Node {
	output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
		Checker:     props.Context.Checker,
		Declaration: props.Declaration,
	})
	result := FunctionalValidateParametersProgrammer.Decompose(FunctionalValidateParametersProgrammer_IDecomposeProps{
		Context:     props.Context,
		Modulo:      props.Modulo,
		Config:      props.Config,
		Declaration: props.Declaration,
	})
	caller := functionalValidateProgrammer_factory.NewCallExpression(
		props.Expression,
		nil,
		nil,
		functionalValidateProgrammer_factory.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration)),
		shimast.NodeFlagsNone,
	)
	data := caller
	if output.Async {
		data = functionalValidateProgrammer_factory.NewAwaitExpression(caller)
	}
	statements := append([]*shimast.Node{}, result.Functions...)
	body := append([]*shimast.Node{}, result.Statements...)
	body = append(body, functionalValidateProgrammer_factory.NewReturnStatement(functionalValidateProgrammer_factory.NewObjectLiteralExpression(functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
		functionalValidateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("success"), nil, nil, functionalValidateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)),
		functionalValidateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("data"), nil, nil, data),
		functionalValidateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors"), nil, nil, functionalValidateProgrammer_factory.NewArrayLiteralExpression(functionalValidateProgrammer_factory.NewNodeList(nil), false)),
	}), true)))
	statements = append(statements, functionalValidateProgrammer_factory.NewReturnStatement(
		functionalValidateProgrammer_factory.NewArrowFunction(
			functionalIsProgrammer_asyncModifiers(output.Async),
			nil,
			functionalIsProgrammer_parameters(props.Declaration),
			FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
				Context     nativecontext.ITypiaContext
				Declaration *shimast.Node
				Async       bool
			}{
				Context:     props.Context,
				Declaration: props.Declaration,
				Async:       output.Async,
			}),
			nil,
			functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			functionalValidateProgrammer_factory.NewBlock(functionalValidateProgrammer_factory.NewNodeList(body), true),
		),
	))
	return nativefactories.ExpressionFactory.SelfCall(
		functionalValidateProgrammer_factory.NewBlock(functionalValidateProgrammer_factory.NewNodeList(statements), true),
	)
}

func (functionalValidateParametersProgrammerNamespace) Decompose(props FunctionalValidateParametersProgrammer_IDecomposeProps) FunctionalValidateParametersProgrammer_IDecomposeOutput {
	parameters := functionalIsProgrammer_parameterNodes(props.Declaration)
	resultName := functionalIsProgrammer_escapeDuplicate(functionalIsProgrammer_parameterNames(props.Declaration), "paramErrorResults")
	functions := make([]*shimast.Node, 0, len(parameters))
	results := make([]*shimast.Node, 0, len(parameters))
	for i, p := range parameters {
		functions = append(functions, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: "__validate_param_" + functionalIsProgrammer_itoa(i),
			Value: nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
				Context: props.Context,
				Modulo:  props.Modulo,
				Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: props.Config.Equals},
				Type: props.Context.Checker.GetTypeFromTypeNode(
					functionalIsProgrammer_parameterType(p, nativefactories.TypeFactory.Keyword("any")),
				),
			}),
		}))
		results = append(results, functionalValidateProgrammer_factory.NewAsExpression(
			functionalValidateProgrammer_factory.NewCallExpression(
				functionalValidateProgrammer_factory.NewIdentifier("__validate_param_"+functionalIsProgrammer_itoa(i)),
				nil,
				nil,
				functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
					functionalValidateProgrammer_factory.NewIdentifier(functionalIsProgrammer_parameterName(p)),
				}),
				shimast.NodeFlagsNone,
			),
			functionalValidateProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File: "typia",
				Name: "IValidation.IFailure",
			}),
		))
	}
	validationResultArray := functionalValidateProgrammer_factory.NewArrayLiteralExpression(functionalValidateProgrammer_factory.NewNodeList(results), true)
	errorMatrix := functionalValidateProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(validationResultArray, "map"),
		nil,
		nil,
		functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
			functionalValidateProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
					nativefactories.IdentifierFactory.Parameter("r", nil, nil),
					nativefactories.IdentifierFactory.Parameter("i", nil, nil),
				}),
				nil,
				nil,
				functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				functionalValidateProgrammer_factory.NewConditionalExpression(
					functionalValidateProgrammer_factory.NewBinaryExpression(
						nil,
						functionalValidateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
						nil,
						functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
						nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier("r"), "success"),
					),
					nil,
					functionalValidateProgrammer_factory.NewIdentifier("r"),
					nil,
					functionalValidateProgrammer_factory.NewObjectLiteralExpression(functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
						functionalValidateProgrammer_factory.NewSpreadAssignment(functionalValidateProgrammer_factory.NewIdentifier("r")),
						functionalValidateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors"), nil, nil, FunctionalValidateFunctionProgrammer.HookErrors(struct {
							Expression *shimast.Node
							Replacer   *shimast.Node
						}{
							Expression: nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier("r"), "errors"),
							Replacer: functionalValidateProgrammer_factory.NewTemplateExpression(
								functionalValidateProgrammer_factory.NewTemplateHead("$input.parameters[", "$input.parameters[", shimast.TokenFlagsNone),
								functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
									functionalValidateProgrammer_factory.NewTemplateSpan(
										functionalValidateProgrammer_factory.NewIdentifier("i"),
										functionalValidateProgrammer_factory.NewTemplateTail("]", "]", shimast.TokenFlagsNone),
									),
								}),
							),
						})),
					}), true),
				),
			),
		}),
		shimast.NodeFlagsNone,
	)
	failures := functionalValidateProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(errorMatrix, "filter"),
		nil,
		nil,
		functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
			functionalValidateProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
					nativefactories.IdentifierFactory.Parameter("r", nil, nil),
				}),
				nil,
				nil,
				functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				functionalValidateProgrammer_factory.NewBinaryExpression(
					nil,
					functionalValidateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword),
					nil,
					functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
					nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier("r"), "success"),
				),
			),
		}),
		shimast.NodeFlagsNone,
	)
	return FunctionalValidateParametersProgrammer_IDecomposeOutput{
		Functions: functions,
		Statements: []*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name:  resultName,
				Value: failures,
			}),
			functionalValidateProgrammer_factory.NewIfStatement(
				functionalValidateProgrammer_factory.NewBinaryExpression(
					nil,
					nativefactories.ExpressionFactory.Number(0),
					nil,
					functionalValidateProgrammer_factory.NewToken(shimast.KindExclamationEqualsEqualsToken),
					nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier(resultName), "length"),
				),
				functionalValidateProgrammer_factory.NewReturnStatement(functionalValidateProgrammer_factory.NewObjectLiteralExpression(functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
					functionalValidateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("success"), nil, nil, functionalValidateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)),
					functionalValidateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors"), nil, nil, functionalValidateProgrammer_factory.NewCallExpression(
						nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewCallExpression(
							nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier(resultName), "map"),
							nil,
							nil,
							functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
								functionalValidateProgrammer_factory.NewArrowFunction(
									nil,
									nil,
									functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
										nativefactories.IdentifierFactory.Parameter("r", nativefactories.TypeFactory.Keyword("any"), nil),
									}),
									nil,
									nil,
									functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
									nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier("r"), "errors"),
								),
							}),
							shimast.NodeFlagsNone,
						), "flat"),
						nil,
						nil,
						nil,
						shimast.NodeFlagsNone,
					)),
				}), true)),
				nil,
			),
		},
	}
}
