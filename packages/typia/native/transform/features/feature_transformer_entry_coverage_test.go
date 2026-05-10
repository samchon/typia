package features

import (
	"testing"

	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestFeatureTransformerEntryCoverage exercises root feature transformers.
//
// The command harness covers successful adapter emission, while these wrappers
// are the public transform package entrypoints. Calling them with empty
// transform props covers method selection and generic-argument guard paths
// without constructing a compiler program.
//
// 1. Exercise assert/create-assert method selection for plain, guard, equals, and both.
// 2. Exercise is/create-is and validate/create-validate equals variants.
// 3. Exercise random and create-random generic guard paths.
// 4. Recover expected transformer panics so every entrypoint can be visited.
func TestFeatureTransformerEntryCoverage(t *testing.T) {
	expectFeaturePanic(t, func() { RandomTransformer.Transform(nativetransform.ITransformProps{}) })
	expectFeaturePanic(t, func() { CreateRandomTransformer.Transform(nativetransform.ITransformProps{}) })
	for _, config := range []nativeprogrammers.AssertProgrammer_IConfig{
		{},
		{Guard: true},
		{Equals: true},
		{Guard: true, Equals: true},
	} {
		config := config
		expectFeaturePanic(t, func() { AssertTransformer.Transform(config)(nativetransform.ITransformProps{}) })
		expectFeaturePanic(t, func() { CreateAssertTransformer.Transform(config)(nativetransform.ITransformProps{}) })
	}
	for _, config := range []nativeprogrammers.IsProgrammer_IConfig{{}, {Equals: true}} {
		config := config
		expectFeaturePanic(t, func() { IsTransformer.Transform(config)(nativetransform.ITransformProps{}) })
		expectFeaturePanic(t, func() { CreateIsTransformer.Transform(config)(nativetransform.ITransformProps{}) })
	}
	for _, config := range []nativeprogrammers.ValidateProgrammer_IConfig{{}, {Equals: true}} {
		config := config
		expectFeaturePanic(t, func() { ValidateTransformer.Transform(config)(nativetransform.ITransformProps{}) })
		expectFeaturePanic(t, func() { CreateValidateTransformer.Transform(config)(nativetransform.ITransformProps{}) })
	}
}

func expectFeaturePanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected transformer panic")
		}
	}()
	run()
}
