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

type jsonAssertParseProgrammerNamespace struct{}

var JsonAssertParseProgrammer = jsonAssertParseProgrammerNamespace{}

type JsonAssertParseProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

func (jsonAssertParseProgrammerNamespace) Decompose(props JsonAssertParseProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(jsonParseProgrammer_factory, props.Context.Emit)
  nativefactories.JsonMetadataFactory.Analyze(nativefactories.JsonMetadataFactory_IProps{
    Method:  props.Functor.Method,
    Checker: props.Context.Checker,
    Type:    props.Type,
  })
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: jsonParseProgrammer_context(props.Context, &jsonParseProgrammer_options{
      Functional: jsonParseProgrammer_bool(false),
      Numeric:    jsonParseProgrammer_bool(false),
    }),
    Functor: props.Functor,
    Config: nativeprogrammers.AssertProgrammer_IConfig{
      Equals: false,
      Guard:  false,
    },
    Type: props.Type,
    Name: props.Name,
    Init: props.Init,
  })

  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: assert.Functions,
    Statements: append(append([]*shimast.Node{}, assert.Statements...), nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__assert",
      Value: assert.Arrow,
    }, props.Context.Emit)),
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string", props.Context.Emit), nil, props.Context.Emit),
        nativeprogrammers.Guardian.Parameter(struct {
          Context nativecontext.ITypiaContext
          Init    *shimast.Node
        }{
          Context: props.Context,
          Init:    props.Init,
        }),
      }),
      jsonProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "Primitive",
        Arguments: []*shimast.TypeNode{
          jsonProgrammer_typeReference(props.Context, props.Type, props.Name),
        },
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewAsExpression(
        f.NewCallExpression(
          f.NewIdentifier("__assert"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewCallExpression(
              f.NewIdentifier("JSON.parse"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                f.NewIdentifier("input"),
              }),
              shimast.NodeFlagsNone,
            ),
            nativeprogrammers.Guardian.Identifier(),
          }),
          shimast.NodeFlagsNone,
        ),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
      ),
    ),
  }
}

func (jsonAssertParseProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  method := nativehelpers.ModuloMethodText(props.Modulo)
  functor := nativehelpers.NewFunctionProgrammer(method, props.Context.Emit)
  result := JsonAssertParseProgrammer.Decompose(JsonAssertParseProgrammer_DecomposeProps{
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
