package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCustomLibNameTransform verifies a project-owned
// ambient declaration file named `lib.custom.d.ts` appears in the transform
// envelope's `dependencies`.
//
// Default-library exclusion must come from the compiler's own classification,
// never from a filename pattern: a basename predicate (`lib.*.d.ts`) silently
// drops a project's own ambient file with that common naming, so its changes
// never invalidate consumers and persistent bundler caches serve stale
// validators (samchon/typia#2108). Compiler-owned default libraries must still
// stay excluded.
//
//  1. Build a project where `a.ts` calls `typia.validate<Bee>()` with `Bee`
//     declared in `b.ts` consuming the ambient `CustomAmbient` interface
//     declared in `src/lib.custom.d.ts`, plus a `Date` property so the
//     analysis touches real default libraries.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains `src/lib.custom.d.ts`.
//  4. Assert no compiler-owned default library (virtual `bundled:///` URI or
//     any value outside the project) leaks into the entry.
func TestProjectDependenciesCustomLibNameTransform(t *testing.T) {
  project := projectDependenciesCustomLibNameProject(t)
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
  entries := envelope.Dependencies["src/a.ts"]
  if len(entries) == 0 {
    t.Fatalf("dependencies must contain an entry for src/a.ts:\n%s", out)
  }
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
    if strings.Contains(entry, "://") {
      t.Fatalf("dependencies must exclude virtual URI sources, got %q in %v", entry, entries)
    }
    if filepath.IsAbs(filepath.FromSlash(entry)) || strings.HasPrefix(entry, "../") {
      t.Fatalf("dependencies must not report files outside the project, got %q in %v", entry, entries)
    }
  }
  if !found["src/lib.custom.d.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the project-owned src/lib.custom.d.ts: %v", entries)
  }
  if !found["src/b.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the direct declaration file src/b.ts: %v", entries)
  }
}

func projectDependenciesCustomLibNameProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-custom-lib-name-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesCustomLibNameTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "a.ts":            projectDependenciesCustomLibNameSourceA,
    "b.ts":            projectDependenciesCustomLibNameSourceB,
    "lib.custom.d.ts": projectDependenciesCustomLibNameSourceLib,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCustomLibNameTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const projectDependenciesCustomLibNameSourceA = `import typia from "typia";

import { Bee } from "./b";

export const validateBee = (input: unknown) => typia.validate<Bee>(input);
`

const projectDependenciesCustomLibNameSourceB = `export interface Bee {
  id: string;
  when: Date;
  ambient: CustomAmbient;
}
`

const projectDependenciesCustomLibNameSourceLib = `declare interface CustomAmbient {
  tag: string;
}
`
