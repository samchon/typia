//go:build typia_native_internal
// +build typia_native_internal

package plain

import (
  "testing"

  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestPlainTransformerEntryCoverage exercises plain transform entrypoints.
//
// The plain programmers are covered by fixture transforms, but the transform
// wrappers have their own scalar and factory guard paths. Empty transform props
// are enough to enter those wrappers and verify that each route delegates to
// the generic guard layer.
//
// 1. Visit clone and prune scalar wrappers.
// 2. Visit assert, is, and validate variants for clone and prune.
// 3. Visit create/factory variants for clone and prune.
// 4. Recover expected guard panics after each entrypoint call.
func TestPlainTransformerEntryCoverage(t *testing.T) {
  props := nativetransform.ITransformProps{}
  for _, run := range []func(){
    func() { PlainCloneTransformer.Transform(props) },
    func() { PlainAssertCloneTransformer.Transform(props) },
    func() { PlainIsCloneTransformer.Transform(props) },
    func() { PlainValidateCloneTransformer.Transform(props) },
    func() { PlainPruneTransformer.Transform(props) },
    func() { PlainAssertPruneTransformer.Transform(props) },
    func() { PlainIsPruneTransformer.Transform(props) },
    func() { PlainValidatePruneTransformer.Transform(props) },
    func() { PlainCreateCloneTransformer.Transform(props) },
    func() { PlainCreateAssertCloneTransformer.Transform(props) },
    func() { PlainCreateIsCloneTransformer.Transform(props) },
    func() { PlainCreateValidateCloneTransformer.Transform(props) },
    func() { PlainCreatePruneTransformer.Transform(props) },
    func() { PlainCreateAssertPruneTransformer.Transform(props) },
    func() { PlainCreateIsPruneTransformer.Transform(props) },
    func() { PlainCreateValidatePruneTransformer.Transform(props) },
  } {
    expectPlainPanic(t, run)
  }
}

func expectPlainPanic(t *testing.T, run func()) {
  t.Helper()
  defer func() {
    if recover() == nil {
      t.Fatal("expected plain transformer panic")
    }
  }()
  run()
}
