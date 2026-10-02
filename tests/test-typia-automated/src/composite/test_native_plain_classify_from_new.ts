import typia from "typia";

// from: private constructor + static factory returning the instance
class Point {
  private constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}
  static from(seed: { x: number; y: number }): Point {
    return new Point(seed.x, seed.y);
  }
  sum(): number {
    return this.x + this.y;
  }
}

// new: single-argument public constructor
class Box {
  value!: number;
  label!: string;
  constructor(seed: { value: number; label: string }) {
    this.value = seed.value;
    this.label = seed.label;
  }
  describe(): string {
    return this.label + ":" + this.value;
  }
}

// new with an inherited single-argument constructor
class HttpError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

// rest-only constructor -> the seed is the rest ELEMENT (number)
class Bag {
  items: number[];
  constructor(...items: number[]) {
    this.items = items;
  }
}

// instance form -> field copy (regression: stays Object.create)
class Plain {
  id!: number;
  name!: string;
  greet(): string {
    return "hi " + this.name;
  }
}

// self-referential SEED: the constructor seed contains the class itself. The
// top is built via new Tree(seed); a nested Tree inside the seed is field-copied
// (the Classifiable contract method-strips a nested class in a seed). Codegen
// must terminate.
class Tree {
  value!: number;
  children!: Tree[];
  constructor(seed: { value: number; children: Tree[] }) {
    this.value = seed.value;
    this.children = seed.children;
  }
}

// any-seed factory: a static from(json: any) must FALL TO field-copy (the
// any seed collapses the factory arm, matching ClassifiableSeedValue), so
// J.from must NOT be called at runtime.
class J {
  id!: number;
  static fromCalled = false;
  static from(json: any): J {
    J.fromCalled = true;
    const j = new J();
    j.id = json.id;
    return j;
  }
}

const fromPoint = typia.plain.createClassify<typeof Point>();
const newBox = typia.plain.createClassify<typeof Box>();
const newError = typia.plain.createClassify<typeof HttpError>();
const restBag = typia.plain.createClassify<typeof Bag>();
const fieldPlain = typia.plain.createClassify<Plain>();
const buildTree = typia.plain.createClassify<typeof Tree>();
const classifyJ = typia.plain.createClassify<typeof J>();
// assert/validate against a class TYPE must validate the SEED, not typeof C's
// static members (the validation_type redirect).
const assertPoint = typia.plain.createAssertClassify<typeof Point>();
const validatePoint = typia.plain.createValidateClassify<typeof Point>();

/**
 * Verifies classify selects from, constructor and field-copy strategies.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify selects from, constructor and field-copy strategies; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Static factory, seed constructor, inherited Error constructor, rest-only constructor, recursive Tree, field-copy instance and any-seed fallback retain exact original values; malformed Point seeds reject in assert and validate.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_from_new in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs and resets its owned J.fromCalled observation; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_from_new_transform_test.go runtime inputs and assertions execute here unchanged in meaning. The unrelated temporary CommonJS helper stubs are replaced by the actual installed typia helpers.
 */
export const test_native_plain_classify_from_new = (): void => {
  J.fromCalled = false;
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // (1) static factory: C.from(seed) -> real instance + method
  const point = fromPoint({ x: 1, y: 2 });
  assert(point instanceof Point, "point should be a Point instance");
  assert(
    point.sum() === 3,
    "Point.from seed should reconstruct (sum), got: " + point.sum(),
  );

  // (2) single-arg constructor: new C(seed)
  const box = newBox({ value: 5, label: "a" });
  assert(box instanceof Box, "box should be a Box instance");
  assert(
    box.describe() === "a:5",
    "new Box(seed) should reconstruct, got: " + box.describe(),
  );

  // (3) inherited single-arg constructor
  const err = newError("boom");
  assert(err instanceof HttpError, "err should be an HttpError instance");
  assert(err instanceof Error, "HttpError should still be an Error");
  assert(
    err.message === "boom",
    "inherited ctor should pass the seed, got: " + err.message,
  );

  // (4) rest-only constructor: seed is the element
  const bag = restBag(7);
  assert(bag instanceof Bag, "bag should be a Bag instance");
  assert(
    Array.isArray(bag.items) && bag.items[0]! === 7,
    "rest seed should reconstruct, got: " + JSON.stringify(bag.items),
  );

  // (5) instance form -> field copy (regression)
  const plain = fieldPlain({ id: 1, name: "Kim" });
  assert(
    plain instanceof Plain,
    "plain should be a Plain instance (field copy)",
  );
  assert(
    plain.greet() === "hi Kim",
    "instance field-copy prototype method should work",
  );

  // (6) self-referential seed terminates: top via new, nested via field copy
  const tree = buildTree({ value: 1, children: [{ value: 2, children: [] }] });
  assert(tree instanceof Tree, "tree should be a Tree instance (new)");
  assert(
    tree.children[0]! instanceof Tree,
    "nested tree should be a Tree (field copy)",
  );
  assert(
    tree.children[0]!.value === 2,
    "nested tree value should be preserved",
  );

  // (7) assertClassify<typeof Point> validates the SEED (not typeof C statics)
  assert(
    assertPoint({ x: 1, y: 2 }) instanceof Point,
    "assertPoint valid seed -> Point",
  );
  let threw = false;
  try {
    assertPoint({ x: "no", y: 2 });
  } catch (e) {
    threw = true;
  }
  assert(threw, "assertPoint should throw on an invalid seed");

  // (8) validateClassify<typeof Point> validates the SEED
  const ok = validatePoint({ x: 3, y: 4 });
  assert(ok.success === true, "validatePoint should succeed on a valid seed");
  assert(
    ok.data instanceof Point,
    "validatePoint data should be a Point instance",
  );
  const bad = validatePoint({ x: "no", y: 4 });
  assert(bad.success === false, "validatePoint should fail on an invalid seed");
  assert(
    Array.isArray(bad.errors) && bad.errors.length > 0,
    "validatePoint failure should populate errors",
  );

  // (9) any-seed from falls to field copy: J.from must NOT be called
  const j = classifyJ({ id: 9 });
  assert(j instanceof J, "j should be a J instance (field copy)");
  assert(j.id === 9, "j.id should be field-copied, got: " + j.id);
  assert(
    J.fromCalled === false,
    "any-seed from must fall to field-copy, not call J.from",
  );
};
