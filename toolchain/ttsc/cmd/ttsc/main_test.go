package main

import (
	"bytes"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// withCapture replaces stdout/stderr with buffers for the duration of fn.
// Keeps each test hermetic.
func withCapture(fn func()) (out, errOut string) {
	var outBuf, errBuf bytes.Buffer
	prevOut, prevErr := stdout, stderr
	stdout = &outBuf
	stderr = &errBuf
	defer func() {
		stdout = prevOut
		stderr = prevErr
	}()
	fn()
	return outBuf.String(), errBuf.String()
}

func TestRunNoArgsAttemptsProjectBuild(t *testing.T) {
	out, errOut := withCapture(func() {
		if code := run(nil); code == 0 {
			t.Errorf("expected no-args run without a local tsconfig to fail")
		}
	})
	if strings.Contains(out, "Usage:") {
		t.Errorf("no-args ttsc must build the project, not print help; got %q", out)
	}
	if !strings.Contains(errOut, "tsconfig") {
		t.Errorf("expected no-args build to look for tsconfig, got stderr %q", errOut)
	}
}

func TestRunHelpVariants(t *testing.T) {
	for _, flag := range []string{"-h", "--help", "help"} {
		t.Run(flag, func(t *testing.T) {
			out, _ := withCapture(func() {
				if code := run([]string{flag}); code != 0 {
					t.Errorf("expected exit 0, got %d", code)
				}
			})
			if !strings.Contains(out, "demo") {
				t.Errorf("help text should list demo subcommand, got %q", out)
			}
		})
	}
}

func TestRunVersion(t *testing.T) {
	for _, flag := range []string{"-v", "--version", "version"} {
		t.Run(flag, func(t *testing.T) {
			out, _ := withCapture(func() {
				if code := run([]string{flag}); code != 0 {
					t.Errorf("expected exit 0, got %d", code)
				}
			})
			if !strings.Contains(out, "ttsc ") {
				t.Errorf("expected version banner, got %q", out)
			}
			// Include useful debug bits
			for _, tag := range []string{"commit", "go"} {
				if !strings.Contains(out, tag) {
					t.Errorf("expected %q substring in version output, got %q", tag, out)
				}
			}
		})
	}
}

func TestRunUnknownCommandExits2(t *testing.T) {
	_, errOut := withCapture(func() {
		if code := run([]string{"fly-to-mars"}); code != 2 {
			t.Errorf("expected exit 2, got %d", code)
		}
	})
	if !strings.Contains(errOut, "unknown command") {
		t.Errorf("expected error text, got %q", errOut)
	}
}

func TestRunBuildBlocksSemanticDiagnosticsBeforeEmit(t *testing.T) {
	root := t.TempDir()
	writeProjectFile(t, root, "tsconfig.json", `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "outDir": "bin",
    "strict": true
  }
}
`)
	writeProjectFile(t, root, "index.ts", `const value: string = 123;
console.log(value);
`)

	_, errOut := withCapture(func() {
		if code := runBuild([]string{"--cwd", root, "--emit"}); code != 2 {
			t.Errorf("expected exit 2, got %d", code)
		}
	})
	if !strings.Contains(errOut, "Type 'number' is not assignable to type 'string'") {
		t.Errorf("expected semantic diagnostic, got %q", errOut)
	}
	if !strings.Contains(errOut, "\x1b[91merror\x1b[0m") || !strings.Contains(errOut, "TS2322") {
		t.Errorf("expected colored TypeScript-style diagnostic header, got %q", errOut)
	}
	if !strings.Contains(errOut, "\x1b[7m1\x1b[0m") || !strings.Contains(errOut, "~~~~~") {
		t.Errorf("expected source context with highlighted span, got %q", errOut)
	}
	if _, err := os.Stat(filepath.Join(root, "bin", "index.js")); !os.IsNotExist(err) {
		t.Errorf("expected no emitted JS, stat err=%v", err)
	}
}

func TestRunBuildAllowsUnusedTypeParametersOnOverloadSignatures(t *testing.T) {
	root := t.TempDir()
	writeProjectFile(t, root, "tsconfig.json", `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "outDir": "bin",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
`)
	writeProjectFile(t, root, "index.ts", `export function marker<T>(input: unknown): string;
export function marker(input: unknown): string {
  return String(input);
}
`)

	_, errOut := withCapture(func() {
		if code := runBuild([]string{"--cwd", root, "--emit", "--quiet"}); code != 0 {
			t.Errorf("expected exit 0, got %d", code)
		}
	})
	if strings.Contains(errOut, "declared but never used") || strings.Contains(errOut, "All type parameters are unused") {
		t.Errorf("overload signature type parameters must not fail noUnused checks, got %q", errOut)
	}
	if _, err := os.Stat(filepath.Join(root, "bin", "index.js")); err != nil {
		t.Errorf("expected emitted JS, stat err=%v", err)
	}
}

func TestRunBuildBlocksUnusedParametersBeforeEmit(t *testing.T) {
	root := t.TempDir()
	writeProjectFile(t, root, "tsconfig.json", `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "outDir": "bin",
    "strict": true,
    "noUnusedParameters": true
  }
}
`)
	writeProjectFile(t, root, "index.ts", `export function run(unused: string): number {
  return 1;
}
`)

	_, errOut := withCapture(func() {
		if code := runBuild([]string{"--cwd", root, "--emit"}); code != 2 {
			t.Errorf("expected exit 2, got %d", code)
		}
	})
	if !strings.Contains(errOut, "'unused' is declared but its value is never read") &&
		!strings.Contains(errOut, "'unused' is declared but never used") {
		t.Errorf("expected unused parameter diagnostic, got %q", errOut)
	}
	if _, err := os.Stat(filepath.Join(root, "bin", "index.js")); !os.IsNotExist(err) {
		t.Errorf("expected no emitted JS, stat err=%v", err)
	}
}

func TestRunBuildBlocksSyntacticDiagnosticsBeforeEmit(t *testing.T) {
	root := t.TempDir()
	writeProjectFile(t, root, "tsconfig.json", `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "outDir": "bin"
  }
}
`)
	writeProjectFile(t, root, "index.ts", `console.log("before");
const = ;
`)

	_, errOut := withCapture(func() {
		if code := runBuild([]string{"--cwd", root, "--emit"}); code != 2 {
			t.Errorf("expected exit 2, got %d", code)
		}
	})
	if !strings.Contains(errOut, "Variable declaration expected") {
		t.Errorf("expected syntactic diagnostic, got %q", errOut)
	}
	if _, err := os.Stat(filepath.Join(root, "bin", "index.js")); !os.IsNotExist(err) {
		t.Errorf("expected no emitted JS, stat err=%v", err)
	}
}

func writeProjectFile(t *testing.T, root string, name string, contents string) {
	t.Helper()
	file := filepath.Join(root, name)
	if err := os.MkdirAll(filepath.Dir(file), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(file, []byte(contents), 0o644); err != nil {
		t.Fatal(err)
	}
}

func TestRunDemoString(t *testing.T) {
	out, _ := withCapture(func() {
		if code := run([]string{"demo", "--type=string"}); code != 0 {
			t.Errorf("expected exit 0, got %d", code)
		}
	})
	want := `(input) => "string" === typeof input`
	if !strings.Contains(out, want) {
		t.Errorf("expected demo output to contain %q, got:\n%s", want, out)
	}
	if !strings.Contains(out, "demo<string>") {
		t.Errorf("expected comment prefix in demo output, got:\n%s", out)
	}
}

func TestRunDemoEveryAtomic(t *testing.T) {
	cases := map[string]string{
		"boolean": `"boolean" === typeof input`,
		"number":  `"number" === typeof input`,
		"bigint":  `"bigint" === typeof input`,
		"any":     `(input) => true`,
	}
	for typ, expected := range cases {
		t.Run(typ, func(t *testing.T) {
			out, _ := withCapture(func() {
				if code := run([]string{"demo", "--type=" + typ}); code != 0 {
					t.Errorf("expected exit 0 for %s, got %d", typ, code)
				}
			})
			if !strings.Contains(out, expected) {
				t.Errorf("for --type=%s, want %q in output:\n%s", typ, expected, out)
			}
		})
	}
}

func TestRunDemoUnknownTypeExits2(t *testing.T) {
	_, errOut := withCapture(func() {
		if code := run([]string{"demo", "--type=object"}); code != 2 {
			t.Errorf("expected exit 2 for unknown type, got %d", code)
		}
	})
	if !strings.Contains(errOut, "unknown --type") {
		t.Errorf("expected diagnostic text, got %q", errOut)
	}
}

func TestDemoArrowEveryAtomic(t *testing.T) {
	cases := map[string]string{
		"string":  `"string" === typeof input`,
		"number":  `"number" === typeof input`,
		"boolean": `"boolean" === typeof input`,
		"bigint":  `"bigint" === typeof input`,
		"any":     `(input) => true`,
	}
	for name, want := range cases {
		t.Run(name, func(t *testing.T) {
			arrow, err := demoArrow(name)
			if err != nil {
				t.Fatalf("unexpected err: %v", err)
			}
			if !strings.Contains(arrow, want) {
				t.Errorf("for %s want %q, got %q", name, want, arrow)
			}
		})
	}
}
