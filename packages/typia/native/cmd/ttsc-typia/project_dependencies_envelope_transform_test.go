package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesEnvelopeTransform verifies the project transform
// envelope reports consulted declaration files per transformed file.
//
// The `dependencies` section is what lets the ttsc consumer register a
// validated type's declaring files with the bundler; without it, persistent
// caches and watch mode serve stale validators when only the type's own file
// changes (samchon/typia#2092). This pins the producer contract: direct and
// transitive declaration files attributed to the call-expression site,
// nothing attributed to files without typia calls, no self entry, and no
// default-library noise.
//
//  1. Build a project where `a.ts` calls `typia.validate<Bee>()` with `Bee`
//     declared in `b.ts` referencing `Cee` from `c.ts` through a property type,
//     plus `d.ts` with no typia call.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/a.ts"]` contains both `src/b.ts` and `src/c.ts`.
//  4. Assert no entry exists for `src/b.ts`, `src/c.ts`, or `src/d.ts`, the
//     entry omits `src/a.ts` itself, and no `lib.*.d.ts` value leaks.
func TestProjectDependenciesEnvelopeTransform(t *testing.T) {
  project := projectDependenciesEnvelopeProject(t)
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
  if _, ok := envelope.TypeScript["src/a.ts"]; !ok {
    t.Fatalf("typescript map must contain src/a.ts, got keys of:\n%s", out)
  }
  entries := envelope.Dependencies["src/a.ts"]
  if len(entries) == 0 {
    t.Fatalf("dependencies must contain an entry for src/a.ts:\n%s", out)
  }
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
    if entry == "src/a.ts" {
      t.Fatalf("dependencies of src/a.ts must omit the file itself: %v", entries)
    }
    base := filepath.Base(filepath.FromSlash(entry))
    if strings.HasPrefix(base, "lib.") && strings.HasSuffix(base, ".d.ts") {
      t.Fatalf("dependencies must exclude default library files, got %q in %v", entry, entries)
    }
  }
  if !found["src/b.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the direct declaration file src/b.ts: %v", entries)
  }
  if !found["src/c.ts"] {
    t.Fatalf("dependencies of src/a.ts must contain the transitive declaration file src/c.ts: %v", entries)
  }
  for _, key := range []string{"src/b.ts", "src/c.ts", "src/d.ts"} {
    if _, ok := envelope.Dependencies[key]; ok {
      t.Fatalf("%s has no typia call and must report no dependency entry: %v", key, envelope.Dependencies[key])
    }
  }
}

func projectDependenciesEnvelopeProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-envelope-")
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
    "a.ts": projectDependenciesEnvelopeSourceA,
    "b.ts": projectDependenciesEnvelopeSourceB,
    "c.ts": projectDependenciesEnvelopeSourceC,
    "d.ts": projectDependenciesEnvelopeSourceD,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesEnvelopeTSConfig = `{
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

const projectDependenciesEnvelopeSourceA = `import typia from "typia";

import { Bee } from "./b";

export const validateBee = (input: unknown) => typia.validate<Bee>(input);
`

const projectDependenciesEnvelopeSourceB = `import { Cee } from "./c";

export interface Bee {
  id: string;
  nested: Cee;
}
`

const projectDependenciesEnvelopeSourceC = `export interface Cee {
  value: number;
}
`

const projectDependenciesEnvelopeSourceD = `export const plain: number = 42;
`
