//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"bytes"
	"errors"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// TestCommandRoutesAndDiagnosticsCoverage exercises command-only branches.
//
// Fixture transforms cover the typia backend, but they do not naturally visit
// CLI routing, option validation, manifest emission, or diagnostic formatting.
// This test keeps those command concerns in the command package instead of
// mixing them into TypeScript fixture assertions.
//
// 1. Route help, version, demo, default build, and invalid project arguments.
// 2. Exercise build and transform option validation paths.
// 3. Emit with rewrite disabled so manifest writing is covered deterministically.
// 4. Format transform diagnostics through both relative and absolute paths.
func TestCommandRoutesAndDiagnosticsCoverage(t *testing.T) {
	primitives := transformCoverageProject(t, "command", transformCoverageCoreSource)
	plain := transformCoverageProject(t, "plain", "export const value: number = 1;\n")

	cases := []struct {
		name string
		run  func(*testing.T) int
		code int
	}{
		{"help", func(t *testing.T) int { return run([]string{"help"}) }, 0},
		{"version", func(t *testing.T) int { return run([]string{"version"}) }, 0},
		{"demo", func(t *testing.T) int { return run([]string{"demo"}) }, 0},
		{"build_command", func(t *testing.T) int {
			return run([]string{
				"build",
				"--cwd", plain,
				"--tsconfig", "tsconfig.json",
				"--noEmit",
				"--rewrite-mode", "none",
			})
		}, 0},
		{"check_command", func(t *testing.T) int {
			return run([]string{
				"check",
				"--cwd", plain,
				"--tsconfig", "tsconfig.json",
				"--rewrite-mode", "none",
			})
		}, 0},
		{"transform_command", func(t *testing.T) int {
			return run([]string{
				"transform",
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "ts",
				"--rewrite-mode", "none",
			})
		}, 0},
		{"project_missing_path", func(t *testing.T) int { return run([]string{"--project"}) }, 2},
		{"project_path", func(t *testing.T) int {
			return run([]string{
				"--project", filepath.Join(plain, "tsconfig.json"),
				"--cwd", plain,
				"--noEmit",
				"--rewrite-mode", "none",
			})
		}, 0},
		{"default_build_error", func(t *testing.T) int {
			t.Chdir(t.TempDir())
			return run(nil)
		}, 2},
		{"build_bad_flag", func(t *testing.T) int { return runBuild([]string{"--bad"}) }, 2},
		{"build_conflicting_emit", func(t *testing.T) int {
			return runBuild([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--emit",
				"--noEmit",
			})
		}, 2},
		{"build_bad_rewrite_mode", func(t *testing.T) int {
			return runBuild([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--rewrite-mode", "bad",
			})
		}, 2},
		{"transform_bad_flag", func(t *testing.T) int { return runTransform([]string{"--bad"}) }, 2},
		{"transform_bad_rewrite_mode", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--rewrite-mode", "bad",
			})
		}, 2},
		{"transform_bad_output", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--output", "bad",
			})
		}, 2},
		{"transform_out_without_file", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--out", filepath.Join(t.TempDir(), "out.ts"),
			})
		}, 2},
		{"transform_missing_file", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/missing.ts",
			})
		}, 2},
		{"transform_missing_tsconfig", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", t.TempDir(),
				"--tsconfig", "missing.json",
			})
		}, 2},
		{"build_emit_manifest", func(t *testing.T) int {
			dir := t.TempDir()
			return runBuild([]string{
				"--cwd", plain,
				"--tsconfig", "tsconfig.json",
				"--emit",
				"--outDir", dir,
				"--manifest", filepath.Join(dir, "manifest.json"),
				"--verbose",
				"--rewrite-mode", "none",
			})
		}, 0},
		{"build_emit_manifest_mkdir_error", func(t *testing.T) int {
			dir := t.TempDir()
			blocker := filepath.Join(t.TempDir(), "file")
			if err := os.WriteFile(blocker, []byte("block"), 0o644); err != nil {
				t.Fatalf("write manifest mkdir blocker: %v", err)
			}
			return runBuild([]string{
				"--cwd", plain,
				"--tsconfig", "tsconfig.json",
				"--emit",
				"--outDir", dir,
				"--manifest", filepath.Join(blocker, "child", "manifest.json"),
				"--rewrite-mode", "none",
			})
		}, 3},
		{"build_emit_manifest_write_error", func(t *testing.T) int {
			dir := t.TempDir()
			manifestDir := t.TempDir()
			return runBuild([]string{
				"--cwd", plain,
				"--tsconfig", "tsconfig.json",
				"--emit",
				"--outDir", dir,
				"--manifest", manifestDir,
				"--rewrite-mode", "none",
			})
		}, 3},
		{"transform_ts_out", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "ts",
				"--out", filepath.Join(t.TempDir(), "main.ts"),
				"--rewrite-mode", "none",
			})
		}, 0},
		// Publishes, rather than the 3 this expected while samchon/typia#2134
		// made `--output js` miss its own artifact under the fixture's `outDir`.
		{"transform_js_out", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "js",
				"--out", filepath.Join(t.TempDir(), "main.js"),
				"--rewrite-mode", "none",
			})
		}, 0},
		{"transform_ts_stdout_write_error", func(t *testing.T) int {
			return commandRoutesWithFailingStdout(func() int {
				return runTransform([]string{
					"--cwd", primitives,
					"--tsconfig", "tsconfig.json",
					"--file", "src/main.ts",
					"--output", "ts",
					"--rewrite-mode", "none",
				})
			})
		}, 3},
		{"transform_js_stdout_write_error", func(t *testing.T) int {
			return commandRoutesWithFailingStdout(func() int {
				return runTransform([]string{
					"--cwd", primitives,
					"--tsconfig", "tsconfig.json",
					"--file", "src/main.ts",
					"--output", "js",
					"--rewrite-mode", "none",
				})
			})
		}, 3},
		{"transform_ts_mkdir_error", func(t *testing.T) int {
			blocker := filepath.Join(t.TempDir(), "file")
			if err := os.WriteFile(blocker, []byte("block"), 0o644); err != nil {
				t.Fatalf("write mkdir blocker: %v", err)
			}
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "ts",
				"--out", filepath.Join(blocker, "child.ts"),
				"--rewrite-mode", "none",
			})
		}, 3},
		{"transform_js_mkdir_error", func(t *testing.T) int {
			blocker := filepath.Join(t.TempDir(), "file")
			if err := os.WriteFile(blocker, []byte("block"), 0o644); err != nil {
				t.Fatalf("write mkdir blocker: %v", err)
			}
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "js",
				"--out", filepath.Join(blocker, "child.js"),
				"--rewrite-mode", "none",
			})
		}, 3},
		{"transform_ts_write_error", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "ts",
				"--out", t.TempDir(),
				"--rewrite-mode", "none",
			})
		}, 3},
		{"transform_js_write_error", func(t *testing.T) int {
			return runTransform([]string{
				"--cwd", primitives,
				"--tsconfig", "tsconfig.json",
				"--file", "src/main.ts",
				"--output", "js",
				"--out", t.TempDir(),
				"--rewrite-mode", "none",
			})
		}, 3},
	}
	for _, tc := range cases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			_, errText, code := transformCoverageCapture(func() int {
				return tc.run(t)
			})
			if code != tc.code {
				t.Fatalf("%s: expected code %d, got %d stderr=%s", tc.name, tc.code, code, errText)
			}
		})
	}

	t.Setenv("TYPIA_TTSC_TRANSFORM_OUTPUT", "ts")
	if defaultTransformOutput() != "ts" {
		t.Fatal("environment default output should be ts")
	}
	t.Setenv("TYPIA_TTSC_TRANSFORM_OUTPUT", "")
	if defaultTransformOutput() != "ts" {
		t.Fatal("empty environment default output should be ts")
	}

	var formatted bytes.Buffer
	writeTypiaTransformDiagnostics(&formatted, []typiaTransformDiagnostic{
		{File: filepath.Join(primitives, "src", "main.ts"), Line: 1, Column: 2, Code: "typia.is", Message: "message"},
		{File: filepath.Join(primitives, "src", "main.ts"), Code: "typia.assert", Message: "plain"},
	}, primitives)
	text := filepath.ToSlash(formatted.String())
	if !strings.Contains(text, "src/main.ts:1:2") || !strings.Contains(text, "plain") {
		t.Fatalf("diagnostics were not formatted as expected: %s", text)
	}
	compiler := transformDiagnosticToCompilerDiagnostic(typiaTransformDiagnostic{
		File:    filepath.Join(primitives, "src", "main.ts"),
		Line:    3,
		Column:  4,
		Code:    "typia.test",
		Message: "compiler",
	})
	if compiler.File == nil || compiler.Line != 3 || compiler.Character != 4 {
		t.Fatalf("compiler diagnostic was not populated: %+v", compiler)
	}
}

type commandRoutesFailingWriter struct{}

func (commandRoutesFailingWriter) Write([]byte) (int, error) {
	return 0, errors.New("command routes write failure")
}

func commandRoutesWithFailingStdout(run func() int) int {
	oldStdout := stdout
	stdout = commandRoutesFailingWriter{}
	defer func() {
		stdout = oldStdout
	}()
	return run()
}
