package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestBigintLiteralPrecisionTransform verifies a bigint literal reaches the
// emit exactly, at any magnitude.
//
// `ExpressionFactory.Bigint` spelled its argument as a bare number literal, so
// `9007199254740993n` was emitted as `BigInt(9007199254740993)` and JavaScript
// rounded that literal to 9007199254740992 before `BigInt` ever parsed it. The
// validator it built therefore accepted the wrong value: `is<9007199254740993n>`
// returned true for 9007199254740992n and false for the literal it was asked
// about. The repository already spells this hazard out for the two places that
// avoided it -- `numericRangeFactory_bigint_literal` and `_isTypeInt64Bigint` --
// and this factory is the one that did not.
//
// The factory feeds every bigint the transform emits, so the case sweeps the
// operations that reach it rather than `is` alone.
//
//  1. Build validators over bigint literals past 2**53 and at the int64 bounds.
//  2. Require the emitted code to pass the digits as a string, never as a
//     number literal that rounds before `BigInt` sees it.
//  3. Execute them and assert each accepts its own literal and rejects the
//     adjacent value a rounded literal would have collapsed onto.
func TestBigintLiteralPrecisionTransform(t *testing.T) {
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "bigint-precision-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(bigintLiteralPrecisionSource), 0o644); err != nil {
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
    t.Fatalf("bigint precision transform failed: code=%d stderr=\n%s", code, errText)
  }
  // A number-literal argument is the defect itself, so reject the spelling as
  // well as the behavior: an emit that reads `BigInt(9007199254740993)` has
  // already lost the value even where a later comparison happens to agree.
  if strings.Contains(out, "BigInt(9007199254740993)") {
    t.Fatalf("bigint literal must be passed as a string, not a number literal:\n%s", out)
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
  if err := os.WriteFile(runner, []byte(bigintLiteralPrecisionRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("bigint precision runtime cases failed: %v\n%s", err, output)
  }
}

const bigintLiteralPrecisionSource = `import typia from "typia";

// 2**53 + 1 is the smallest integer a double cannot represent; rounding it
// lands on 2**53, the value each validator below must reject.
export const isUnsafe = typia.createIs<9007199254740993n>();
export const isInt64Max = typia.createIs<9223372036854775807n>();
export const isInt64Min = typia.createIs<-9223372036854775808n>();
export const isUnion = typia.createIs<9007199254740993n | 9007199254740995n>();
export const isSafe = typia.createIs<2n>();
`

const bigintLiteralPrecisionRunner = `const mod = require("./main.cjs");

const check = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

// Each literal is accepted, and the neighbor a rounded emit would have
// collapsed it onto is rejected.
check("isUnsafe(exact)", mod.isUnsafe(9007199254740993n), true);
check("isUnsafe(rounded)", mod.isUnsafe(9007199254740992n), false);
check("isInt64Max(exact)", mod.isInt64Max(9223372036854775807n), true);
check("isInt64Max(rounded)", mod.isInt64Max(9223372036854775808n), false);
check("isInt64Min(exact)", mod.isInt64Min(-9223372036854775808n), true);
check("isInt64Min(neighbor)", mod.isInt64Min(-9223372036854775807n), false);
check("isUnion(first)", mod.isUnion(9007199254740993n), true);
check("isUnion(second)", mod.isUnion(9007199254740995n), true);
check("isUnion(between)", mod.isUnion(9007199254740994n), false);
check("isUnion(rounded)", mod.isUnion(9007199254740992n), false);

// A magnitude a double does hold must keep working unchanged.
check("isSafe(exact)", mod.isSafe(2n), true);
check("isSafe(other)", mod.isSafe(3n), false);
check("isSafe(number)", mod.isSafe(2), false);

console.log("ok");
`
