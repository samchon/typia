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

// NotationAssertGeneralProgrammer_IProps is an alias of the shared notation
// props, so assert wrapper takes the same props as the base programmer.
//
// @evidence contracts/common.md#principled-implementation The wrapper takes exactly the base programmer's props, so the alias states that equality without repeating the fields.
// @evidence contracts/common.md#clear-and-simple-design One alias declaration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A type alias with no behavior.
// @evidence contracts/common.md#meaningful-documentation The doc states what the alias equals.
type NotationAssertGeneralProgrammer_IProps = NotationGeneralProgrammer_IProps

// NotationAssertGeneralProgrammer_DecomposeProps is the input of Decompose for
// the notation assert general generator: Rename (the key conversion), Context
// (the transform context), Functor (the collector of the helper functions that
// the generator emits), Type (the type to generate for), Name (an optional type
// name) and Init (the optional initializer of the error factory parameter).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the key conversion, the transform context, the collector of the helper functions that the generator emits, the type to generate for, an optional type name and the optional initializer of the error factory parameter, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
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
  f := nativecontext.EmitFactoryOf(notationAssertGeneralProgrammer_factory, props.Context.Emit)
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
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__notation", Value: notation.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  notationGeneralProgrammer_merge_functions(assert.Functions, notation.Functions),
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
      notation.Arrow.AsArrowFunction().Type,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        f.NewIdentifier("__notation"),
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

func (notationAssertGeneralProgrammerNamespace) Write(props NotationAssertGeneralProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo), props.Context.Emit)
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
