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

type miscIsPruneProgrammerNamespace struct{}

var MiscIsPruneProgrammer = miscIsPruneProgrammerNamespace{}

type MiscIsPruneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var miscIsPruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscIsPruneProgrammerNamespace) Decompose(props MiscIsPruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  prune := MiscPruneProgrammer.Decompose(MiscPruneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, prune.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__prune", Value: prune.Arrow}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  miscProgrammer_merge_functions(is.Functions, prune.Functions),
    Statements: statements,
    Arrow: miscIsPruneProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      miscIsPruneProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      is.Arrow.AsArrowFunction().Type,
      nil,
      miscIsPruneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      miscIsPruneProgrammer_factory.NewBlock(miscIsPruneProgrammer_factory.NewNodeList([]*shimast.Node{
        miscIsPruneProgrammer_factory.NewIfStatement(
          miscIsPruneProgrammer_factory.NewBinaryExpression(
            nil,
            miscIsPruneProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword),
            nil,
            miscIsPruneProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
            miscIsPruneProgrammer_factory.NewCallExpression(
              miscIsPruneProgrammer_factory.NewIdentifier("__is"),
              nil,
              nil,
              miscIsPruneProgrammer_factory.NewNodeList([]*shimast.Node{miscIsPruneProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          ),
          miscIsPruneProgrammer_factory.NewReturnStatement(miscIsPruneProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)),
          nil,
        ),
        miscIsPruneProgrammer_factory.NewExpressionStatement(
          miscIsPruneProgrammer_factory.NewCallExpression(
            miscIsPruneProgrammer_factory.NewIdentifier("__prune"),
            nil,
            nil,
            miscIsPruneProgrammer_factory.NewNodeList([]*shimast.Node{miscIsPruneProgrammer_factory.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        ),
        miscIsPruneProgrammer_factory.NewReturnStatement(miscIsPruneProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)),
      }), true),
    ),
  }
}

func (miscIsPruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
  result := MiscIsPruneProgrammer.Decompose(MiscIsPruneProgrammer_DecomposeProps{
    Context: props.Context,
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
