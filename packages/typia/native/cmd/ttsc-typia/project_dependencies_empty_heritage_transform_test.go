package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesEmptyHeritageTransform verifies heritage targets
// register as dependencies even when they contribute no property yet.
//
// Inherited members carry their declaring file through their property symbols,
// but a base interface that is currently EMPTY surfaces no symbol at all — and
// gaining its first property is exactly the change that must invalidate the
// consumer's cached validator. This pins the explicit `extends` chain walk.
//
//  1. Build a project where `main.ts` validates `Doc`, `doc.ts` declares
//     `Doc extends Empty`, and `empty.ts` declares the empty interface.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/main.ts"]` contains both `src/doc.ts` (the
//     declaring file) and `src/empty.ts` (the property-less heritage target).
func TestProjectDependenciesEmptyHeritageTransform(t *testing.T) {
  project := projectDependenciesEmptyHeritageProject(t)
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
    Dependencies map[string][]string `json:"dependencies"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  entries := envelope.Dependencies["src/main.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/doc.ts"] {
    t.Fatalf("dependencies of src/main.ts must contain the declaring file src/doc.ts: %v", entries)
  }
  if !found["src/empty.ts"] {
    t.Fatalf("dependencies of src/main.ts must contain the empty heritage target src/empty.ts: %v", entries)
  }
}

func projectDependenciesEmptyHeritageProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-empty-heritage-")
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
    "main.ts":  projectDependenciesEmptyHeritageMain,
    "doc.ts":   projectDependenciesEmptyHeritageDoc,
    "empty.ts": projectDependenciesEmptyHeritageEmpty,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesEmptyHeritageMain = `import typia from "typia";

import { Doc } from "./doc";

export const validateDoc = (input: unknown) => typia.validate<Doc>(input);
`

const projectDependenciesEmptyHeritageDoc = `import { Empty } from "./empty";

export interface Doc extends Empty {
  id: string;
}
`

const projectDependenciesEmptyHeritageEmpty = `export interface Empty {}
`
