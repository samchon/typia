package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscCoverTransformerNamespace struct{}

var MiscCoverTransformer = miscCoverTransformerNamespace{}

func (miscCoverTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return miscEqualTransformer_scalar(props, "misc.cover", true)
}
