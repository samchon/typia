package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectReferenceGraphEnvelopeTransform verifies the project transform
// envelope carries the ttsc driver SDK's host-owned reference `graph` section
// alongside typia's precise `dependencies`.
//
// `graph` is the plugin-agnostic sound invalidation baseline: the ttsc consumer
// registers reach(edges, F) ∪ globals ∪ configs ∪ dependencies[F], so a
// consulted file the precise `dependencies` collection might not attribute is
// still guarded by the host baseline (samchon/typia#2107). This pins that
// typia's hand-rolled envelope now routes through driver.NewTransformGraph:
// direct reference edges (type-only included), ambient global-scope files, and
// the tsconfig `extends` chain, all keyed by the same driver.TransformOutputKey
// convention as the `typescript`/`dependencies` sections so a consumer joins
// them by key.
//
//  1. Build a project where `a.ts` imports `Bee` from `b.ts` (and calls
//     `typia.validate<Bee>()`), `b.ts` imports type-only `Cee` from `c.ts`, an
//     ambient `globals.d.ts` contributes a global augmentation, and
//     `tsconfig.json` extends `tsconfig.base.json`.
//  2. Run project transform mode and decode the JSON envelope's `graph`.
//  3. Assert the `a.ts -> b.ts` and the type-only `b.ts -> c.ts` edges, the
//     `globals.d.ts` global entry, and the `tsconfig.json` + `tsconfig.base.json`
//     configs chain, all under keys that join with the `typescript` section.
//  4. Assert `dependencies` is still emitted next to `graph`, and that a
//     non-global source is not misreported as a global.
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
