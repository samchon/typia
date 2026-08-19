package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesInferredDeclarationTransform verifies a validated type
// that reaches a declaration with no written annotation withholds the
// completeness declaration, while its annotated twin keeps it.
//
// The written surface exists because the checker erases an alias of an
// intrinsic: `type Id = string` interns as the bare intrinsic and leaves no
// symbol for the type graph to follow, so only the syntax naming the alias can
// register its file (samchon/typia#2126). A `const` with an annotation has that
// syntax. A `const` typed by its initializer alone does not, and recovering it
// means following type inference over arbitrary expressions -- a call's return
// type, an overload's selection, a contextually typed parameter -- which is
// exactly the unbounded problem a typia call with no written type argument has.
// Both get the same answer rather than a partial walk that would leave the file
// declared on an incomplete list (samchon/typia#2357).
//
//  1. Build a project where `cfg.ts` exports one annotated constant, one
//     inferred constant of the same shape, and one destructured binding, and
//     three callers validate `typeof` each.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert every caller transformed, so the set differs only in where the
//     type was written.
//  4. Assert the annotated caller is declared complete and names the
//     annotation's own file, and that the inferred caller is withheld while
//     keeping what it did report.
//  5. Assert the destructured caller is withheld too. A binding element is a
//     declaration kind the predicate names nowhere, so it answers through the
//     default -- which is what pins that the default is "withhold".
func TestProjectDependenciesInferredDeclarationTransform(t *testing.T) {
  project := projectDependenciesInferredDeclarationProject(t)
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
  for _, key := range []string{"src/annotated.ts", "src/inferred.ts", "src/destructured.ts"} {
    if text := envelope.TypeScript[key]; !strings.Contains(text, "typeof input") {
      t.Fatalf("%s must have been transformed into a generated validator, got:\n%s", key, text)
    }
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/annotated.ts"] {
    t.Fatalf("a validated type written as an annotation bounds its inputs and must be declared complete: %v", envelope.DependenciesComplete)
  }
  found := map[string]bool{}
  for _, entry := range envelope.Dependencies["src/annotated.ts"] {
    found[entry] = true
  }
  if !found["src/shape.ts"] {
    t.Fatalf("the annotated constant's own annotation file must be reported: %v", envelope.Dependencies["src/annotated.ts"])
  }
  if declared["src/inferred.ts"] {
    t.Fatalf("a validated type that reaches a declaration typed by its initializer alone must be withheld: %v", envelope.DependenciesComplete)
  }
  if len(envelope.Dependencies["src/inferred.ts"]) == 0 {
    t.Fatalf("withholding the declaration must not strip what src/inferred.ts did report: %v", envelope.Dependencies)
  }
  if declared["src/destructured.ts"] {
    t.Fatalf("a declaration kind the predicate names nowhere must answer through the default and withhold: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesInferredDeclarationProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-inferred-declaration-")
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
    "annotated.ts":    projectDependenciesInferredDeclarationSourceAnnotated,
    "inferred.ts":     projectDependenciesInferredDeclarationSourceInferred,
    "destructured.ts": projectDependenciesInferredDeclarationSourceDestructured,
    "cfg.ts":          projectDependenciesInferredDeclarationSourceCfg,
    "shape.ts":        projectDependenciesInferredDeclarationSourceShape,
    "id.ts":           projectDependenciesInferredDeclarationSourceId,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesInferredDeclarationSourceAnnotated = `import typia from "typia";

import { written } from "./cfg";

export const check = (input: unknown) => typia.is<typeof written>(input);
`

const projectDependenciesInferredDeclarationSourceInferred = `import typia from "typia";

import { guessed } from "./cfg";

export const check = (input: unknown) => typia.is<typeof guessed>(input);
`

const projectDependenciesInferredDeclarationSourceDestructured = `import typia from "typia";

import { picked } from "./cfg";

export const check = (input: unknown) => typia.is<typeof picked>(input);
`

const projectDependenciesInferredDeclarationSourceCfg = `import { Id } from "./id";
import { Shape } from "./shape";

export const written: Shape = { id: "w" };

export const guessed = { id: "g" as Id };

export const { id: picked } = written;
`

const projectDependenciesInferredDeclarationSourceShape = `export interface Shape {
  id: string;
}
`

const projectDependenciesInferredDeclarationSourceId = `export type Id = string;
`
