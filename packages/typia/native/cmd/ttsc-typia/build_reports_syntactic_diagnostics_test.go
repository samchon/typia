//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"strings"
	"testing"
)

// TestBuildReportsSyntacticDiagnostics verifies load-time diagnostics stop build.
//
// Syntax failures are reported before the program reaches semantic diagnostics
// or emission. The command must write those diagnostics and return usage-style
// status 2 without attempting typia rewrites.
//
// 1. Create a TypeScript project with a syntactically invalid source file.
// 2. Run build in no-emit mode.
// 3. Capture stderr from the command wrapper.
// 4. Assert the command fails before emission.
func TestBuildReportsSyntacticDiagnostics(t *testing.T) {
	project := transformCoverageProject(t, "build-syntax", "export const value = ;\n")
	_, errText, code := transformCoverageCapture(func() int {
		return runBuild([]string{
			"--cwd", project,
			"--tsconfig", "tsconfig.json",
			"--noEmit",
			"--rewrite-mode", "none",
		})
	})
	if code != 2 || !strings.Contains(errText, "Expression expected") {
		t.Fatalf("syntactic diagnostics mismatch: code=%d stderr=%s", code, errText)
	}
}
