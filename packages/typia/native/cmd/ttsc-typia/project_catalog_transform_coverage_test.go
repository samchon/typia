//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"encoding/json"
	"path/filepath"
	"strings"
	"testing"
)

// TestProjectCatalogTransformCoverage reuses broad TypeScript test projects.
//
// The focused ttsc fixtures are intentionally small, but the repository already
// has schema and generation projects that exercise many more typia API shapes.
// Running them through the same project transform mode gives Go coverage for
// those native branches without duplicating that TypeScript corpus here.
//
// Each project is held to what its purpose guarantees, never to what its sources
// happen to contain today. The feature projects exist to compile accepted typia
// call sites, so they must transform without a diagnostic. `tests/test-error`
// exists to hold call sites typia rejects, so it must report them. `tests/debug`
// is a scratchpad whose contents are arbitrary by design (samchon/typia#2141): a
// valid sample and a deliberately broken one are equally legitimate states, so
// only the envelope contract itself is asserted for it. Asserting that the
// scratchpad reports diagnostics is asserting that it always holds broken code.
//
// 1. Resolve existing TypeScript catalog projects from the repository root.
// 2. Run project transform mode so every source file contributes call sites.
// 3. Require JSON project output to include a TypeScript map.
// 4. Hold each project to its own purpose's diagnostic contract.
func TestProjectCatalogTransformCoverage(t *testing.T) {
	root := transformCoverageRepoRoot(t)
	for _, project := range []string{
		"template",
		"test-langchain",
		"test-mcp",
		"test-typia-automated",
		"test-typia-generate",
		"test-typia-schema",
		"test-utils",
		"test-utils-automated",
		"test-vercel",
	} {
		project := project
		t.Run(project, func(t *testing.T) {
			out, errText, code := transformCatalogProject(root, project)
			if code != 0 {
				t.Fatalf("%s transform failed: code=%d stderr=\n%s", project, code, errText)
			}
			if !strings.Contains(out, `"typescript"`) {
				t.Fatalf("%s project output should include TypeScript map:\n%s", project, out)
			}
		})
	}
	// tests/test-error compiles deliberately invalid call sites, and reporting them
	// is that workspace's entire reason to exist. Its diagnostics are a contract,
	// not an accident of what it currently holds.
	t.Run("test-error", func(t *testing.T) {
		out, _, code := transformCatalogProject(root, "test-error")
		if code != 3 {
			t.Fatalf("test-error transform should report diagnostics with code 3, got %d", code)
		}
		if !strings.Contains(out, `"diagnostics"`) || !strings.Contains(out, `"typescript"`) {
			t.Fatalf("test-error output should include diagnostics and TypeScript map:\n%s", out)
		}
	})
	// tests/debug is a one-off repro scratchpad, so nothing about its sources is
	// promised: it holds valid code between investigations and invalid code during
	// one. What survives both states is the project transform's own envelope
	// contract, so that is what this pins. The project must resolve and reach a
	// transform decision rather than fail to load (exit 2), it must still
	// contribute transformed sources, and its exit code must agree with the
	// envelope it published.
	//
	// Accepting either 0 or 3 is derived, not observed: transform mode never
	// typechecks, so exit 2 is reachable only from a flag, cwd, or tsconfig-load
	// failure (semantic diagnostics belong to the build route). No source content a
	// repro leaves behind can produce it -- even an outright type error still exits
	// 0 here -- which is what makes the band content-agnostic.
	//
	// The envelope is decoded rather than substring-matched because `"typescript"`
	// carries no `omitempty` and runTransformProject initializes the map before its
	// source loop: the key is present even when the workspace resolved no source at
	// all. That empty envelope is the shape a `rootDir` or `include` rot leaves
	// behind, and this workspace is the one that already shipped such a rot
	// (samchon/typia#2132), so a key-presence check would pass over the one failure
	// worth catching here.
	t.Run("debug", func(t *testing.T) {
		out, errText, code := transformCatalogProject(root, "debug")
		if code != 0 && code != 3 {
			t.Fatalf("debug transform should load and transform the project, got code=%d stderr=\n%s", code, errText)
		}
		var envelope transformProjectOutput
		if err := json.Unmarshal([]byte(out), &envelope); err != nil {
			t.Fatalf("debug project output should be a transform envelope: %v\n%s", err, out)
		}
		if len(envelope.TypeScript) == 0 {
			t.Fatalf("debug project should contribute transformed sources, got an empty TypeScript map:\n%s", out)
		}
		if diagnosed := len(envelope.Diagnostics) > 0; diagnosed != (code == 3) {
			t.Fatalf("debug exit code %d disagrees with its envelope (diagnostics present: %v):\n%s", code, diagnosed, out)
		}
	})
}

// transformCatalogProject runs project transform mode over one repository test
// project and returns its captured stdout, stderr, and exit code.
func transformCatalogProject(root string, project string) (string, string, int) {
	cwd := filepath.Join(root, "tests", project)
	return transformCoverageCapture(func() int {
		return runTransform([]string{
			"--cwd", cwd,
			"--tsconfig", "tsconfig.json",
			"--output", "ts",
		})
	})
}
