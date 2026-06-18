package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyDeepNestedTransform stresses reconstruction through a deeply
// nested, recursive class graph — for BOTH the from/new construction form
// (new Forest(seed) where the seed is many levels deep) and the field-copy form
// (classify<Branch> on a recursive instance type). Every level must come back as
// a real instance with working prototype methods: nested classes, arrays of
// classes, optional class members, a recursive class array, and a class nested
// inside a seed all the way down.
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
  plainClassifyDeepNestedRun(t, project, out)
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

func plainClassifyDeepNestedRun(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(plainClassifyFromNewRewrite(t, js)), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(plainClassifyDeepNestedRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify deep-nested runtime cases failed: %v\n%s", err, output)
  }
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

const plainClassifyDeepNestedRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

const data = {
  root: {
    name: "r",
    leaves: [
      { tag: "a", weight: 1 },
      { tag: "b", weight: 2 },
    ],
    children: [
      {
        name: "c1",
        leaves: [{ tag: "x", weight: 9 }],
        children: [
          { name: "g1", leaves: [{ tag: "deep", weight: 4 }], children: [] },
        ],
        best: { tag: "z", weight: 5 },
      },
    ],
  },
  registry: [{ name: "reg", leaves: [], children: [] }],
};

// (1) from/new deep seed: new Forest(seed) with the whole graph reconstructed
const forest = mod.buildForest(data);
assert(forest instanceof mod.Forest, "forest should be a Forest instance");
assert(forest.size() === 1, "Forest method should work");
assert(forest.root instanceof mod.Branch, "root should be a Branch");
assert(forest.root.total() === 3, "Branch.total method should work, got: " + forest.root.total());
assert(forest.root.leaves[0] instanceof mod.Leaf, "root.leaves[0] should be a Leaf");
assert(forest.root.leaves[0].describe() === "a:1", "Leaf method should work");
assert(forest.root.children[0] instanceof mod.Branch, "child should be a Branch");
assert(forest.root.children[0].leaves[0] instanceof mod.Leaf, "child leaf should be a Leaf");
assert(forest.root.children[0].best instanceof mod.Leaf, "optional best should be a Leaf");
assert(forest.root.children[0].best.describe() === "z:5", "optional Leaf method should work");
assert(forest.root.children[0].children[0] instanceof mod.Branch, "grandchild should be a Branch (3 levels deep)");
assert(forest.root.children[0].children[0].leaves[0].describe() === "deep:4", "deepest leaf should reconstruct");
assert(forest.registry[0] instanceof mod.Branch, "registry entry should be a Branch");

// (2) field-copy deep recursive instance form: classify<Branch>
const branch = mod.classifyBranch({
  name: "fc",
  leaves: [{ tag: "p", weight: 7 }],
  children: [{ name: "fc-child", leaves: [{ tag: "q", weight: 8 }], children: [] }],
});
assert(branch instanceof mod.Branch, "field-copy branch should be a Branch");
assert(branch.leaves[0] instanceof mod.Leaf, "field-copy nested Leaf");
assert(branch.children[0] instanceof mod.Branch, "field-copy recursive Branch");
assert(branch.children[0].leaves[0].describe() === "q:8", "field-copy deepest leaf method");
`
