package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyContainerSeedTransform exercises a from/new construction
// whose SEED carries containers — a Set, a Map whose values are themselves
// classes, and an array of classes. The Classifiable contract accepts the
// JSON-friendly array form of a Set/Map seed, and the decode must rebuild a real
// Set/Map with the nested classes reconstructed as instances before the seed is
// passed to the constructor.
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
  plainClassifyContainerRun(t, project, out)
}

func plainClassifyContainerProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-container-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyContainerSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainClassifyContainerRun(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(plainClassifyContainerRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify container-seed runtime cases failed: %v\n%s", err, output)
  }
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

const plainClassifyContainerRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// the Set and Map seeds are passed in their JSON-friendly array form
const cart = mod.buildCart({
  items: [
    { sku: "a", qty: 2 },
    { sku: "b", qty: 5 },
  ],
  tags: ["x", "y"],
  byId: [["a", { sku: "a", qty: 2 }]],
});

assert(cart instanceof mod.Cart, "cart should be a Cart instance");
assert(cart.size() === 2, "Cart method should work, got: " + cart.size());
assert(cart.items[0] instanceof mod.Item, "array-of-classes seed element should be an Item");
assert(cart.items[1].label() === "bx5", "array-of-classes element method should work");
assert(Array.isArray(cart.tags) && cart.tags.length === 2, "Set seed should decode to its members");
assert(cart.byId instanceof Map, "Map seed should decode to a real Map");
const got = cart.byId.get("a");
assert(got instanceof mod.Item, "Map-of-classes value should be an Item instance");
assert(got.label() === "ax2", "Map value (a class) method should work, got: " + (got && got.label()));
`
