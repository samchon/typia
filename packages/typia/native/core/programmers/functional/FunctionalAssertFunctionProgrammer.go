package functional

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
)

type functionalAssertFunctionProgrammerNamespace struct{}

var FunctionalAssertFunctionProgrammer = functionalAssertFunctionProgrammerNamespace{}

type FunctionalAssertFunctionProgrammer_IConfig struct {
	Equals bool
}

type FunctionalAssertFunctionProgrammer_IProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Config      FunctionalAssertFunctionProgrammer_IConfig
	Declaration *shimast.Node
	Expression  *shimast.Node
	Init        *shimast.Node
}

type FunctionalAssertFunctionProgrammer_ErrorFactoryWrapperOutput struct {
	Name     string
	Variable *shimast.Node
}

var functionalAssertProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (functionalAssertFunctionProgrammerNamespace) Write(props FunctionalAssertFunctionProgrammer_IProps) *shimast.Node {
	wrapper := FunctionalAssertFunctionProgrammer.ErrorFactoryWrapper(struct {
		Context    nativecontext.ITypiaContext
		Parameters []*shimast.Node
		Init       *shimast.Node
	}{
		Context:    props.Context,
		Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
		Init:       props.Init,
	})
	p := FunctionalAssertParametersProgrammer.Decompose(FunctionalAssertParametersProgrammer_IDecomposeProps{
		Context:    props.Context,
		Modulo:     props.Modulo,
		Config:     FunctionalAssertParametersProgrammer_IConfig{Equals: props.Config.Equals},
		Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
		Wrapper:    wrapper.Name,
	})
	r := FunctionAssertReturnProgrammer.Decompose(FunctionAssertReturnProgrammer_IDecomposeProps{
		Context:     props.Context,
		Modulo:      props.Modulo,
		Config:      FunctionAssertReturnProgrammer_IConfig{Equals: props.Config.Equals},
		Expression:  props.Expression,
		Declaration: props.Declaration,
		Wrapper:     wrapper.Name,
	})
	statements := []*shimast.Node{wrapper.Variable}
	statements = append(statements, p.Functions...)
	statements = append(statements, r.Functions...)
	body := []*shimast.Node{}
	for _, exp := range p.Expressions {
		body = append(body, functionalAssertProgrammer_factory.NewExpressionStatement(exp))
	}
	body = append(body, functionalAssertProgrammer_factory.NewReturnStatement(r.Value))
	statements = append(statements, functionalAssertProgrammer_factory.NewReturnStatement(
		functionalAssertProgrammer_factory.NewArrowFunction(
			functionalIsProgrammer_asyncModifiers(r.Async),
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

func (functionalAssertFunctionProgrammerNamespace) ErrorFactoryWrapper(props struct {
	Context    nativecontext.ITypiaContext
	Parameters []*shimast.Node
	Init       *shimast.Node
}) FunctionalAssertFunctionProgrammer_ErrorFactoryWrapperOutput {
	names := make([]string, 0, len(props.Parameters))
	for _, p := range props.Parameters {
		names = append(names, functionalIsProgrammer_parameterName(p))
	}
	name := functionalIsProgrammer_escapeDuplicate(names, "errorFactoryWrapper")
	init := props.Init
	if init == nil {
		init = functionalAssertProgrammer_internal(props.Context, "functionalTypeGuardErrorFactory")
	}
	return FunctionalAssertFunctionProgrammer_ErrorFactoryWrapperOutput{
		Name: name,
		Variable: nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name:  name,
			Type:  nativeprogrammers.Guardian.Type(props.Context),
			Value: init,
		}),
	}
}

func (functionalAssertFunctionProgrammerNamespace) HookPath(props struct {
	Wrapper  string
	Replacer string
}) *shimast.Node {
	path := nativefactories.IdentifierFactory.Access(functionalAssertProgrammer_factory.NewIdentifier("p"), "path")
	return functionalAssertProgrammer_factory.NewArrowFunction(
		nil,
		nil,
		functionalAssertProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.IdentifierFactory.Parameter("p", nil, nil),
		}),
		nil,
		nil,
		functionalAssertProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		functionalAssertProgrammer_factory.NewCallExpression(
			functionalAssertProgrammer_factory.NewIdentifier(props.Wrapper),
			nil,
			nil,
			functionalAssertProgrammer_factory.NewNodeList([]*shimast.Node{
				functionalAssertProgrammer_factory.NewObjectLiteralExpression(functionalAssertProgrammer_factory.NewNodeList([]*shimast.Node{
					functionalAssertProgrammer_factory.NewSpreadAssignment(functionalAssertProgrammer_factory.NewIdentifier("p")),
					functionalAssertProgrammer_factory.NewPropertyAssignment(
						nil,
						nativefactories.IdentifierFactory.Identifier("path"),
						nil,
						nil,
						functionalAssertProgrammer_factory.NewConditionalExpression(
							path,
							nil,
							functionalAssertProgrammer_factory.NewCallExpression(
								nativefactories.IdentifierFactory.Access(path, "replace"),
								nil,
								nil,
								functionalAssertProgrammer_factory.NewNodeList([]*shimast.Node{
									functionalAssertProgrammer_factory.NewStringLiteral("$input", shimast.TokenFlagsNone),
									functionalAssertProgrammer_factory.NewStringLiteral(props.Replacer, shimast.TokenFlagsNone),
								}),
								shimast.NodeFlagsNone,
							),
							nil,
							functionalAssertProgrammer_factory.NewIdentifier("undefined"),
						),
					),
				}), false),
			}),
			shimast.NodeFlagsNone,
		),
	)
}

func functionalAssertProgrammer_returnType(declaration *shimast.Node) *shimast.Node {
	if declaration == nil || declaration.FunctionLikeData() == nil {
		return nil
	}
	return declaration.FunctionLikeData().Type
}

func functionalAssertProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
		return importer.Internal(name)
	}
	return functionalAssertProgrammer_factory.NewIdentifier(name)
}
