package compare

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type compareCreateLessTransformerNamespace struct{}

var CompareCreateLessTransformer = compareCreateLessTransformerNamespace{}

func (compareCreateLessTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return compareLessTransformer_factory(props, "compare.createLess")
}
