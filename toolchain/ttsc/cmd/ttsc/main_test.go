package main

import (
	"bytes"
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
