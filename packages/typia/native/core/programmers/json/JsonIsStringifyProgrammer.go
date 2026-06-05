package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type jsonIsStringifyProgrammerNamespace struct{}

var JsonIsStringifyProgrammer = jsonIsStringifyProgrammerNamespace{}

type JsonIsStringifyProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var jsonIsStringifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (jsonIsStringifyProgrammerNamespace) Decompose(props JsonIsStringifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  isContext := props.Context
  functional := false
  finite := true
  isContext.Options.Functional = &functional
  isContext.Options.Finite = &finite
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: isContext,
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })

  stringifyContext := props.Context
  numeric := true
  stringifyContext.Options.Functional = &functional
  stringifyContext.Options.Numeric = &numeric
  stringify := JsonStringifyProgrammer.Decompose(JsonStringifyProgrammer_DecomposeProps{
    Context:   stringifyContext,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })

  f := nativecontext.EmitFactoryOf(jsonIsStringifyProgrammer_factory, props.Context.Emit)
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, stringify.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__stringify", Value: stringify.Arrow}, props.Context.Emit),
  )
  stringifyType := stringify.Arrow.AsArrowFunction().Type
  if stringifyType == nil {
    stringifyType = nativefactories.TypeFactory.Keyword("string", props.Context.Emit)
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  jsonStringifyProgrammer_merge_functions(is.Functions, stringify.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
      }),
      f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
        stringifyType,
        f.NewLiteralTypeNode(f.NewKeywordExpression(shimast.KindNullKeyword)),
      })),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      nativefactories.ExpressionFactory.Conditional(
        f.NewCallExpression(
          f.NewIdentifier("__is"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        ),
        f.NewCallExpression(
          f.NewIdentifier("__stringify"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        ),
        f.NewKeywordExpression(shimast.KindNullKeyword),
        props.Context.Emit,
      ),
    ),
  }
}

func (jsonIsStringifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(jsonStringifyProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := JsonIsStringifyProgrammer.Decompose(JsonIsStringifyProgrammer_DecomposeProps{
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
