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

type miscAssertPruneProgrammerNamespace struct{}

var MiscAssertPruneProgrammer = miscAssertPruneProgrammerNamespace{}

type MiscAssertPruneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var miscAssertPruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscAssertPruneProgrammerNamespace) Decompose(props MiscAssertPruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  prune := MiscPruneProgrammer.Decompose(MiscPruneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, prune.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__prune", Value: prune.Arrow}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  miscProgrammer_merge_functions(assert.Functions, prune.Functions),
    Statements: statements,
    Arrow: miscAssertPruneProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      miscAssertPruneProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
        nativeprogrammers.Guardian.Parameter(struct {
          Context nativecontext.ITypiaContext
          Init    *shimast.Node
        }{Context: props.Context, Init: props.Init}),
      }),
      miscAssertPruneProgrammer_factory.NewTypeReferenceNode(
        miscAssertPruneProgrammer_factory.NewIdentifier(miscCloneProgrammer_type_name(props.Context, props.Type, props.Name)),
        nil,
      ),
      nil,
      miscAssertPruneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      miscAssertPruneProgrammer_factory.NewBlock(miscAssertPruneProgrammer_factory.NewNodeList([]*shimast.Node{
        miscAssertPruneProgrammer_factory.NewExpressionStatement(
          miscAssertPruneProgrammer_factory.NewBinaryExpression(
            nil,
            miscAssertPruneProgrammer_factory.NewIdentifier("input"),
            nil,
            miscAssertPruneProgrammer_factory.NewToken(shimast.KindEqualsToken),
            miscAssertPruneProgrammer_factory.NewCallExpression(
              miscAssertPruneProgrammer_factory.NewIdentifier("__assert"),
              nil,
              nil,
              miscAssertPruneProgrammer_factory.NewNodeList([]*shimast.Node{
                miscAssertPruneProgrammer_factory.NewIdentifier("input"),
                nativeprogrammers.Guardian.Identifier(),
              }),
              shimast.NodeFlagsNone,
            ),
          ),
        ),
        miscAssertPruneProgrammer_factory.NewExpressionStatement(
          miscAssertPruneProgrammer_factory.NewCallExpression(
            miscAssertPruneProgrammer_factory.NewIdentifier("__prune"),
            nil,
            nil,
            miscAssertPruneProgrammer_factory.NewNodeList([]*shimast.Node{miscAssertPruneProgrammer_factory.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        ),
        miscAssertPruneProgrammer_factory.NewReturnStatement(miscAssertPruneProgrammer_factory.NewIdentifier("input")),
      }), true),
    ),
  }
}

func (miscAssertPruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
  result := MiscAssertPruneProgrammer.Decompose(MiscAssertPruneProgrammer_DecomposeProps{
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
