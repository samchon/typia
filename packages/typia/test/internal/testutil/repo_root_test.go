package testutil

import (
	"os"
	"path/filepath"
	"testing"
)

// TestRepoRoot verifies repository root discovery.
//
// Test helpers load fixtures relative to the repository root, so this helper
// must resolve the root from its own source file and fail loudly when caller
// information is unavailable. The failure path is executed in a helper process
// because the production helper terminates the current test through testing.T.
//
// 1. Resolve the repository root from the helper source path.
// 2. Assert the root contains the workspace package.json file.
// 3. Re-run this test in a helper process with runtime.Caller forced to fail.
// 4. Assert the helper process exits with a test failure.
func TestRepoRoot(t *testing.T) {
	if os.Getenv("TESTUTIL_REPO_ROOT_FATAL") == "1" {
		runtimeCaller = func(int) (uintptr, string, int, bool) {
			return 0, "", 0, false
		}
		RepoRoot(t)
		return
	}

	root := RepoRoot(t)
	if _, err := os.Stat(filepath.Join(root, "package.json")); err != nil {
		t.Fatalf("expected repo root to contain package.json: %v", err)
	}

	assertHelperProcessFails(t, "TestRepoRoot", "TESTUTIL_REPO_ROOT_FATAL")
}
