package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesLocalReexportTransform verifies a barrel that imports
// a name before re-exporting it still reports the module it imported from.
//
// `export { Alpha } from "./mid"` carries its module on the export declaration,
// but the equivalent `import { Alpha } from "./mid"; export { Alpha };` carries
// none: the export specifier re-publishes a LOCAL binding. A walk that reads
// only export declarations therefore loses `mid.ts` — while re-pointing that
// import still changes the generated validator, which is the same missing-edge
// defect in a second syntactic form (samchon/typia#2126).
//
//  1. Build a project where `a.ts` validates `Alpha` from `barrel.ts`, which
//     imports it from `mid.ts` and re-exports the local binding; `mid.ts` in
//     turn re-exports it from `real.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `barrel.ts`, the intermediate
//     `mid.ts`, and the concrete `real.ts`.
//  4. Assert it does NOT contain `beta.ts`, which `barrel.ts` also imports but
//     no consulted type reaches.
func TestProjectDependenciesLocalReexportTransform(t *testing.T) {
  project := projectDependenciesLocalReexportProject(t)
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
  if !found["src/mid.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the locally re-exported module src/mid.ts: %v", entries)
  }
  if !found["src/real.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the concrete module src/real.ts: %v", entries)
  }
  if found["src/beta.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/beta.ts, which the barrel imports but no consulted type reaches: %v", entries)
  }
}

func projectDependenciesLocalReexportProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-local-reexport-")
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
    "a.ts":      projectDependenciesLocalReexportSourceA,
    "barrel.ts": projectDependenciesLocalReexportSourceBarrel,
    "mid.ts":    projectDependenciesLocalReexportSourceMid,
    "real.ts":   projectDependenciesLocalReexportSourceReal,
    "beta.ts":   projectDependenciesLocalReexportSourceBeta,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesLocalReexportSourceA = `import typia from "typia";

import { Alpha } from "./barrel";

export const validateAlpha = (input: unknown) => typia.validate<Alpha>(input);
`

const projectDependenciesLocalReexportSourceBarrel = `import { Alpha } from "./mid";
import { Beta } from "./beta";

export { Alpha, Beta };
`

const projectDependenciesLocalReexportSourceMid = `export { Alpha } from "./real";
`

const projectDependenciesLocalReexportSourceReal = `export interface Alpha {
  id: string;
}
`

const projectDependenciesLocalReexportSourceBeta = `export interface Beta {
  flag: boolean;
}
`
