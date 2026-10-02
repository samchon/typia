package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyUnionTransform verifies separate static-factory and constructor strategies in a union.
//
// Each discriminated union arm retains its supported reconstruction contract; choosing a single strategy for the whole union would reconstruct another arm incorrectly.
//
// 1. A Circle factory arm and Square constructor arm share one union, pinning both generated strategies.
// 2. The output contains a .from call and new Square.
//
// @evidence contracts/testing.md#behavioral-verification The output contains a .from call and new Square.
// @evidence contracts/testing.md#independent-expectations Each discriminated union arm retains its supported reconstruction contract; choosing a single strategy for the whole union would reconstruct another arm incorrectly.
// @evidence contracts/testing.md#distinguishing-cases A Circle factory arm and Square constructor arm share one union, pinning both generated strategies.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyUnionTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyUnionTransform(t *testing.T) {
  project := plainClassifyUnionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, ".from(") {
    t.Fatalf("the union should construct the `from` member via Circle.from(seed):\n%s", out)
  }
  if !strings.Contains(out, "new Square(") {
    t.Fatalf("the union should construct the `new` member via new Square(seed):\n%s", out)
  }
}

func plainClassifyUnionProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "plain-classify-union-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFromNewTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const plainClassifyUnionSource = `import typia from "typia";

// from-strategy member (private ctor + static factory), seed { r }
export class Circle {
  r!: number;
  private constructor(r: number) {
    this.r = r;
  }
  static from(seed: { r: number }): Circle {
    return new Circle(seed.r);
  }
  area(): number {
    return 3 * this.r * this.r;
  }
}

// new-strategy member, seed { side } — a distinct required key discriminates it
export class Square {
  side!: number;
  constructor(seed: { side: number }) {
    this.side = seed.side;
  }
  area(): number {
    return this.side * this.side;
  }
}

export const buildShape = typia.plain.createClassify<typeof Circle | typeof Square>();
export const buildShapeOrNum = typia.plain.createClassify<typeof Circle | number>();
export const assertShape = typia.plain.createAssertClassify<typeof Circle | typeof Square>();
`
