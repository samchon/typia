package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyContainerSeedTransform verifies constructor selection for container-valued seeds.
//
// A class supplied by constructor form uses its supported seed constructor; container properties remain part of that seed type rather than turning the outer class into a plain object.
//
// 1. A constructor-bearing class includes nested container values; recursive container value behavior is owned by the deep-nested classification case.
// 2. The emitted classify wrapper constructs Cart with new Cart rather than omitting its declared reconstruction strategy.
//
// @evidence contracts/testing.md#behavioral-verification The emitted classify wrapper constructs Cart with new Cart rather than omitting its declared reconstruction strategy.
// @evidence contracts/testing.md#independent-expectations A class supplied by constructor form uses its supported seed constructor; container properties remain part of that seed type rather than turning the outer class into a plain object.
// @evidence contracts/testing.md#distinguishing-cases A constructor-bearing class includes nested container values; recursive container value behavior is owned by the deep-nested classification case.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyContainerSeedTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyContainerSeedTransform(t *testing.T) {
  project := plainClassifyContainerProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify container-seed transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "new Cart(") {
    t.Fatalf("the from/new form should emit new Cart(seed):\n%s", out)
  }
}

func plainClassifyContainerProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "plain-classify-container-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFromNewTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyContainerSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const plainClassifyContainerSource = `import typia from "typia";

export class Item {
  sku!: string;
  qty!: number;
  label(): string {
    return this.sku + "x" + this.qty;
  }
}

// from/new: a single-arg constructor whose seed carries a Set, a Map of classes,
// and an array of classes.
export class Cart {
  items!: Item[];
  tags!: string[];
  byId!: Map<string, Item>;
  constructor(seed: { items: Item[]; tags: Set<string>; byId: Map<string, Item> }) {
    this.items = seed.items;
    this.tags = [...seed.tags];
    this.byId = seed.byId;
  }
  size(): number {
    return this.items.length;
  }
}

export const buildCart = typia.plain.createClassify<typeof Cart>();
`
