//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"path/filepath"
	"testing"
)

// TestPluginOptionsMissingConfigFallsBackToDefaults verifies unreadable config files are ignored.
//
// Plugin option detection is deliberately best-effort because the compiler can
// still run without typia plugin flags. A missing config path must therefore
// return the zero option set instead of surfacing a command error here.
//
// 1. Point option parsing at a nonexistent tsconfig file.
// 2. Resolve the path through a temporary working directory.
// 3. Read typia plugin options.
// 4. Assert every option remains false.
func TestPluginOptionsMissingConfigFallsBackToDefaults(t *testing.T) {
	options := readTypiaPluginOptions(t.TempDir(), filepath.Join("missing", "tsconfig.json"))
	if options.Functional || options.Numeric || options.Finite || options.Undefined {
		t.Fatalf("missing config should return zero plugin options: %+v", options)
	}
}
