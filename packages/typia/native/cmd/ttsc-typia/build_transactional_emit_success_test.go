package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "reflect"
  "strings"
  "testing"
)

// TestBuildTransactionalEmitPublishesCleanProject verifies the commit path.
//
// Buffering failed transforms must not suppress or alter successful JavaScript,
// declarations, maps, or manifest entries. A clean multi-file build publishes
// every compiler output only after the shared transform phase succeeds.
//
//  1. Build two valid typia sources with declarations and source maps enabled.
//  2. Read the emitted manifest and require every recorded file to exist.
//  3. Check each output family and prove JavaScript no longer calls typia.is.
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
