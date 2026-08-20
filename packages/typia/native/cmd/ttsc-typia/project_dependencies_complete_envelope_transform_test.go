package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "sort"
  "testing"
)

// TestProjectDependenciesCompleteEnvelopeTransform verifies the project
// transform envelope declares every file it published as having a complete
// dependency list.
//
// `dependencies` alone only widens the consumer's bound; `dependenciesComplete`
// is what lets the consumer stop widening and validate the ~10 declarations
// typia consulted instead of the file's whole reference closure plus every
// global-scope declaration, once per delivered module. The claim covers both
// classes of envelope file, and the second one is the larger half: a file with
// no typia call receives no contribution at all, so its empty entry is the
// strongest claim the envelope carries (samchon/typia#2357).
//
//  1. Build a project where `a.ts` validates `Bee` from `b.ts` (which reaches
//     `Cee` in `c.ts`), plus `d.ts` with no typia call at all.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependenciesComplete` names exactly the published `typescript`
//     keys, so neither the transformed file nor the untouched ones are left on
//     the conservative bound.
//  4. Assert the declared list for `src/a.ts` still carries `src/b.ts` and
//     `src/c.ts`, because the declaration narrows to that entry and an entry
//     that lost a consulted file would now serve a stale validator.
func TestProjectDependenciesCompleteEnvelopeTransform(t *testing.T) {
  project := projectDependenciesCompleteEnvelopeProject(t)
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

  published := make([]string, 0, len(envelope.TypeScript))
  for key := range envelope.TypeScript {
    published = append(published, key)
  }
  sort.Strings(published)
  declared := append([]string{}, envelope.DependenciesComplete...)
  sort.Strings(declared)
  if len(published) != len(declared) {
    t.Fatalf("dependenciesComplete must name every published file; published=%v declared=%v", published, declared)
  }
  for index, key := range published {
    if declared[index] != key {
      t.Fatalf("dependenciesComplete must name every published file; published=%v declared=%v", published, declared)
    }
  }

  entries := envelope.Dependencies["src/a.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/b.ts"] {
    t.Fatalf("the declared entry for src/a.ts must keep the direct declaration file src/b.ts: %v", entries)
  }
  if !found["src/c.ts"] {
    t.Fatalf("the declared entry for src/a.ts must keep the transitive declaration file src/c.ts: %v", entries)
  }
  if _, ok := envelope.Dependencies["src/d.ts"]; ok {
    t.Fatalf("src/d.ts has no typia call and must be declared with no dependency at all: %v", envelope.Dependencies["src/d.ts"])
  }
}

func projectDependenciesCompleteEnvelopeProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-complete-envelope-")
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
