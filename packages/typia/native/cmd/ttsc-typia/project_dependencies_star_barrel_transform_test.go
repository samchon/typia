package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesStarBarrelTransform verifies a barrel reached through
// `export *` registers, even though no local specifier names the type.
//
// A named re-export publishes an export specifier the alias walk can step
// through hop by hop; `export * from "./alpha"` publishes none, so that walk
// has nothing to follow and would stop before reporting the barrel — while
// re-pointing the star at another module still changes the generated validator
// (samchon/typia#2126). The walk therefore reports each module specifier's
// resolved file directly, which is what keeps this shape covered.
//
//  1. Build a project where `a.ts` validates `Alpha` imported from `barrel.ts`,
//     which reaches it only through `export * from "./alpha"`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains the star barrel `barrel.ts`
//     and the concrete module `alpha.ts`.
//  4. Assert it does NOT contain `beta.ts`, a module the same barrel also stars
//     in but no consulted type reaches.
func TestProjectDependenciesStarBarrelTransform(t *testing.T) {
  project := projectDependenciesStarBarrelProject(t)
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
    t.Fatalf("dependencies of src/a.ts must contain the star barrel src/barrel.ts: %v", entries)
  }
  if !found["src/alpha.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the concrete module src/alpha.ts: %v", entries)
  }
  if found["src/beta.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/beta.ts, which the barrel stars in but no consulted type reaches: %v", entries)
  }
}

func projectDependenciesStarBarrelProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-star-barrel-")
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
    "a.ts":      projectDependenciesStarBarrelSourceA,
    "barrel.ts": projectDependenciesStarBarrelSourceBarrel,
    "alpha.ts":  projectDependenciesStarBarrelSourceAlpha,
    "beta.ts":   projectDependenciesStarBarrelSourceBeta,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesStarBarrelSourceA = `import typia from "typia";

import { Alpha } from "./barrel";

export const validateAlpha = (input: unknown) => typia.validate<Alpha>(input);
`

const projectDependenciesStarBarrelSourceBarrel = `export * from "./alpha";
export * from "./beta";
`

const projectDependenciesStarBarrelSourceAlpha = `export interface Alpha {
  id: string;
}
`

const projectDependenciesStarBarrelSourceBeta = `export interface Beta {
  flag: boolean;
}
`
