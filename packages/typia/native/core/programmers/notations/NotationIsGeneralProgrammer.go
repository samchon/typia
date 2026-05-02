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
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__notation", Value: notation.Arrow}),
  )
  notationType := notation.Arrow.AsArrowFunction().Type
  if notationType == nil {
    notationType = nativefactories.TypeFactory.Keyword("any")
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  notationGeneralProgrammer_merge_functions(is.Functions, notation.Functions),
    Statements: statements,
    Arrow: notationIsGeneralProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      notationIsGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      notationIsGeneralProgrammer_factory.NewUnionTypeNode(notationIsGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
        notationType,
        notationIsGeneralProgrammer_factory.NewTypeReferenceNode(notationIsGeneralProgrammer_factory.NewIdentifier("null"), nil),
      })),
      nil,
      notationIsGeneralProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      notationIsGeneralProgrammer_factory.NewBlock(notationIsGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
        notationIsGeneralProgrammer_factory.NewIfStatement(
          notationIsGeneralProgrammer_factory.NewPrefixUnaryExpression(
            shimast.KindExclamationToken,
            notationIsGeneralProgrammer_factory.NewCallExpression(
              notationIsGeneralProgrammer_factory.NewIdentifier("__is"),
              nil,
              nil,
              notationIsGeneralProgrammer_factory.NewNodeList([]*shimast.Node{notationIsGeneralProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          ),
          notationIsGeneralProgrammer_factory.NewReturnStatement(notationIsGeneralProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)),
          nil,
        ),
        notationIsGeneralProgrammer_factory.NewReturnStatement(notationIsGeneralProgrammer_factory.NewCallExpression(
          notationIsGeneralProgrammer_factory.NewIdentifier("__notation"),
          nil,
          nil,
          notationIsGeneralProgrammer_factory.NewNodeList([]*shimast.Node{notationIsGeneralProgrammer_factory.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        )),
      }), true),
    ),
  }
}

func (notationIsGeneralProgrammerNamespace) Write(props NotationIsGeneralProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo))
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
