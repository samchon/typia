package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationKebabCaseTransform verifies kebab spelling in emitted notation property assignments.
//
// Kebab notation splits word boundaries and lowercases components; literal target property names are authored independently from the transform output.
//
// 1. Capitalized words, separators and acronym-like property inputs exercise distinct key spellings; Pascal/unicode spelling controls belong to separate cases.
// 2. The output contains every authored expected kebab key.
//
// @evidence contracts/testing.md#behavioral-verification The output contains every authored expected kebab key.
// @evidence contracts/testing.md#independent-expectations Kebab notation splits word boundaries and lowercases components; literal target property names are authored independently from the transform output.
// @evidence contracts/testing.md#distinguishing-cases Capitalized words, separators and acronym-like property inputs exercise distinct key spellings; Pascal/unicode spelling controls belong to separate cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNotationKebabCaseTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNotationKebabCaseTransform(t *testing.T) {
  project := notationKebabCaseProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("kebab notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  for _, key := range []string{`"user-id"`, `"user-name"`, `"_private-value"`, `"xmlparser"`, `"inner-value"`} {
    if !strings.Contains(out, key) {
      t.Fatalf("emitted converter should contain kebab key %s:\n%s", key, out)
    }
  }
}

func notationKebabCaseProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-kebab-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationKebabCaseTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationKebabCaseSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const notationKebabCaseTSConfig = `{
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

const notationKebabCaseSource = `import typia from "typia";

interface SourceRecord {
  userId: string;
  user_name: string;
  _privateValue: number;
  XMLParser: boolean;
  nested: { innerValue: string };
}

export const toKebab = typia.notations.createKebab<SourceRecord>();
export const isKebab = typia.notations.createIsKebab<SourceRecord>();
export const assertKebab = typia.notations.createAssertKebab<SourceRecord>();
export const validateKebab =
  typia.notations.createValidateKebab<SourceRecord>();
`
