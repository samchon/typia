package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyDeepNestedTransform verifies constructor and field-copy strategies in nested class graphs.
//
// A constructor-form class consumes its seed through construction while instance-form classes require field copying onto their prototypes; nesting must retain those distinct strategies.
//
// 1. The graph nests class and container values and combines constructor and field-copy forms; these assertions own strategy presence rather than runtime nested instances.
// 2. The output contains new Forest and Object.create, retaining both reconstruction strategies in the nested fixture.
//
// @evidence contracts/testing.md#behavioral-verification The output contains new Forest and Object.create, retaining both reconstruction strategies in the nested fixture.
// @evidence contracts/testing.md#independent-expectations A constructor-form class consumes its seed through construction while instance-form classes require field copying onto their prototypes; nesting must retain those distinct strategies.
// @evidence contracts/testing.md#distinguishing-cases The graph nests class and container values and combines constructor and field-copy forms; these assertions own strategy presence rather than runtime nested instances.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyDeepNestedTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyDeepNestedTransform(t *testing.T) {
  project := plainClassifyDeepNestedProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify deep-nested transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "new Forest(") {
    t.Fatalf("the from/new form should emit new Forest(seed):\n%s", out)
  }
  if !strings.Contains(out, "Object.create") {
    t.Fatalf("the field-copy form should emit Object.create:\n%s", out)
  }
}

func plainClassifyDeepNestedProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-deep-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyDeepNestedSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const plainClassifyDeepNestedSource = `import typia from "typia";

export class Leaf {
  tag!: string;
  weight!: number;
  describe(): string {
    return this.tag + ":" + this.weight;
  }
}

export class Branch {
  name!: string;
  leaves!: Leaf[]; // array of classes
  children!: Branch[]; // recursive class array
  best?: Leaf; // optional class member
  total(): number {
    return this.leaves.reduce((s, l) => s + l.weight, 0);
  }
}

// from/new: built via a single-arg constructor whose seed is a deep class graph.
export class Forest {
  root!: Branch;
  registry!: Branch[];
  constructor(seed: { root: Branch; registry: Branch[] }) {
    this.root = seed.root;
    this.registry = seed.registry;
  }
  size(): number {
    return this.registry.length;
  }
}

export const buildForest = typia.plain.createClassify<typeof Forest>();
export const classifyBranch = typia.plain.createClassify<Branch>();
`
