import typia from "typia";

class Leaf {
  tag!: string;
  weight!: number;
  describe(): string {
    return this.tag + ":" + this.weight;
  }
}

class Branch {
  name!: string;
  leaves!: Leaf[]; // array of classes
  children!: Branch[]; // recursive class array
  best?: Leaf; // optional class member
  total(): number {
    return this.leaves.reduce((s, l) => s + l.weight, 0);
  }
}

// from/new: built via a single-arg constructor whose seed is a deep class graph.
class Forest {
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

const buildForest = typia.plain.createClassify<typeof Forest>();
const classifyBranch = typia.plain.createClassify<Branch>();

/**
 * Verifies classify rebuilds recursive nested class graphs.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify rebuilds recursive nested class graphs; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Three Branch levels, Leaf arrays, optional best, registry and independent field-copy root exercise recursive allocation and optional reconstruction.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_deep_nested in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_deep_nested_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_deep_nested = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
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
  const forest = buildForest(data);
  assert(forest instanceof Forest, "forest should be a Forest instance");
  assert(forest.size() === 1, "Forest method should work");
  assert(forest.root instanceof Branch, "root should be a Branch");
  assert(
    forest.root.total() === 3,
    "Branch.total method should work, got: " + forest.root.total(),
  );
  assert(
    forest.root.leaves[0]! instanceof Leaf,
    "root.leaves[0]! should be a Leaf",
  );
  assert(
    forest.root.leaves[0]!.describe() === "a:1",
    "Leaf method should work",
  );
  assert(
    forest.root.children[0]! instanceof Branch,
    "child should be a Branch",
  );
  assert(
    forest.root.children[0]!.leaves[0]! instanceof Leaf,
    "child leaf should be a Leaf",
  );
  assert(
    forest.root.children[0]!.best instanceof Leaf,
    "optional best should be a Leaf",
  );
  assert(
    forest.root.children[0]!.best.describe() === "z:5",
    "optional Leaf method should work",
  );
  assert(
    forest.root.children[0]!.children[0]! instanceof Branch,
    "grandchild should be a Branch (3 levels deep)",
  );
  assert(
    forest.root.children[0]!.children[0]!.leaves[0]!.describe() === "deep:4",
    "deepest leaf should reconstruct",
  );
  assert(
    forest.registry[0]! instanceof Branch,
    "registry entry should be a Branch",
  );

  // (2) field-copy deep recursive instance form: classify<Branch>
  const branch = classifyBranch({
    name: "fc",
    leaves: [{ tag: "p", weight: 7 }],
    children: [
      { name: "fc-child", leaves: [{ tag: "q", weight: 8 }], children: [] },
    ],
  });
  assert(branch instanceof Branch, "field-copy branch should be a Branch");
  assert(branch.leaves[0]! instanceof Leaf, "field-copy nested Leaf");
  assert(branch.children[0]! instanceof Branch, "field-copy recursive Branch");
  assert(
    branch.children[0]!.leaves[0]!.describe() === "q:8",
    "field-copy deepest leaf method",
  );
};
