package typia_test

import (
	"bytes"
	"encoding/json"
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"path/filepath"
	"testing"
)

// TestPackageModuleExportContract verifies typia/lib/module stays exported.
//
// Vite 8 resolves bare package subpaths through package.json exports and fails
// before reading the generated files. This pins both source-workspace and
// published-package mappings to the root entrypoint files that provide both
// default and named TypeScript declarations for this compatibility subpath.
//
// 1. Read the typia package manifest.
// 2. Assert source exports expose typia/lib/module through src/index.ts.
// 3. Assert publish exports expose typia/lib/module through lib/index.* in
// the exact resolver-condition order.
func TestPackageModuleExportContract(t *testing.T) {
	root := testutil.RepoRoot(t)

	typiaPackage := testutil.ReadJSON[struct {
		Exports       map[string]json.RawMessage `json:"exports"`
		PublishConfig struct {
			Exports map[string]json.RawMessage `json:"exports"`
		} `json:"publishConfig"`
	}](t, filepath.Join(root, "packages", "typia", "package.json"))

	source, ok := typiaPackage.Exports["./lib/module"]
	if !ok {
		t.Fatal("typia source exports must expose ./lib/module")
	}
	assertCompactJSON(
		t,
		source,
		`"./src/index.ts"`,
		"typia source export for ./lib/module",
	)

	published, ok := typiaPackage.PublishConfig.Exports["./lib/module"]
	if !ok {
		t.Fatal("typia publish exports must expose ./lib/module")
	}
	assertCompactJSON(
		t,
		published,
		`{"types":"./lib/index.d.ts","import":"./lib/index.mjs","default":"./lib/index.js"}`,
		"typia publish export for ./lib/module",
	)
}

func assertCompactJSON(t *testing.T, input json.RawMessage, expected string, label string) {
	t.Helper()

	buffer := bytes.NewBuffer(nil)
	if err := json.Compact(buffer, input); err != nil {
		t.Fatalf("%s must be valid JSON: %v", label, err)
	}
	if actual := buffer.String(); actual != expected {
		t.Fatalf("%s mismatch:\nexpected: %s\nactual:   %s", label, expected, actual)
	}
}
