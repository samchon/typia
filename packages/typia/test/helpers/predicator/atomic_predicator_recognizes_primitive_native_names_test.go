package typia_test

import (
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestAtomicPredicatorRecognizesPrimitiveNativeNames verifies primitive lookup.
//
// Native-like primitive names are used to suppress duplicate atomic checks
// during code generation. The lookup must recognize the four primitive wrapper
// names regardless of ASCII casing and reject unrelated runtime constructors.
//
// 1. Check Boolean, BigInt, Number, and String names with mixed casing.
// 2. Assert each primitive wrapper is recognized.
// 3. Assert an unrelated constructor name is not recognized.
func TestAtomicPredicatorRecognizesPrimitiveNativeNames(t *testing.T) {
	for _, name := range []string{"Boolean", "BIGINT", "number", "String"} {
		if !helpers.AtomicPredicator.Native(name) {
			t.Fatalf("primitive native name should be recognized: %q", name)
		}
	}
	if helpers.AtomicPredicator.Native("Date") {
		t.Fatal("Date should not be treated as primitive native name")
	}
}
