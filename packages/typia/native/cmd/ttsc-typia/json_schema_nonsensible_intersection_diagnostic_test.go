package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestJSONSchemaNonsensibleIntersectionDiagnostic checks the authored operation results described below.
//
// An unsupported intersection cannot silently emit a schema with weaker inhabitation meaning; the transform rejection must identify the failing call.
//
// 1. One nonrepresentable schema intersection owns this rejection; valid phantom-branded cases are covered by the intersection backstop test.
// 2. The unsupported JSON schema intersection returns status three and the authored operation/location/cause fragments.
//
// @evidence contracts/testing.md#behavioral-verification The unsupported JSON schema intersection returns status three and the authored operation/location/cause fragments.
// @evidence contracts/testing.md#independent-expectations An unsupported intersection cannot silently emit a schema with weaker inhabitation meaning; the transform rejection must identify the failing call.
// @evidence contracts/testing.md#distinguishing-cases One nonrepresentable schema intersection owns this rejection; valid phantom-branded cases are covered by the intersection backstop test.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestJSONSchemaNonsensibleIntersectionDiagnostic as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
  project := ttscTypiaTestFixtureDirectory(t, "json-schema-nonsensible-intersection-")
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
