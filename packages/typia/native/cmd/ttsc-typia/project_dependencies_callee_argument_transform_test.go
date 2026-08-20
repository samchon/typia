package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCalleeArgumentTransform verifies a nested call's
// arguments report the names they write, and that their shape never withholds
// the caller.
//
// The callee chain names every indirection a caller writes -- a factory, a
// barrel, a namespace alias -- but a generic pass-through carries identity
// through what the call is APPLIED to instead: `pick(ns).is<Foo>(x)` is rewritten
// because `ns` holds the typia namespace, so `ns.ts` decides whether this file
// becomes a validator at all. Reproduced: the envelope declared the caller
// complete while reporting only `foo.ts` and `pick.ts`, so re-pointing `ns.ts`
// would have turned the validator back into a plain call with nothing to
// invalidate it (samchon/typia#2357).
//
// The twin is why the walk's answer is dropped rather than combined: a callback
// handed to a chained array method decides nothing about which `join` the outer
// call names, and withholding on it would cost every file that chains one.
//
//  1. Build a project where `main.ts` calls `pick(ns).is<Foo>(input)` for a
//     `pick` that returns its argument, and `chain.ts` writes
//     `["a"].map((x) => x + HIDDEN).join(",")` for a `HIDDEN` from another file.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `main.ts` really was rewritten into a validator, so the pass-through
//     is the shape the test intends.
//  4. Assert `dependencies["src/main.ts"]` carries `src/ns.ts` and `src/pick.ts`,
//     and that the file is declared complete.
//  5. Assert `chain.ts` is declared complete and never reports `src/hidden.ts`,
//     the name only its callback body writes.
//  6. Assert the tagged-template spelling of the same pass-through --
//     “tag`x${ns}`.is<Foo>(input)“ -- reports `src/ns.ts` as well, because a
//     template is what its tag is applied to.
func TestProjectDependenciesCalleeArgumentTransform(t *testing.T) {
  project := projectDependenciesCalleeArgumentProject(t)
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
  if text := envelope.TypeScript["src/main.ts"]; !strings.Contains(text, "input is Foo") {
    t.Fatalf("the pass-through call must have been rewritten into a validator, got:\n%s", text)
  }
  entries := envelope.Dependencies["src/main.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/ns.ts"] {
    t.Fatalf("dependencies of src/main.ts must contain src/ns.ts, the argument that makes this call typia's: %v", entries)
  }
  if !found["src/pick.ts"] {
    t.Fatalf("dependencies of src/main.ts must contain src/pick.ts, the pass-through on the callee chain: %v", entries)
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/main.ts"] {
    t.Fatalf("src/main.ts must be declared complete, so the reported entry is the whole bound: %v", envelope.DependenciesComplete)
  }
  if !declared["src/chain.ts"] {
    t.Fatalf("a callback handed to a chained array method decides no callee identity and must not withhold its file: %v", envelope.DependenciesComplete)
  }
  for _, entry := range envelope.Dependencies["src/chain.ts"] {
    if entry == "src/hidden.ts" {
      t.Fatalf("the walk must stop at a function literal, so src/hidden.ts must not be charged to src/chain.ts: %v", envelope.Dependencies["src/chain.ts"])
    }
  }
  if text := envelope.TypeScript["src/tagged.ts"]; !strings.Contains(text, "input is Foo") {
    t.Fatalf("the tagged-template pass-through must have been rewritten into a validator, got:\n%s", text)
  }
  tagged := map[string]bool{}
  for _, entry := range envelope.Dependencies["src/tagged.ts"] {
    tagged[entry] = true
  }
  if !tagged["src/ns.ts"] {
    t.Fatalf("dependencies of src/tagged.ts must contain src/ns.ts, the substitution that makes this call typia's: %v", envelope.Dependencies["src/tagged.ts"])
  }
  if !declared["src/tagged.ts"] {
    t.Fatalf("src/tagged.ts must be declared complete, so the reported entry is the whole bound: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesCalleeArgumentProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-callee-argument-")
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
    "main.ts":   projectDependenciesCalleeArgumentSourceMain,
    "ns.ts":     projectDependenciesCalleeArgumentSourceNs,
    "pick.ts":   projectDependenciesCalleeArgumentSourcePick,
    "foo.ts":    projectDependenciesCalleeArgumentSourceFoo,
    "chain.ts":  projectDependenciesCalleeArgumentSourceChain,
    "hidden.ts": projectDependenciesCalleeArgumentSourceHidden,
    "tagged.ts": projectDependenciesCalleeArgumentSourceTagged,
    "tag.ts":    projectDependenciesCalleeArgumentSourceTag,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCalleeArgumentSourceMain = `import { Foo } from "./foo";
import { ns } from "./ns";
import { pick } from "./pick";

export const check = (input: unknown) => pick(ns).is<Foo>(input);
`

const projectDependenciesCalleeArgumentSourceNs = `import typia from "typia";

export const ns = typia;
`

const projectDependenciesCalleeArgumentSourcePick = `export const pick = <T>(value: T): T => value;
`

const projectDependenciesCalleeArgumentSourceFoo = `export interface Foo {
  id: string;
}
`

const projectDependenciesCalleeArgumentSourceChain = `import { HIDDEN } from "./hidden";

export const joined = ["a"].map((x) => x + HIDDEN).join(",");
`

const projectDependenciesCalleeArgumentSourceHidden = `export const HIDDEN = "hidden";
`

const projectDependenciesCalleeArgumentSourceTagged = `import { Foo } from "./foo";
import { ns } from "./ns";
import { tag } from "./tag";

export const check = (input: unknown) => tag` + "`" + `x${ns}` + "`" + `.is<Foo>(input);
`

const projectDependenciesCalleeArgumentSourceTag = `export const tag = <T>(_strings: TemplateStringsArray, value: T): T => value;
`
