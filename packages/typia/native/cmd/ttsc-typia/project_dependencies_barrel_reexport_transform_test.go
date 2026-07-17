package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesBarrelReexportTransform verifies every barrel a type
// is reached through registers, and no sibling the barrel merely also exports.
//
// A barrel re-export is an intermediate whose CONTENTS select which declaration
// the reference reaches: re-pointing `export { Alpha } from "./alpha"` at
// another module changes the generated validator. Resolving the alias straight
// to its terminus reported only the concrete module, so a bundler cache had no
// edge to invalidate and served a stale validator (samchon/typia#2126). The
// negative twin pins the other direction — the chain must report the modules it
// walked, not everything the barrels export.
//
//  1. Build a project where `a.ts` validates `Alpha` imported from `barrel.ts`,
//     which re-exports it from `inner.ts`, which re-exports it from `alpha.ts`;
//     `barrel.ts` also re-exports an unconsumed `Beta` from `beta.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains both barrels (`barrel.ts`,
//     `inner.ts`) and the concrete module `alpha.ts`.
//  4. Assert it does NOT contain `beta.ts`, which no consulted type reaches.
func TestProjectDependenciesBarrelReexportTransform(t *testing.T) {
  project := projectDependenciesBarrelReexportProject(t)
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
  entries := envelope.Dependencies["src/a.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/barrel.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the barrel src/barrel.ts: %v", entries)
  }
  if !found["src/inner.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the chained barrel src/inner.ts: %v", entries)
  }
  if !found["src/alpha.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the concrete module src/alpha.ts: %v", entries)
  }
  if found["src/beta.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/beta.ts, which the barrel exports but no consulted type reaches: %v", entries)
  }
}

func projectDependenciesBarrelReexportProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-barrel-reexport-")
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
    "a.ts":      projectDependenciesBarrelReexportSourceA,
    "barrel.ts": projectDependenciesBarrelReexportSourceBarrel,
    "inner.ts":  projectDependenciesBarrelReexportSourceInner,
    "alpha.ts":  projectDependenciesBarrelReexportSourceAlpha,
    "beta.ts":   projectDependenciesBarrelReexportSourceBeta,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesBarrelReexportSourceA = `import typia from "typia";

import { Alpha } from "./barrel";

export const validateAlpha = (input: unknown) => typia.validate<Alpha>(input);
`

const projectDependenciesBarrelReexportSourceBarrel = `export { Alpha } from "./inner";
export { Beta } from "./beta";
`

const projectDependenciesBarrelReexportSourceInner = `export { Alpha } from "./alpha";
`

const projectDependenciesBarrelReexportSourceAlpha = `export interface Alpha {
  id: string;
}
`

const projectDependenciesBarrelReexportSourceBeta = `export interface Beta {
  flag: boolean;
}
`
