package notations

import (
	"testing"

	nativenotations "github.com/samchon/typia/packages/typia/native/core/programmers/notations"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestNotationTransformerEntryCoverage exercises notation transform entrypoints.
//
// Notation programmer behavior is covered separately, but these transform
// wrappers choose scalar/factory routes and method names. Empty transform props
// visit those wrappers and trigger generic guard branches deterministically.
//
// 1. Exercise camel, pascal, and snake rename configurations.
// 2. Visit scalar notation transform wrappers.
// 3. Visit create/factory notation transform wrappers.
// 4. Recover expected guard panics for every wrapper call.
func TestNotationTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, rename := range []nativenotations.NotationGeneralProgrammer_IRename{
		nativenotations.NotationGeneralProgrammer_Camel,
		nativenotations.NotationGeneralProgrammer_Pascal,
		nativenotations.NotationGeneralProgrammer_Snake,
	} {
		rename := rename
		for _, run := range []func(){
			func() { NotationGeneralTransformer.Transform(rename)(props) },
			func() { NotationAssertGeneralTransformer.Transform(rename)(props) },
			func() { NotationIsGeneralTransformer.Transform(rename)(props) },
			func() { NotationValidateGeneralTransformer.Transform(rename)(props) },
			func() { NotationCreateGeneralTransformer.Transform(rename)(props) },
			func() { NotationCreateAssertGeneralTransformer.Transform(rename)(props) },
			func() { NotationCreateIsGeneralTransformer.Transform(rename)(props) },
			func() { NotationCreateValidateGeneralTransformer.Transform(rename)(props) },
		} {
			expectNotationPanic(t, run)
		}
	}
	if notationGeneralTransformer_capitalize("") != "" ||
		notationGeneralTransformer_capitalize("camel") != "Camel" {
		t.Fatal("notation capitalize helper returned unexpected output")
	}
}

func expectNotationPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected notation transformer panic")
		}
	}()
	run()
}
