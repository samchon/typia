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

// NotationIsGeneralProgrammer_IProps is an alias of the shared notation props,
// so is wrapper takes the same props as the base programmer.
//
// @evidence contracts/common.md#principled-implementation The wrapper takes exactly the base programmer's props, so the alias states that equality without repeating the fields.
// @evidence contracts/common.md#clear-and-simple-design One alias declaration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A type alias with no behavior.
// @evidence contracts/common.md#meaningful-documentation The doc states what the alias equals.
type NotationIsGeneralProgrammer_IProps = NotationGeneralProgrammer_IProps

// NotationIsGeneralProgrammer_DecomposeProps is the input of Decompose for the
// notation is general generator: Rename (the key conversion), Context (the
// transform context), Functor (the collector of the helper functions that the
// generator emits), Type (the type to generate for) and Name (an optional type
// name).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the key conversion, the transform context, the collector of the helper functions that the generator emits, the type to generate for and an optional type name, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type NotationIsGeneralProgrammer_DecomposeProps struct {
  // Rename selects the runtime case helper and static key conversion.
  Rename NotationGeneralProgrammer_IRename

  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Functor collects shared helper declarations and recursive-visit state.
  Functor *nativehelpers.FunctionProgrammer

  // Type is the checker type whose input shape is analyzed.
  Type *shimchecker.Type

  // Name optionally overrides the rendered type name; nil uses the checker name.
  Name *string
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
