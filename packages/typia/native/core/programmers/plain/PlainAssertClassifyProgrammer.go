package plain

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type plainAssertClassifyProgrammerNamespace struct{}

var PlainAssertClassifyProgrammer = plainAssertClassifyProgrammerNamespace{}

type PlainAssertClassifyProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var plainAssertClassifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainAssertClassifyProgrammerNamespace) Decompose(props PlainAssertClassifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainAssertClassifyProgrammer_factory, props.Context.Emit)
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  classify := PlainClassifyProgrammer.Decompose(PlainClassifyProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, classify.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__classify", Value: classify.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  plainProgrammer_merge_functions(assert.Functions, classify.Functions),
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
      classify.Arrow.AsArrowFunction().Type,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        f.NewIdentifier("__classify"),
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

func (plainAssertClassifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainClassifyProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainAssertClassifyProgrammer.Decompose(PlainAssertClassifyProgrammer_DecomposeProps{
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
