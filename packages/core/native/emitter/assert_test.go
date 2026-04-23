package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestEmitAssert(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	got, err := EmitAssertArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		`(input) => { const __errors =`,
		`"string" === typeof input`,
		`if (__errors.length === 0) return input;`,
		`throw`,
		`TypeGuardError`,
	} {
		if !strings.Contains(got, fragment) {
			t.Errorf("assert expression should contain %q, got:\n%s", fragment, got)
		}
	}
}

func TestEmitValidate(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicNumber)
	got, err := EmitValidateArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		`const __errors`,
		`"number" === typeof input`,
		`success: true`,
		`success: false`,
		`data: input } : { success: false, data: input, errors: __errors }`,
		`__diag("$input", "number", input)`,
	} {
		if !strings.Contains(got, fragment) {
			t.Errorf("validate expression should contain %q, got:\n%s", fragment, got)
		}
	}
}
