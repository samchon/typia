import typia from "typia";

class Item {
  sku!: string;
  qty!: number;
  label(): string {
    return this.sku + "x" + this.qty;
  }
}

// from/new: a single-arg constructor whose seed carries a Set, a Map of classes,
// and an array of classes.
class Cart {
  items!: Item[];
  tags!: string[];
  byId!: Map<string, Item>;
  constructor(seed: {
    items: Item[];
    tags: Set<string>;
    byId: Map<string, Item>;
  }) {
    this.items = seed.items;
    this.tags = [...seed.tags];
    this.byId = seed.byId;
  }
  size(): number {
    return this.items.length;
  }
}

const buildCart = typia.plain.createClassify<typeof Cart>();

/**
 * Verifies classify rebuilds array, Set and Map constructor seeds.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify rebuilds array, Set and Map constructor seeds; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Two Item elements, two Set members and a Map class value retain their contents and instance methods; the Cart constructor sees reconstructed containers.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_container_seed in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_container_seed_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_container_seed = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // the Set and Map seeds are passed in their JSON-friendly array form
  const cart = buildCart({
    items: [
      { sku: "a", qty: 2 },
      { sku: "b", qty: 5 },
    ],
    tags: ["x", "y"],
    byId: [["a", { sku: "a", qty: 2 }]],
  });

  assert(cart instanceof Cart, "cart should be a Cart instance");
  assert(cart.size() === 2, "Cart method should work, got: " + cart.size());
  assert(
    cart.items[0]! instanceof Item,
    "array-of-classes seed element should be an Item",
  );
  assert(
    cart.items[1]!.label() === "bx5",
    "array-of-classes element method should work",
  );
  assert(
    Array.isArray(cart.tags) && cart.tags.length === 2,
    "Set seed should decode to its members",
  );
  assert(cart.byId instanceof Map, "Map seed should decode to a real Map");
  const got = cart.byId.get("a");
  assert(
    got instanceof Item,
    "Map-of-classes value should be an Item instance",
  );
  assert(
    got.label() === "ax2",
    "Map value (a class) method should work, got: " + (got && got.label()),
  );
};
