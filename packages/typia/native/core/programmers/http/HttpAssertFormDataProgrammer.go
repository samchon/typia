package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpAssertFormDataProgrammerNamespace struct{}

var HttpAssertFormDataProgrammer = httpAssertFormDataProgrammerNamespace{}

type HttpAssertFormDataProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

var httpAssertProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpAssertFormDataProgrammerNamespace) Decompose(props HttpAssertFormDataProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
		Context: httpProgrammer_context(props.Context, false, true),
		Functor: props.Functor,
		Config: nativeprogrammers.AssertProgrammer_IConfig{
			Equals: false,
			Guard:  false,
		},
		Type: props.Type,
		Name: props.Name,
		Init: props.Init,
	})
	decode := HttpFormDataProgrammer.Decompose(HttpFormDataProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return httpProgrammer_assert_result(props.Context, props.Init, assert, decode)
}

func (httpAssertFormDataProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
	result := HttpAssertFormDataProgrammer.Decompose(HttpAssertFormDataProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: functor,
		Type:    props.Type,
		Name:    props.Name,
		Init:    props.Init,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}

func httpProgrammer_assert_result(context nativecontext.ITypiaContext, init *shimast.Node, assert nativeinternal.FeatureProgrammer_IDecomposed, decode nativeinternal.FeatureProgrammer_IDecomposed) nativeinternal.FeatureProgrammer_IDecomposed {
	decodeArrow := decode.Arrow.AsArrowFunction()
	statements := append([]*shimast.Node{}, assert.Statements...)
	statements = append(statements, decode.Statements...)
	statements = append(statements,
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name:  "__assert",
			Value: assert.Arrow,
		}),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name:  "__decode",
			Value: decode.Arrow,
		}),
	)
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  httpProgrammer_merge_functions(assert.Functions, decode.Functions),
		Statements: statements,
		Arrow: httpAssertProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpAssertProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
				nativeprogrammers.Guardian.Parameter(struct {
					Context nativecontext.ITypiaContext
					Init    *shimast.Node
				}{
					Context: context,
					Init:    init,
				}),
			}),
			decodeArrow.Type,
			nil,
			httpAssertProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpAssertProgrammer_factory.NewCallExpression(
				httpAssertProgrammer_factory.NewIdentifier("__assert"),
				nil,
				nil,
				httpAssertProgrammer_factory.NewNodeList([]*shimast.Node{
					httpAssertProgrammer_factory.NewCallExpression(
						httpAssertProgrammer_factory.NewIdentifier("__decode"),
						nil,
						nil,
						httpAssertProgrammer_factory.NewNodeList([]*shimast.Node{httpAssertProgrammer_factory.NewIdentifier("input")}),
						shimast.NodeFlagsNone,
					),
					nativeprogrammers.Guardian.Identifier(),
				}),
				shimast.NodeFlagsNone,
			),
		),
	}
}
