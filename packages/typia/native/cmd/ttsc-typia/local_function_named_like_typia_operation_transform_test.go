package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestLocalFunctionNamedLikeTypiaOperationTransform checks the authored operation results described below.
//
// Typia call recognition follows the resolved declaration owner, not an operation-like function name; foreign helper calls retain their original meaning.
//
// 1. Same-spelled local and member decoys contrast with a genuine typia call in the same source, preventing both overmatch and under-transform.
// 2. The local name-collision program typechecks, transforms without diagnostics and emits a real number validator while each decoy call survives unchanged.
//
// @evidence contracts/testing.md#behavioral-verification The local name-collision program typechecks, transforms without diagnostics and emits a real number validator while each decoy call survives unchanged.
// @evidence contracts/testing.md#independent-expectations Typia call recognition follows the resolved declaration owner, not an operation-like function name; foreign helper calls retain their original meaning.
// @evidence contracts/testing.md#distinguishing-cases Same-spelled local and member decoys contrast with a genuine typia call in the same source, preventing both overmatch and under-transform.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLocalFunctionNamedLikeTypiaOperationTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
