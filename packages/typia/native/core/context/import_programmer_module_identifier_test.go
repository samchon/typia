//go:build typia_native_internal
// +build typia_native_internal

package context

import "testing"

// TestImportProgrammerModuleIdentifier verifies module names become valid bases.
//
// Unique generated names still need a readable JavaScript identifier base.
// Scoped packages, punctuation, leading digits, and Windows-style separators
// must not reintroduce invalid namespace import bindings.
//
// 1. Convert representative internal, scoped, numeric, and empty module names.
// 2. Assert each result matches the identifier base used by the printer.
func TestImportProgrammerModuleIdentifier(t *testing.T) {
	cases := map[string]string{
		"typia/lib/internal/_randomNumber": "_randomNumber",
		"@scope/package-name":              "package_name",
		"123-module":                       "_123_module",
		`scope\windows-name`:               "windows_name",
		"":                                 "module",
	}
	for input, expected := range cases {
		if actual := importProgrammer_moduleIdentifier(input); actual != expected {
			t.Fatalf("identifier mismatch for %q: expected %q, got %q", input, expected, actual)
		}
	}
}
