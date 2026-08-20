package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesTypeParameterDefaultTransform verifies an interface's
// type-parameter default reports the file its alias comes from.
//
// `typia.is<Wrapper>()` over `interface Wrapper<T = Id>` validates whatever `Id`
// is, and the checker interns `type Id = string` as the bare intrinsic, so the
// resolved type carries no symbol the type graph can follow to `id.ts`
// (samchon/typia#2126). The equivalent `type AliasWrapper<T = Id> = { v: T }`
// always reported it, because a `type` alias surfaces its whole node; an
// interface surfaced only its index signatures, one declaration kind away from
// the same defect (samchon/typia#2357).
//
//  1. Build a project where `a.ts` validates `Wrapper` from `wrapper.ts`, whose
//     type parameter defaults to `Id` from `id.ts`, and where the same file
//     declares a second interface defaulting to `Unused` from `unused.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `src/id.ts`, and that `a.ts`
//     is declared complete so the narrowed bound is the one that carries it.
//  4. Assert it omits `src/unused.ts`, whose interface the call never reaches.
func TestProjectDependenciesTypeParameterDefaultTransform(t *testing.T) {
  project := projectDependenciesTypeParameterDefaultProject(t)
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
  if !found["src/wrapper.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the declaring file src/wrapper.ts: %v", entries)
  }
  if !found["src/id.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain src/id.ts, which the type-parameter default names: %v", entries)
  }
  if found["src/unused.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/unused.ts, which no consulted type reaches: %v", entries)
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

func projectDependenciesTypeParameterDefaultProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-type-parameter-default-")
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
    "a.ts":       projectDependenciesTypeParameterDefaultSourceA,
    "wrapper.ts": projectDependenciesTypeParameterDefaultSourceWrapper,
    "id.ts":      projectDependenciesTypeParameterDefaultSourceId,
    "unused.ts":  projectDependenciesTypeParameterDefaultSourceUnused,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesTypeParameterDefaultSourceA = `import typia from "typia";

import { Wrapper } from "./wrapper";

export const check = (input: unknown) => typia.is<Wrapper>(input);
`

const projectDependenciesTypeParameterDefaultSourceWrapper = `import { Id } from "./id";
import { Unused } from "./unused";

export interface Wrapper<T = Id> {
  value: T;
}

export interface Spare<T = Unused> {
  value: T;
}
`

const projectDependenciesTypeParameterDefaultSourceId = `export type Id = string;
`

const projectDependenciesTypeParameterDefaultSourceUnused = `export type Unused = number;
`
