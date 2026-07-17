package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesIndexSignatureAliasTransform verifies an index
// signature's written key and value aliases register their declaring files.
//
// Index signatures carry no property symbol, so the apparent-property walk that
// registers every ordinary member never sees them; their aliases-of-intrinsics
// are then collapsed by the checker and leave no trace on the type graph
// either. Both `[k: string]: Value` and `[k: Key]: string` therefore changed the
// generated validator with no reported edge to invalidate
// (samchon/typia#2126). The negative twin pins the boundary: a file reached only
// from a member the index signature does not consult must stay out.
//
//  1. Build a project where `a.ts` validates `Target` from `model.ts`, whose
//     index signature uses the key alias `Key` (`key.ts`) and the value alias
//     `Value` (`value.ts`), and whose unrelated property references `Kept`
//     (`kept.ts`) while a method body alone references `BodyOnly` (`body.ts`).
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `key.ts`, `value.ts`, and
//     `kept.ts`.
//  4. Assert it does NOT contain the body-only `body.ts`.
func TestProjectDependenciesIndexSignatureAliasTransform(t *testing.T) {
  project := projectDependenciesIndexSignatureAliasProject(t)
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
  if !found["src/value.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the index-signature value alias file src/value.ts: %v", entries)
  }
  if !found["src/key.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the index-signature key alias file src/key.ts: %v", entries)
  }
  if !found["src/kept.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the property alias file src/kept.ts: %v", entries)
  }
  if found["src/body.ts"] {
    t.Fatalf("dependencies of src/a.ts must not contain the body-only reference file src/body.ts: %v", entries)
  }
}

func projectDependenciesIndexSignatureAliasProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-index-signature-alias-")
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
    "a.ts":     projectDependenciesIndexSignatureAliasSourceA,
    "model.ts": projectDependenciesIndexSignatureAliasSourceModel,
    "key.ts":   projectDependenciesIndexSignatureAliasSourceKey,
    "value.ts": projectDependenciesIndexSignatureAliasSourceValue,
    "kept.ts":  projectDependenciesIndexSignatureAliasSourceKept,
    "body.ts":  projectDependenciesIndexSignatureAliasSourceBody,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesIndexSignatureAliasSourceA = `import typia from "typia";

import { Holder, Target } from "./model";

export const validateTarget = (input: unknown) => typia.validate<Target>(input);
export const validateHolder = (input: unknown) => typia.validate<Holder>(input);
`

const projectDependenciesIndexSignatureAliasSourceModel = `import { BodyOnly } from "./body";
import { Kept } from "./kept";
import { Key } from "./key";
import { Value } from "./value";

export interface Target {
  [key: Key]: Value;
}

export class Holder {
  public kept!: Kept;

  public describe(): string {
    const helper: BodyOnly = { tag: "x" };
    return helper.tag;
  }
}
`

const projectDependenciesIndexSignatureAliasSourceKey = `export type Key = string;
`

const projectDependenciesIndexSignatureAliasSourceValue = `export type Value = string;
`

const projectDependenciesIndexSignatureAliasSourceKept = `export type Kept = number;
`

const projectDependenciesIndexSignatureAliasSourceBody = `export interface BodyOnly {
  tag: string;
}
`
