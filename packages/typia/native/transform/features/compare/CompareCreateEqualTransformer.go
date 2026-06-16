package compare

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type compareCreateEqualTransformerNamespace struct{}

var CompareCreateEqualTransformer = compareCreateEqualTransformerNamespace{}

func (compareCreateEqualTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return compareEqualTransformer_factory(props, "compare.createEquals", false)
}
