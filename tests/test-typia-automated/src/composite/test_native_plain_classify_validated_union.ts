import typia from "typia";

// from-strategy member, seed { a }
class Ann {
  a!: number;
  private constructor(a: number) {
    this.a = a;
  }
  static from(seed: { a: number }): Ann {
    return new Ann(seed.a);
  }
  tag(): string {
    return "ann:" + this.a;
  }
}

// new-strategy member, seed { b }
class Bob {
  b!: string;
  constructor(seed: { b: string }) {
    this.b = seed.b;
  }
  tag(): string {
    return "bob:" + this.b;
  }
}

// new-strategy member, seed { c } — distinct required key
class Cal {
  c!: boolean;
  constructor(seed: { c: boolean }) {
    this.c = seed.c;
  }
  tag(): string {
    return "cal:" + this.c;
  }
}

const assertShape = typia.plain.createAssertClassify<
  typeof Ann | typeof Bob | typeof Cal | number
>();
const validateShape = typia.plain.createValidateClassify<
  typeof Ann | typeof Bob | typeof Cal
>();

/**
 * Verifies validated classify uses its own class-union construction helpers.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification validated classify uses its own class-union construction helpers; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Ann, Bob and Cal seeds select distinct from/new classes and methods, interleaved number survives assertion, and validate returns the Bob instance; malformed Ann and Bob seeds reject in assert and validate.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_validated_union in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_validated_union_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_validated_union = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // assertClassify discriminates each member of the validated union and builds the
  // RIGHT class — its construction ladder must use its own _yi helpers, not the
  // assert side's (possibly reordered) _io helpers.
  const an = assertShape({ a: 1 });
  assert(
    an instanceof Ann,
    "seed {a} -> Ann (from), got: " +
      (an && an.constructor && an.constructor.name),
  );
  assert(an.tag() === "ann:1", "Ann.from reconstruct, got: " + an.tag());

  const bo = assertShape({ b: "x" });
  assert(
    bo instanceof Bob,
    "seed {b} -> Bob (new), got: " +
      (bo && bo.constructor && bo.constructor.name),
  );
  assert(bo.tag() === "bob:x", "new Bob reconstruct");

  const ca = assertShape({ c: true });
  assert(
    ca instanceof Cal,
    "seed {c} -> Cal (new), got: " +
      (ca && ca.constructor && ca.constructor.name),
  );
  assert(ca.tag() === "cal:true", "new Cal reconstruct");

  // the interleaved primitive passes through unchanged
  assert(
    assertShape(42) === 42,
    "a number must pass through the assert union unchanged",
  );

  // validateClassify of the same union returns success and the right instance
  const r = validateShape({ b: "y" });
  assert(
    r.success === true,
    "validateClassify should succeed on a valid seed, got: " +
      JSON.stringify(r.success ? undefined : r.errors),
  );
  assert(
    r.data instanceof Bob,
    "validateClassify should build the Bob instance",
  );
  assert(r.data.tag() === "bob:y", "validateClassify reconstruct");

  let rejected = false;
  try {
    assertShape({ a: "invalid" });
  } catch {
    rejected = true;
  }
  assert(rejected, "assertShape must reject malformed Ann seed");
  assert(
    validateShape({ b: 1 }).success === false,
    "validateShape must reject malformed Bob seed",
  );
};
