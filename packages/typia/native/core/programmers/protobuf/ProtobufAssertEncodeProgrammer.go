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

type protobufAssertEncodeProgrammerNamespace struct{}

var ProtobufAssertEncodeProgrammer = protobufAssertEncodeProgrammerNamespace{}

type ProtobufAssertEncodeProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

type ProtobufAssertEncodeProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var protobufAssertEncodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufAssertEncodeProgrammerNamespace) Decompose(props ProtobufAssertEncodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(protobufAssertEncodeProgrammer_factory, props.Context.Emit)
  assertContext := props.Context
  functional := false
  finite := true
  assertContext.Options.Functional = &functional
  assertContext.Options.Finite = &finite
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
  encode := ProtobufEncodeProgrammer.Decompose(ProtobufEncodeProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  functions := protobufAssertEncodeProgrammer_merge(assert.Functions, encode.Functions)
  statements := []*shimast.Node{}
  statements = append(statements, assert.Statements...)
  statements = append(statements, encode.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__encode", Value: encode.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  functions,
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
        nativeprogrammers.Guardian.Parameter(struct {
          Context nativecontext.ITypiaContext
          Init    *shimast.Node
        }{Context: props.Context, Init: props.Init}),
      }),
      protobufAssertEncodeProgrammer_returnType(encode.Arrow, f.NewTypeReferenceNode(f.NewIdentifier("Uint8Array"), nil)),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        f.NewIdentifier("__encode"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewCallExpression(
            f.NewIdentifier("__assert"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewIdentifier("input"),
              nativeprogrammers.Guardian.Identifier(),
            }),
            shimast.NodeFlagsNone,
          ),
        }),
        shimast.NodeFlagsNone,
      ),
    ),
  }
}

func (protobufAssertEncodeProgrammerNamespace) Write(props ProtobufAssertEncodeProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(protobufAssertEncodeProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := ProtobufAssertEncodeProgrammer.Decompose(ProtobufAssertEncodeProgrammer_DecomposeProps{
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

func protobufAssertEncodeProgrammer_returnType(arrow *shimast.Node, fallback *shimast.Node) *shimast.Node {
  if arrow != nil && arrow.Kind == shimast.KindArrowFunction && arrow.AsArrowFunction().Type != nil {
    return arrow.AsArrowFunction().Type
  }
  return fallback
}

func protobufAssertEncodeProgrammer_merge(groups ...map[string]*shimast.Node) map[string]*shimast.Node {
  output := map[string]*shimast.Node{}
  for _, group := range groups {
    for key, value := range group {
      output[key] = value
    }
  }
  return output
}

func protobufAssertEncodeProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}
