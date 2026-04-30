package misc

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativemiscprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/misc"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscCreatePruneTransformerNamespace struct{}

var MiscCreatePruneTransformer = miscCreatePruneTransformerNamespace{}

func (miscCreatePruneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "misc.createPrune",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativemiscprogrammers.MiscPruneProgrammer.Write(x)
		},
	})
}
