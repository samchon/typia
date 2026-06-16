package compare

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type compareCoverTransformerNamespace struct{}

var CompareCoverTransformer = compareCoverTransformerNamespace{}

func (compareCoverTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return compareEqualTransformer_scalar(props, "compare.cover", true)
}
