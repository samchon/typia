package typia_test

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestFunctionProgrammerDisableDeclareCopiesState verifies disabling is copied.
//
// Disabling declaration emission should not mutate the original programmer.
// The helper returns a shallow copy with declaration output suppressed, while
// the source programmer keeps its existing variable declarations.
//
// 1. Create a function programmer and register one variable declaration.
// 2. Disable declarations through the helper.
// 3. Assert the disabled copy emits no declarations.
// 4. Assert the original programmer still emits its declaration.
func TestFunctionProgrammerDisableDeclareCopiesState(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	programmer := helpers.NewFunctionProgrammer("is")
	programmer.EmplaceVariable("value", factory.NewStringLiteral("ok", shimast.TokenFlagsNone))

	disabled := helpers.Disable_function_programmer_declare(programmer)
	if disabled == nil {
		t.Fatal("non-nil function programmer should produce a disabled copy")
	}
	if got := disabled.Declare(); len(got) != 0 {
		t.Fatalf("disabled programmer should not emit declarations: %d", len(got))
	}
	if got := programmer.Declare(); len(got) != 1 {
		t.Fatalf("original programmer should keep declarations: %d", len(got))
	}
}
