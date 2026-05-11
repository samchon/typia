package typia_test

import (
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestAdapterEmitCallWithOptionsIgnoresIncompleteProgram verifies no-op guards.
//
// Native emission is only valid after ttsc has a real program, checker, and
// call expression. The public adapter entrypoints must therefore decline
// incomplete input without fabricating output or surfacing an error.
//
// 1. Call the normal emission entrypoint with a nil program.
// 2. Assert it returns no text, no handled flag, and no error.
// 3. Repeat the same assertion for the preserving-types entrypoint.
func TestAdapterEmitCallWithOptionsIgnoresIncompleteProgram(t *testing.T) {
	text, handled, err := typiaadapter.EmitCallWithOptions(nil, typiaadapter.CallSite{}, typiaadapter.PluginOptions{})
	if text != "" || handled || err != nil {
		t.Fatalf("incomplete program should be ignored: text=%q handled=%v err=%v", text, handled, err)
	}

	text, handled, err = typiaadapter.EmitCallWithOptionsPreservingTypes(nil, typiaadapter.CallSite{}, typiaadapter.PluginOptions{})
	if text != "" || handled || err != nil {
		t.Fatalf("preserving-types path should ignore incomplete program: text=%q handled=%v err=%v", text, handled, err)
	}
}
