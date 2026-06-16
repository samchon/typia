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

type plainValidateCloneProgrammerNamespace struct{}

var PlainValidateCloneProgrammer = plainValidateCloneProgrammerNamespace{}

type PlainValidateCloneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var plainValidateCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainValidateCloneProgrammerNamespace) Decompose(props PlainValidateCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainValidateCloneProgrammer_factory, props.Context.Emit)
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
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
  statements := append([]*shimast.Node{}, validate.Statements...)
  statements = append(statements, clone.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__clone", Value: clone.Arrow}, props.Context.Emit),
  )
  cloneType := clone.Arrow.AsArrowFunction().Type
  if cloneType == nil {
    cloneType = nativefactories.TypeFactory.Keyword("any", props.Context.Emit)
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  plainProgrammer_merge_functions(validate.Functions, clone.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
      }),
      plainCloneProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{cloneType},
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
          f.NewExpressionStatement(
            f.NewBinaryExpression(
              nil,
              f.NewIdentifier("result.data"),
              nil,
              f.NewToken(shimast.KindEqualsToken),
              f.NewCallExpression(
                f.NewIdentifier("__clone"),
                nil,
                nil,
                f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
                shimast.NodeFlagsNone,
              ),
            ),
          ),
          nil,
        ),
        f.NewReturnStatement(f.NewIdentifier("result")),
      }), true),
    ),
  }
}

func (plainValidateCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainCloneProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainValidateCloneProgrammer.Decompose(PlainValidateCloneProgrammer_DecomposeProps{
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
