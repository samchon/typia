package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesQualifiedBarrelTransform verifies a QUALIFIED type
// reference reports the barrel that selected its namespace half, not only the
// module declaring its terminus.
//
// `TestProjectDependenciesBarrelReexportTransform` pins the bare spelling, and
// it works because the checker answers `Alpha` with the local import alias, whose
// path metadataDependency_touchPath walks. `Kind.A` is answered with the enum
// member instead -- not an alias, no path to walk -- so the barrel between the
// caller and the enum went unreported while its value went straight into the
// validator as `"alpha" === input.kind`. Re-pointing that barrel at another enum
// changed the emitted constant with nothing left to invalidate the file
// (samchon/typia#2126, samchon/typia#2357).
//
//  1. Build a project where `main.ts` validates `Doc`, whose member type is
//     `Kind.A` for a `Kind` imported from `barrel.ts`, which re-exports it from
//     `kind.ts` and also re-exports an unconsumed `Unused` from `unused.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert the emitted validator compares against the enum member's value, so
//     the fixture really does read `kind.ts` into its output.
//  4. Assert `dependencies["src/main.ts"]` contains `src/barrel.ts` and
//     `src/kind.ts`, and that `src/main.ts` is declared complete.
//  5. Assert it omits `src/unused.ts`, the sibling the reference never traverses.
func TestProjectDependenciesQualifiedBarrelTransform(t *testing.T) {
  project := projectDependenciesQualifiedBarrelProject(t)
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
  if text := envelope.TypeScript["src/main.ts"]; !strings.Contains(text, `"alpha"`) {
    t.Fatalf("the validator must compare against the enum member's value, so the fixture reads kind.ts into its output, got:\n%s", text)
  }
  entries := envelope.Dependencies["src/main.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/kind.ts"] {
    t.Fatalf("dependencies of src/main.ts must contain src/kind.ts, which declares the member the type names: %v", entries)
  }
  if !found["src/barrel.ts"] {
    t.Fatalf("dependencies of src/main.ts must contain src/barrel.ts, which selects the enum the qualified name reads: %v", entries)
  }
  if found["src/unused.ts"] {
    t.Fatalf("dependencies of src/main.ts must not contain src/unused.ts, a sibling the reference never traverses: %v", entries)
  }
  declared := false
  for _, key := range envelope.DependenciesComplete {
    if key == "src/main.ts" {
      declared = true
    }
  }
  if !declared {
    t.Fatalf("src/main.ts must be declared complete, so the reported entry is the whole bound: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesQualifiedBarrelProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-qualified-barrel-")
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
    "main.ts":   projectDependenciesQualifiedBarrelSourceMain,
    "doc.ts":    projectDependenciesQualifiedBarrelSourceDoc,
    "barrel.ts": projectDependenciesQualifiedBarrelSourceBarrel,
    "kind.ts":   projectDependenciesQualifiedBarrelSourceKind,
    "unused.ts": projectDependenciesQualifiedBarrelSourceUnused,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesQualifiedBarrelSourceMain = `import typia from "typia";

import { Doc } from "./doc";

export const check = (input: unknown) => typia.is<Doc>(input);
`

const projectDependenciesQualifiedBarrelSourceDoc = `import { Kind } from "./barrel";

export interface Doc {
  kind: Kind.A;
}
`

const projectDependenciesQualifiedBarrelSourceBarrel = `export { Kind } from "./kind";
export { Unused } from "./unused";
`

const projectDependenciesQualifiedBarrelSourceKind = `export enum Kind {
  A = "alpha",
  B = "beta",
}
`

const projectDependenciesQualifiedBarrelSourceUnused = `export enum Unused {
  C = "gamma",
}
`
