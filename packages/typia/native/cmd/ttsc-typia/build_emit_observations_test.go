package main

import (
  "crypto/sha256"
  "encoding/hex"
  "encoding/json"
  "os"
  "path/filepath"
  "slices"
  "strings"
  "testing"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestBuildEmitObservations verifies generation-owned compiler inputs on success
// and failure, including the semantic config behind a runtime wrapper.
//
// Runtime reuse must observe type-only declarations and configuration ancestry
// even when those files produce no JavaScript. A failed load has no authority to
// claim complete inputs.
//
// 1. Build an authored project through a generated config and inspect its graph.
// 2. Compare recorded hashes with authored bytes and output with an ordinary build.
// 3. Exercise semantic, transform, missing-config and private-channel failures.
//
// @evidence contracts/testing.md#behavioral-verification In-process runBuild emits a validator and a graph with source/type-only/global/config/package inputs and authored SHA-256 values. Failure subcases distinguish loaded graphs from explicitly incomplete missing generations and refuse relative or unwritable result paths.
// @evidence contracts/testing.md#independent-expectations The authored import graph, SHA-256 standard and declared extends chain determine expectations independently of the host's result. A plain build must emit identical application bytes.
// @evidence contracts/testing.md#distinguishing-cases Successful wrapper and plain builds, type-only/global inputs, semantic and typia diagnostics, missing config, invalid payload, relative private paths and failed private publication retain distinct assertions.
// @evidence contracts/testing.md#execution-ownership The canonical native Go runner discovers this unit test. It calls runBuild in process using temporary authored projects and restores environment through t.Setenv; no native artifact or consumer installation is required.
func TestBuildEmitObservations(t *testing.T) {
  project := buildAtomicityProject(t, false)
  source := "import typia from \"typia\"; import type { Shape } from \"./shape\"; export const check = (input: unknown) => typia.is<Shape>(input);\n"
  files := map[string]string{
    "src/valid.ts":    source,
    "src/shape.ts":    "export interface Shape { value: string; ambient?: AmbientValue }\n",
    "src/global.d.ts": "interface AmbientValue { enabled: boolean }\n",
    "base.json":       `{"compilerOptions":{"strict":true}}`,
  }
  config, err := os.ReadFile(filepath.Join(project, "tsconfig.json"))
  if err != nil {
    t.Fatal(err)
  }
  files["tsconfig.json"] = strings.Replace(string(config), "{", `{"extends":"./base.json",`, 1)
  for name, text := range files {
    buildObservationWrite(t, filepath.Join(project, name), text)
  }
  wrapper := filepath.Join(t.TempDir(), "runtime.json")
  // Runtime wrappers live outside the authored package. Its original config
  // remains the semantic owner of relative module/configuration settings.
  encoded, _ := json.Marshal(map[string]any{"extends": filepath.Join(project, "tsconfig.json"), "compilerOptions": map[string]any{"outDir": filepath.Join(project, "dist")}})
  buildObservationWrite(t, wrapper, string(encoded))
  observation := filepath.Join(project, "observations.json")
  t.Setenv(driver.SemanticConfigPathEnv, filepath.Join(project, "tsconfig.json"))
  _, errors, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{"--cwd", project, "--tsconfig", wrapper, "--emit", "--emit-observations-json", observation})
  })
  if code != 0 {
    t.Fatalf("observed build: %d\n%s", code, errors)
  }
  result := buildObservationRead(t, observation)
  if result.Graph == nil || (result.Complete != nil && !*result.Complete) {
    t.Fatalf("missing generation authority: %#v", result)
  }
  for _, name := range []string{"src/valid.ts", "src/shape.ts", "src/global.d.ts", "tsconfig.json", "base.json"} {
    expected := sha256.Sum256([]byte(files[name]))
    actual := result.Graph.InputHashes[name]
    if actual == nil || *actual != hex.EncodeToString(expected[:]) {
      t.Errorf("wrong observed hash for %s: %v", name, actual)
    }
    physical := result.Graph.InputRealpaths[name]
    if physical == nil || !filepath.IsAbs(*physical) {
      t.Errorf("missing physical input proof for %s", name)
    }
  }
  if !slices.Contains(result.Graph.Edges["src/valid.ts"], "src/shape.ts") || !slices.Contains(result.Graph.Globals, "src/global.d.ts") {
    t.Errorf("lost type-only or ambient input: %#v", result.Graph)
  }
  for _, name := range []string{"tsconfig.json", "base.json"} {
    if !slices.Contains(result.Graph.Configs, name) {
      t.Errorf("lost configuration ancestor %s: %v", name, result.Graph.Configs)
    }
  }
  if !slices.Equal(result.Graph.Configs, []string{"tsconfig.json", "base.json"}) {
    t.Fatalf("private wrapper replaced authored config ancestry: %v", result.Graph.Configs)
  }
  packageProof := false
  for name := range result.Graph.InputObservations {
    if strings.HasSuffix(name, "node_modules/typia/package.json") {
      packageProof = true
    }
  }
  if !packageProof {
    t.Error("lost package-resolution observations")
  }
  emitted, err := os.ReadFile(filepath.Join(project, "dist", "valid.js"))
  if err != nil {
    t.Fatal(err)
  }
  if !strings.Contains(string(emitted), "typeof input.value") || strings.Contains(string(emitted), "typia.is(") {
    t.Fatalf("untransformed validator:\n%s", emitted)
  }
  t.Setenv(driver.SemanticConfigPathEnv, "")
  _, errors, code = ttscTypiaTestCapture(func() int { return runBuild([]string{"--cwd", project, "--emit"}) })
  if code != 0 {
    t.Fatalf("plain build: %d\n%s", code, errors)
  }
  plain, err := os.ReadFile(filepath.Join(project, "dist", "valid.js"))
  if err != nil || string(plain) != string(emitted) {
    t.Fatalf("observation changed output: %v", err)
  }

  for _, scenario := range []struct {
    name, source, config, payload string
    status                        int
    loaded                        bool
  }{
    {"semantic-error", "export const value: string = 42;", "tsconfig.json", "", 2, true},
    {"transform-error", transformDiagnosticSource, "tsconfig.json", "", 3, true},
    {"missing-config", source, "missing.json", "", 2, false},
    {"invalid-payload", source, "tsconfig.json", "{", 2, false},
  } {
    t.Run(scenario.name, func(t *testing.T) {
      root := buildAtomicityProject(t, false)
      buildObservationWrite(t, filepath.Join(root, "src", "valid.ts"), scenario.source)
      output := filepath.Join(root, "observations.json")
      _, errors, code := ttscTypiaTestCapture(func() int {
        return runBuild([]string{"--cwd", root, "--tsconfig", scenario.config, "--plugins-json", scenario.payload, "--emit-observations-json", output})
      })
      if code != scenario.status {
        t.Fatalf("status %d, want %d\n%s", code, scenario.status, errors)
      }
      result := buildObservationRead(t, output)
      if scenario.loaded != (result.Graph != nil) {
        t.Fatalf("wrong loaded observation: %#v", result)
      }
      if !scenario.loaded && (result.Complete == nil || *result.Complete) {
        t.Fatal("missing generation claimed complete observations")
      }
      if scenario.loaded && result.Graph.InputHashes["src/valid.ts"] == nil {
        t.Fatal("failed build lost its loaded input")
      }
    })
  }
  for _, scenario := range []struct {
    name, path string
    status     int
  }{
    {"relative", "relative.json", 2},
    {"unwritable", project, 3},
  } {
    t.Run(scenario.name, func(t *testing.T) {
      _, errors, code := ttscTypiaTestCapture(func() int { return runBuild([]string{"--cwd", project, "--emit-observations-json", scenario.path}) })
      if code != scenario.status {
        t.Fatalf("status %d, want %d\n%s", code, scenario.status, errors)
      }
    })
  }
}

type buildObservationResult struct {
  Graph     *driver.TransformGraph `json:"graph"`
  Inputs    []string               `json:"hostInputs"`
  Hashes    map[string]*string     `json:"hostInputHashes"`
  Realpaths map[string]*string     `json:"hostInputRealpaths"`
  Complete  *bool                  `json:"observationsComplete"`
}

func buildObservationRead(t *testing.T, path string) buildObservationResult {
  t.Helper()
  var result buildObservationResult
  data, err := os.ReadFile(path)
  if err != nil {
    t.Fatal(err)
  }
  if err := json.Unmarshal(data, &result); err != nil {
    t.Fatal(err)
  }
  return result
}

func buildObservationWrite(t *testing.T, path, text string) {
  t.Helper()
  if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
    t.Fatal(err)
  }
  if err := os.WriteFile(path, []byte(text), 0o644); err != nil {
    t.Fatal(err)
  }
}
