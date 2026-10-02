import typia from "typia";

// Two discriminable classes (by `kind`) that SHARE a nested object-union
// payload. classify's discrimination of that nested { k1 } | { k2 } union, in the
// VALIDATED path, must use its own _yi helpers — the assert side analyzes the
// seeds through GetUnionType (which dedups the shared payload), so an _i index
// would diverge.
class Holder {
  kind!: "holder";
  payload!: { k1: string } | { k2: number };
  constructor(seed: {
    kind: "holder";
    payload: { k1: string } | { k2: number };
  }) {
    this.kind = seed.kind;
    this.payload = seed.payload;
  }
  describe(): string {
    return "holder:" + JSON.stringify(this.payload);
  }
}
class Twin {
  kind!: "twin";
  payload!: { k1: string } | { k2: number };
  constructor(seed: {
    kind: "twin";
    payload: { k1: string } | { k2: number };
  }) {
    this.kind = seed.kind;
    this.payload = seed.payload;
  }
  describe(): string {
    return "twin:" + JSON.stringify(this.payload);
  }
}

const assertShape = typia.plain.createAssertClassify<
  typeof Holder | typeof Twin
>();
const validateShape = typia.plain.createValidateClassify<
  typeof Holder | typeof Twin
>();

/**
 * Verifies validated classify handles shared nested object-union payloads.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification validated classify handles shared nested object-union payloads; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Holder and Twin discriminants with k1 and k2 payload arms retain exact serialized method results and successful validated Holder identity; wrong k1 and k2 values reject in assert and validate.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_nested_validated_union in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_validated_union_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_nested_validated_union = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // nested object-union discrimination must not ReferenceError and builds the right class
  const h = assertShape({ kind: "holder", payload: { k1: "x" } });
  assert(
    h instanceof Holder,
    "kind holder -> Holder, got: " + (h && h.constructor && h.constructor.name),
  );
  assert(
    h.describe() === 'holder:{"k1":"x"}',
    "Holder payload k1, got: " + h.describe(),
  );

  const tw = assertShape({ kind: "twin", payload: { k2: 5 } });
  assert(
    tw instanceof Twin,
    "kind twin -> Twin, got: " + (tw && tw.constructor && tw.constructor.name),
  );
  assert(
    tw.describe() === 'twin:{"k2":5}',
    "Twin payload k2, got: " + tw.describe(),
  );

  const r = validateShape({ kind: "holder", payload: { k2: 9 } });
  assert(
    r.success === true,
    "validateClassify success, got: " +
      JSON.stringify(r.success ? undefined : r.errors),
  );
  assert(
    r.data instanceof Holder && r.data.describe() === 'holder:{"k2":9}',
    "validate builds Holder with k2 payload",
  );

  let rejected = false;
  try {
    assertShape({ kind: "holder", payload: { k1: 1 } });
  } catch {
    rejected = true;
  }
  assert(rejected, "assertShape must reject malformed nested payload");
  assert(
    validateShape({ kind: "twin", payload: { k2: "invalid" } }).success ===
      false,
    "validateShape must reject malformed twin payload",
  );
};
