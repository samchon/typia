package functional

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalIsReturnProgrammerNamespace struct{}

var FunctionalIsReturnProgrammer = functionalIsReturnProgrammerNamespace{}

type FunctionalIsReturnProgrammer_IConfig struct {
	Equals bool
}

type FunctionalIsReturnProgrammer_IProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalIsReturnProgrammer_IConfig
	Declaration *shimast.Node
	Expression  *shimast.Node
	Init        *shimast.Node
}

type FunctionalIsReturnProgrammer_IDecomposeProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalIsReturnProgrammer_IConfig
	Expression  *shimast.Node
	Declaration *shimast.Node
}

type FunctionalIsReturnProgrammer_IDecomposeOutput struct {
	Async      bool
	Functions  []*shimast.Node
	Statements []*shimast.Node
}

func (functionalIsReturnProgrammerNamespace) Write(props FunctionalIsReturnProgrammer_IProps) *shimast.Node {
	result := FunctionalIsReturnProgrammer.Decompose(FunctionalIsReturnProgrammer_IDecomposeProps{
		Context:     props.Context,
		Modulo:      props.Modulo,
		Config:      props.Config,
		Expression:  props.Expression,
		Declaration: props.Declaration,
	})
	statements := append([]*shimast.Node{}, result.Functions...)
	statements = append(statements, functionalIsProgrammer_factory.NewReturnStatement(
		functionalIsProgrammer_factory.NewArrowFunction(
			functionalIsProgrammer_asyncModifiers(result.Async),
			nil,
			functionalIsProgrammer_parameters(props.Declaration),
			FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
				Declaration *shimast.Node
				Async       bool
			}{
				Declaration: props.Declaration,
				Async:       result.Async,
			}),
			nil,
			functionalIsProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			functionalIsProgrammer_factory.NewBlock(functionalIsProgrammer_factory.NewNodeList(result.Statements), true),
		),
	))
	return nativefactories.ExpressionFactory.SelfCall(
		functionalIsProgrammer_factory.NewBlock(functionalIsProgrammer_factory.NewNodeList(statements), true),
	)
}

func (functionalIsReturnProgrammerNamespace) Decompose(props FunctionalIsReturnProgrammer_IDecomposeProps) FunctionalIsReturnProgrammer_IDecomposeOutput {
	output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
		Checker:     props.Context.Checker,
		Declaration: props.Declaration,
	})
	caller := functionalIsProgrammer_factory.NewCallExpression(
		props.Expression,
		nil,
		nil,
		functionalIsProgrammer_factory.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration)),
		shimast.NodeFlagsNone,
	)
	name := functionalIsProgrammer_escapeDuplicate(functionalIsProgrammer_parameterNames(props.Declaration), "result")
	value := caller
	if output.Async {
		value = functionalIsProgrammer_factory.NewAwaitExpression(caller)
	}
	return FunctionalIsReturnProgrammer_IDecomposeOutput{
		Async: output.Async,
		Functions: []*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "__is_return",
				Value: nativeprogrammers.IsProgrammer.Write(nativeprogrammers.IsProgrammer_IProps{
					Context: props.Context,
					Modulo:  props.Modulo,
					Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: props.Config.Equals},
					Type:    output.Type,
				}),
			}),
		},
		Statements: []*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name:  name,
				Value: value,
			}),
			functionalIsProgrammer_factory.NewReturnStatement(functionalIsProgrammer_factory.NewConditionalExpression(
				functionalIsProgrammer_factory.NewCallExpression(
					functionalIsProgrammer_factory.NewIdentifier("__is_return"),
					nil,
					nil,
					functionalIsProgrammer_factory.NewNodeList([]*shimast.Node{
						functionalIsProgrammer_factory.NewIdentifier(name),
					}),
					shimast.NodeFlagsNone,
				),
				nil,
				functionalIsProgrammer_factory.NewIdentifier(name),
				nil,
				functionalIsProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword),
			)),
		},
	}
}
