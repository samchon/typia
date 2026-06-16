//go:build typia_native_internal
// +build typia_native_internal

package misc

import (
	"testing"

	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestMiscTransformerEntryCoverage exercises misc transform entrypoints.
//
// The misc programmers are covered by fixture transforms, but the transform
// wrappers have their own scalar and factory guard paths. Empty transform props
// are enough to enter those wrappers and verify that each route delegates to
// the generic guard layer.
//
// 1. Visit clone and prune scalar wrappers.
// 2. Visit assert, is, and validate variants for clone and prune.
// 3. Visit create/factory variants for clone and prune.
// 4. Recover expected guard panics after each entrypoint call.
func TestMiscTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, run := range []func(){
		func() { MiscCloneTransformer.Transform(props) },
		func() { MiscAssertCloneTransformer.Transform(props) },
		func() { MiscIsCloneTransformer.Transform(props) },
		func() { MiscValidateCloneTransformer.Transform(props) },
		func() { MiscPruneTransformer.Transform(props) },
		func() { MiscAssertPruneTransformer.Transform(props) },
		func() { MiscIsPruneTransformer.Transform(props) },
		func() { MiscValidatePruneTransformer.Transform(props) },
		func() { MiscCreateCloneTransformer.Transform(props) },
		func() { MiscCreateAssertCloneTransformer.Transform(props) },
		func() { MiscCreateIsCloneTransformer.Transform(props) },
		func() { MiscCreateValidateCloneTransformer.Transform(props) },
		func() { MiscCreatePruneTransformer.Transform(props) },
		func() { MiscCreateAssertPruneTransformer.Transform(props) },
		func() { MiscCreateIsPruneTransformer.Transform(props) },
		func() { MiscCreateValidatePruneTransformer.Transform(props) },
	} {
		expectMiscPanic(t, run)
	}
}

func expectMiscPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected misc transformer panic")
		}
	}()
	run()
}
