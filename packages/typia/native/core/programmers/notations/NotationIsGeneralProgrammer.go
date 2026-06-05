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

type notationIsGeneralProgrammerNamespace struct{}

var NotationIsGeneralProgrammer = notationIsGeneralProgrammerNamespace{}

type NotationIsGeneralProgrammer_IProps = NotationGeneralProgrammer_IProps

type NotationIsGeneralProgrammer_DecomposeProps struct {
  Rename  NotationGeneralProgrammer_IRename
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var notationIsGeneralProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (notationIsGeneralProgrammerNamespace) Decompose(props NotationIsGeneralProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(notationIsGeneralProgrammer_factory, props.Context.Emit)
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  notation := NotationGeneralProgrammer.Decompose(NotationGeneralProgrammer_DecomposeProps{
    Rename:    props.Rename,
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, notation.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__notation", Value: notation.Arrow}, props.Context.Emit),
  )
  notationType := notation.Arrow.AsArrowFunction().Type
  if notationType == nil {
    notationType = nativefactories.TypeFactory.Keyword("any", props.Context.Emit)
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  notationGeneralProgrammer_merge_functions(is.Functions, notation.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
      }),
      f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
        notationType,
        f.NewTypeReferenceNode(f.NewIdentifier("null"), nil),
      })),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        f.NewIfStatement(
          f.NewPrefixUnaryExpression(
            shimast.KindExclamationToken,
            f.NewCallExpression(
              f.NewIdentifier("__is"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          ),
          f.NewReturnStatement(f.NewKeywordExpression(shimast.KindNullKeyword)),
          nil,
        ),
        f.NewReturnStatement(f.NewCallExpression(
          f.NewIdentifier("__notation"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        )),
      }), true),
    ),
  }
}

func (notationIsGeneralProgrammerNamespace) Write(props NotationIsGeneralProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := NotationIsGeneralProgrammer.Decompose(NotationIsGeneralProgrammer_DecomposeProps{
    Rename:  props.Rename,
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
