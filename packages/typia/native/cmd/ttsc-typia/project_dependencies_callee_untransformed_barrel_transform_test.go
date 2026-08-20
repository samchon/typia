package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCalleeUntransformedBarrelTransform verifies a file
// typia did not transform still reports the modules its callees resolve
// through, which is what makes declaring that file complete honest.
//
// A file with no typia call is declared complete with an empty dependency list,
// and the claim behind it is that nothing outside the file can change a
// faithful re-print. Exactly one thing can: an edit that makes one of its calls
// a typia call. Re-pointing `export { is } from "./local"` at `"typia"` does
// that without touching the caller, so the barrel has to be in the caller's
// reported list even though the caller consulted no type at all -- otherwise
// the narrowed bound has nothing left to invalidate it (samchon/typia#2357).
//
//  1. Build a project where `plain.ts` calls `is<Alpha>` imported from
//     `barrel.ts`, which re-exports a local helper rather than typia.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `plain.ts` was left untransformed, so it is a class-2 file.
//  4. Assert it is declared complete, and that its reported list nevertheless
//     carries `src/barrel.ts` and the `src/local.ts` the barrel resolves to.
func TestProjectDependenciesCalleeUntransformedBarrelTransform(t *testing.T) {
  project := projectDependenciesCalleeUntransformedBarrelProject(t)
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
  text := envelope.TypeScript["src/plain.ts"]
  if !strings.Contains(text, "is<Alpha>(input)") {
    t.Fatalf("src/plain.ts calls a non-typia helper and must be left untransformed, got:\n%s", text)
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/plain.ts"] {
    t.Fatalf("an untransformed file must be declared complete: %v", envelope.DependenciesComplete)
  }
  entries := envelope.Dependencies["src/plain.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/barrel.ts"] {
    t.Fatalf("dependencies of src/plain.ts must contain src/barrel.ts, whose retarget would make the call typia's: %v", entries)
  }
  if !found["src/local.ts"] {
    t.Fatalf("dependencies of src/plain.ts must contain src/local.ts, which currently declares the callee: %v", entries)
  }
}

func projectDependenciesCalleeUntransformedBarrelProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-callee-untransformed-barrel-")
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
    "plain.ts":  projectDependenciesCalleeUntransformedBarrelSourcePlain,
    "barrel.ts": projectDependenciesCalleeUntransformedBarrelSourceBarrel,
    "local.ts":  projectDependenciesCalleeUntransformedBarrelSourceLocal,
    "alpha.ts":  projectDependenciesCalleeUntransformedBarrelSourceAlpha,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCalleeUntransformedBarrelSourcePlain = `import { is } from "./barrel";

import { Alpha } from "./alpha";

export const checkAlpha = (input: unknown) => is<Alpha>(input);
`

const projectDependenciesCalleeUntransformedBarrelSourceBarrel = `export { is } from "./local";
`

const projectDependenciesCalleeUntransformedBarrelSourceLocal = `export const is = <T>(input: unknown): input is T => input !== null;
`

const projectDependenciesCalleeUntransformedBarrelSourceAlpha = `export interface Alpha {
  id: string;
}
`
