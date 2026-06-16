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

type plainIsCloneProgrammerNamespace struct{}

var PlainIsCloneProgrammer = plainIsCloneProgrammerNamespace{}

type PlainIsCloneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var plainIsCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainIsCloneProgrammerNamespace) Decompose(props PlainIsCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainIsCloneProgrammer_factory, props.Context.Emit)
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  clone := PlainCloneProgrammer.Decompose(PlainCloneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, clone.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__clone", Value: clone.Arrow}, props.Context.Emit),
  )
  cloneType := clone.Arrow.AsArrowFunction().Type
  if cloneType == nil {
    cloneType = nativefactories.TypeFactory.Keyword("any", props.Context.Emit)
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  plainProgrammer_merge_functions(is.Functions, clone.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
      }),
      f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
        cloneType,
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
          f.NewIdentifier("__clone"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        )),
      }), true),
    ),
  }
}

func (plainIsCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainCloneProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainIsCloneProgrammer.Decompose(PlainIsCloneProgrammer_DecomposeProps{
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

func plainProgrammer_merge_functions(groups ...map[string]*shimast.Node) map[string]*shimast.Node {
  output := map[string]*shimast.Node{}
  for _, group := range groups {
    for key, value := range group {
      output[key] = value
    }
  }
  return output
}
