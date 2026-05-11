package typia_test

import (
	"errors"
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestAdapterFormatTransformErrorIncludesModulePath verifies diagnostic text.
//
// Failed native transforms are reported back through TypeScript diagnostics.
// The diagnostic code must include the typia module namespace when the call came
// from a namespaced API such as `typia.json.stringify`.
//
// 1. Build a call site for a namespaced typia JSON method.
// 2. Format a synthetic transform error through the adapter.
// 3. Assert the diagnostic code includes both module and method.
func TestAdapterFormatTransformErrorIncludesModulePath(t *testing.T) {
	text := typiaadapter.FormatTransformError(
		typiaadapter.CallSite{Module: "json", Method: "stringify"},
		errors.New("boom"),
	)

	expected := "error TS(typia.json.stringify): boom"
	if text != expected {
		t.Fatalf("unexpected diagnostic text: %q", text)
	}
}
