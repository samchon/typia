package notations

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type notationAssertGeneralProgrammerNamespace struct{}

var NotationAssertGeneralProgrammer = notationAssertGeneralProgrammerNamespace{}

type NotationAssertGeneralProgrammer_IProps = NotationGeneralProgrammer_IProps

type NotationAssertGeneralProgrammer_DecomposeProps struct {
  Rename  NotationGeneralProgrammer_IRename
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var notationAssertGeneralProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (notationAssertGeneralProgrammerNamespace) Decompose(props NotationAssertGeneralProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  notation := NotationGeneralProgrammer.Decompose(NotationGeneralProgrammer_DecomposeProps{
    Rename:    props.Rename,
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, notation.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__notation", Value: notation.Arrow}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  notationGeneralProgrammer_merge_functions(assert.Functions, notation.Functions),
    Statements: statements,
    Arrow: notationAssertGeneralProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      notationAssertGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
        nativeprogrammers.Guardian.Parameter(struct {
          Context nativecontext.ITypiaContext
          Init    *shimast.Node
        }{Context: props.Context, Init: props.Init}),
      }),
      notation.Arrow.AsArrowFunction().Type,
      nil,
      notationAssertGeneralProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      notationAssertGeneralProgrammer_factory.NewCallExpression(
        notationAssertGeneralProgrammer_factory.NewIdentifier("__notation"),
        nil,
        nil,
        notationAssertGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
          notationAssertGeneralProgrammer_factory.NewCallExpression(
            notationAssertGeneralProgrammer_factory.NewIdentifier("__assert"),
            nil,
            nil,
            notationAssertGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
              notationAssertGeneralProgrammer_factory.NewIdentifier("input"),
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

func (notationAssertGeneralProgrammerNamespace) Write(props NotationAssertGeneralProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo))
  result := NotationAssertGeneralProgrammer.Decompose(NotationAssertGeneralProgrammer_DecomposeProps{
    Rename:  props.Rename,
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
