package json

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type jsonIsStringifyProgrammerNamespace struct{}

var JsonIsStringifyProgrammer = jsonIsStringifyProgrammerNamespace{}

type JsonIsStringifyProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

var jsonIsStringifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (jsonIsStringifyProgrammerNamespace) Decompose(props JsonIsStringifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	isContext := props.Context
	functional := false
	finite := true
	isContext.Options.Functional = &functional
	isContext.Options.Finite = &finite
	is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
		Context: isContext,
		Functor: props.Functor,
		Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
		Type:    props.Type,
		Name:    props.Name,
	})

	stringifyContext := props.Context
	numeric := true
	stringifyContext.Options.Functional = &functional
	stringifyContext.Options.Numeric = &numeric
	stringify := JsonStringifyProgrammer.Decompose(JsonStringifyProgrammer_DecomposeProps{
		Context:   stringifyContext,
		Functor:   props.Functor,
		Type:      props.Type,
		Name:      props.Name,
		Validated: true,
	})

	statements := append([]*shimast.Node{}, is.Statements...)
	statements = append(statements, stringify.Statements...)
	statements = append(statements,
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__stringify", Value: stringify.Arrow}),
	)
	stringifyType := stringify.Arrow.AsArrowFunction().Type
	if stringifyType == nil {
		stringifyType = nativefactories.TypeFactory.Keyword("string")
	}
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  jsonStringifyProgrammer_merge_functions(is.Functions, stringify.Functions),
		Statements: statements,
		Arrow: jsonIsStringifyProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			jsonIsStringifyProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
			}),
			jsonIsStringifyProgrammer_factory.NewUnionTypeNode(jsonIsStringifyProgrammer_factory.NewNodeList([]*shimast.Node{
				stringifyType,
				jsonIsStringifyProgrammer_factory.NewLiteralTypeNode(jsonIsStringifyProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)),
			})),
			nil,
			jsonIsStringifyProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			jsonIsStringifyProgrammer_factory.NewConditionalExpression(
				jsonIsStringifyProgrammer_factory.NewCallExpression(
					jsonIsStringifyProgrammer_factory.NewIdentifier("__is"),
					nil,
					nil,
					jsonIsStringifyProgrammer_factory.NewNodeList([]*shimast.Node{jsonIsStringifyProgrammer_factory.NewIdentifier("input")}),
					shimast.NodeFlagsNone,
				),
				nil,
				jsonIsStringifyProgrammer_factory.NewCallExpression(
					jsonIsStringifyProgrammer_factory.NewIdentifier("__stringify"),
					nil,
					nil,
					jsonIsStringifyProgrammer_factory.NewNodeList([]*shimast.Node{jsonIsStringifyProgrammer_factory.NewIdentifier("input")}),
					shimast.NodeFlagsNone,
				),
				nil,
				jsonIsStringifyProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword),
			),
		),
	}
}

func (jsonIsStringifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(jsonStringifyProgrammer_method_text(props.Modulo))
	result := JsonIsStringifyProgrammer.Decompose(JsonIsStringifyProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}
