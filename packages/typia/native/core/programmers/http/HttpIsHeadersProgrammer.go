package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpIsHeadersProgrammerNamespace struct{}

var HttpIsHeadersProgrammer = httpIsHeadersProgrammerNamespace{}

type HttpIsHeadersProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

func (httpIsHeadersProgrammerNamespace) Decompose(props HttpIsHeadersProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
		Context: httpProgrammer_context(props.Context, false, true),
		Functor: props.Functor,
		Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
		Type:    props.Type,
		Name:    props.Name,
	})
	decode := HttpHeadersProgrammer.Decompose(HttpHeadersProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return httpProgrammer_is_result(is, decode)
}

func (httpIsHeadersProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
	result := HttpIsHeadersProgrammer.Decompose(HttpIsHeadersProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}
