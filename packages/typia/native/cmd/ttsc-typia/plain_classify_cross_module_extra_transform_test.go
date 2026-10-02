package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyCrossModuleExtraTransform verifies qualified namespace and default-export class imports.
//
// Classes reconstructed at runtime require actual exported values; namespace members keep their qualification and a separate default export is accessed through its default binding.
//
// 1. Namespaced factory/field-copy classes and separate-statement default exports exercise different cross-module value identities.
// 2. The consumer emit retains NS.Point, NS.Model and a default value import; each transformed module must succeed.
//
// @evidence contracts/testing.md#behavioral-verification The consumer emit retains NS.Point, NS.Model and a default value import; each transformed module must succeed.
// @evidence contracts/testing.md#independent-expectations Classes reconstructed at runtime require actual exported values; namespace members keep their qualification and a separate default export is accessed through its default binding.
// @evidence contracts/testing.md#distinguishing-cases Namespaced factory/field-copy classes and separate-statement default exports exercise different cross-module value identities.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyCrossModuleExtraTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyCrossModuleExtraTransform(t *testing.T) {
  project := plainClassifyCrossModuleExtraProject(t)
  transform := func(file string) string {
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("transform %s failed: code=%d stderr=\n%s", file, code, errText)
    }
    return out
  }
  transform("src/nsmodel.ts")
  transform("src/defmodel.ts")
  transform("src/fcmodel.ts")
  mainJS := transform("src/main.ts")
  // namespaced cross-module references must be qualified (dotted) onto the
  // imported namespace, never a bare Point/Model.
  if !strings.Contains(mainJS, "NS.Point") {
    t.Fatalf("namespaced cross-module from must reference the qualified NS.Point:\n%s", mainJS)
  }
  if !strings.Contains(mainJS, "NS.Model") {
    t.Fatalf("namespaced cross-module field-copy must reference the qualified NS.Model:\n%s", mainJS)
  }
  // separate-statement default exports must resolve via a default import.
  if !strings.Contains(mainJS, ".default") {
    t.Fatalf("separate-statement default exports must value-import via `.default`:\n%s", mainJS)
  }
}

func plainClassifyCrossModuleExtraProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "plain-classify-crossmodule-extra-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFromNewTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "nsmodel.ts":  plainClassifyExtraNsModel,
    "defmodel.ts": plainClassifyExtraDefModel,
    "fcmodel.ts":  plainClassifyExtraFcModel,
    "main.ts":     plainClassifyExtraMain,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const plainClassifyExtraNsModel = `export namespace NS {
  export class Point {
    private constructor(
      public readonly x: number,
      public readonly y: number,
    ) {}
    static from(seed: { x: number; y: number }): NS.Point {
      return new NS.Point(seed.x, seed.y);
    }
    sum(): number {
      return this.x + this.y;
    }
  }
  export class Model {
    id!: number;
    greet(): string {
      return "m" + this.id;
    }
  }
}
`

const plainClassifyExtraDefModel = `// separate-statement default export of a from/new class (no Default modifier on
// the class declaration itself)
class Stamp {
  value!: number;
  private constructor(value: number) {
    this.value = value;
  }
  static from(seed: { value: number }): Stamp {
    const s = Object.create(Stamp.prototype) as Stamp;
    (s as { value: number }).value = seed.value;
    return s;
  }
}
export default Stamp;
`

const plainClassifyExtraFcModel = `// separate-statement default export of a field-copy class
class Note {
  text!: string;
  show(): string {
    return this.text;
  }
}
export default Note;
`

const plainClassifyExtraMain = `import typia from "typia";
import type { NS } from "./nsmodel";
import type Stamp from "./defmodel";
import type Note from "./fcmodel";

export const makePoint = typia.plain.createClassify<typeof NS.Point>();
export const makeModel = typia.plain.createClassify<NS.Model>();
export const makeStamp = typia.plain.createClassify<typeof Stamp>();
export const makeNote = typia.plain.createClassify<Note>();
`
