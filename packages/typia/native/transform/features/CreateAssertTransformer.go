package features

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type createAssertTransformerNamespace struct{}

var CreateAssertTransformer = createAssertTransformerNamespace{}

func (createAssertTransformerNamespace) Transform(config nativeprogrammers.AssertProgrammer_IConfig) func(props nativeinternal.ITransformProps) *shimast.Node {
  return func(props nativeinternal.ITransformProps) *shimast.Node {
    method := "assert"
    if config.Equals && config.Guard {
      method = "assertGuardEquals"
    } else if config.Equals {
      method = "assertEquals"
    } else if config.Guard {
      method = "assertGuard"
    }
    return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
      ITransformProps: props,
      Method:          method,
      Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
        return nativeprogrammers.AssertProgrammer.Write(nativeprogrammers.AssertProgrammer_IProps{
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
