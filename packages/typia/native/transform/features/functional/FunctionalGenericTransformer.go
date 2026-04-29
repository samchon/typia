package functional

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type functionalGenericTransformerNamespace struct{}

var FunctionalGenericTransformer = functionalGenericTransformerNamespace{}

type FunctionalGenericTransformer_IConfig struct {
	Equals bool
}

type FunctionalGenericTransformer_ISpecification struct {
	Method     string
	Config     FunctionalGenericTransformer_IConfig
	Programmer func(props FunctionalGenericTransformer_IProgrammerProps) *shimast.Node
}

type FunctionalGenericTransformer_IProgrammerProps struct {
	Context     nativecontext.ITypiaContext
	Modulo      *shimast.Node
	Expression  *shimast.Node
	Declaration *shimast.Node
	Config      FunctionalGenericTransformer_IConfig
	Init        *shimast.Node
}

func (functionalGenericTransformerNamespace) Transform(spec FunctionalGenericTransformer_ISpecification) func(props nativetransform.ITransformProps) *shimast.Node {
	return func(props nativetransform.ITransformProps) *shimast.Node {
		if props.Expression == nil || props.Expression.Arguments == nil || len(props.Expression.Arguments.Nodes) == 0 {
			panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
				Code:    "typia.functional." + spec.Method,
				Message: "no input value.",
			}))
		}

		var typ = props.Context.Checker.GetTypeAtLocation(props.Expression.Arguments.Nodes[0])
		if props.Expression.TypeArguments != nil && len(props.Expression.TypeArguments.Nodes) != 0 {
			typ = props.Context.Checker.GetTypeFromTypeNode(props.Expression.TypeArguments.Nodes[0])
		}
		if nativefactories.TypeFactory.IsFunction(typ) == false {
			panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
				Code:    "typia.functional." + spec.Method,
				Message: "input value is not a function.",
			}))
		}

		var declaration *shimast.Node
		if symbol := typ.Symbol(); symbol != nil && len(symbol.Declarations) != 0 {
			declaration = symbol.Declarations[0]
		}
		var init *shimast.Node
		if props.Expression.Arguments != nil && len(props.Expression.Arguments.Nodes) > 1 {
			init = props.Expression.Arguments.Nodes[1]
		}
		return spec.Programmer(FunctionalGenericTransformer_IProgrammerProps{
			Context:     props.Context,
			Modulo:      props.Modulo,
			Expression:  props.Expression.Arguments.Nodes[0],
			Declaration: declaration,
			Config:      spec.Config,
			Init:        init,
		})
	}
}
