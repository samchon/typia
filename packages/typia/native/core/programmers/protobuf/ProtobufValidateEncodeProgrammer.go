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

type protobufValidateEncodeProgrammerNamespace struct{}

var ProtobufValidateEncodeProgrammer = protobufValidateEncodeProgrammerNamespace{}

type ProtobufValidateEncodeProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

type ProtobufValidateEncodeProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var protobufValidateEncodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufValidateEncodeProgrammerNamespace) Decompose(props ProtobufValidateEncodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validateContext := props.Context
  functional := false
  finite := true
  validateContext.Options.Functional = &functional
  validateContext.Options.Finite = &finite
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: validateContext,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
  })
  encode := ProtobufEncodeProgrammer.Decompose(ProtobufEncodeProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  encodeType := protobufAssertEncodeProgrammer_returnType(encode.Arrow, protobufValidateEncodeProgrammer_factory.NewTypeReferenceNode(protobufValidateEncodeProgrammer_factory.NewIdentifier("Uint8Array"), nil))
  statements := []*shimast.Node{}
  statements = append(statements, validate.Statements...)
  statements = append(statements, encode.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__encode", Value: encode.Arrow}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  protobufAssertEncodeProgrammer_merge(validate.Functions, encode.Functions),
    Statements: statements,
    Arrow: protobufValidateEncodeProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      protobufValidateEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      protobufValidateEncodeProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{encodeType},
      }),
      nil,
      protobufValidateEncodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      protobufValidateEncodeProgrammer_factory.NewBlock(protobufValidateEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "result",
          Value: protobufValidateEncodeProgrammer_factory.NewAsExpression(
            protobufValidateEncodeProgrammer_factory.NewCallExpression(
              protobufValidateEncodeProgrammer_factory.NewIdentifier("__validate"),
              nil,
              nil,
              protobufValidateEncodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufValidateEncodeProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
            nativefactories.TypeFactory.Keyword("any"),
          ),
        }),
        protobufValidateEncodeProgrammer_factory.NewIfStatement(
          protobufValidateEncodeProgrammer_factory.NewIdentifier("result.success"),
          protobufValidateEncodeProgrammer_factory.NewExpressionStatement(
            protobufValidateEncodeProgrammer_factory.NewBinaryExpression(
              nil,
              protobufValidateEncodeProgrammer_factory.NewIdentifier("result.data"),
              nil,
              protobufValidateEncodeProgrammer_factory.NewToken(shimast.KindEqualsToken),
              protobufValidateEncodeProgrammer_factory.NewCallExpression(
                protobufValidateEncodeProgrammer_factory.NewIdentifier("__encode"),
                nil,
                nil,
                protobufValidateEncodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufValidateEncodeProgrammer_factory.NewIdentifier("input")}),
                shimast.NodeFlagsNone,
              ),
            ),
          ),
          nil,
        ),
        protobufValidateEncodeProgrammer_factory.NewReturnStatement(protobufValidateEncodeProgrammer_factory.NewIdentifier("result")),
      }), true),
    ),
  }
}

func (protobufValidateEncodeProgrammerNamespace) Write(props ProtobufValidateEncodeProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo))
  result := ProtobufValidateEncodeProgrammer.Decompose(ProtobufValidateEncodeProgrammer_DecomposeProps{
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

func protobufValidateEncodeProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
  if importer, ok := context.Importer.(interface {
    Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
  }); ok {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    return protobufValidateEncodeProgrammer_factory.NewTypeReferenceNode(protobufValidateEncodeProgrammer_factory.NewIdentifier(str), protobufValidateEncodeProgrammer_factory.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}
