package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "reflect"
  "strings"
  "testing"
)

// TestBuildTransactionalEmitPublishesCleanProject checks the authored operation results described below.
//
// A successful transaction must publish actual artifacts for the complete emitted set; manifests cannot advertise absent files or a partial operation.
//
// 1. Clean emission is the positive twin of the transform-failure atomicity case, checking both artifact contents and exact normalized output identities.
// 2. A valid multi-file build publishes the authored output set and manifest paths, reports emission and replaces typia stubs with validators.
//
// @evidence contracts/testing.md#behavioral-verification A valid multi-file build publishes the authored output set and manifest paths, reports emission and replaces typia stubs with validators.
// @evidence contracts/testing.md#independent-expectations A successful transaction must publish actual artifacts for the complete emitted set; manifests cannot advertise absent files or a partial operation.
// @evidence contracts/testing.md#distinguishing-cases Clean emission is the positive twin of the transform-failure atomicity case, checking both artifact contents and exact normalized output identities.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildTransactionalEmitPublishesCleanProject as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestBuildTransactionalEmitPublishesCleanProject(t *testing.T) {
  project := buildAtomicityProject(t, false)
  manifest := filepath.Join(project, "artifacts", "manifest.json")
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--manifest", manifest,
      "--verbose",
    })
  })
  if code != 0 {
    t.Fatalf("clean transactional build failed with code %d\nstdout=%s\nstderr=%s", code, out, errText)
  }
  data, err := os.ReadFile(manifest)
  if err != nil {
    t.Fatalf("read manifest: %v", err)
  }
  var emitted []string
  if err := json.Unmarshal(data, &emitted); err != nil {
    t.Fatalf("decode manifest: %v\n%s", err, data)
  }
  if len(emitted) == 0 || !strings.Contains(out, "emitted=") {
    t.Fatalf("successful build did not report emitted outputs: %v\n%s", emitted, out)
  }
  expected := map[string]bool{
    "dist/invalid.d.ts":     true,
    "dist/invalid.d.ts.map": true,
    "dist/invalid.js":       true,
    "dist/invalid.js.map":   true,
    "dist/valid.d.ts":       true,
    "dist/valid.d.ts.map":   true,
    "dist/valid.js":         true,
    "dist/valid.js.map":     true,
  }
  actual := map[string]bool{}
  for _, path := range emitted {
    if _, err := os.Stat(path); err != nil {
      t.Fatalf("manifest advertised missing output %s: %v", path, err)
    }
    relative, err := filepath.Rel(project, path)
    if err != nil {
      t.Fatalf("relativize emitted output %s: %v", path, err)
    }
    slash := filepath.ToSlash(relative)
    actual[slash] = true
    if strings.HasSuffix(slash, ".js") {
      js, err := os.ReadFile(path)
      if err != nil {
        t.Fatalf("read emitted JavaScript: %v", err)
      }
      if strings.Contains(string(js), "typia.is(") {
        t.Fatalf("emitted JavaScript retained typia runtime stub:\n%s", js)
      }
    }
  }
  if !reflect.DeepEqual(actual, expected) {
    t.Fatalf("manifest output set changed:\nexpected=%v\nactual=%v", expected, actual)
  }
}
