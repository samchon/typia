package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCalleeBarrelTransform verifies the modules an import
// chain traverses to reach a typia callee are reported for the file that calls
// it.
//
// typia decides its own call sites by the file that declares the resolved
// signature, so a barrel between the caller and typia chooses whether the call
// is rewritten at all: re-pointing `export { is } from "typia"` at a local
// helper turns a generated validator back into a plain call. The consulted-type
// touches cannot see that -- they report what the validated type is, never what
// selected the callee -- so without this the barrel is nowhere in the reported
// list, and a consumer that narrows to that list serves the stale validator
// (samchon/typia#2357).
//
//  1. Build a project where `consumer.ts` calls `is<Alpha>` imported from
//     `barrel.ts`, which re-exports it from `typia`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert the call was rewritten, so the barrel really did select typia.
//  4. Assert `dependencies["src/consumer.ts"]` contains `src/barrel.ts`, and
//     not `src/unused.ts`, which the barrel also re-exports but this reference
//     never traverses.
func TestProjectDependenciesCalleeBarrelTransform(t *testing.T) {
  project := projectDependenciesCalleeBarrelProject(t)
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
    TypeScript   map[string]string   `json:"typescript"`
    Dependencies map[string][]string `json:"dependencies"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  if text := envelope.TypeScript["src/consumer.ts"]; !strings.Contains(text, "input is") {
    t.Fatalf("the re-exported callee must still be recognized as typia's, got:\n%s", text)
  }
  entries := envelope.Dependencies["src/consumer.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/barrel.ts"] {
    t.Fatalf("dependencies of src/consumer.ts must contain the barrel src/barrel.ts that selects the typia callee: %v", entries)
  }
  if found["src/unused.ts"] {
    t.Fatalf("dependencies of src/consumer.ts must not contain src/unused.ts, which the barrel re-exports but this reference never traverses: %v", entries)
  }
}

func projectDependenciesCalleeBarrelProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-callee-barrel-")
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
    "consumer.ts": projectDependenciesCalleeBarrelSourceConsumer,
    "barrel.ts":   projectDependenciesCalleeBarrelSourceBarrel,
    "alpha.ts":    projectDependenciesCalleeBarrelSourceAlpha,
    "unused.ts":   projectDependenciesCalleeBarrelSourceUnused,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCalleeBarrelSourceConsumer = `import { is } from "./barrel";

import { Alpha } from "./alpha";

export const checkAlpha = (input: unknown) => is<Alpha>(input);
`

const projectDependenciesCalleeBarrelSourceBarrel = `export { is } from "typia";
export { unused } from "./unused";
`

const projectDependenciesCalleeBarrelSourceAlpha = `export interface Alpha {
  id: string;
}
`

const projectDependenciesCalleeBarrelSourceUnused = `export const unused = (): number => 1;
`
