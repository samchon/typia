package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestCompareNativeObjectOvermatchTransform pins equals/cover over native|object.
//
// CompareEqualProgrammer.schema ORs a branch per union member and the object
// branch (`_eo`) guards only with `typeof === "object" && !Array.isArray`,
// which a native instance also passes. For `Date | { timestamp: number }` the
// object branch compares two Dates by the absent `timestamp` key — both
// `undefined`, so it reports them equal, and the OR accepts even though the
// Date branch (comparing getTime) correctly said not-equal. The object branch
// must never claim a value a sibling native branch owns. This test drives Date,
// Uint8Array, and RegExp unioned with an object, in both orders, and requires
// two different natives to compare not-equal while every legitimate pair and
// the native-alone / object-alone controls are unchanged.
//
//  1. Transform equals/cover factories over native|object and object|native.
//  2. Require two different natives to compare not-equal (equals and cover).
//  3. Require same natives, plain-object pairs, and the native-alone control
//     to keep their correct equal / not-equal results.
func TestCompareNativeObjectOvermatchTransform(t *testing.T) {
  project := compareNativeObjectOvermatchProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("compare native/object over-match transform failed: code=%d stderr=\n%s", code, errText)
  }
  compareNativeObjectOvermatchRunRuntimeCases(t, project, out)
}

func compareNativeObjectOvermatchProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-native-object-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareNativeObjectOvermatchTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareNativeObjectOvermatchSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func compareNativeObjectOvermatchRunRuntimeCases(t *testing.T, project string, js string) {
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
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(compareNativeObjectOvermatchRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare native/object over-match runtime cases failed: %v\n%s", err, output)
  }
}

const compareNativeObjectOvermatchTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const compareNativeObjectOvermatchSource = `import typia, { compare } from "typia";

interface IStamp {
  timestamp: number;
}
interface ISource {
  source: string;
}

export const equalDateObj = typia.compare.createEquals<Date | IStamp>();
export const coverDateObj = typia.compare.createCover<Date | IStamp>();
export const equalObjDate = typia.compare.createEquals<IStamp | Date>();
export const equalBytesObj = typia.compare.createEquals<Uint8Array | IStamp>();
export const equalRegExpObj = typia.compare.createEquals<RegExp | ISource>();

// controls: the native alone and the object alone must be unchanged.
export const equalDate = typia.compare.createEquals<Date>();
export const equalStamp = typia.compare.createEquals<IStamp>();
`

const compareNativeObjectOvermatchRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

// Two different natives must NOT be reported equal by the object branch.
expect("Date|obj: two different Dates equal", mod.equalDateObj(new Date(0), new Date(5000)), false);
expect("Date|obj: cover two different Dates", mod.coverDateObj(new Date(0), new Date(5000)), false);
expect("obj|Date: two different Dates equal", mod.equalObjDate(new Date(0), new Date(5000)), false);
expect("Bytes|obj: different bytes equal", mod.equalBytesObj(new Uint8Array([1, 2, 3]), new Uint8Array([9, 9, 9])), false);
expect("Bytes|obj: one-byte diff equal", mod.equalBytesObj(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4])), false);
expect("RegExp|obj: same source diff flags equal", mod.equalRegExpObj(/a/g, /a/i), false);

// Legitimate equal cases must be preserved.
expect("Date|obj: same Date equal", mod.equalDateObj(new Date(0), new Date(0)), true);
expect("Date|obj: cover same Date", mod.coverDateObj(new Date(0), new Date(0)), true);
expect("Date|obj: stamp object equal", mod.equalDateObj({ timestamp: 5 }, { timestamp: 5 }), true);
expect("Date|obj: stamp object not equal", mod.equalDateObj({ timestamp: 5 }, { timestamp: 9 }), false);
expect("Bytes|obj: same bytes equal", mod.equalBytesObj(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3])), true);
expect("RegExp|obj: identical regexp equal", mod.equalRegExpObj(/a/g, /a/g), true);

// Controls: native alone and object alone are unchanged.
expect("control Date: equal", mod.equalDate(new Date(0), new Date(0)), true);
expect("control Date: not equal", mod.equalDate(new Date(0), new Date(5000)), false);
expect("control Stamp: equal", mod.equalStamp({ timestamp: 5 }, { timestamp: 5 }), true);
expect("control Stamp: not equal", mod.equalStamp({ timestamp: 5 }, { timestamp: 9 }), false);
`
