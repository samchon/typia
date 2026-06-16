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

type plainAssertPruneProgrammerNamespace struct{}

var PlainAssertPruneProgrammer = plainAssertPruneProgrammerNamespace{}

type PlainAssertPruneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

var plainAssertPruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainAssertPruneProgrammerNamespace) Decompose(props PlainAssertPruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainAssertPruneProgrammer_factory, props.Context.Emit)
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false},
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  prune := PlainPruneProgrammer.Decompose(PlainPruneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, assert.Statements...)
  statements = append(statements, prune.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__assert", Value: assert.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__prune", Value: prune.Arrow}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  plainProgrammer_merge_functions(assert.Functions, prune.Functions),
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
      f.NewTypeReferenceNode(
        f.NewIdentifier(plainCloneProgrammer_type_name(props.Context, props.Type, props.Name)),
        nil,
      ),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        f.NewExpressionStatement(
          f.NewBinaryExpression(
            nil,
            f.NewIdentifier("input"),
            nil,
            f.NewToken(shimast.KindEqualsToken),
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
          ),
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
        f.NewReturnStatement(f.NewIdentifier("input")),
      }), true),
    ),
  }
}

func (plainAssertPruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainCloneProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainAssertPruneProgrammer.Decompose(PlainAssertPruneProgrammer_DecomposeProps{
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
