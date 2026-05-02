package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type miscAssertCloneProgrammerNamespace struct{}

var MiscAssertCloneProgrammer = miscAssertCloneProgrammerNamespace{}

type MiscAssertCloneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var miscAssertCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscAssertCloneProgrammerNamespace) Decompose(props MiscAssertCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  clone := MiscCloneProgrammer.Decompose(MiscCloneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, clone.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__clone", Value: clone.Arrow}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  miscProgrammer_merge_functions(assert.Functions, clone.Functions),
    Statements: statements,
    Arrow: miscAssertCloneProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      miscAssertCloneProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
        nativeprogrammers.Guardian.Parameter(struct {
          Context nativecontext.ITypiaContext
          Init    *shimast.Node
        }{Context: props.Context, Init: props.Init}),
      }),
      clone.Arrow.AsArrowFunction().Type,
      nil,
      miscAssertCloneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      miscAssertCloneProgrammer_factory.NewCallExpression(
        miscAssertCloneProgrammer_factory.NewIdentifier("__clone"),
        nil,
        nil,
        miscAssertCloneProgrammer_factory.NewNodeList([]*shimast.Node{
          miscAssertCloneProgrammer_factory.NewCallExpression(
            miscAssertCloneProgrammer_factory.NewIdentifier("__assert"),
            nil,
            nil,
            miscAssertCloneProgrammer_factory.NewNodeList([]*shimast.Node{
              miscAssertCloneProgrammer_factory.NewIdentifier("input"),
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

func (miscAssertCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
  result := MiscAssertCloneProgrammer.Decompose(MiscAssertCloneProgrammer_DecomposeProps{
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
