package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "reflect"
  "strings"
  "testing"
)

// TestBuildEmitProvenance verifies compiler-owned source identity at the final
// publication boundary rather than at the staging callback.
//
// A rejected transform can already have staged valid JavaScript. Advertising
// that buffer as emitted would let runtime consumers trust nonexistent output.
//
// 1. Emit scripts, declarations and maps and inspect script-only source ownership.
// 2. Withhold output for failed transforms, noEmit and declaration-only builds.
// 3. Reject relative and unwritable result paths and actual output-write failure.
//
// @evidence contracts/testing.md#behavioral-verification runBuild publishes exact script-to-source mappings only when final files exist. Failed transforms and discarded/declaration-only output retain an empty provenance map; failed native writes are excluded and private result errors fail the command.
// @evidence contracts/testing.md#independent-expectations Fixture source/output paths and TypeScript's declaration-only/noEmit contracts determine the expected ownership set; declarations and maps cannot own runtime scripts.
// @evidence contracts/testing.md#distinguishing-cases Normal multi-file emit, transform rejection, forced noEmit, configured declaration-only, writes blocked before or after one script succeeds, and malformed/unwritable private destinations distinguish publication from staging. A partial write failure reports only the script already published.
// @evidence contracts/testing.md#execution-ownership This unit test is discovered by the canonical native Go runner and calls the host operation in process. Each subcase owns its temporary project and metadata paths; no separately built host or installed runtime consumer is involved.
func TestBuildEmitProvenance(t *testing.T) {
  for _, scenario := range []string{"emit", "transform-failure", "noEmit", "declaration-only", "write-failure", "partial-write-failure"} {
    t.Run(scenario, func(t *testing.T) {
      project := buildAtomicityProject(t, scenario == "transform-failure")
      result := filepath.Join(project, "provenance.json")
      args := []string{"--cwd", project, "--emit-provenance-json", result}
      if scenario == "noEmit" {
        args = append(args, "--noEmit")
      }
      if scenario == "declaration-only" {
        path := filepath.Join(project, "tsconfig.json")
        config, err := os.ReadFile(path)
        if err != nil {
          t.Fatal(err)
        }
        buildObservationWrite(t, path, strings.Replace(string(config), `"declaration": true`, `"declaration": true, "emitDeclarationOnly": true`, 1))
      }
      if scenario == "write-failure" {
        buildObservationWrite(t, filepath.Join(project, "dist"), "blocks the output directory")
      }
      if scenario == "partial-write-failure" {
        if err := os.MkdirAll(filepath.Join(project, "dist", "valid.js"), 0o755); err != nil {
          t.Fatal(err)
        }
      }
      _, errors, code := ttscTypiaTestCapture(func() int { return runBuild(args) })
      expectedCode := 0
      if scenario == "transform-failure" || scenario == "write-failure" || scenario == "partial-write-failure" {
        expectedCode = 3
      }
      if code != expectedCode {
        t.Fatalf("status %d, want %d\n%s", code, expectedCode, errors)
      }
      bytes, err := os.ReadFile(result)
      if err != nil {
        t.Fatal(err)
      }
      var actual map[string][]string
      if err := json.Unmarshal(bytes, &actual); err != nil {
        t.Fatal(err)
      }
      expected := map[string][]string{}
      if scenario == "emit" || scenario == "partial-write-failure" {
        names := []string{"invalid"}
        if scenario == "emit" {
          names = append(names, "valid")
        }
        for _, name := range names {
          output := filepath.Join(project, "dist", name+".js")
          source, err := filepath.EvalSymlinks(filepath.Join(project, "src", name+".ts"))
          if err != nil {
            t.Fatal(err)
          }
          expected[output] = []string{source}
          if _, err := os.Stat(output); err != nil {
            t.Fatal(err)
          }
        }
      }
      if actual == nil || !reflect.DeepEqual(actual, expected) {
        t.Fatalf("provenance = %#v, want %#v", actual, expected)
      }
      if scenario == "noEmit" || scenario == "transform-failure" {
        if _, err := os.Stat(filepath.Join(project, "dist")); !os.IsNotExist(err) {
          t.Fatalf("withheld output was written: %v", err)
        }
      }
    })
  }
  project := buildAtomicityProject(t, false)
  for _, scenario := range []struct {
    path   string
    status int
  }{{"relative.json", 2}, {project, 3}} {
    _, errors, code := ttscTypiaTestCapture(func() int { return runBuild([]string{"--cwd", project, "--emit-provenance-json", scenario.path}) })
    if code != scenario.status {
      t.Fatalf("private provenance failure: %d, want %d\n%s", code, scenario.status, errors)
    }
  }
}
