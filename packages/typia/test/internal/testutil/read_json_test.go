package testutil

import (
	"os"
	"path/filepath"
	"testing"
)

// TestReadJSON verifies JSON fixture loading.
//
// The generic JSON helper should decode fixture files into the caller-selected
// shape while preserving the same fatal behavior used by other test helpers.
// Invalid JSON is exercised in a helper process so the parent test can assert
// the failure contract directly.
//
// 1. Write a temporary JSON fixture.
// 2. Decode the fixture into a typed struct.
// 3. Assert the decoded fields match the fixture payload.
// 4. Assert invalid JSON terminates a helper test process.
func TestReadJSON(t *testing.T) {
	if os.Getenv("TESTUTIL_READ_JSON_FATAL") == "1" {
		file := filepath.Join(t.TempDir(), "invalid.json")
		if err := os.WriteFile(file, []byte("{"), 0644); err != nil {
			t.Fatalf("failed to write invalid json fixture: %v", err)
		}
		ReadJSON[map[string]any](t, file)
		return
	}

	file := filepath.Join(t.TempDir(), "sample.json")
	if err := os.WriteFile(file, []byte(`{"name":"typia","count":3}`), 0644); err != nil {
		t.Fatalf("failed to write json fixture: %v", err)
	}
	output := ReadJSON[struct {
		Name  string `json:"name"`
		Count int    `json:"count"`
	}](t, file)
	if output.Name != "typia" || output.Count != 3 {
		t.Fatalf("unexpected json content: %+v", output)
	}

	assertHelperProcessFails(t, "TestReadJSON", "TESTUTIL_READ_JSON_FATAL")
}
