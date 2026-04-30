package functional

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalValidateReturnProgrammerNamespace struct{}

var FunctionalValidateReturnProgrammer = functionalValidateReturnProgrammerNamespace{}

type FunctionalValidateReturnProgrammer_IConfig struct {
	Equals bool
}

type FunctionalValidateReturnProgrammer_IProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalValidateReturnProgrammer_IConfig
	Declaration *shimast.Node
	Expression  *shimast.Node
	Init        *shimast.Node
}

type FunctionalValidateReturnProgrammer_IDecomposeProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalValidateReturnProgrammer_IConfig
	Expression  *shimast.Node
	Declaration *shimast.Node
}

type FunctionalValidateReturnProgrammer_IDecomposeOutput struct {
	Async      bool
	Functions  []*shimast.Node
	Statements []*shimast.Node
}

func (functionalValidateReturnProgrammerNamespace) Write(props FunctionalValidateReturnProgrammer_IProps) *shimast.Node {
	result := FunctionalValidateReturnProgrammer.Decompose(FunctionalValidateReturnProgrammer_IDecomposeProps{
		Context:     props.Context,
		Modulo:      props.Modulo,
		Config:      props.Config,
		Expression:  props.Expression,
		Declaration: props.Declaration,
	})
	statements := append([]*shimast.Node{}, result.Functions...)
	statements = append(statements, functionalValidateProgrammer_factory.NewReturnStatement(
		functionalValidateProgrammer_factory.NewArrowFunction(
			functionalIsProgrammer_asyncModifiers(result.Async),
			nil,
			functionalIsProgrammer_parameters(props.Declaration),
			FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
				Context     nativecontext.ITypiaContext
				Declaration *shimast.Node
				Async       bool
			}{
				Context:     props.Context,
				Declaration: props.Declaration,
				Async:       result.Async,
			}),
			nil,
			functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			functionalValidateProgrammer_factory.NewBlock(functionalValidateProgrammer_factory.NewNodeList(result.Statements), true),
		),
	))
	return nativefactories.ExpressionFactory.SelfCall(
		functionalValidateProgrammer_factory.NewBlock(functionalValidateProgrammer_factory.NewNodeList(statements), true),
	)
}

func (functionalValidateReturnProgrammerNamespace) Decompose(props FunctionalValidateReturnProgrammer_IDecomposeProps) FunctionalValidateReturnProgrammer_IDecomposeOutput {
	output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
		Checker:     props.Context.Checker,
		Declaration: props.Declaration,
	})
	caller := functionalValidateProgrammer_factory.NewCallExpression(
		props.Expression,
		nil,
		nil,
		functionalValidateProgrammer_factory.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration)),
		shimast.NodeFlagsNone,
	)
	value := caller
	if output.Async {
		value = functionalValidateProgrammer_factory.NewAwaitExpression(caller)
	}
	name := functionalIsProgrammer_escapeDuplicate(functionalIsProgrammer_parameterNames(props.Declaration), "result")
	return FunctionalValidateReturnProgrammer_IDecomposeOutput{
		Async: output.Async,
		Functions: []*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "__validate_return",
				Value: nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
					Context: props.Context,
					Modulo:  props.Modulo,
					Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: props.Config.Equals},
					Type:    output.Type,
				}),
			}),
		},
		Statements: []*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: name,
				Value: functionalValidateProgrammer_factory.NewCallExpression(
					functionalValidateProgrammer_factory.NewIdentifier("__validate_return"),
					nil,
					nil,
					functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{value}),
					shimast.NodeFlagsNone,
				),
			}),
			functionalValidateProgrammer_factory.NewIfStatement(
				functionalValidateProgrammer_factory.NewBinaryExpression(
					nil,
					functionalValidateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword),
					nil,
					functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
					nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier(name), "success"),
				),
				functionalValidateProgrammer_factory.NewExpressionStatement(functionalValidateProgrammer_factory.NewBinaryExpression(
					nil,
					nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier(name), "errors"),
					nil,
					functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsToken),
					FunctionalValidateFunctionProgrammer.HookErrors(struct {
						Expression *shimast.Node
						Replacer   *shimast.Node
					}{
						Expression: nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier(name), "errors"),
						Replacer:   functionalValidateProgrammer_factory.NewStringLiteral("$input.return", shimast.TokenFlagsNone),
					}),
				)),
				nil,
			),
			functionalValidateProgrammer_factory.NewReturnStatement(functionalValidateProgrammer_factory.NewIdentifier(name)),
		},
	}
}
