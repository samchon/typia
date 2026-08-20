package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesEnumMemberValueTransform verifies an enum whose member
// borrows its value from another file withholds the completeness declaration,
// while an enum that writes its own values keeps it.
//
// An enum member's value is read straight into the generated validator, so
// `Kind.A === input` becomes `"x" === input` and changes the moment the value
// changes. When the member writes a literal — including the negative form, which
// TypeScript reads as one constant — that value is written here and no other
// file can decide it. When it borrows one (`A = Other.X`), the value lives
// somewhere the type graph never names: the checker hands the analysis the
// resolved literal, not the reference that produced it (samchon/typia#2357).
//
//  1. Build a project with `plain.ts`, whose enum writes a string and a negative
//     number, and `kind.ts`, whose enum takes a member value from `other.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert both callers transformed into a literal comparison, so both enums
//     really did reach the validator.
//  4. Assert the caller of the self-contained enum is declared complete and the
//     caller of the borrowing enum is not.
func TestProjectDependenciesEnumMemberValueTransform(t *testing.T) {
  project := projectDependenciesEnumMemberValueProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--output", "ts",
    })
  })
  if code != 0 {
    t.Fatalf("project transform failed: code=%d stderr=\n%s", code, errText)
  }
  var envelope struct {
    TypeScript           map[string]string   `json:"typescript"`
    Dependencies         map[string][]string `json:"dependencies"`
    DependenciesComplete []string            `json:"dependenciesComplete"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  if text := envelope.TypeScript["src/own.ts"]; !strings.Contains(text, `"a" === input`) || !strings.Contains(text, "-1 === input") {
    t.Fatalf("src/own.ts must compare against both written member values, got:\n%s", text)
  }
  if text := envelope.TypeScript["src/borrowed.ts"]; !strings.Contains(text, `"x" === input`) {
    t.Fatalf("src/borrowed.ts must compare against the borrowed member value, got:\n%s", text)
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/own.ts"] {
    t.Fatalf("an enum that writes its own member values bounds them and must be declared complete: %v", envelope.DependenciesComplete)
  }
  if declared["src/borrowed.ts"] {
    t.Fatalf("an enum member that borrows its value must withhold the declaration: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesEnumMemberValueProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-enum-member-value-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesEnvelopeTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "own.ts":      projectDependenciesEnumMemberValueSourceOwn,
    "borrowed.ts": projectDependenciesEnumMemberValueSourceBorrowed,
    "plain.ts":    projectDependenciesEnumMemberValueSourcePlain,
    "kind.ts":     projectDependenciesEnumMemberValueSourceKind,
    "other.ts":    projectDependenciesEnumMemberValueSourceOther,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesEnumMemberValueSourceOwn = `import typia from "typia";

import { Plain } from "./plain";

export const check = (input: unknown) => typia.is<Plain>(input);
`

const projectDependenciesEnumMemberValueSourceBorrowed = `import typia from "typia";

import { Kind } from "./kind";

export const check = (input: unknown) => typia.is<Kind>(input);
`

const projectDependenciesEnumMemberValueSourcePlain = `export enum Plain {
  Text = "a",
  Negative = -1,
}
`

const projectDependenciesEnumMemberValueSourceKind = `import { Other } from "./other";

export enum Kind {
  Borrowed = Other.Value,
}
`

const projectDependenciesEnumMemberValueSourceOther = `export enum Other {
  Value = "x",
}
`
