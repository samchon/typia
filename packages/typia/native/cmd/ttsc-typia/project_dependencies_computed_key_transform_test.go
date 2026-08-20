package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesComputedKeyTransform verifies a computed member key
// reports the file that decides the name, and withholds the declaration when
// that name is borrowed from a file the written surface cannot enumerate.
//
// `interface Doc { [Kind.A]: number }` emits `input.alpha`, so the enum
// member's value is read into the validator exactly the way an `enum` member's
// own value is — and the checker interns the resolved key as a bare string
// literal with no symbol to follow, so neither the declaration's written type
// nor the type graph names `kind.ts`. Renaming `Kind.A` changed the generated
// validator with no reported edge, which is invisible while a file keeps the
// reference closure and serves a stale validator once it is declared complete
// (samchon/typia#2126, samchon/typia#2357).
//
//  1. Build a project where `a.ts` validates `Doc`, whose only key is
//     `[Kind.A]` reached through a barrel, and where `b.ts` validates `Spare`,
//     whose key is a constant that borrows its value from a third file.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `src/kind.ts` and the
//     `src/barrel.ts` the reference traveled, and that `a.ts` is declared
//     complete so the narrowed bound is the one that carries them.
//  4. Assert it omits `src/unused.ts`, a sibling export the reference never
//     traverses.
//  5. Assert `b.ts` is withheld: `const BORROWED = VALUE` takes its value from
//     a file no written key names, which is the same answer an enum member
//     borrowing a value gets.
//  6. Assert `c.ts` stays declared: `["gamma"]` is written where it is used, so
//     treating every computed key as unbounded would cost narrowing for a name
//     no other file can decide.
//  7. Assert `d.ts` stays declared AND reports `src/keyconst.ts`: a bare name
//     whose constant fixes its own value is the bounded twin of `b.ts`, and it
//     is the only case that pins both halves of the bare-name branch.
func TestProjectDependenciesComputedKeyTransform(t *testing.T) {
  project := projectDependenciesComputedKeyProject(t)
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
  if !found["src/kind.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain src/kind.ts, whose enum member decides the emitted key: %v", entries)
  }
  if !found["src/barrel.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain src/barrel.ts, which selects the enum the key reads: %v", entries)
  }
  if found["src/unused.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain src/unused.ts, a sibling the reference never traverses: %v", entries)
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/a.ts"] {
    t.Fatalf("src/a.ts must be declared complete, so the reported entry is the whole bound: %v", envelope.DependenciesComplete)
  }
  if declared["src/b.ts"] {
    t.Fatalf("a key whose constant borrows its value from another file is not bounded by any written name, so src/b.ts must be withheld: %v", envelope.DependenciesComplete)
  }
  if !declared["src/c.ts"] {
    t.Fatalf("a computed key written as a literal names no other file and must stay declared: %v", envelope.DependenciesComplete)
  }
  if !declared["src/d.ts"] {
    t.Fatalf("a key whose constant fixes its own value is bounded and must stay declared: %v", envelope.DependenciesComplete)
  }
  bare := map[string]bool{}
  for _, entry := range envelope.Dependencies["src/d.ts"] {
    bare[entry] = true
  }
  if !bare["src/keyconst.ts"] {
    t.Fatalf("dependencies of src/d.ts must contain src/keyconst.ts, whose constant decides the emitted key: %v", envelope.Dependencies["src/d.ts"])
  }
}

func projectDependenciesComputedKeyProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-computed-key-")
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
    "a.ts":        projectDependenciesComputedKeySourceA,
    "b.ts":        projectDependenciesComputedKeySourceB,
    "c.ts":        projectDependenciesComputedKeySourceC,
    "d.ts":        projectDependenciesComputedKeySourceD,
    "doc.ts":      projectDependenciesComputedKeySourceDoc,
    "spare.ts":    projectDependenciesComputedKeySourceSpare,
    "plain.ts":    projectDependenciesComputedKeySourcePlain,
    "bare.ts":     projectDependenciesComputedKeySourceBare,
    "keyconst.ts": projectDependenciesComputedKeySourceKeyConst,
    "barrel.ts":   projectDependenciesComputedKeySourceBarrel,
    "kind.ts":     projectDependenciesComputedKeySourceKind,
    "unused.ts":   projectDependenciesComputedKeySourceUnused,
    "borrow.ts":   projectDependenciesComputedKeySourceBorrow,
    "value.ts":    projectDependenciesComputedKeySourceValue,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesComputedKeySourceA = `import typia from "typia";

import { Doc } from "./doc";

export const check = (input: unknown) => typia.is<Doc>(input);
`

const projectDependenciesComputedKeySourceB = `import typia from "typia";

import { Spare } from "./spare";

export const check = (input: unknown) => typia.is<Spare>(input);
`

const projectDependenciesComputedKeySourceC = `import typia from "typia";

import { Plain } from "./plain";

export const check = (input: unknown) => typia.is<Plain>(input);
`

const projectDependenciesComputedKeySourcePlain = `export interface Plain {
  ["gamma"]: number;
}
`

const projectDependenciesComputedKeySourceD = `import typia from "typia";

import { Bare } from "./bare";

export const check = (input: unknown) => typia.is<Bare>(input);
`

const projectDependenciesComputedKeySourceBare = `import { KEY } from "./keyconst";

export interface Bare {
  [KEY]: number;
}
`

const projectDependenciesComputedKeySourceKeyConst = `export const KEY = "epsilon";
`

const projectDependenciesComputedKeySourceDoc = `import { Kind } from "./barrel";

export interface Doc {
  [Kind.A]: number;
}
`

const projectDependenciesComputedKeySourceSpare = `import { BORROWED } from "./borrow";

export interface Spare {
  [BORROWED]: number;
}
`

const projectDependenciesComputedKeySourceBarrel = `export { Kind } from "./kind";
export { Unused } from "./unused";
`

const projectDependenciesComputedKeySourceKind = `export enum Kind {
  A = "alpha",
}
`

const projectDependenciesComputedKeySourceUnused = `export enum Unused {
  B = "beta",
}
`

const projectDependenciesComputedKeySourceBorrow = `import { VALUE } from "./value";

export const BORROWED = VALUE;
`

const projectDependenciesComputedKeySourceValue = `export const VALUE = "delta";
`
