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

// ProtobufIsDecodeProgrammer_IProps is the input of Write for the protobuf is
// decode generator: Context (the transform context), Modulo (the call's callee
// expression), Type (the type to generate for) and Name (an optional type
// name).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the type to generate for and an optional type name, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 4 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type ProtobufIsDecodeProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
}

// ProtobufIsDecodeProgrammer_DecomposeProps is the input of Decompose for the
// protobuf is decode generator: Context (the transform context), Modulo (the
// call's callee expression), Functor (the collector of the helper functions that
// the generator emits), Type (the type to generate for) and Name (an optional
// type name).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the call's callee expression, the collector of the helper functions that the generator emits, the type to generate for and an optional type name, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type ProtobufIsDecodeProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var protobufIsDecodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufIsDecodeProgrammerNamespace) Decompose(props ProtobufIsDecodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(protobufIsDecodeProgrammer_factory, props.Context.Emit)
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
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__decode", Value: decode.Arrow}, props.Context.Emit),
  )
  decodeType := protobufAssertEncodeProgrammer_returnType(decode.Arrow, nativefactories.TypeFactory.Keyword("any", props.Context.Emit))
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  protobufAssertEncodeProgrammer_merge(is.Functions, decode.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(protobufAssertDecodeProgrammer_parameters(decode.Arrow)),
      f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
        decodeType,
        f.NewTypeReferenceNode(f.NewIdentifier("null"), nil),
      })),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "value",
          Value: f.NewCallExpression(
            f.NewIdentifier("__decode"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        }, props.Context.Emit),
        f.NewIfStatement(
          f.NewPrefixUnaryExpression(
            shimast.KindExclamationToken,
            f.NewCallExpression(
              f.NewIdentifier("__is"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("value")}),
              shimast.NodeFlagsNone,
            ),
          ),
          f.NewReturnStatement(f.NewKeywordExpression(shimast.KindNullKeyword)),
          nil,
        ),
        f.NewReturnStatement(f.NewIdentifier("value")),
      }), true),
    ),
  }
}

func (protobufIsDecodeProgrammerNamespace) Write(props ProtobufIsDecodeProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo), props.Context.Emit)
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
