package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesJsDocTypedefTransform verifies an `allowJs` project
// whose type is written as a JSDoc typedef reports the file behind a
// `@property` tag and still declares the consumer complete.
//
// A JSDoc typedef reaches the walk as a `JSTypeAliasDeclaration`, so its whole
// node is surfaced and every reference written inside it -- including the
// `import("./id").Id` a `@property` tag names -- resolves from there. The tags
// themselves never arrive at the boundedness predicate, so this is what pins
// that they do not need to: were a property enumeration to start handing tags
// over, the default would withhold and this file would stop being declared
// (samchon/typia#2357).
//
//  1. Build an `allowJs` project where `main.ts` validates a typedef declared
//     in `doc.js`, whose `@property` tag names a typedef in `id.js`.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `dependencies["src/main.ts"]` carries both `src/doc.js` and
//     `src/id.js`.
//  4. Assert `src/main.ts` is declared complete, so the narrowed bound is the
//     one carrying them.
func TestProjectDependenciesJsDocTypedefTransform(t *testing.T) {
  project := projectDependenciesJsDocTypedefProject(t)
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
    Dependencies         map[string][]string `json:"dependencies"`
    DependenciesComplete []string            `json:"dependenciesComplete"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }
  entries := envelope.Dependencies["src/main.ts"]
  found := map[string]bool{}
  for _, entry := range entries {
    found[entry] = true
  }
  if !found["src/doc.js"] {
    t.Fatalf("dependencies of src/main.ts must contain the typedef's own file src/doc.js: %v", entries)
  }
  if !found["src/id.js"] {
    t.Fatalf("dependencies of src/main.ts must contain src/id.js, which a @property tag names: %v", entries)
  }
  declared := false
  for _, key := range envelope.DependenciesComplete {
    if key == "src/main.ts" {
      declared = true
    }
  }
  if !declared {
    t.Fatalf("src/main.ts must be declared complete, so the reported entry is the whole bound: %v", envelope.DependenciesComplete)
  }
}

func projectDependenciesJsDocTypedefProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-jsdoc-typedef-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesJsDocTypedefTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "main.ts": projectDependenciesJsDocTypedefSourceMain,
    "doc.js":  projectDependenciesJsDocTypedefSourceDoc,
    "id.js":   projectDependenciesJsDocTypedefSourceId,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesJsDocTypedefTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "allowJs": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const projectDependenciesJsDocTypedefSourceMain = `import typia from "typia";

export const check = (input: unknown) => typia.is<import("./doc").Doc>(input);
`

const projectDependenciesJsDocTypedefSourceDoc = `/**
 * @typedef {Object} Doc
 * @property {import("./id").Id} id
 */

export const marker = 1;
`

const projectDependenciesJsDocTypedefSourceId = `/** @typedef {string} Id */

export const marker = 1;
`
