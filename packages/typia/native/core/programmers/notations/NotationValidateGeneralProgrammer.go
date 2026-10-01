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

// NotationValidateGeneralProgrammer_IProps is an alias of the shared notation
// props, so validate wrapper takes the same props as the base programmer.
//
// @evidence contracts/common.md#principled-implementation The wrapper takes exactly the base programmer's props, so the alias states that equality without repeating the fields.
// @evidence contracts/common.md#clear-and-simple-design One alias declaration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A type alias with no behavior.
// @evidence contracts/common.md#meaningful-documentation The doc states what the alias equals.
type NotationValidateGeneralProgrammer_IProps = NotationGeneralProgrammer_IProps

// NotationValidateGeneralProgrammer_DecomposeProps is the input of Decompose for
// the notation validate general generator: Rename (the key conversion), Context
// (the transform context), Modulo (the call's callee expression), Functor (the
// collector of the helper functions that the generator emits), Type (the type to
// generate for) and Name (an optional type name).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the key conversion, the transform context, the call's callee expression, the collector of the helper functions that the generator emits, the type to generate for and an optional type name, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
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
  f := nativecontext.EmitFactoryOf(notationValidateGeneralProgrammer_factory, props.Context.Emit)
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
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__notation", Value: notation.Arrow}, props.Context.Emit),
  )
  notationType := notation.Arrow.AsArrowFunction().Type
  if notationType == nil {
    notationType = nativefactories.TypeFactory.Keyword("any", props.Context.Emit)
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  notationGeneralProgrammer_merge_functions(validate.Functions, notation.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
      }),
      notationGeneralProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{notationType},
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "result",
          Value: f.NewAsExpression(
            f.NewCallExpression(
              f.NewIdentifier("__validate"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
            nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
          ),
        }, props.Context.Emit),
        f.NewIfStatement(
          f.NewIdentifier("result.success"),
          f.NewExpressionStatement(f.NewBinaryExpression(
            nil,
            f.NewIdentifier("result.data"),
            nil,
            f.NewToken(shimast.KindEqualsToken),
            f.NewCallExpression(
              f.NewIdentifier("__notation"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          )),
          nil,
        ),
        f.NewReturnStatement(
          f.NewAsExpression(
            f.NewIdentifier("result"),
            nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
          ),
        ),
      }), true),
    ),
  }
}

func (notationValidateGeneralProgrammerNamespace) Write(props NotationValidateGeneralProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo), props.Context.Emit)
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
