package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesCollapsedAliasTransform verifies written references
// register files the checker's type graph collapses, and nothing more.
//
// An alias of an intrinsic (`type Inner = number`) is interned by the checker
// without an alias symbol, so the semantic type-graph touches alone can never
// see its declaring file — only the WRITTEN reference walk can. The negative
// twin pins the walk's boundary: a type referenced only inside a method BODY
// is not part of the consulted type surface and must not register.
//
//  1. Build a project where `a.ts` validates `Outer` (`t.ts`, an alias whose
//     property type is the collapsed alias `Inner` from `u.ts`), the directly
//     collapsed alias `Direct` from `v.ts`, and a class from `m.ts` whose
//     method body (and only its body) references a type from `w.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `t.ts`, `u.ts`, and `v.ts`.
//  4. Assert it does NOT contain `w.ts` (body-only reference).
func TestProjectDependenciesCollapsedAliasTransform(t *testing.T) {
  project := projectDependenciesCollapsedAliasProject(t)
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
  if !found["src/t.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the outer alias file src/t.ts: %v", entries)
  }
  if !found["src/u.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the collapsed property alias file src/u.ts: %v", entries)
  }
  if !found["src/v.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the collapsed top-level alias file src/v.ts: %v", entries)
  }
  if found["src/w.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain the body-only reference file src/w.ts: %v", entries)
  }
}

func projectDependenciesCollapsedAliasProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-collapsed-alias-")
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
    "a.ts": projectDependenciesCollapsedAliasSourceA,
    "t.ts": projectDependenciesCollapsedAliasSourceT,
    "u.ts": projectDependenciesCollapsedAliasSourceU,
    "v.ts": projectDependenciesCollapsedAliasSourceV,
    "m.ts": projectDependenciesCollapsedAliasSourceM,
    "w.ts": projectDependenciesCollapsedAliasSourceW,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCollapsedAliasSourceA = `import typia from "typia";

import { WithMethod } from "./m";
import { Outer } from "./t";
import { Direct } from "./v";

export const validateOuter = (input: unknown) => typia.validate<Outer>(input);
export const validateDirect = (input: unknown) => typia.validate<Direct>(input);
export const validateWithMethod = (input: unknown) => typia.validate<WithMethod>(input);
`

const projectDependenciesCollapsedAliasSourceT = `import { Inner } from "./u";

export type Outer = { value: Inner };
`

const projectDependenciesCollapsedAliasSourceU = `export type Inner = number;
`

const projectDependenciesCollapsedAliasSourceV = `export type Direct = string;
`

const projectDependenciesCollapsedAliasSourceM = `import { BodyOnly } from "./w";

export class WithMethod {
  public id!: string;

  public describe(): string {
    const helper: BodyOnly = { tag: "x" };
    return helper.tag;
  }
}
`

const projectDependenciesCollapsedAliasSourceW = `export interface BodyOnly {
  tag: string;
}
`
