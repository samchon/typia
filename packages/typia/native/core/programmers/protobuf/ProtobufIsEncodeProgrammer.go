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

type protobufIsEncodeProgrammerNamespace struct{}

var ProtobufIsEncodeProgrammer = protobufIsEncodeProgrammerNamespace{}

type ProtobufIsEncodeProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

type ProtobufIsEncodeProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

var protobufIsEncodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufIsEncodeProgrammerNamespace) Decompose(props ProtobufIsEncodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	isContext := props.Context
	functional := false
	finite := true
	isContext.Options.Functional = &functional
	isContext.Options.Finite = &finite
	is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
		Context: isContext,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
		Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
	})
	encode := ProtobufEncodeProgrammer.Decompose(ProtobufEncodeProgrammer_DecomposeProps{
		Context: props.Context,
		Modulo:  props.Modulo,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	statements := []*shimast.Node{}
	statements = append(statements, is.Statements...)
	statements = append(statements, encode.Statements...)
	statements = append(statements,
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__encode", Value: encode.Arrow}),
	)
	encodeType := protobufAssertEncodeProgrammer_returnType(encode.Arrow, protobufIsEncodeProgrammer_factory.NewTypeReferenceNode(protobufIsEncodeProgrammer_factory.NewIdentifier("Uint8Array"), nil))
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  protobufAssertEncodeProgrammer_merge(is.Functions, encode.Functions),
		Statements: statements,
		Arrow: protobufIsEncodeProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			protobufIsEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
			}),
			protobufIsEncodeProgrammer_factory.NewUnionTypeNode(protobufIsEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				encodeType,
				protobufIsEncodeProgrammer_factory.NewTypeReferenceNode(protobufIsEncodeProgrammer_factory.NewIdentifier("null"), nil),
			})),
			nil,
			protobufIsEncodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			protobufIsEncodeProgrammer_factory.NewConditionalExpression(
				protobufIsEncodeProgrammer_factory.NewCallExpression(
					protobufIsEncodeProgrammer_factory.NewIdentifier("__is"),
					nil,
					nil,
					protobufIsEncodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufIsEncodeProgrammer_factory.NewIdentifier("input")}),
					shimast.NodeFlagsNone,
				),
				nil,
				protobufIsEncodeProgrammer_factory.NewCallExpression(
					protobufIsEncodeProgrammer_factory.NewIdentifier("__encode"),
					nil,
					nil,
					protobufIsEncodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufIsEncodeProgrammer_factory.NewIdentifier("input")}),
					shimast.NodeFlagsNone,
				),
				nil,
				protobufIsEncodeProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword),
			),
		),
	}
}

func (protobufIsEncodeProgrammerNamespace) Write(props ProtobufIsEncodeProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo))
	result := ProtobufIsEncodeProgrammer.Decompose(ProtobufIsEncodeProgrammer_DecomposeProps{
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
