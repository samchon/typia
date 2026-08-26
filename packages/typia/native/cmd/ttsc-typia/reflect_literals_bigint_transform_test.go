package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestReflectLiteralsBigintTransform verifies a bigint member comes back as a
// bigint, exactly.
//
// typescript-go hands a bigint literal back as a `jsnum.PseudoBigInt`, a struct
// in an internal package the shim does not re-export. Nothing downstream could
// name that type, so `LiteralFactory` reflected its fields and emitted
// `{ base10Value: "2", negative: false }` where `literals<2n>(): 2n[]` promises
// a bigint. Normalizing the constant to `*big.Int` at the metadata boundary
// gives every consumer a nameable exact value.
//
// Magnitude is the part a happy-path case would miss. A bigint exists precisely
// to hold what a `number` cannot, so the emit is only correct if it survives
// past 2**53.
//
//  1. Transform a module whose `reflect.literals` arguments span a bigint union,
//     a bigint mixed with other literal kinds, and magnitudes on both sides of
//     the double-precision limit including the int64 bounds.
//  2. Execute the emitted CommonJS.
//  3. Assert every member is `typeof "bigint"` and equal to the literal the
//     source declared, digit for digit.
func TestReflectLiteralsBigintTransform(t *testing.T) {
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "reflect-literals-bigint-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(reflectLiteralsBigintSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  ttscTypiaTestTypecheck(t, dir)

  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("reflect.literals bigint transform failed: code=%d stderr=\n%s", code, errText)
  }

  runtimeDir := filepath.Join(dir, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, out)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(reflectLiteralsBigintRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("reflect.literals bigint runtime cases failed: %v\n%s", err, output)
  }
}

const reflectLiteralsBigintSource = `import typia from "typia";

export const small = typia.reflect.literals<1n | 2n>();
export const mixed = typia.reflect.literals<"A" | "B" | 1 | 2n>();
export const negative = typia.reflect.literals<-5n | 5n>();
export const zero = typia.reflect.literals<0n>();

// 2**53 + 1 is the smallest integer a double cannot hold, and the int64 bounds
// are where a rounded literal would land on the wrong side of the range.
export const unsafe = typia.reflect.literals<9007199254740993n>();
export const int64 = typia.reflect.literals<-9223372036854775808n | 9223372036854775807n>();
`

const reflectLiteralsBigintRunner = `const mod = require("./main.cjs");

const render = (value) =>
  typeof value === "bigint" ? value.toString() + "n" : JSON.stringify(value);

const check = (label, actual, expected) => {
  if (Array.isArray(actual) === false) {
    throw new Error(label + ": expected an array, got " + render(actual));
  }
  if (actual.length !== expected.length) {
    throw new Error(
      label +
        ": expected " +
        expected.map(render).join(", ") +
        ", got " +
        actual.map(render).join(", "),
    );
  }
  actual.forEach((item, index) => {
    // typeof is asserted separately: a rounded BigInt(9007199254740993) is
    // still a bigint, and an object literal is still deep-equal to nothing, so
    // neither check alone catches both defects.
    if (typeof item !== typeof expected[index]) {
      throw new Error(
        label + "[" + index + "]: expected typeof " + typeof expected[index] +
          ", got " + typeof item + " (" + render(item) + ")",
      );
    }
    if (item !== expected[index]) {
      throw new Error(
        label + "[" + index + "]: expected " + render(expected[index]) +
          ", got " + render(item),
      );
    }
  });
};

check("small", mod.small, [1n, 2n]);
check("mixed", mod.mixed, ["A", "B", 1, 2n]);
check("negative", mod.negative, [-5n, 5n]);
check("zero", mod.zero, [0n]);
check("unsafe", mod.unsafe, [9007199254740993n]);
check("int64", mod.int64, [-9223372036854775808n, 9223372036854775807n]);

console.log("ok");
`
