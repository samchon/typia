//go:build typia_native_internal
// +build typia_native_internal

package main

import (
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
// 1. Resolve existing TypeScript catalog projects from the repository root.
// 2. Run project transform mode so every source file contributes call sites.
// 3. Require JSON project output to include a TypeScript map.
// 4. Fail on any native transform diagnostic from the catalog project.
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
			cwd := filepath.Join(root, "tests", project)
			out, errText, code := transformCoverageCapture(func() int {
				return runTransform([]string{
					"--cwd", cwd,
					"--tsconfig", "tsconfig.json",
					"--output", "ts",
				})
			})
			if code != 0 {
				t.Fatalf("%s transform failed: code=%d stderr=\n%s", project, code, errText)
			}
			if !strings.Contains(out, `"typescript"`) {
				t.Fatalf("%s project output should include TypeScript map:\n%s", project, out)
			}
		})
	}
	for _, project := range []string{"debug", "test-error"} {
		project := project
		t.Run(project, func(t *testing.T) {
			cwd := filepath.Join(root, "tests", project)
			out, _, code := transformCoverageCapture(func() int {
				return runTransform([]string{
					"--cwd", cwd,
					"--tsconfig", "tsconfig.json",
					"--output", "ts",
				})
			})
			if code != 3 {
				t.Fatalf("%s transform should report diagnostics with code 3, got %d", project, code)
			}
			if !strings.Contains(out, `"diagnostics"`) || !strings.Contains(out, `"typescript"`) {
				t.Fatalf("%s output should include diagnostics and TypeScript map:\n%s", project, out)
			}
		})
	}
}
