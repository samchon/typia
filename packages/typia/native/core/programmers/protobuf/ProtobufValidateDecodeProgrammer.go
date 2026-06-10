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

type protobufValidateDecodeProgrammerNamespace struct{}

var ProtobufValidateDecodeProgrammer = protobufValidateDecodeProgrammerNamespace{}

type ProtobufValidateDecodeProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

type ProtobufValidateDecodeProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var protobufValidateDecodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufValidateDecodeProgrammerNamespace) Decompose(props ProtobufValidateDecodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(protobufValidateDecodeProgrammer_factory, props.Context.Emit)
  validateContext := props.Context
  functional := false
  numeric := false
  validateContext.Options.Functional = &functional
  validateContext.Options.Numeric = &numeric
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: validateContext,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
  })
  decode := ProtobufDecodeProgrammer.Decompose(ProtobufDecodeProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  statements := []*shimast.Node{}
  statements = append(statements, validate.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__decode", Value: decode.Arrow}, props.Context.Emit),
  )
  decodeType := protobufAssertEncodeProgrammer_returnType(decode.Arrow, nativefactories.TypeFactory.Keyword("any", props.Context.Emit))
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  protobufAssertEncodeProgrammer_merge(validate.Functions, decode.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(protobufAssertDecodeProgrammer_parameters(decode.Arrow)),
      protobufValidateEncodeProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{decodeType},
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        f.NewIdentifier("__validate"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewCallExpression(
            f.NewIdentifier("__decode"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        }),
        shimast.NodeFlagsNone,
      ),
    ),
  }
}

func (protobufValidateDecodeProgrammerNamespace) Write(props ProtobufValidateDecodeProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := ProtobufValidateDecodeProgrammer.Decompose(ProtobufValidateDecodeProgrammer_DecomposeProps{
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
