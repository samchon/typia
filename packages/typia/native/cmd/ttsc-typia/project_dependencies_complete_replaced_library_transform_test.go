package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCompleteReplacedLibraryTransform verifies a file whose
// analysis consulted an on-disk default library is withheld from the
// completeness declaration.
//
// The envelope has never reported a file the compiler classifies as a default
// library, because a bundled library is a toolchain input rather than a project
// input (samchon/typia#2108). Under `libReplacement` that file is nevertheless a
// real path the ttsc reference graph carries in `graph.globals`, so the
// host-owned bound watches it. Declaring such a file complete drops `globals`
// and would stop watching an input the default bound watches -- editing the
// replacement lib would then serve a stale validator. Withholding the
// declaration keeps that file on the sound bound while every file that consulted
// no replaced library still narrows (samchon/typia#2357).
//
//  1. Publish `@typescript/lib-es2015/collection.d.ts` and enable
//     `libReplacement`, so `Map` is declared by an on-disk file.
//  2. Transform a project where `replaced.ts` validates `Map<string, number>`
//     and `control.ts` validates a project-declared interface.
//  3. Assert both files transformed, so they differ only in what they consulted.
//  4. Assert `control.ts` is declared complete and `replaced.ts` is not, and
//     that the replacement file never leaked into the reported dependencies.
//  5. Assert `nocall.ts` -- no typia call at all, only a CALL on a method the
//     replaced library declares -- keeps its declaration. Touching a default
//     library while deciding which declaration a call resolves to cannot change
//     the emit: typia recognizes its own calls by a `/typia/lib` or `/typia/src`
//     path, which a compiler-classified default library never has. Withholding
//     there cost a file its declaration for writing `table.get(...)`, and under
//     `noembed` -- where every library is on disk -- for calling anything at all
//     (samchon/typia#2361). `nocall2.ts` is the control that only annotates the
//     same type, and `replaced.ts` above is the twin that must stay withheld, so
//     the fix cannot degenerate into never withholding on a library.
func TestProjectDependenciesCompleteReplacedLibraryTransform(t *testing.T) {
  project := projectDependenciesCompleteReplacedLibraryProject(t)
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
  for _, key := range []string{"src/replaced.ts", "src/control.ts"} {
    if text := envelope.TypeScript[key]; !strings.Contains(text, "input is") {
      t.Fatalf("%s must have been transformed into a generated validator, got:\n%s", key, text)
    }
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/control.ts"] {
    t.Fatalf("a file that consulted no replaced library must still be declared complete: %v", envelope.DependenciesComplete)
  }
  if declared["src/replaced.ts"] {
    t.Fatalf("a file that consulted an on-disk default library must be withheld from the completeness declaration: %v", envelope.DependenciesComplete)
  }
  for _, entry := range envelope.Dependencies["src/replaced.ts"] {
    if strings.Contains(entry, "@typescript/lib-es2015") {
      t.Fatalf("the reported dependencies must keep excluding compiler-classified default libraries, got %q", entry)
    }
  }
  for _, key := range []string{"src/nocall.ts", "src/nocall2.ts"} {
    if !declared[key] {
      t.Fatalf(
        "%s holds no typia call, so nothing about the replaced library can "+
          "change its emitted text; withholding it means the identity channel "+
          "is still charging a default-library touch: %v",
        key,
        envelope.DependenciesComplete,
      )
    }
  }
}

func projectDependenciesCompleteReplacedLibraryProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-complete-replaced-library-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  for name, content := range map[string]string{
    "tsconfig.json": libReplacementNativeIdentityTSConfig,
    "node_modules/@typescript/lib-es2015/package.json":    libReplacementNativeIdentityPackageJSON,
    "node_modules/@typescript/lib-es2015/collection.d.ts": libReplacementNativeIdentityCollectionLib,
    "src/replaced.ts": projectDependenciesCompleteReplacedLibrarySourceReplaced,
    "src/control.ts":  projectDependenciesCompleteReplacedLibrarySourceControl,
    "src/shape.ts":    projectDependenciesCompleteReplacedLibrarySourceShape,
    "src/nocall.ts":   projectDependenciesCompleteReplacedLibrarySourceNoCall,
    "src/nocall2.ts":  projectDependenciesCompleteReplacedLibrarySourceNoCall2,
  } {
    path := filepath.Join(dir, filepath.FromSlash(name))
    if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
      t.Fatalf("mkdir fixture path %s: %v", filepath.Dir(path), err)
    }
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", path, err)
    }
  }
  return dir
}

const projectDependenciesCompleteReplacedLibrarySourceReplaced = `import typia from "typia";

export const validateMap = (input: unknown) => typia.is<Map<string, number>>(input);
`

const projectDependenciesCompleteReplacedLibrarySourceControl = `import typia from "typia";

import { Shape } from "./shape";

export const validateShape = (input: unknown) => typia.is<Shape>(input);
`

const projectDependenciesCompleteReplacedLibrarySourceShape = `export interface Shape {
  id: string;
}
`

// No typia call anywhere, and a CALL on a method the replaced library declares.
const projectDependenciesCompleteReplacedLibrarySourceNoCall = `const table = new Map<string, number>();

export const lookup = (key: string): number | undefined => table.get(key);
`

// The control: the same type, annotated but never called on.
const projectDependenciesCompleteReplacedLibrarySourceNoCall2 = `export const size = (table: Map<string, number>): number => table.size;
`
