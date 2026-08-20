package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectDependenciesCompleteUntouchedReprintTransform verifies a file typia
// left untouched is re-printed without any type-driven lowering, which is the
// premise under which the envelope declares such a file complete.
//
// Declaring a file complete with an empty dependency list claims that nothing
// the type system knows about any other file can change its published text.
// That holds only because this host prints the parsed AST through a printer
// handed neither a Checker nor an emit resolver and runs none of the JS script
// transformers, so no type-driven import elision, `design:type` metadata,
// `enum`, or `namespace` lowering can reach the envelope. Were any of them to
// run, an edit to a consulted declaration would change the output of a file
// with nothing left watching it (samchon/typia#2357, samchon/ttsc#1259).
//
//  1. Compile a project with `experimentalDecorators` and
//     `emitDecoratorMetadata` on, whose `untouched.ts` has no typia call and
//     carries a type-only import, an `enum`, a `namespace`, `as const`, and a
//     decorated class with an annotated member.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert the published text preserves each construct verbatim and emits no
//     `design:type` metadata, so nothing type-driven ran.
//  4. Assert the file is declared complete with no dependency entry at all.
func TestProjectDependenciesCompleteUntouchedReprintTransform(t *testing.T) {
  project := projectDependenciesCompleteUntouchedReprintProject(t)
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
  text, ok := envelope.TypeScript["src/untouched.ts"]
  if !ok {
    t.Fatalf("the envelope must publish src/untouched.ts:\n%s", out)
  }
  for _, preserved := range []string{
    "import type { Shape }",
    "enum Color",
    "namespace Space",
    "as const",
    "@seal",
  } {
    if !strings.Contains(text, preserved) {
      t.Fatalf("the re-print must preserve %q, got:\n%s", preserved, text)
    }
  }
  if strings.Contains(text, "design:type") {
    t.Fatalf("the transform envelope must not carry emitDecoratorMetadata output, got:\n%s", text)
  }
  declared := map[string]bool{}
  for _, key := range envelope.DependenciesComplete {
    declared[key] = true
  }
  if !declared["src/untouched.ts"] {
    t.Fatalf("a faithfully re-printed file must be declared complete: %v", envelope.DependenciesComplete)
  }
  if entries, ok := envelope.Dependencies["src/untouched.ts"]; ok {
    t.Fatalf("a file typia never touched must be declared with no dependency entry: %v", entries)
  }
}

func projectDependenciesCompleteUntouchedReprintProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "project-dependencies-complete-untouched-reprint-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesCompleteUntouchedReprintTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "untouched.ts": projectDependenciesCompleteUntouchedReprintSourceUntouched,
    "shape.ts":     projectDependenciesCompleteUntouchedReprintSourceShape,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectDependenciesCompleteUntouchedReprintTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const projectDependenciesCompleteUntouchedReprintSourceUntouched = `import type { Shape } from "./shape";

export enum Color {
  Red = 1,
}

export namespace Space {
  export const unit = 1;
}

export const palette = ["red", "blue"] as const;

export const seal = (target: unknown): void => {
  void target;
};

@seal
export class Holder {
  public shape?: Shape;
}
`

const projectDependenciesCompleteUntouchedReprintSourceShape = `export interface Shape {
  id: string;
}
`
