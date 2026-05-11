//go:build typia_native_internal
// +build typia_native_internal

package reflect

import (
	"testing"

	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestReflectTransformerEntryCoverage exercises reflect transform entrypoints.
//
// Reflect project fixtures cover successful metadata output, but no-generic and
// malformed-expression guard paths belong to the transform wrappers. This test
// enters each reflect wrapper directly and recovers the expected guard failure.
//
// 1. Visit metadata and name wrappers.
// 2. Visit schema and schemas wrappers.
// 3. Exercise reflect error formatting with empty inputs.
// 4. Recover expected guard panics after each entrypoint call.
func TestReflectTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, run := range []func(){
		func() { ReflectMetadataTransformer.Transform(props) },
		func() { ReflectNameTransformer.Transform(props) },
		func() { ReflectSchemaTransformer.Transform(props) },
		func() { ReflectSchemasTransformer.Transform(props) },
	} {
		expectReflectPanic(t, run)
	}
	if len(reflectTransformer_errors(nil)) != 0 ||
		reflectTransformer_sourceTextFallback(nil) != "" {
		t.Fatal("reflect fallback helpers returned unexpected values")
	}
}

func expectReflectPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected reflect transformer panic")
		}
	}()
	run()
}
