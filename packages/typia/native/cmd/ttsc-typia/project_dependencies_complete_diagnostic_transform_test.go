package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesCompleteDiagnosticTransform verifies a file whose
// typia call raised a diagnostic is withheld from the completeness declaration.
//
// A diagnostic means the analysis stopped partway, so what it consulted before
// giving up is not that file's whole input set: an edit to a declaration it
// never reached could make the same call succeed and publish different text.
// The envelope is a failure result either way and the protocol allows a partial
// declaration, but a claim that is false is worth withholding rather than
// explaining (samchon/typia#2357).
//
//  1. Build a project where `rejected.ts` asks for a protobuf message over
//     a top-level `bigint` instead of a static message object, beside `control.ts`
//     that transforms cleanly.
//  2. Run project transform mode; the host reports the diagnostic and exits 3
//     after printing the envelope.
//  3. Assert the diagnostic names `rejected.ts`, so the fixture failed for the
//     reason the test intends.
//  4. Assert `control.ts` is declared complete and `rejected.ts` is not.
//
// @evidence contracts/testing.md#behavioral-verification A rejected call produces status 3 and a diagnostic owned by rejected.ts; the clean source remains complete and rejected.ts is withheld.
// @evidence contracts/testing.md#independent-expectations A failed lowering cannot promise a bounded successful dependency set, while a different successful file need not lose its own claim.
// @evidence contracts/testing.md#distinguishing-cases One project contains both a clean and a rejected call, pinning per-file failure isolation.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProjectDependenciesCompleteDiagnosticTransform as a unit test. Its fixture project and captured runTransform call exercise the owning Go operation in process; no consumer installation or compiler subprocess is used. Fixture helpers retain their source inputs and cleanup, and assertions inspect the resulting envelope or emitted output.
func TestProjectDependenciesCompleteDiagnosticTransform(t *testing.T) {
  project := projectDependenciesCompleteDiagnosticProject(t)
  out, _, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--output", "ts",
    })
  })
  if code != 3 {
    t.Fatalf("a rejected call must fail the project transform with code 3, got %d:\n%s", code, out)
  }
  var envelope struct {
    Diagnostics []struct {
      File *string `json:"file"`
    } `json:"diagnostics"`
    DependenciesComplete []string `json:"dependenciesComplete"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  named := false
  for _, diagnostic := range envelope.Diagnostics {
    if diagnostic.File != nil && filepath.Base(filepath.FromSlash(*diagnostic.File)) == "rejected.ts" {
      named = true
    }
  }
  if !named {
    t.Fatalf("the diagnostic must name src/rejected.ts, so the fixture failed for the intended reason: %s", out)
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/control.ts"] {
    t.Fatalf("a file that transformed cleanly must still be declared complete: %v", envelope.DependenciesComplete)
  }
  if declared["src/rejected.ts"] {
    t.Fatalf("a file whose call typia could not lower must be withheld from the completeness declaration: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesCompleteDiagnosticProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "project-dependencies-complete-diagnostic-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesEnvelopeTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "rejected.ts": projectDependenciesCompleteDiagnosticSourceRejected,
    "control.ts":  projectDependenciesCompleteDiagnosticSourceControl,
    "shape.ts":    projectDependenciesCompleteDiagnosticSourceShape,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCompleteDiagnosticSourceRejected = `import typia from "typia";

export const message = typia.protobuf.message<bigint>();
`

const projectDependenciesCompleteDiagnosticSourceControl = `import typia from "typia";

import { Shape } from "./shape";

export const validateShape = (input: unknown) => typia.is<Shape>(input);
`

const projectDependenciesCompleteDiagnosticSourceShape = `export interface Shape {
  id: string;
}
`
