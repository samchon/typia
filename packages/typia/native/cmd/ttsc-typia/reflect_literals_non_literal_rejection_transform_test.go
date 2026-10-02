package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestReflectLiteralsNonLiteralRejectionTransform checks the authored operation results described below.
//
// reflect.literals must enumerate the entire finite literal domain; an empty never domain and mixed unenumerable members cannot silently become incomplete lists.
//
// 1. Never/aliases/exhaustive Exclude/null/atomic/any/branded shapes contrast with literal-plus-atomic/template and boolean-plus-number mixtures, distinguishing the two rejection causes.
// 2. Each unsupported literal enumeration fails with its authored no-constants or only-constants reason.
//
// @evidence contracts/testing.md#behavioral-verification Each unsupported literal enumeration fails with its authored no-constants or only-constants reason.
// @evidence contracts/testing.md#independent-expectations reflect.literals must enumerate the entire finite literal domain; an empty never domain and mixed unenumerable members cannot silently become incomplete lists.
// @evidence contracts/testing.md#distinguishing-cases Never/aliases/exhaustive Exclude/null/atomic/any/branded shapes contrast with literal-plus-atomic/template and boolean-plus-number mixtures, distinguishing the two rejection causes.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestReflectLiteralsNonLiteralRejectionTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestReflectLiteralsNonLiteralRejectionTransform(t *testing.T) {
  cases := []struct {
    Name     string
    Argument string
    Message  string
  }{
    {"never", "never", "no constant literal type found."},
    {"never alias", "Empty", "no constant literal type found."},
    {"exhaustive exclude", `Exclude<"a" | "b", "a" | "b">`, "no constant literal type found."},
    {"bare null", "null", "no constant literal type found."},
    {"atomic", "string", "no constant literal type found."},
    {"any", "any", "no constant literal type found."},
    {"tag branded atomic", `string & tags.Format<"uuid">`, "no constant literal type found."},
    {"nullable atomic", "string | null", "no constant literal type found."},
    {"literal beside atomic", `"a" | number`, "only constant literal types are allowed."},
    {"literal beside template", "`prefix${number}` | \"a\"", "only constant literal types are allowed."},
    {"renderable atomic beside atomic", "boolean | number", "only constant literal types are allowed."},
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.Name, func(t *testing.T) {
      project := reflectLiteralsRejectionProject(t, tc.Argument)
      out, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", "src/main.ts",
          "--output", "js",
        })
      })
      if code == 0 {
        t.Fatalf("reflect.literals<%s> transformed successfully, want rejection:\n%s", tc.Argument, out)
      }
      if !strings.Contains(errText, "typia transform error") {
        t.Fatalf("reflect.literals<%s> diagnostics missing:\nstdout=%s\nstderr=%s", tc.Argument, out, errText)
      }
      if !strings.Contains(errText, tc.Message) {
        t.Fatalf("reflect.literals<%s> reported the wrong reason, want %q:\n%s", tc.Argument, tc.Message, errText)
      }
    })
  }
}

func reflectLiteralsRejectionProject(t *testing.T, argument string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "reflect-literals-reject-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  source := "import typia, { tags } from \"typia\";\n\nexport const values = typia.reflect.literals<" + argument + ">();\n"
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}
