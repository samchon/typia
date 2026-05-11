package testutil

import (
	"os"
	"path/filepath"
	"testing"
)

// TestReadText verifies text fixture loading.
//
// Fixture-based tests rely on a small helper that reads files as strings and
// reports read failures through testing.T. This test covers both a successful
// read and the fatal branch without making the parent test process fail.
//
// 1. Write a temporary text fixture.
// 2. Read the fixture through ReadText.
// 3. Assert the exact string content is returned.
// 4. Assert a missing file terminates a helper test process.
func TestReadText(t *testing.T) {
	if os.Getenv("TESTUTIL_READ_TEXT_FATAL") == "1" {
		ReadText(t, filepath.Join(t.TempDir(), "missing.txt"))
		return
	}

	file := filepath.Join(t.TempDir(), "sample.txt")
	if err := os.WriteFile(file, []byte("typia"), 0644); err != nil {
		t.Fatalf("failed to write text fixture: %v", err)
	}
	if content := ReadText(t, file); content != "typia" {
		t.Fatalf("unexpected text content: %q", content)
	}

	assertHelperProcessFails(t, "TestReadText", "TESTUTIL_READ_TEXT_FATAL")
}
