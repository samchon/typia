//go:build typia_native_internal
// +build typia_native_internal

package main

import "testing"

// TestRunDefaultBuildRoute verifies flag-shaped invocations fall through to build.
//
// The command dispatcher treats known labels as subcommands, but direct host
// flags are still a supported build shortcut. This branch must compile a real
// project instead of rejecting the first flag as an unknown command.
//
// 1. Create a minimal TypeScript fixture.
// 2. Call run with build flags as the first arguments.
// 3. Disable rewrite and emit so only command dispatch is under test.
// 4. Assert the fallback build route succeeds.
func TestRunDefaultBuildRoute(t *testing.T) {
	project := transformCoverageProject(t, "run-default", "export const value = 1;\n")
	_, errText, code := transformCoverageCapture(func() int {
		return run([]string{
			"--cwd", project,
			"--tsconfig", "tsconfig.json",
			"--noEmit",
			"--rewrite-mode", "none",
		})
	})
	if code != 0 {
		t.Fatalf("default build route failed: code=%d stderr=%s", code, errText)
	}
}
