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

type plainIsPruneProgrammerNamespace struct{}

var PlainIsPruneProgrammer = plainIsPruneProgrammerNamespace{}

type PlainIsPruneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var plainIsPruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainIsPruneProgrammerNamespace) Decompose(props PlainIsPruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainIsPruneProgrammer_factory, props.Context.Emit)
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  prune := PlainPruneProgrammer.Decompose(PlainPruneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, prune.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__prune", Value: prune.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  plainProgrammer_merge_functions(is.Functions, prune.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
      }),
      is.Arrow.AsArrowFunction().Type,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        f.NewIfStatement(
          f.NewBinaryExpression(
            nil,
            f.NewKeywordExpression(shimast.KindFalseKeyword),
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            f.NewCallExpression(
              f.NewIdentifier("__is"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          ),
          f.NewReturnStatement(f.NewKeywordExpression(shimast.KindFalseKeyword)),
          nil,
        ),
        f.NewExpressionStatement(
          f.NewCallExpression(
            f.NewIdentifier("__prune"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        ),
        f.NewReturnStatement(f.NewKeywordExpression(shimast.KindTrueKeyword)),
      }), true),
    ),
  }
}

func (plainIsPruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainCloneProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainIsPruneProgrammer.Decompose(PlainIsPruneProgrammer_DecomposeProps{
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
