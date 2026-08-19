package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesCalleeShapeTransform verifies where the callee walk
// stops, in both directions.
//
// A function literal written directly in callee position is the most bounded
// declaration there is: the call resolves to the literal itself, in this very
// file, so its body is nobody's dependency and the file stays declarable.
// Reached through a nested call the same literal is the opposite -- the identity
// is whatever its body returns, and no set of files describes that -- so the
// file has to be withheld from the completeness declaration instead
// (samchon/typia#2357).
//
//  1. Build a project where `direct.ts` calls an IIFE whose body names a type
//     from `deep.ts`, while `indirect.ts` calls what an IIFE returns and
//     `tagged.ts` calls what a tagged template returns.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `direct.ts` is declared complete and reports nothing from its own
//     IIFE body, so the walk neither charged nor withheld the body's names.
//  4. Assert `indirect.ts` and `tagged.ts` are withheld, so a call-like form
//     other than `()` does not quietly escape the same rule.
func TestProjectDependenciesCalleeShapeTransform(t *testing.T) {
  project := projectDependenciesCalleeShapeProject(t)
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
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/direct.ts"] {
    t.Fatalf("a call to a function literal written in callee position resolves to that literal and must stay declarable: %v", envelope.DependenciesComplete)
  }
  for _, entry := range envelope.Dependencies["src/direct.ts"] {
    if entry == "src/deep.ts" {
      t.Fatalf("the walk must not charge src/direct.ts with names its own IIFE body uses: %v", envelope.Dependencies["src/direct.ts"])
    }
  }
  if declared["src/indirect.ts"] {
    t.Fatalf("a call to what a function literal returns has no bounded identity and must be withheld: %v", envelope.DependenciesComplete)
  }
  if declared["src/tagged.ts"] {
    t.Fatalf("a tagged template is a call, so what it returns has no bounded identity either: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesCalleeShapeProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-callee-shape-")
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
    "direct.ts":   projectDependenciesCalleeShapeSourceDirect,
    "indirect.ts": projectDependenciesCalleeShapeSourceIndirect,
    "tagged.ts":   projectDependenciesCalleeShapeSourceTagged,
    "deep.ts":     projectDependenciesCalleeShapeSourceDeep,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCalleeShapeSourceDirect = `import { Deep } from "./deep";

export const value = (() => {
  const held: Deep = { id: "x" };
  return held.id;
})();
`

const projectDependenciesCalleeShapeSourceIndirect = `export const value = (() => (input: string): string => input)()("x");
`

const projectDependenciesCalleeShapeSourceTagged = `export const value = ((_: TemplateStringsArray) => (input: string): string => input)` + "`x`" + `("y");
`

const projectDependenciesCalleeShapeSourceDeep = `export interface Deep {
  id: string;
}
`
