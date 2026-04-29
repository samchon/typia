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

type jsonAssertParseProgrammerNamespace struct{}

var JsonAssertParseProgrammer = jsonAssertParseProgrammerNamespace{}

type JsonAssertParseProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

func (jsonAssertParseProgrammerNamespace) Decompose(props JsonAssertParseProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	nativefactories.JsonMetadataFactory.Analyze(nativefactories.JsonMetadataFactory_IProps{
		Method:      props.Functor.Method,
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Type:        props.Type,
	})
	assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
		Context: jsonParseProgrammer_context(props.Context, &jsonParseProgrammer_options{
			Functional: jsonParseProgrammer_bool(false),
			Numeric:    jsonParseProgrammer_bool(false),
		}),
		Functor: props.Functor,
		Config: nativeprogrammers.AssertProgrammer_IConfig{
			Equals: false,
			Guard:  false,
		},
		Type: props.Type,
		Name: props.Name,
		Init: props.Init,
	})

	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions: assert.Functions,
		Statements: append(append([]*shimast.Node{}, assert.Statements...), nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name:  "__assert",
			Value: assert.Arrow,
		})),
		Arrow: jsonParseProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string"), nil),
				nativeprogrammers.Guardian.Parameter(struct {
					Context nativecontext.ITypiaContext
					Init    *shimast.Node
				}{
					Context: props.Context,
					Init:    props.Init,
				}),
			}),
			jsonProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File: "typia",
				Name: "Primitive",
				Arguments: []*shimast.TypeNode{
					jsonProgrammer_typeReference(props.Context, props.Type, props.Name),
				},
			}),
			nil,
			jsonParseProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			jsonParseProgrammer_factory.NewAsExpression(
				jsonParseProgrammer_factory.NewCallExpression(
					jsonParseProgrammer_factory.NewIdentifier("__assert"),
					nil,
					nil,
					jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
						jsonParseProgrammer_factory.NewCallExpression(
							jsonParseProgrammer_factory.NewIdentifier("JSON.parse"),
							nil,
							nil,
							jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
								jsonParseProgrammer_factory.NewIdentifier("input"),
							}),
							shimast.NodeFlagsNone,
						),
						nativeprogrammers.Guardian.Identifier(),
					}),
					shimast.NodeFlagsNone,
				),
				nativefactories.TypeFactory.Keyword("any"),
			),
		),
	}
}

func (jsonAssertParseProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	method := ""
	if props.Modulo != nil {
		method = props.Modulo.Text()
	}
	functor := nativehelpers.NewFunctionProgrammer(method)
	result := JsonAssertParseProgrammer.Decompose(JsonAssertParseProgrammer_DecomposeProps{
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
