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

type plainAssertClassifyProgrammerNamespace struct{}

var PlainAssertClassifyProgrammer = plainAssertClassifyProgrammerNamespace{}

// PlainAssertClassifyProgrammer_DecomposeProps is the input of Decompose for the
// plain assert classify generator: Context (the transform context), Functor (the
// collector of the helper functions that the generator emits), Type (the type to
// generate for), Name (an optional type name), Init (the optional initializer of
// the error factory parameter) and Modulo (the call's callee expression).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the collector of the helper functions that the generator emits, the type to generate for, an optional type name, the optional initializer of the error factory parameter and the call's callee expression, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type PlainAssertClassifyProgrammer_DecomposeProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Functor collects shared helper declarations and recursive-visit state.
  Functor *nativehelpers.FunctionProgrammer

  // Type is the checker type whose input shape is analyzed.
  Type *shimchecker.Type

  // Name optionally overrides the rendered type name; nil uses the checker name.
  Name *string

  // Init optionally initializes the assertion error factory parameter.
  Init *shimast.Node

  // Modulo is the call-site node; forwarded so the inner classify can resolve a
  // cross-module class value-import for from/new construction.
  Modulo *shimast.Node
}

var plainAssertClassifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainAssertClassifyProgrammerNamespace) Decompose(props PlainAssertClassifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainAssertClassifyProgrammer_factory, props.Context.Emit)
  // For a class-TYPE target (typeof C) the input is the from/new SEED or the
  // field-copy instance shape — NOT typeof C's static members. Validate against
  // that redirected type so a legitimate seed is accepted and the static side is
  // never validated. Instance / plain types are returned unchanged.
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    plainClassifyProgrammer_validation_type(props.Context, props.Type, plainClassifyProgrammer_call_file(props.Modulo)),
    Name:    props.Name,
    Init:    props.Init,
  })
  classify := PlainClassifyProgrammer.Decompose(PlainClassifyProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
    Modulo:    props.Modulo,
  })
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, classify.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__classify", Value: classify.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  plainProgrammer_merge_functions(assert.Functions, classify.Functions),
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
      classify.Arrow.AsArrowFunction().Type,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        f.NewIdentifier("__classify"),
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

func (plainAssertClassifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainClassifyProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainAssertClassifyProgrammer.Decompose(PlainAssertClassifyProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
    Modulo:  props.Modulo,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}
