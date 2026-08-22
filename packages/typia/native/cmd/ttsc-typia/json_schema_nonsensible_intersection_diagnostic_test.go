package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestJSONSchemaNonsensibleIntersectionDiagnostic verifies that ttsc reports
// the transform-time cause behind issue #2373.
//
// The runtime fallback cannot inspect a TypeScript type after transformation
// has been skipped. This regression therefore compiles the reporter's exact
// `Date & string` property through the real typia package and preserves the
// actionable native diagnostic at its actual compiler boundary.
//
//  1. Compile a `typia.json.schema` call for the nonsensible intersection.
//  2. Require the API diagnostic, property path, and intersection reason.
func TestJSONSchemaNonsensibleIntersectionDiagnostic(t *testing.T) {
  project := jsonSchemaNonsensibleIntersectionDiagnosticProject(t)
  stdout, stderr, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 3 {
    t.Fatalf("expected transform diagnostic exit code 3, got %d\nstdout:\n%s\nstderr:\n%s", code, stdout, stderr)
  }
  for _, expected := range []string{
    "error TS(typia.json.schema):",
    "ProblematicType.test",
    "nonsensible intersection",
  } {
    if !strings.Contains(stderr, expected) {
      t.Fatalf("expected stderr to contain %q, got:\n%s", expected, stderr)
    }
  }
}

func jsonSchemaNonsensibleIntersectionDiagnosticProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("create fixture base: %v", err)
  }
  project, err := os.MkdirTemp(base, "json-schema-nonsensible-intersection-")
  if err != nil {
    t.Fatalf("create fixture project: %v", err)
  }
  t.Cleanup(func() {
    if err := os.RemoveAll(project); err != nil {
      t.Errorf("remove fixture project: %v", err)
    }
  })
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("create fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonSchemaNonsensibleIntersectionDiagnosticSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}

const jsonSchemaNonsensibleIntersectionDiagnosticSource = `import typia from "typia";

type ProblematicType = {
  test: Date & string;
};

export const schema = typia.json.schema<ProblematicType>();
`
