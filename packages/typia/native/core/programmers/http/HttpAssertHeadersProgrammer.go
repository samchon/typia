package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpAssertHeadersProgrammerNamespace struct{}

var HttpAssertHeadersProgrammer = httpAssertHeadersProgrammerNamespace{}

type HttpAssertHeadersProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

func (httpAssertHeadersProgrammerNamespace) Decompose(props HttpAssertHeadersProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
		Context: httpProgrammer_context(props.Context, false, false),
		Functor: props.Functor,
		Config: nativeprogrammers.AssertProgrammer_IConfig{
			Equals: false,
			Guard:  false,
		},
		Type: props.Type,
		Name: props.Name,
		Init: props.Init,
	})
	decode := HttpHeadersProgrammer.Decompose(HttpHeadersProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return httpProgrammer_assert_result(props.Context, props.Init, assert, decode)
}

func (httpAssertHeadersProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
	result := HttpAssertHeadersProgrammer.Decompose(HttpAssertHeadersProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: functor,
		Type:    props.Type,
		Name:    props.Name,
		Init:    props.Init,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}
