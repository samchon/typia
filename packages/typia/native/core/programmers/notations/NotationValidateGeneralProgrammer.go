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

type notationValidateGeneralProgrammerNamespace struct{}

var NotationValidateGeneralProgrammer = notationValidateGeneralProgrammerNamespace{}

type NotationValidateGeneralProgrammer_IProps = NotationGeneralProgrammer_IProps

type NotationValidateGeneralProgrammer_DecomposeProps struct {
  Rename  NotationGeneralProgrammer_IRename
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var notationValidateGeneralProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (notationValidateGeneralProgrammerNamespace) Decompose(props NotationValidateGeneralProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
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
  statements := append([]*shimast.Node{}, validate.Statements...)
  statements = append(statements, notation.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__notation", Value: notation.Arrow}),
  )
  notationType := notation.Arrow.AsArrowFunction().Type
  if notationType == nil {
    notationType = nativefactories.TypeFactory.Keyword("any")
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  notationGeneralProgrammer_merge_functions(validate.Functions, notation.Functions),
    Statements: statements,
    Arrow: notationValidateGeneralProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      notationValidateGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      notationGeneralProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{notationType},
      }),
      nil,
      notationValidateGeneralProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      notationValidateGeneralProgrammer_factory.NewBlock(notationValidateGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "result",
          Value: notationValidateGeneralProgrammer_factory.NewAsExpression(
            notationValidateGeneralProgrammer_factory.NewCallExpression(
              notationValidateGeneralProgrammer_factory.NewIdentifier("__validate"),
              nil,
              nil,
              notationValidateGeneralProgrammer_factory.NewNodeList([]*shimast.Node{notationValidateGeneralProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
            nativefactories.TypeFactory.Keyword("any"),
          ),
        }),
        notationValidateGeneralProgrammer_factory.NewIfStatement(
          notationValidateGeneralProgrammer_factory.NewIdentifier("result.success"),
          notationValidateGeneralProgrammer_factory.NewExpressionStatement(notationValidateGeneralProgrammer_factory.NewBinaryExpression(
            nil,
            notationValidateGeneralProgrammer_factory.NewIdentifier("result.data"),
            nil,
            notationValidateGeneralProgrammer_factory.NewToken(shimast.KindEqualsToken),
            notationValidateGeneralProgrammer_factory.NewCallExpression(
              notationValidateGeneralProgrammer_factory.NewIdentifier("__notation"),
              nil,
              nil,
              notationValidateGeneralProgrammer_factory.NewNodeList([]*shimast.Node{notationValidateGeneralProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          )),
          nil,
        ),
        notationValidateGeneralProgrammer_factory.NewReturnStatement(
          notationValidateGeneralProgrammer_factory.NewAsExpression(
            notationValidateGeneralProgrammer_factory.NewIdentifier("result"),
            nativefactories.TypeFactory.Keyword("any"),
          ),
        ),
      }), true),
    ),
  }
}

func (notationValidateGeneralProgrammerNamespace) Write(props NotationValidateGeneralProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo))
  result := NotationValidateGeneralProgrammer.Decompose(NotationValidateGeneralProgrammer_DecomposeProps{
    Rename:  props.Rename,
    Context: props.Context,
    Modulo:  props.Modulo,
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
