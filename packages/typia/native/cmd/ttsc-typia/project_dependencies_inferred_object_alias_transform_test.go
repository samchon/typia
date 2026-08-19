package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesInferredObjectAliasTransform verifies an alias of an
// intrinsic reached through an object literal's initializer is reported.
//
// The checker interns `type Id = string` as the bare intrinsic, so an aliased
// property leaves no symbol for the type graph to follow; the written surface
// recovers it instead (samchon/typia#2126). That surface stopped at written
// annotations, and a `const` object literal has none: its property types come
// from the initializer, so `typia.is<typeof cfg>()` consulted `Id` and `Kept`
// while the envelope named neither. Editing either alias changes the generated
// validator, which is a missing edge under the union bound and a stale
// validator once the file is declared complete (samchon/typia#2357).
//
//  1. Build a project where `a.ts` validates `typeof cfg`, and `cfg.ts` builds
//     its object from an `as Id` assertion and a `base` constant that `base.ts`
//     annotates with `Kept`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `id.ts` (written inside the
//     initializer) and `kept.ts` (annotated on the value it names).
//  4. Assert it omits `unrelated.ts`, which the same `base.ts` declares for a
//     constant the object never names.
func TestProjectDependenciesInferredObjectAliasTransform(t *testing.T) {
  project := projectDependenciesInferredObjectAliasProject(t)
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
  if !found["src/cfg.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the declaring file src/cfg.ts: %v", entries)
  }
  if !found["src/id.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain src/id.ts, whose alias the initializer writes: %v", entries)
  }
  if !found["src/kept.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain src/kept.ts, which annotates the value the initializer names: %v", entries)
  }
  if found["src/unrelated.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/unrelated.ts, which no consulted value names: %v", entries)
  }
}

func projectDependenciesInferredObjectAliasProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-inferred-object-alias-")
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
    "a.ts":         projectDependenciesInferredObjectAliasSourceA,
    "cfg.ts":       projectDependenciesInferredObjectAliasSourceCfg,
    "base.ts":      projectDependenciesInferredObjectAliasSourceBase,
    "id.ts":        projectDependenciesInferredObjectAliasSourceId,
    "kept.ts":      projectDependenciesInferredObjectAliasSourceKept,
    "unrelated.ts": projectDependenciesInferredObjectAliasSourceUnrelated,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesInferredObjectAliasSourceA = `import typia from "typia";

import { cfg } from "./cfg";

export const check = (input: unknown) => typia.is<typeof cfg>(input);
`

const projectDependenciesInferredObjectAliasSourceCfg = `import { base } from "./base";
import { Id } from "./id";

export const cfg = {
  id: "x" as Id,
  kept: base,
};
`

const projectDependenciesInferredObjectAliasSourceBase = `import { Kept } from "./kept";
import { Unrelated } from "./unrelated";

export const base: Kept = "b";

export const spare: Unrelated = "s";
`

const projectDependenciesInferredObjectAliasSourceId = `export type Id = string;
`

const projectDependenciesInferredObjectAliasSourceKept = `export type Kept = string;
`

const projectDependenciesInferredObjectAliasSourceUnrelated = `export type Unrelated = string;
`
