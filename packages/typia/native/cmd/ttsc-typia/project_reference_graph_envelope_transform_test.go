package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectReferenceGraphEnvelopeTransform checks the authored operation results described below.
//
// Host reference closure, global contributors and inherited configs are independently invalidating inputs that complement typia precise declaration dependencies. All sections join through the same normalized source keys.
//
// 1. Runtime and type-only imports contrast with ambient and module declarations; a config extends chain exercises transitive configuration ownership.
// 2. The envelope carries a-to-b and type-only b-to-c edges, ambient globals and both extends configs alongside precise dependencies; a module source is not classified as global.
//
// @evidence contracts/testing.md#behavioral-verification The envelope carries a-to-b and type-only b-to-c edges, ambient globals and both extends configs alongside precise dependencies; a module source is not classified as global.
// @evidence contracts/testing.md#independent-expectations Host reference closure, global contributors and inherited configs are independently invalidating inputs that complement typia precise declaration dependencies. All sections join through the same normalized source keys.
// @evidence contracts/testing.md#distinguishing-cases Runtime and type-only imports contrast with ambient and module declarations; a config extends chain exercises transitive configuration ownership.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProjectReferenceGraphEnvelopeTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestProjectReferenceGraphEnvelopeTransform(t *testing.T) {
  project := projectReferenceGraphEnvelopeProject(t)
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
    TypeScript map[string]string `json:"typescript"`
    Graph      *struct {
      Edges   map[string][]string `json:"edges"`
      Globals []string            `json:"globals"`
      Configs []string            `json:"configs"`
    } `json:"graph"`
    Dependencies map[string][]string `json:"dependencies"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  if envelope.Graph == nil {
    t.Fatalf("envelope must carry a graph section:\n%s", out)
  }
  if _, ok := envelope.TypeScript["src/a.ts"]; !ok {
    t.Fatalf("typescript map must contain src/a.ts (graph keys join with it):\n%s", out)
  }

  contains := func(values []string, want string) bool {
    for _, value := range values {
      if value == want {
        return true
      }
    }
    return false
  }

  // Direct resolved edge from the transformed file to its import.
  if !contains(envelope.Graph.Edges["src/a.ts"], "src/b.ts") {
    t.Fatalf("graph edges of src/a.ts must contain src/b.ts: %v", envelope.Graph.Edges["src/a.ts"])
  }
  // Type-only edges must be included: b.ts imports Cee with `import type`.
  if !contains(envelope.Graph.Edges["src/b.ts"], "src/c.ts") {
    t.Fatalf("graph edges of src/b.ts must contain the type-only edge src/c.ts: %v", envelope.Graph.Edges["src/b.ts"])
  }
  // Ambient global-scope file appears in globals.
  if !contains(envelope.Graph.Globals, "src/globals.d.ts") {
    t.Fatalf("graph globals must contain src/globals.d.ts: %v", envelope.Graph.Globals)
  }
  // A plain module source is not a global-scope contributor.
  if contains(envelope.Graph.Globals, "src/c.ts") {
    t.Fatalf("graph globals must not contain the module source src/c.ts: %v", envelope.Graph.Globals)
  }
  // tsconfig extends chain: project config followed by its base.
  if !contains(envelope.Graph.Configs, "tsconfig.json") {
    t.Fatalf("graph configs must contain tsconfig.json: %v", envelope.Graph.Configs)
  }
  if !contains(envelope.Graph.Configs, "tsconfig.base.json") {
    t.Fatalf("graph configs must contain the extended tsconfig.base.json: %v", envelope.Graph.Configs)
  }

  // The precise dependencies channel remains emitted alongside graph.
  if !contains(envelope.Dependencies["src/a.ts"], "src/b.ts") {
    t.Fatalf("dependencies of src/a.ts must still be emitted alongside graph: %v", envelope.Dependencies["src/a.ts"])
  }
}

func projectReferenceGraphEnvelopeProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-reference-graph-envelope-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  files := map[string]string{
    "tsconfig.json":      projectReferenceGraphEnvelopeTSConfig,
    "tsconfig.base.json": projectReferenceGraphEnvelopeTSConfigBase,
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(dir, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  for name, body := range map[string]string{
    "a.ts":         projectReferenceGraphEnvelopeSourceA,
    "b.ts":         projectReferenceGraphEnvelopeSourceB,
    "c.ts":         projectReferenceGraphEnvelopeSourceC,
    "globals.d.ts": projectReferenceGraphEnvelopeGlobals,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectReferenceGraphEnvelopeTSConfig = `{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const projectReferenceGraphEnvelopeTSConfigBase = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
`

const projectReferenceGraphEnvelopeSourceA = `import typia from "typia";

import { Bee } from "./b";

export const validateBee = (input: unknown) => typia.validate<Bee>(input);
`

const projectReferenceGraphEnvelopeSourceB = `import type { Cee } from "./c";

export interface Bee {
  id: string;
  nested: Cee;
}
`

const projectReferenceGraphEnvelopeSourceC = `export interface Cee {
  value: number;
}
`

// A pure ambient declaration file (no import/export) is a script file, so it
// contributes to the global scope and must appear in graph.globals.
const projectReferenceGraphEnvelopeGlobals = `declare interface TypiaGraphGlobal {
  tag: string;
}
`
