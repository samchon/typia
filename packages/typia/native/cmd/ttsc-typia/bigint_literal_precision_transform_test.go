package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestBigintLiteralPrecisionTransform verifies exact bigint literal construction beyond safe-number precision.
//
// JavaScript Number cannot exactly represent this integer while BigInt of its decimal string can; the authored literal is chosen one above the safe-integer boundary.
//
// 1. Five literal validators cover the first unsafe integer, both signed 64-bit limits, an unsafe literal union and a small safe integer. Each unsafe value must retain its exact decimal text; reflection and schema conversion are not exercised here.
// 2. The output must not pass the unsafe decimal 9007199254740993 as a Number argument to BigInt.
//
// @evidence contracts/testing.md#behavioral-verification The output must not pass the unsafe decimal 9007199254740993 as a Number argument to BigInt.
// @evidence contracts/testing.md#independent-expectations JavaScript Number cannot exactly represent this integer while BigInt of its decimal string can; the authored literal is chosen one above the safe-integer boundary.
// @evidence contracts/testing.md#distinguishing-cases Five literal validators cover the first unsafe integer, both signed 64-bit limits, an unsafe literal union and a small safe integer. Each unsafe value must retain its exact decimal text; reflection and schema conversion are not exercised here.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBigintLiteralPrecisionTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestBigintLiteralPrecisionTransform(t *testing.T) {
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
  for _, decimal := range []string{"9007199254740993", "9223372036854775807", "-9223372036854775808", "9007199254740995", "2"} {
    if !strings.Contains(out, `BigInt("`+decimal+`")`) {
      t.Fatalf("bigint literal %s lost its exact string construction:\n%s", decimal, out)
    }
    if strings.Contains(out, "BigInt("+decimal+")") {
      t.Fatalf("bigint literal %s must not be passed as a number literal:\n%s", decimal, out)
    }
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
