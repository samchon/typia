package functional

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalAssertParametersProgrammerNamespace struct{}

var FunctionalAssertParametersProgrammer = functionalAssertParametersProgrammerNamespace{}

type FunctionalAssertParametersProgrammer_IConfig struct {
	Equals bool
}

type FunctionalAssertParametersProgrammer_IProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalAssertParametersProgrammer_IConfig
	Declaration *shimast.Node
	Expression  *shimast.Node
	Init        *shimast.Node
}

type FunctionalAssertParametersProgrammer_IDecomposeProps struct {
	Context    nativecontext.ITypiaContext
	Config     FunctionalAssertParametersProgrammer_IConfig
	Modulo     *shimast.Node
	Parameters []*shimast.Node
	Wrapper    string
}

type FunctionalAssertParametersProgrammer_IDecomposeOutput struct {
	Functions   []*shimast.Node
	Expressions []*shimast.Node
}

func (functionalAssertParametersProgrammerNamespace) Write(props FunctionalAssertParametersProgrammer_IProps) *shimast.Node {
	wrapper := FunctionalAssertFunctionProgrammer.ErrorFactoryWrapper(struct {
		Context    nativecontext.ITypiaContext
		Parameters []*shimast.Node
		Init       *shimast.Node
	}{
		Context:    props.Context,
		Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
		Init:       props.Init,
	})
	output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
		Checker:     props.Context.Checker,
		Declaration: props.Declaration,
	})
	result := FunctionalAssertParametersProgrammer.Decompose(FunctionalAssertParametersProgrammer_IDecomposeProps{
		Context:    props.Context,
		Modulo:     props.Modulo,
		Config:     props.Config,
		Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
		Wrapper:    wrapper.Name,
	})
	statements := []*shimast.Node{wrapper.Variable}
	statements = append(statements, result.Functions...)
	body := []*shimast.Node{}
	for _, exp := range result.Expressions {
		body = append(body, functionalAssertProgrammer_factory.NewExpressionStatement(exp))
	}
	body = append(body, functionalAssertProgrammer_factory.NewReturnStatement(functionalAssertProgrammer_factory.NewCallExpression(
		props.Expression,
		nil,
		nil,
		functionalAssertProgrammer_factory.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration)),
		shimast.NodeFlagsNone,
	)))
	statements = append(statements, functionalAssertProgrammer_factory.NewReturnStatement(
		functionalAssertProgrammer_factory.NewArrowFunction(
			functionalIsProgrammer_asyncModifiers(output.Async),
			nil,
			functionalIsProgrammer_parameters(props.Declaration),
			functionalAssertProgrammer_returnType(props.Declaration),
			nil,
			functionalAssertProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			functionalAssertProgrammer_factory.NewBlock(functionalAssertProgrammer_factory.NewNodeList(body), true),
		),
	))
	return nativefactories.ExpressionFactory.SelfCall(
		functionalAssertProgrammer_factory.NewBlock(functionalAssertProgrammer_factory.NewNodeList(statements), true),
	)
}

func (functionalAssertParametersProgrammerNamespace) Decompose(props FunctionalAssertParametersProgrammer_IDecomposeProps) FunctionalAssertParametersProgrammer_IDecomposeOutput {
	functions := make([]*shimast.Node, 0, len(props.Parameters))
	expressions := make([]*shimast.Node, 0, len(props.Parameters))
	for i, p := range props.Parameters {
		functions = append(functions, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: "__assert_param_" + functionalIsProgrammer_itoa(i),
			Value: nativeprogrammers.AssertProgrammer.Write(nativeprogrammers.AssertProgrammer_IProps{
				Context: props.Context,
				Modulo:  props.Modulo,
				Config: nativeprogrammers.AssertProgrammer_IConfig{
					Equals: props.Config.Equals,
					Guard:  false,
				},
				Type: props.Context.Checker.GetTypeFromTypeNode(
					functionalIsProgrammer_parameterType(p, nativefactories.TypeFactory.Keyword("any")),
				),
				Init: FunctionalAssertFunctionProgrammer.HookPath(struct {
					Wrapper  string
					Replacer string
				}{
					Wrapper:  props.Wrapper,
					Replacer: "$input.parameters[" + functionalIsProgrammer_itoa(i) + "]",
				}),
			}),
		}))
		expressions = append(expressions, functionalAssertProgrammer_factory.NewCallExpression(
			functionalAssertProgrammer_factory.NewIdentifier("__assert_param_"+functionalIsProgrammer_itoa(i)),
			nil,
			nil,
			functionalAssertProgrammer_factory.NewNodeList([]*shimast.Node{
				functionalAssertProgrammer_factory.NewIdentifier(functionalIsProgrammer_parameterName(p)),
			}),
			shimast.NodeFlagsNone,
		))
	}
	return FunctionalAssertParametersProgrammer_IDecomposeOutput{
		Functions:   functions,
		Expressions: expressions,
	}
}
