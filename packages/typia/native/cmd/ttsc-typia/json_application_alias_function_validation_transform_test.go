package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonApplicationAliasFunctionValidation checks the authored operation results described below.
//
// A type alias preserves the underlying function meaning: JSON application requires one required, nonnullable signature and must apply the same checks before and after unaliasing.
//
// 1. Three invalid alias shapes contrast with direct and deep single-function alias chains, pinning both under-rejection and over-rejection.
// 2. Aliased union/optional/nullable functions report their exact rejection reasons; direct and deep required aliases emit the named function without spurious empty-application errors.
//
// @evidence contracts/testing.md#behavioral-verification Aliased union/optional/nullable functions report their exact rejection reasons; direct and deep required aliases emit the named function without spurious empty-application errors.
// @evidence contracts/testing.md#independent-expectations A type alias preserves the underlying function meaning: JSON application requires one required, nonnullable signature and must apply the same checks before and after unaliasing.
// @evidence contracts/testing.md#distinguishing-cases Three invalid alias shapes contrast with direct and deep single-function alias chains, pinning both under-rejection and over-rejection.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestJsonApplicationAliasFunctionValidation as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestJsonApplicationAliasFunctionValidation(t *testing.T) {
  for _, tt := range []struct {
    name     string
    source   string
    fragment string
  }{
    {
      name: "alias-union",
      source: `import typia from "typia";
type BadUnion = (() => number) | ((value: number) => string);
typia.json.application<{ good(): number; bad: BadUnion; }>();
`,
      fragment: "JSON application's function type does not allow union type.",
    },
    {
      name: "alias-optional",
      source: `import typia from "typia";
type BadFn = () => number;
typia.json.application<{ good(): number; bad?: BadFn; }>();
`,
      fragment: "JSON application's function type must be required.",
    },
    {
      name: "alias-nullable",
      source: `import typia from "typia";
type BadFn = () => number;
typia.json.application<{ good(): number; bad: BadFn | null; }>();
`,
      fragment: "JSON application's function type must not be nullable.",
    },
  } {
    jsonApplicationAliasExpectDiagnostic(t, tt.name, tt.source, tt.fragment)
  }

  for _, tt := range []struct {
    name     string
    source   string
    function string
  }{
    {
      name: "alias-required-single",
      source: `import typia from "typia";
type GoodFn = () => number;
typia.json.application<{ only: GoodFn; }>();
`,
      function: "only",
    },
    {
      name: "alias-deep-chain",
      source: `import typia from "typia";
type A = B;
type B = () => number;
typia.json.application<{ deep: A; }>();
`,
      function: "deep",
    },
  } {
    jsonApplicationAliasExpectInclusion(t, tt.name, tt.source, tt.function)
  }
}

func jsonApplicationAliasExpectDiagnostic(t *testing.T, name string, source string, fragment string) {
  t.Helper()
  project := jsonApplicationAliasProject(t, name, source)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(project, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("%s aliased application build should fail with code 3, got %d\nstderr=%s", name, code, errText)
  }
  for _, want := range []string{"error TS(typia.json.application):", fragment} {
    if !strings.Contains(errText, want) {
      t.Fatalf("%s aliased application diagnostic missing %q:\n%s", name, want, errText)
    }
  }
}

func jsonApplicationAliasExpectInclusion(t *testing.T, name string, source string, function string) {
  t.Helper()
  project := jsonApplicationAliasProject(t, name, source)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("%s valid aliased application should transform, got code %d\nstderr=%s", name, code, errText)
  }
  if !strings.Contains(out, `name: "`+function+`"`) {
    t.Fatalf("%s valid aliased application dropped its function %q:\n%s", name, function, out)
  }
  if strings.Contains(out, "at least a function") {
    t.Fatalf("%s valid aliased application reported a spurious empty-application error:\n%s", name, out)
  }
}

func jsonApplicationAliasProject(t *testing.T, name string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-application-alias-"+name+"-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(randomRecursiveMinItemsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}
