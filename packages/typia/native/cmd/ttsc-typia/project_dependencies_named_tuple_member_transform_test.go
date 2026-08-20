package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesNamedTupleMemberTransform verifies a named tuple
// member's written type reaches the reported dependencies, and that the file
// consulting it is still declared complete.
//
// `[id: Id]` writes its type as plainly as a property annotation does, and the
// checker interns `type Id = string` as the bare intrinsic, so the written
// surface is the only thing that can register `id.ts` (samchon/typia#2126). The
// member is a declaration kind of its own, so it needs its own place in both the
// surface that walks a written type and the predicate that decides whether a
// file may be declared on the strength of one — a kind in the second without the
// first is exactly an over-declaration (samchon/typia#2357).
//
//  1. Build a project where `a.ts` validates a tuple alias whose first member is
//     named and typed `Id`, beside an alias the tuple never uses.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `src/id.ts` and that `a.ts` is
//     declared complete, so the narrowed bound is the one carrying it.
//  4. Assert it omits `src/unused.ts`, which no consulted member names.
func TestProjectDependenciesNamedTupleMemberTransform(t *testing.T) {
  project := projectDependenciesNamedTupleMemberProject(t)
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
    Dependencies         map[string][]string `json:"dependencies"`
    DependenciesComplete []string            `json:"dependenciesComplete"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  entries := envelope.Dependencies["src/a.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/pair.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the declaring file src/pair.ts: %v", entries)
  }
  if !found["src/id.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain src/id.ts, which the named tuple member's type names: %v", entries)
  }
  if found["src/unused.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/unused.ts, which no consulted member names: %v", entries)
  }
  declared := false
  for _, key := range envelope.DependenciesComplete {
    if key == "src/a.ts" {
      declared = true
    }
  }
  if !declared {
    t.Fatalf("src/a.ts must be declared complete, so the reported entry is the whole bound: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesNamedTupleMemberProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-named-tuple-member-")
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
    "a.ts":      projectDependenciesNamedTupleMemberSourceA,
    "pair.ts":   projectDependenciesNamedTupleMemberSourcePair,
    "id.ts":     projectDependenciesNamedTupleMemberSourceId,
    "unused.ts": projectDependenciesNamedTupleMemberSourceUnused,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesNamedTupleMemberSourceA = `import typia from "typia";

import { Pair } from "./pair";

export const check = (input: unknown) => typia.is<Pair>(input);
`

const projectDependenciesNamedTupleMemberSourcePair = `import { Id } from "./id";
import { Unused } from "./unused";

export type Pair = [id: Id, count: number];

export type Spare = [label: Unused];
`

const projectDependenciesNamedTupleMemberSourceId = `export type Id = string;
`

const projectDependenciesNamedTupleMemberSourceUnused = `export type Unused = string;
`
