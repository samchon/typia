import typia from "typia";

// ABSTRACT class: typeof Shape has only an `abstract new` signature, which is
// not runtime-newable, so classify must FIELD-COPY the instance shape.
abstract class Shape {
  kind!: string;
  describe(): string {
    return "shape:" + this.kind;
  }
}

// TUPLE-rest constructor: the seed is the FIRST tuple element { a; b }.
class Pair {
  a!: number;
  b!: number;
  constructor(...args: [{ a: number; b: number }, number?]) {
    this.a = args[0]!.a;
    this.b = args[0]!.b;
  }
  sum(): number {
    return this.a + this.b;
  }
}

const buildShape = typia.plain.createClassify<typeof Shape>();
const buildPair = typia.plain.createClassify<typeof Pair>();

/**
 * Verifies classify handles abstract classes and tuple-rest constructor seeds.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify handles abstract classes and tuple-rest constructor seeds; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Abstract Shape field-copy preserves its method without constructing an abstract class; Pair tuple-rest uses the first tuple element and reconstructs sum 7.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_strategy_edges in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_strategy_edges_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_strategy_edges = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // abstract class field-copies into a real instance with a working prototype method
  const sh = buildShape({ kind: "circle" });
  assert(
    sh instanceof Shape,
    "abstract class should field-copy into a Shape instance",
  );
  assert(
    sh.describe() === "shape:circle",
    "abstract class prototype method should work, got: " + sh.describe(),
  );

  // tuple-rest ctor builds via new with the first tuple element as the seed
  const pr = buildPair({ a: 3, b: 4 });
  assert(pr instanceof Pair, "tuple-rest ctor should build a Pair instance");
  assert(
    pr.sum() === 7,
    "tuple-rest construction should reconstruct, got: " + pr.sum(),
  );
};
