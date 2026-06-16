package features

import (
  "strconv"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

const shallowTransformer_DEFAULT_DEPTH = 2

type shallowTransformerNamespace struct{}

var ShallowTransformer = shallowTransformerNamespace{}

func (shallowTransformerNamespace) Transform(config nativeprogrammers.IsProgrammer_IConfig) func(props nativeinternal.ITransformProps) *shimast.Node {
  return func(props nativeinternal.ITransformProps) *shimast.Node {
    depth := shallowTransformer_depth(props, "shallow")
    config.Depth = &depth
    return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
      ITransformProps: props,
      Method:          "shallow",
      Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
        return nativeprogrammers.IsProgrammer.Write(nativeprogrammers.IsProgrammer_IProps{
          Context: x.Context,
          Modulo:  x.Modulo,
          Type:    x.Type,
          Name:    x.Name,
          Init:    x.Init,
          Config:  config,
        })
      },
    })
  }
}

func shallowTransformer_depth(props nativeinternal.ITransformProps, method string) int {
  if props.Expression == nil ||
    props.Expression.TypeArguments == nil ||
    len(props.Expression.TypeArguments.Nodes) <= 1 {
    return shallowTransformer_DEFAULT_DEPTH
  }
  node := props.Expression.TypeArguments.Nodes[1]
  if node == nil {
    return shallowTransformer_DEFAULT_DEPTH
  }
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ == nil || typ.Flags()&shimchecker.TypeFlagsNumberLiteral == 0 {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "generic argument \"N\" must be a number literal.",
    }))
  }
  depth, err := strconv.Atoi(props.Context.Checker.TypeToString(typ))
  if err != nil || depth < 0 {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "generic argument \"N\" must be a non-negative integer.",
    }))
  }
  return depth
}
