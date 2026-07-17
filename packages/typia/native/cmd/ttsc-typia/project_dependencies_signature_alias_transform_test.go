package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesSignatureAliasTransform verifies call- and
// construct-signature types stay OUT of the reported dependencies.
//
// `dependencies` must name every file whose edit can change the generated
// output — and only those. Typia validates a callable as `typeof x ===
// "function"` and never inspects its parameter or return types, so editing
// them provably cannot change the emitted validator; reporting them would
// invalidate consumers on edits that cannot affect them. This is the negative
// half of samchon/typia#2126, whose positive half adds the barrel and
// index-signature edges: the two were confirmed by the same probe, which showed
// the generated output is unchanged across these edits.
//
//  1. Build a project where `a.ts` validates `Target` from `model.ts`, whose
//     call signature returns `CallRet` (`callret.ts`) and whose construct
//     signature returns `NewRet` (`newret.ts`), while an ordinary property
//     references `Kept` (`kept.ts`).
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `model.ts` and `kept.ts`, so
//     the fixture is genuinely analyzed.
//  4. Assert it contains neither `callret.ts` nor `newret.ts`.
func TestProjectDependenciesSignatureAliasTransform(t *testing.T) {
  project := projectDependenciesSignatureAliasProject(t)
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
  if !found["src/model.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the declaring file src/model.ts: %v", entries)
  }
  if !found["src/kept.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the consulted property alias file src/kept.ts: %v", entries)
  }
  if found["src/callret.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/callret.ts: a call signature's return type cannot change the generated validator: %v", entries)
  }
  if found["src/newret.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/newret.ts: a construct signature's return type cannot change the generated validator: %v", entries)
  }
}

func projectDependenciesSignatureAliasProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-signature-alias-")
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
    "a.ts":       projectDependenciesSignatureAliasSourceA,
    "model.ts":   projectDependenciesSignatureAliasSourceModel,
    "callret.ts": projectDependenciesSignatureAliasSourceCallRet,
    "newret.ts":  projectDependenciesSignatureAliasSourceNewRet,
    "kept.ts":    projectDependenciesSignatureAliasSourceKept,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesSignatureAliasSourceA = `import typia from "typia";

import { Target } from "./model";

export const validateTarget = (input: unknown) => typia.validate<Target>(input);
`

const projectDependenciesSignatureAliasSourceModel = `import { CallRet } from "./callret";
import { Kept } from "./kept";
import { NewRet } from "./newret";

export interface Target {
  kept: Kept;
  (arg: string): CallRet;
  new (arg: string): NewRet;
}
`

const projectDependenciesSignatureAliasSourceCallRet = `export type CallRet = string;
`

const projectDependenciesSignatureAliasSourceNewRet = `export type NewRet = string;
`

const projectDependenciesSignatureAliasSourceKept = `export type Kept = number;
`
