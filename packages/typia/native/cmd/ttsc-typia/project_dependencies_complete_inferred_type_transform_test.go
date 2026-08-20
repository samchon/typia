package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCompleteInferredTypeTransform verifies a file whose
// typia call takes its validated type from the value argument is withheld from
// the completeness declaration, while its written-type-argument twin is not.
//
// A written type argument bounds the analysis: every declaration reachable from
// it is touched and reported, so the reported list is the whole input set. An
// inferred one does not, because contextual typing can put the deciding
// annotation in a file the resolved type never names -- `const handler:
// Handler = (input) => typia.assert(input)` validates whatever `Handler`
// declares, and `Handler`'s file is nowhere in the consulted-declaration set.
// Declaring such a file complete would drop the reference closure that is the
// only thing still watching it (samchon/typia#2357).
//
//  1. Build a project where `written.ts` calls `typia.assert<Shape>(input)` and
//     `inferred.ts` calls `typia.assert(input)` on a parameter contextually
//     typed through `handler.ts`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert both files transformed, so the two differ only in where the type
//     came from.
//  4. Assert `written.ts` is declared complete and `inferred.ts` is not, and
//     that `inferred.ts` still keeps its reported dependency entry -- it falls
//     back to the host-owned bound, it is not stripped of what it did report.
func TestProjectDependenciesCompleteInferredTypeTransform(t *testing.T) {
  project := projectDependenciesCompleteInferredTypeProject(t)
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
  for _, key := range []string{"src/written.ts", "src/inferred.ts"} {
    if text := envelope.TypeScript[key]; !strings.Contains(text, "typeof input") {
      t.Fatalf("%s must have been transformed into a generated validator, got:\n%s", key, text)
    }
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/written.ts"] {
    t.Fatalf("a call with a written type argument bounds its inputs and must be declared complete: %v", envelope.DependenciesComplete)
  }
  if declared["src/inferred.ts"] {
    t.Fatalf("a call that infers its type from the value argument must be withheld from the completeness declaration: %v", envelope.DependenciesComplete)
  }
  if len(envelope.Dependencies["src/inferred.ts"]) == 0 {
    t.Fatalf("withholding the declaration must not strip what src/inferred.ts did report: %v", envelope.Dependencies)
  }
}

func projectDependenciesCompleteInferredTypeProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-complete-inferred-")
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
    "shape.ts":    projectDependenciesCompleteInferredSourceShape,
    "handler.ts":  projectDependenciesCompleteInferredSourceHandler,
    "written.ts":  projectDependenciesCompleteInferredSourceWritten,
    "inferred.ts": projectDependenciesCompleteInferredSourceInferred,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCompleteInferredSourceShape = `export interface Shape {
  id: string;
}
`

const projectDependenciesCompleteInferredSourceHandler = `import { Shape } from "./shape";

export type Handler = (input: Shape) => unknown;
`

const projectDependenciesCompleteInferredSourceWritten = `import typia from "typia";

import { Shape } from "./shape";

export const validateShape = (input: Shape) => typia.assert<Shape>(input);
`

const projectDependenciesCompleteInferredSourceInferred = `import typia from "typia";

import { Handler } from "./handler";

export const handle: Handler = (input) => typia.assert(input);
`
