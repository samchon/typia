package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscCreateCoverTransformerNamespace struct{}

var MiscCreateCoverTransformer = miscCreateCoverTransformerNamespace{}

func (miscCreateCoverTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return miscEqualTransformer_factory(props, "misc.createCover", true)
}
