package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestWrongTypeTagTargetDiagnostic verifies a rejected tag names its declared
// target once and leaves a compatible tag untouched.
func TestWrongTypeTagTargetDiagnostic(t *testing.T) {
  project := wrongTypeTagTargetDiagnosticProject(t)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code == 0 {
    t.Fatal("wrong-target tag unexpectedly transformed without diagnostics")
  }
  const expected = `the property ["typia.tag"] target must contain array type.`
  if count := strings.Count(errText, expected); count != 1 {
    t.Fatalf("wrong-target diagnostic count mismatch: got %d, want 1\n%s", count, errText)
  }
  if count := strings.Count(errText, "Payload.invalid:"); count != 1 {
    t.Fatalf("diagnostic ownership mismatch: got %d, want 1\n%s", count, errText)
  }
  if strings.Contains(errText, "target must contain boolean type") {
    t.Fatalf("diagnostic named the host type:\n%s", errText)
  }
  if strings.Contains(errText, "Payload.valid:") {
    t.Fatalf("valid array control produced a diagnostic:\n%s", errText)
  }
}

func wrongTypeTagTargetDiagnosticProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  project, err := os.MkdirTemp(base, "wrong-tag-target-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(project) })
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(wrongTypeTagTargetDiagnosticTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(wrongTypeTagTargetDiagnosticSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}

const wrongTypeTagTargetDiagnosticTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const wrongTypeTagTargetDiagnosticSource = `import typia, { tags } from "typia";

interface Payload {
  invalid: boolean & tags.MinItems<1>;
  valid: string[] & tags.MinItems<1>;
}

export const test = (input: unknown) => typia.is<Payload>(input);
`
