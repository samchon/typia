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
