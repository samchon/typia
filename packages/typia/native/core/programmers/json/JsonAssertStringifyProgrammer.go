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

type jsonAssertStringifyProgrammerNamespace struct{}

var JsonAssertStringifyProgrammer = jsonAssertStringifyProgrammerNamespace{}

type JsonAssertStringifyProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var jsonAssertStringifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (jsonAssertStringifyProgrammerNamespace) Decompose(props JsonAssertStringifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  assertContext := props.Context
  functional := false
  finite := true
  assertContext.Options.Functional = &functional
  assertContext.Options.Finite = &finite
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: assertContext,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  stringify := JsonStringifyProgrammer.Decompose(JsonStringifyProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  f := nativecontext.EmitFactoryOf(jsonAssertStringifyProgrammer_factory, props.Context.Emit)
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, stringify.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__stringify", Value: stringify.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  jsonStringifyProgrammer_merge_functions(assert.Functions, stringify.Functions),
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
      stringify.Arrow.AsArrowFunction().Type,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        f.NewExpressionStatement(f.NewCallExpression(
          f.NewIdentifier("__assert"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewIdentifier("input"),
            nativeprogrammers.Guardian.Identifier(),
          }),
          shimast.NodeFlagsNone,
        )),
        f.NewReturnStatement(f.NewCallExpression(
          f.NewIdentifier("__stringify"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        )),
      }), true),
    ),
  }
}

func (jsonAssertStringifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(jsonStringifyProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := JsonAssertStringifyProgrammer.Decompose(JsonAssertStringifyProgrammer_DecomposeProps{
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
