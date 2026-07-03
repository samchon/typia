package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyCrossModuleExtraTransform covers two cross-module value-import
// resolutions beyond the inline default-export case:
//   - a class declared inside a `namespace` (typeof NS.Point / NS.Model): the
//     value import must reach the QUALIFIED member, not a bare top-level binding
//     the module never exports;
//   - a class default-exported by a SEPARATE statement (`class C {}; export
//     default C;`, which carries no Default modifier): the value import must be a
//     DEFAULT import, for both the from/new and the field-copy paths.
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
  nsJS := transform("src/nsmodel.ts")
  defJS := transform("src/defmodel.ts")
  fcJS := transform("src/fcmodel.ts")
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
  plainClassifyCrossModuleExtraRun(t, project, nsJS, defJS, fcJS, mainJS)
}

func plainClassifyCrossModuleExtraProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-crossmodule-extra-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
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

func plainClassifyCrossModuleExtraRun(t *testing.T, project, nsJS, defJS, fcJS, mainJS string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  if err := os.WriteFile(filepath.Join(runtimeDir, "generic-internal-stub.cjs"), []byte(plainClassifyFromNewGenericStub), 0o644); err != nil {
    t.Fatalf("write generic stub: %v", err)
  }
  for name, body := range map[string]string{
    "nsmodel.js":  nsJS,
    "defmodel.js": defJS,
    "fcmodel.js":  fcJS,
  } {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(plainClassifyFromNewRewrite(t, mainJS)), 0o644); err != nil {
    t.Fatalf("write main.cjs: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(plainClassifyExtraRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("cross-module extra runtime cases failed: %v\n%s", err, output)
  }
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

const plainClassifyExtraRunner = `const ns = require("./nsmodel.js");
const def = require("./defmodel.js");
const fc = require("./fcmodel.js");
const main = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// namespaced cross-module from
const p = main.makePoint({ x: 1, y: 2 });
assert(p instanceof ns.NS.Point, "namespaced cross-module from should yield NS.Point");
assert(p.sum() === 3, "NS.Point.from should reconstruct, got: " + p.sum());

// namespaced cross-module field-copy
const m = main.makeModel({ id: 4 });
assert(m instanceof ns.NS.Model, "namespaced cross-module field-copy should yield NS.Model");
assert(m.greet() === "m4", "NS.Model method should work, got: " + m.greet());

// separate-statement default-export from/new
const s = main.makeStamp({ value: 7 });
assert(s instanceof def.default, "separate-default from should yield a Stamp instance");
assert(s.value === 7, "Stamp.from seed should reconstruct, got: " + s.value);

// separate-statement default-export field-copy
const n = main.makeNote({ text: "hi" });
assert(n instanceof fc.default, "separate-default field-copy should yield a Note instance");
assert(n.show() === "hi", "Note method should work, got: " + n.show());
`
