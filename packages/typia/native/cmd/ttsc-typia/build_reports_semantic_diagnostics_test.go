//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"strings"
	"testing"
)

// TestBuildReportsSemanticDiagnostics verifies program diagnostics stop build.
//
// A project can parse successfully while still containing type errors. Those
// errors arrive after the program is loaded, and the build command must report
// them before collecting typia call sites or emitting files.
//
// 1. Create a strict TypeScript project with an invalid assignment.
// 2. Run build in no-emit mode.
// 3. Capture command diagnostics.
// 4. Assert semantic diagnostics produce status 2.
func TestBuildReportsSemanticDiagnostics(t *testing.T) {
	project := transformCoverageProject(t, "build-semantic", "const value: number = \"bad\";\nexport { value };\n")
	_, errText, code := transformCoverageCapture(func() int {
		return runBuild([]string{
			"--cwd", project,
			"--tsconfig", "tsconfig.json",
			"--noEmit",
			"--rewrite-mode", "none",
		})
	})
	if code != 2 || !strings.Contains(errText, "Type 'string' is not assignable") {
		t.Fatalf("semantic diagnostics mismatch: code=%d stderr=%s", code, errText)
	}
}
