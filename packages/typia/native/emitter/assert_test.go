package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

func TestEmitAssert(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	got, err := EmitAssertArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		`(input) => (`,
		`"string" === typeof input`,
		`) ? input :`,
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
		`const __ok`,
		`"number" === typeof input`,
		`success: true`,
		`success: false`,
		`errors: []`,
		`path: "$input"`,
	} {
		if !strings.Contains(got, fragment) {
			t.Errorf("validate expression should contain %q, got:\n%s", fragment, got)
		}
	}
}
