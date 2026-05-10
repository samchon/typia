package http

import (
	"testing"

	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestHTTPTransformerEntryCoverage exercises HTTP transform entrypoints.
//
// HTTP emit behavior is covered through synthetic TypeScript projects, but the
// transform package wrappers are separate entrypoints. Empty transform props
// drive their input/generic guard branches while keeping the test independent
// from compiler setup.
//
// 1. Visit scalar form-data, query, headers, and parameter transformers.
// 2. Visit assert, is, and validate wrappers for each supported HTTP decoder.
// 3. Visit create/factory variants for every HTTP helper.
// 4. Recover expected guard panics after each entrypoint call.
func TestHTTPTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, run := range []func(){
		func() { HttpFormDataTransformer.Transform(props) },
		func() { HttpAssertFormDataTransformer.Transform(props) },
		func() { HttpIsFormDataTransformer.Transform(props) },
		func() { HttpValidateFormDataTransformer.Transform(props) },
		func() { HttpQueryTransformer.Transform(props) },
		func() { HttpAssertQueryTransformer.Transform(props) },
		func() { HttpIsQueryTransformer.Transform(props) },
		func() { HttpValidateQueryTransformer.Transform(props) },
		func() { HttpHeadersTransformer.Transform(props) },
		func() { HttpAssertHeadersTransformer.Transform(props) },
		func() { HttpIsHeadersTransformer.Transform(props) },
		func() { HttpValidateHeadersTransformer.Transform(props) },
		func() { HttpParameterTransformer.Transform(props) },
		func() { CreateHttpFormDataTransformer.Transform(props) },
		func() { CreateHttpAssertFormDataTransformer.Transform(props) },
		func() { CreateHttpIsFormDataTransformer.Transform(props) },
		func() { CreateHttpValidateFormDataTransformer.Transform(props) },
		func() { CreateHttpQueryTransformer.Transform(props) },
		func() { CreateHttpAssertQueryTransformer.Transform(props) },
		func() { CreateHttpIsQueryTransformer.Transform(props) },
		func() { CreateHttpValidateQueryTransformer.Transform(props) },
		func() { CreateHttpHeadersTransformer.Transform(props) },
		func() { CreateHttpAssertHeadersTransformer.Transform(props) },
		func() { CreateHttpIsHeadersTransformer.Transform(props) },
		func() { CreateHttpValidateHeadersTransformer.Transform(props) },
		func() { CreateHttpParameterTransformer.Transform(props) },
	} {
		expectHTTPPanic(t, run)
	}
}

func expectHTTPPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected HTTP transformer panic")
		}
	}()
	run()
}
