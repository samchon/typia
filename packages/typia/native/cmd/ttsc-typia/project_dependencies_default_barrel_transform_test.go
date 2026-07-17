package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesDefaultBarrelTransform verifies a default-export
// barrel reports the module it forwards to, and never a same-named sibling.
//
// A default import binds `default`, not its own local name, so an alias walk
// that stepped through the local name would look up whatever the barrel happens
// to export under it — reporting a module the reference never consults and
// invalidating consumers on edits that cannot reach them. `dependencies` names
// every file whose edit can change the generated output and ONLY those, so this
// pins both halves of that invariant on one fixture (samchon/typia#2126).
//
//  1. Build a project where `a.ts` validates the default import `Alpha` from
//     `barrel.ts`, which forwards `default` from `real.ts` while separately
//     exporting an unrelated NAMED `Alpha` from `unrelated.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `barrel.ts` and `real.ts`.
//  4. Assert it does NOT contain `unrelated.ts`, whose only tie to the walk is
//     sharing the local name of the default import.
func TestProjectDependenciesDefaultBarrelTransform(t *testing.T) {
  project := projectDependenciesDefaultBarrelProject(t)
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
    t.Fatalf("dependencies of src/a.ts must contain the default barrel src/barrel.ts: %v", entries)
  }
  if !found["src/real.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the forwarded module src/real.ts: %v", entries)
  }
  if found["src/unrelated.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/unrelated.ts: the default import never consults the barrel's same-named export: %v", entries)
  }
}

func projectDependenciesDefaultBarrelProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-default-barrel-")
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
    "a.ts":         projectDependenciesDefaultBarrelSourceA,
    "barrel.ts":    projectDependenciesDefaultBarrelSourceBarrel,
    "real.ts":      projectDependenciesDefaultBarrelSourceReal,
    "unrelated.ts": projectDependenciesDefaultBarrelSourceUnrelated,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesDefaultBarrelSourceA = `import typia from "typia";

import Alpha from "./barrel";

export const validateAlpha = (input: unknown) => typia.validate<Alpha>(input);
`

const projectDependenciesDefaultBarrelSourceBarrel = `export { default } from "./real";
export { Alpha } from "./unrelated";
`

const projectDependenciesDefaultBarrelSourceReal = `interface Real {
  id: string;
}

export default Real;
`

const projectDependenciesDefaultBarrelSourceUnrelated = `export interface Alpha {
  nope: boolean;
}
`
