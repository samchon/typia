import typia from "typia";

// from-strategy member (private ctor + static factory), seed { r }
class Circle {
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
class Square {
  side!: number;
  constructor(seed: { side: number }) {
    this.side = seed.side;
  }
  area(): number {
    return this.side * this.side;
  }
}

const buildShape = typia.plain.createClassify<typeof Circle | typeof Square>();
const buildShapeOrNum = typia.plain.createClassify<typeof Circle | number>();
const assertShape = typia.plain.createAssertClassify<
  typeof Circle | typeof Square
>();

/**
 * Verifies classify selects the correct class-union constructor.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify selects the correct class-union constructor; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Circle radius selects from, Square side selects new, primitive 42 passes through unchanged and validated Square reconstructs its area; a malformed side seed must throw.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_union in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_union_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_union = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // (1) discriminate the union: seed { r } builds the from-member Circle
  const c = buildShape({ r: 2 });
  assert(
    c instanceof Circle,
    "seed {r} should build a Circle (from), got: " +
      (c && c.constructor && c.constructor.name),
  );
  assert(
    c.area() === 12,
    "Circle.from seed should reconstruct (area), got: " + c.area(),
  );

  // (2) seed { side } builds the new-member Square — the RIGHT class is chosen
  const s = buildShape({ side: 3 });
  assert(
    s instanceof Square,
    "seed {side} should build a Square (new), got: " +
      (s && s.constructor && s.constructor.name),
  );
  assert(
    s.area() === 9,
    "new Square seed should reconstruct, got: " + s.area(),
  );

  // (3) mixed typeof Circle | number: the class is built, the number passes through
  const c2 = buildShapeOrNum({ r: 4 });
  assert(
    c2 instanceof Circle,
    "mixed union: object seed should build a Circle",
  );
  assert(
    buildShapeOrNum(42) === 42,
    "mixed union: a number must pass through unchanged",
  );

  // (4) assertClassify of a class union validates the SEED union, not typeof C
  const sq = assertShape({ side: 5 });
  assert(
    sq instanceof Square,
    "assert union: a valid seed must NOT be rejected and builds the right class",
  );
  assert(sq.area() === 25, "assert union reconstruction");

  let rejected = false;
  try {
    assertShape({ side: "invalid" });
  } catch {
    rejected = true;
  }
  assert(rejected, "assertShape must reject a malformed Square seed");
};
