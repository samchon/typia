package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"path/filepath"
	"strings"
	"testing"
)

// TestPackageTtscPluginContract verifies the package-level ttsc plugin
// contract.
//
// This test belongs in the Go unit suite because it checks native package
// ownership and source-publish contracts, not TypeScript e2e behavior. It
// guards the manifest rules that let external ttsc discover typia as a source
// plugin without shipping platform-specific binaries.
//
// 1. Read the root manifest and workspace catalog.
// 2. Assert legacy ts-patch setup hooks are absent.
// 3. Read the typia package manifest and assert the ttsc plugin entry.
// 4. Assert native source is published and checkout-relative ttsc replacements are absent.
func TestPackageTtscPluginContract(t *testing.T) {
	root := testutil.RepoRoot(t)

	rootManifest := testutil.ReadJSON[struct {
		DevDependencies map[string]string `json:"devDependencies"`
		Scripts         map[string]string `json:"scripts"`
	}](t, filepath.Join(root, "package.json"))
	if _, ok := rootManifest.DevDependencies["ts-patch"]; ok {
		t.Fatal("root package.json must not depend on ts-patch anymore")
	}
	if _, ok := rootManifest.Scripts["prepare"]; ok {
		t.Fatal("root package.json must not run ts-patch in prepare anymore")
	}

	workspace := testutil.ReadText(t, filepath.Join(root, "pnpm-workspace.yaml"))
	if strings.Contains(workspace, "ts-patch:") {
		t.Fatal("workspace catalog must not keep ts-patch entries")
	}

	typiaPackage := testutil.ReadJSON[struct {
		Files                []string          `json:"files"`
		OptionalDependencies map[string]string `json:"optionalDependencies"`
		Ttsc                 struct {
			Plugin struct {
				Transform string `json:"transform"`
			} `json:"plugin"`
		} `json:"ttsc"`
	}](t, filepath.Join(root, "packages", "typia", "package.json"))
	if typiaPackage.Ttsc.Plugin.Transform != "typia/lib/transform" {
		t.Fatalf("typia must expose its ttsc plugin through package.json: %q", typiaPackage.Ttsc.Plugin.Transform)
	}
	if typiaPackage.OptionalDependencies != nil {
		t.Fatal("typia must not depend on platform-specific native binary packages")
	}
	if !testutil.Contains(typiaPackage.Files, "native") {
		t.Fatal("typia package must publish its native Go source tree")
	}
	if testutil.Contains(typiaPackage.Files, "bin") {
		t.Fatal("typia package must not publish a native binary bin directory")
	}

	nativeGoMod := testutil.ReadText(t, filepath.Join(root, "packages", "typia", "native", "go.mod"))
	if strings.Contains(nativeGoMod, "../../../../ttsc") {
		t.Fatal("native go.mod must not contain checkout-relative ttsc replacements")
	}
}
