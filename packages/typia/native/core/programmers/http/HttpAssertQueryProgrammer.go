package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpAssertQueryProgrammerNamespace struct{}

var HttpAssertQueryProgrammer = httpAssertQueryProgrammerNamespace{}

type HttpAssertQueryProgrammer_IProps struct {
	Context       nativecontext.ITypiaContext
	Modulo        *shimast.Node
	Type          *shimchecker.Type
	Name          *string
	Init          *shimast.Node
	AllowOptional bool
}

type HttpAssertQueryProgrammer_DecomposeProps struct {
	Context       nativecontext.ITypiaContext
	Functor       *nativehelpers.FunctionProgrammer
	Type          *shimchecker.Type
	Name          *string
	Init          *shimast.Node
	AllowOptional bool
}

func (httpAssertQueryProgrammerNamespace) Decompose(props HttpAssertQueryProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
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
	decode := HttpQueryProgrammer.Decompose(HttpQueryProgrammer_DecomposeProps{
		Context:       props.Context,
		Functor:       props.Functor,
		AllowOptional: props.AllowOptional,
		Type:          props.Type,
		Name:          props.Name,
	})
	return httpProgrammer_assert_result(props.Context, props.Init, assert, decode)
}

func (httpAssertQueryProgrammerNamespace) Write(props HttpAssertQueryProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
	result := HttpAssertQueryProgrammer.Decompose(HttpAssertQueryProgrammer_DecomposeProps{
		Context:       props.Context,
		Functor:       functor,
		Type:          props.Type,
		Name:          props.Name,
		Init:          props.Init,
		AllowOptional: props.AllowOptional,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}
