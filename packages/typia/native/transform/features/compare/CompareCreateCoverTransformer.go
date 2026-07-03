package compare

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type compareCreateCoverTransformerNamespace struct{}

var CompareCreateCoverTransformer = compareCreateCoverTransformerNamespace{}

func (compareCreateCoverTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return compareEqualTransformer_factory(props, "compare.createCover", true)
}
