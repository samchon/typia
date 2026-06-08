package typia_test

import (
	"encoding/json"
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"path/filepath"
	"testing"
)

// TestPackageModuleExportContract verifies typia/lib/module stays exported.
//
// Vite 8 resolves bare package subpaths through package.json exports and fails
// before reading the generated files. This pins both source-workspace and
// published-package mappings to the actual module entrypoint files.
//
// 1. Read the typia package manifest.
// 2. Assert source exports expose typia/lib/module through src/module.ts.
// 3. Assert publish exports expose typia/lib/module through lib/module.*.
func TestPackageModuleExportContract(t *testing.T) {
	root := testutil.RepoRoot(t)

	typiaPackage := testutil.ReadJSON[struct {
		Exports       map[string]json.RawMessage `json:"exports"`
		PublishConfig struct {
			Exports map[string]json.RawMessage `json:"exports"`
		} `json:"publishConfig"`
	}](t, filepath.Join(root, "packages", "typia", "package.json"))

	var source string
	if err := json.Unmarshal(typiaPackage.Exports["./lib/module"], &source); err != nil {
		t.Fatalf("typia source export for ./lib/module must be a string: %v", err)
	}
	if source != "./src/module.ts" {
		t.Fatalf("typia source export for ./lib/module must point to src/module.ts: %q", source)
	}

	var published struct {
		Types   string `json:"types"`
		Import  string `json:"import"`
		Default string `json:"default"`
	}
	if err := json.Unmarshal(typiaPackage.PublishConfig.Exports["./lib/module"], &published); err != nil {
		t.Fatalf("typia publish export for ./lib/module must be an object: %v", err)
	}
	if published.Types != "./lib/module.d.ts" {
		t.Fatalf("typia publish export for ./lib/module must expose module.d.ts: %q", published.Types)
	}
	if published.Import != "./lib/module.mjs" {
		t.Fatalf("typia publish export for ./lib/module must expose module.mjs: %q", published.Import)
	}
	if published.Default != "./lib/module.js" {
		t.Fatalf("typia publish export for ./lib/module must expose module.js: %q", published.Default)
	}
}
