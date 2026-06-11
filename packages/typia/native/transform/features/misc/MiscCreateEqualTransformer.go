package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscCreateEqualTransformerNamespace struct{}

var MiscCreateEqualTransformer = miscCreateEqualTransformerNamespace{}

func (miscCreateEqualTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return miscEqualTransformer_factory(props, "misc.createEqual", false)
}
