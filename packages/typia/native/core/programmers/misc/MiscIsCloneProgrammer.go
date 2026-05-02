package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type miscIsCloneProgrammerNamespace struct{}

var MiscIsCloneProgrammer = miscIsCloneProgrammerNamespace{}

type MiscIsCloneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var miscIsCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscIsCloneProgrammerNamespace) Decompose(props MiscIsCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  clone := MiscCloneProgrammer.Decompose(MiscCloneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, clone.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__clone", Value: clone.Arrow}),
  )
  cloneType := clone.Arrow.AsArrowFunction().Type
  if cloneType == nil {
    cloneType = nativefactories.TypeFactory.Keyword("any")
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  miscProgrammer_merge_functions(is.Functions, clone.Functions),
    Statements: statements,
    Arrow: miscIsCloneProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      miscIsCloneProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      miscIsCloneProgrammer_factory.NewUnionTypeNode(miscIsCloneProgrammer_factory.NewNodeList([]*shimast.Node{
        cloneType,
        miscIsCloneProgrammer_factory.NewTypeReferenceNode(miscIsCloneProgrammer_factory.NewIdentifier("null"), nil),
      })),
      nil,
      miscIsCloneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      miscIsCloneProgrammer_factory.NewBlock(miscIsCloneProgrammer_factory.NewNodeList([]*shimast.Node{
        miscIsCloneProgrammer_factory.NewIfStatement(
          miscIsCloneProgrammer_factory.NewPrefixUnaryExpression(
            shimast.KindExclamationToken,
            miscIsCloneProgrammer_factory.NewCallExpression(
              miscIsCloneProgrammer_factory.NewIdentifier("__is"),
              nil,
              nil,
              miscIsCloneProgrammer_factory.NewNodeList([]*shimast.Node{miscIsCloneProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          ),
          miscIsCloneProgrammer_factory.NewReturnStatement(miscIsCloneProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)),
          nil,
        ),
        miscIsCloneProgrammer_factory.NewReturnStatement(miscIsCloneProgrammer_factory.NewCallExpression(
          miscIsCloneProgrammer_factory.NewIdentifier("__clone"),
          nil,
          nil,
          miscIsCloneProgrammer_factory.NewNodeList([]*shimast.Node{miscIsCloneProgrammer_factory.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        )),
      }), true),
    ),
  }
}

func (miscIsCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
  result := MiscIsCloneProgrammer.Decompose(MiscIsCloneProgrammer_DecomposeProps{
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

func miscProgrammer_merge_functions(groups ...map[string]*shimast.Node) map[string]*shimast.Node {
  output := map[string]*shimast.Node{}
  for _, group := range groups {
    for key, value := range group {
      output[key] = value
    }
  }
  return output
}
