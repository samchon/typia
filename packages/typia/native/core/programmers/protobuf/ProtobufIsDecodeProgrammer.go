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

type protobufIsDecodeProgrammerNamespace struct{}

var ProtobufIsDecodeProgrammer = protobufIsDecodeProgrammerNamespace{}

type ProtobufIsDecodeProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

type ProtobufIsDecodeProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

var protobufIsDecodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufIsDecodeProgrammerNamespace) Decompose(props ProtobufIsDecodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	isContext := props.Context
	functional := false
	numeric := false
	isContext.Options.Functional = &functional
	isContext.Options.Numeric = &numeric
	is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
		Context: isContext,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
		Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
	})
	decode := ProtobufDecodeProgrammer.Decompose(ProtobufDecodeProgrammer_DecomposeProps{
		Context: props.Context,
		Modulo:  props.Modulo,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	statements := []*shimast.Node{}
	statements = append(statements, is.Statements...)
	statements = append(statements, decode.Statements...)
	statements = append(statements,
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__decode", Value: decode.Arrow}),
	)
	decodeType := protobufAssertEncodeProgrammer_returnType(decode.Arrow, nativefactories.TypeFactory.Keyword("any"))
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  protobufAssertEncodeProgrammer_merge(is.Functions, decode.Functions),
		Statements: statements,
		Arrow: protobufIsDecodeProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			protobufIsDecodeProgrammer_factory.NewNodeList(protobufAssertDecodeProgrammer_parameters(decode.Arrow)),
			protobufIsDecodeProgrammer_factory.NewUnionTypeNode(protobufIsDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				decodeType,
				protobufIsDecodeProgrammer_factory.NewTypeReferenceNode(protobufIsDecodeProgrammer_factory.NewIdentifier("null"), nil),
			})),
			nil,
			protobufIsDecodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			protobufIsDecodeProgrammer_factory.NewBlock(protobufIsDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name: "value",
					Value: protobufIsDecodeProgrammer_factory.NewCallExpression(
						protobufIsDecodeProgrammer_factory.NewIdentifier("__decode"),
						nil,
						nil,
						protobufIsDecodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufIsDecodeProgrammer_factory.NewIdentifier("input")}),
						shimast.NodeFlagsNone,
					),
				}),
				protobufIsDecodeProgrammer_factory.NewIfStatement(
					protobufIsDecodeProgrammer_factory.NewPrefixUnaryExpression(
						shimast.KindExclamationToken,
						protobufIsDecodeProgrammer_factory.NewCallExpression(
							protobufIsDecodeProgrammer_factory.NewIdentifier("__is"),
							nil,
							nil,
							protobufIsDecodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufIsDecodeProgrammer_factory.NewIdentifier("value")}),
							shimast.NodeFlagsNone,
						),
					),
					protobufIsDecodeProgrammer_factory.NewReturnStatement(protobufIsDecodeProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)),
					nil,
				),
				protobufIsDecodeProgrammer_factory.NewReturnStatement(protobufIsDecodeProgrammer_factory.NewIdentifier("value")),
			}), true),
		),
	}
}

func (protobufIsDecodeProgrammerNamespace) Write(props ProtobufIsDecodeProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo))
	result := ProtobufIsDecodeProgrammer.Decompose(ProtobufIsDecodeProgrammer_DecomposeProps{
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
