import typia from "typia";

// A RECURSIVE anonymous object type alias — no runtime value, IsLiteral() is
// false because it is recursive, so classify must still field-copy a plain {}.
type Rec = { value: number; self: Rec | null };

const build = typia.plain.createClassify<Rec>();

/**
 * Verifies classify copies recursive anonymous objects without an unbound
 * constructor.
 *
 * A type without a reachable runtime constructor must copy its fields without
 * referencing the compiler-internal type name. Executing the reconstructed
 * result detects an unbound name that emitted helper inspection would miss.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify copies recursive anonymous objects without an unbound constructor; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seed field values and null termination establish the result independently; this case checks plain field contents and absence of an unbound-name exception, without claiming a class-prototype identity assertion.
 * @evidence contracts/testing.md#distinguishing-cases Two recursive values and null termination retain every authored field without a ReferenceError for an internal anonymous type name.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_recursive_anonymous in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_strategy_edges_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_recursive_anonymous = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // must NOT throw "ReferenceError: __type is not defined"
  const r = build({ value: 1, self: { value: 2, self: null } });
  assert(
    r && r.value === 1,
    "recursive anonymous object should field-copy, got: " + JSON.stringify(r),
  );
  assert(
    r.self && r.self.value === 2 && r.self.self === null,
    "nested recursion should field-copy",
  );
};
