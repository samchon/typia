package protobuf

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type protobufAssertDecodeProgrammerNamespace struct{}

var ProtobufAssertDecodeProgrammer = protobufAssertDecodeProgrammerNamespace{}

type ProtobufAssertDecodeProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

type ProtobufAssertDecodeProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

var protobufAssertDecodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufAssertDecodeProgrammerNamespace) Decompose(props ProtobufAssertDecodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	assertContext := props.Context
	functional := false
	numeric := false
	assertContext.Options.Functional = &functional
	assertContext.Options.Numeric = &numeric
	assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
		Context: assertContext,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
		Init:    props.Init,
		Config: nativeprogrammers.AssertProgrammer_IConfig{
			Equals: false,
			Guard:  false,
		},
	})
	decode := ProtobufDecodeProgrammer.Decompose(ProtobufDecodeProgrammer_DecomposeProps{
		Context: props.Context,
		Modulo:  props.Modulo,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	parameters := protobufAssertDecodeProgrammer_parameters(decode.Arrow)
	parameters = append(parameters, nativeprogrammers.Guardian.Parameter(struct {
		Context nativecontext.ITypiaContext
		Init    *shimast.Node
	}{Context: props.Context, Init: props.Init}))
	statements := []*shimast.Node{}
	statements = append(statements, assert.Statements...)
	statements = append(statements, decode.Statements...)
	statements = append(statements,
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__decode", Value: decode.Arrow}),
	)
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  protobufAssertEncodeProgrammer_merge(assert.Functions, decode.Functions),
		Statements: statements,
		Arrow: protobufAssertDecodeProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			protobufAssertDecodeProgrammer_factory.NewNodeList(parameters),
			protobufAssertEncodeProgrammer_returnType(decode.Arrow, nativefactories.TypeFactory.Keyword("any")),
			nil,
			protobufAssertDecodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			protobufAssertDecodeProgrammer_factory.NewCallExpression(
				protobufAssertDecodeProgrammer_factory.NewIdentifier("__assert"),
				nil,
				nil,
				protobufAssertDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
					protobufAssertDecodeProgrammer_factory.NewCallExpression(
						protobufAssertDecodeProgrammer_factory.NewIdentifier("__decode"),
						nil,
						nil,
						protobufAssertDecodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufAssertDecodeProgrammer_factory.NewIdentifier("input")}),
						shimast.NodeFlagsNone,
					),
					nativeprogrammers.Guardian.Identifier(),
				}),
				shimast.NodeFlagsNone,
			),
		),
	}
}

func (protobufAssertDecodeProgrammerNamespace) Write(props ProtobufAssertDecodeProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo))
	result := ProtobufAssertDecodeProgrammer.Decompose(ProtobufAssertDecodeProgrammer_DecomposeProps{
		Context: props.Context,
		Modulo:  props.Modulo,
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

func protobufAssertDecodeProgrammer_parameters(arrow *shimast.Node) []*shimast.Node {
	if arrow != nil && arrow.Kind == shimast.KindArrowFunction && arrow.AsArrowFunction().Parameters != nil {
		return append([]*shimast.Node{}, arrow.AsArrowFunction().Parameters.Nodes...)
	}
	return []*shimast.Node{}
}
