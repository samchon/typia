package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestWrongTypeTagTargetDiagnostic verifies rejected tags name their declared target once.
//
// Issue #2381 attached array-only tags to scalar and object hosts. Diagnostics
// named each host type instead of the tag's `array` contract, and the boolean
// intersection reported the same tag twice through its literal-union metadata.
//
//  1. Transform direct and factory validators with four wrong host shapes and one valid array control.
//  2. Require one property-owned diagnostic for each rejected tag occurrence.
//  3. Require every message to name the declared array target and no message to name a host target.
func TestWrongTypeTagTargetDiagnostic(t *testing.T) {
  operations := map[string]string{
    "direct":  `export const test = (input: unknown) => typia.is<Payload>(input);`,
    "factory": `export const test = typia.createIs<Payload>();`,
  }
  for name, operation := range operations {
    name := name
    operation := operation
    t.Run(name, func(t *testing.T) {
      project := wrongTypeTagTargetDiagnosticProject(t, name, fmt.Sprintf(wrongTypeTagTargetDiagnosticSource, operation))
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", "src/main.ts",
          "--output", "js",
        })
      })
      if code == 0 {
        t.Fatalf("wrong-target tags unexpectedly transformed without diagnostics")
      }
      const expected = `the property ["typia.tag"] target must contain array type.`
      if count := strings.Count(errText, expected); count != 4 {
        t.Fatalf("wrong-target diagnostic count mismatch: got %d, want 4\n%s", count, errText)
      }
      for _, property := range []string{"booleanValue", "numberValue", "stringValue", "objectValue"} {
        if count := strings.Count(errText, "Payload."+property+":"); count != 1 {
          t.Fatalf("property %s diagnostic ownership mismatch: got %d, want 1\n%s", property, count, errText)
        }
      }
      for _, host := range []string{"boolean", "number", "string", "object"} {
        wrong := "target must contain " + host + " type"
        if strings.Contains(errText, wrong) {
          t.Fatalf("diagnostic named host target %q:\n%s", wrong, errText)
        }
      }
      if strings.Contains(errText, "Payload.validValue:") {
        t.Fatalf("valid array control produced a diagnostic:\n%s", errText)
      }
    })
  }
}

func wrongTypeTagTargetDiagnosticProject(t *testing.T, name string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  project, err := os.MkdirTemp(base, "wrong-tag-target-"+name+"-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(project) })
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(recursiveContainerHelperIndexTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}

const wrongTypeTagTargetDiagnosticSource = `import typia, { tags } from "typia";

type BooleanAlias = boolean;
interface Payload {
  booleanValue: BooleanAlias & tags.MinItems<1>;
  numberValue: number & tags.MaxItems<2>;
  stringValue: string & tags.UniqueItems;
  objectValue: { value: string } & tags.MinItems<1>;
  validValue: string[] & tags.MinItems<1>;
}

%s
`
