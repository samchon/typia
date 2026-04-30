package misc

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type miscValidatePruneProgrammerNamespace struct{}

var MiscValidatePruneProgrammer = miscValidatePruneProgrammerNamespace{}

type MiscValidatePruneProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

var miscValidatePruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscValidatePruneProgrammerNamespace) Decompose(props MiscValidatePruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
		Context: props.Context,
		Modulo:  props.Modulo,
		Functor: props.Functor,
		Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
		Type:    props.Type,
		Name:    props.Name,
	})
	prune := MiscPruneProgrammer.Decompose(MiscPruneProgrammer_DecomposeProps{
		Context:   props.Context,
		Functor:   props.Functor,
		Type:      props.Type,
		Name:      props.Name,
		Validated: true,
	})
	statements := append([]*shimast.Node{}, validate.Statements...)
	statements = append(statements, prune.Statements...)
	statements = append(statements,
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__prune", Value: prune.Arrow}),
	)
	pruneType := miscValidatePruneProgrammer_factory.NewTypeReferenceNode(
		miscValidatePruneProgrammer_factory.NewIdentifier(miscCloneProgrammer_type_name(props.Context, props.Type, props.Name)),
		nil,
	)
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  miscProgrammer_merge_functions(validate.Functions, prune.Functions),
		Statements: statements,
		Arrow: miscValidatePruneProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			miscValidatePruneProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
			}),
			miscCloneProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File:      "typia",
				Name:      "IValidation",
				Arguments: []*shimast.TypeNode{pruneType},
			}),
			nil,
			miscValidatePruneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			miscValidatePruneProgrammer_factory.NewBlock(miscValidatePruneProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name: "result",
					Value: miscValidatePruneProgrammer_factory.NewCallExpression(
						miscValidatePruneProgrammer_factory.NewIdentifier("__validate"),
						nil,
						nil,
						miscValidatePruneProgrammer_factory.NewNodeList([]*shimast.Node{miscValidatePruneProgrammer_factory.NewIdentifier("input")}),
						shimast.NodeFlagsNone,
					),
				}),
				miscValidatePruneProgrammer_factory.NewIfStatement(
					miscValidatePruneProgrammer_factory.NewIdentifier("result.success"),
					miscValidatePruneProgrammer_factory.NewExpressionStatement(
						miscValidatePruneProgrammer_factory.NewCallExpression(
							miscValidatePruneProgrammer_factory.NewIdentifier("__prune"),
							nil,
							nil,
							miscValidatePruneProgrammer_factory.NewNodeList([]*shimast.Node{miscValidatePruneProgrammer_factory.NewIdentifier("input")}),
							shimast.NodeFlagsNone,
						),
					),
					nil,
				),
				miscValidatePruneProgrammer_factory.NewReturnStatement(miscValidatePruneProgrammer_factory.NewIdentifier("result")),
			}), true),
		),
	}
}

func (miscValidatePruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
	result := MiscValidatePruneProgrammer.Decompose(MiscValidatePruneProgrammer_DecomposeProps{
		Context: props.Context,
		Modulo:  props.Modulo,
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
