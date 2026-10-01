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
//
// @evidence contracts/testing.md#behavioral-verification The primitive-native lookup is called with Boolean, BigInt, Number and String in mixed ASCII casing and with Date; recognition and rejection decide the Fatal calls.
// @evidence contracts/testing.md#independent-expectations The four wrapper names are the JavaScript primitive wrapper constructors; the casing variants and the Date negative are authored inputs, not lookup output.
// @evidence contracts/testing.md#distinguishing-cases Mixed-case spellings of each wrapper are positives and Date is the unrelated negative; other native names are not enumerated.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported predicate on strings with no filesystem fixture, process or native command build.
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
