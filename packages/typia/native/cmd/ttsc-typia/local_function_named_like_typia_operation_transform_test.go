package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestLocalFunctionNamedLikeTypiaOperationTransform verifies the shadowed-typia
// diagnostic does not fire on a name collision (#2328).
//
// The diagnostic that reports a redeclared typia call keys off the called name,
// and those names are ordinary words: a project may well own its own
// `createAssert`, import one from an unrelated package, or augment typia with a
// name that only exists under one of its namespaces. Reporting any of them
// would break builds that are correct today, so the name alone must never be
// enough — the callee has to reach typia through typia's own module specifier
// and spell the operation in the namespace it lives in.
//
//  1. Build a project that defines a local `createAssert`, imports a `createIs`
//     from a relative module and a `createValidate` from a package whose name
//     merely begins with "typia", and augments typia with a root `parse` — an
//     operation name that exists only under a namespace.
//  2. Require a clean no-emit build, which proves every decoy really resolves,
//     and a project transform with no diagnostic.
//  3. Require the one genuine `typia.createIs` call in the same file to still
//     be rewritten, so silence is not the transform giving up on the file.
func TestLocalFunctionNamedLikeTypiaOperationTransform(t *testing.T) {
  project := localTypiaNameCollisionProject(t)

  // A no-emit build reports semantic diagnostics as well as typia's own, so a
  // decoy that silently stopped resolving fails here instead of turning the
  // rest of this test into a tautology.
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
    })
  })
  if code != 0 {
    t.Fatalf("name collision fixture is not clean, got %d\nstdout=%s\nstderr=%s", code, out, errText)
  }

  out, errText, code = ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code != 0 {
    t.Fatalf("name collisions must not fail the transform, got %d\nstdout=%s\nstderr=%s", code, out, errText)
  }
  var result transformProjectOutput
  if err := json.Unmarshal([]byte(out), &result); err != nil {
    t.Fatalf("decode transform output: %v\n%s", err, out)
  }
  if len(result.Diagnostics) != 0 {
    t.Fatalf("name collisions produced diagnostics: %+v", result.Diagnostics)
  }

  js, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("name collision fixture failed to emit: code=%d stderr=\n%s", code, errText)
  }
  // The genuine call becomes an inline validator; the decoys stay ordinary
  // calls. Type arguments are erased either way, so the emitted body is the
  // only evidence that the transform ran on one and not the others.
  if !strings.Contains(js, `"number" === typeof`) {
    t.Fatalf("the genuine typia call did not emit its validator:\n%s", js)
  }
  for _, decoy := range []string{"createAssert()", "createIs)()", "createValidate)()", "parse)(\"{}\")"} {
    if !strings.Contains(js, decoy) {
      t.Fatalf("decoy call %q was rewritten or lost:\n%s", decoy, js)
    }
  }
}

func localTypiaNameCollisionProject(t *testing.T) string {
  t.Helper()
  dir := t.TempDir()
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(transformDiagnosticTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  ttscTypiaTestWriteFactoryStub(t, dir)
  localTypiaNameCollisionWriteNeighborStub(t, dir)
  for name, body := range map[string]string{
    "helpers.ts":      localTypiaNameCollisionHelpers,
    "augmentation.ts": localTypiaNameCollisionAugmentation,
    "main.ts":         localTypiaNameCollisionSource,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write fixture %s: %v", name, err)
    }
  }
  return dir
}

// localTypiaNameCollisionWriteNeighborStub installs a package whose name merely
// begins with "typia" and exports an operation name typia owns. It pins the
// one-past-boundary of the specifier test: the call reaches the specifier check
// under a name that matches, and only the specifier can reject it.
func localTypiaNameCollisionWriteNeighborStub(t *testing.T, project string) {
  t.Helper()
  root := filepath.Join(project, "node_modules", "typia-neighbor")
  if err := os.MkdirAll(root, 0o755); err != nil {
    t.Fatalf("mkdir typia-neighbor stub: %v", err)
  }
  files := map[string]string{
    "package.json": `{
  "name": "typia-neighbor",
  "version": "0.0.0-test",
  "main": "./index.js",
  "types": "./index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    }
  }
}
`,
    "index.d.ts": "export declare function createValidate<T>(): (input: unknown) => T;\n",
    "index.js":   "exports.createValidate = () => (input) => input;\n",
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write typia-neighbor stub %s: %v", name, err)
    }
  }
}

const localTypiaNameCollisionHelpers = `export const createIs =
  <T,>() =>
  (input: unknown): input is T =>
    input !== undefined;
`

// A module augmentation that adds a root-level `parse` to typia. The leading
// `import "typia"` makes this file a module, so the block merges with the
// installed typia instead of replacing it. `parse` is an operation name under
// the `llm` namespace and nowhere else, so a gate that matched a flat union of
// every namespace's names would report this call — a build that works today.
const localTypiaNameCollisionAugmentation = `import "typia";

declare module "typia" {
  export function parse(text: string): unknown;
}
`

const localTypiaNameCollisionSource = `import { createValidate } from "typia-neighbor";
import { parse } from "typia";
import typia from "typia";

import "./augmentation";
import { createIs } from "./helpers";

export interface User {
  id: number;
}

const createAssert =
  <T,>() =>
  (input: unknown): T =>
    input as T;

export const localAssert = createAssert<User>();
export const relativeIs = createIs<User>();
export const neighborValidate = createValidate<User>();
export const augmented = parse("{}");
export const genuineIs = typia.createIs<User>();
`
