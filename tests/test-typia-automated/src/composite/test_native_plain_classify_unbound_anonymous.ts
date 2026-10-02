import typia from "typia";

// An anonymous class expression with NO enclosing const binding (returned from a
// factory). Its binder-internal name is not a usable runtime binding, so classify
// must field-copy a plain {} rather than reference that unbound name.
const factory = () =>
  class {
    x!: number;
    label(): string {
      return "x=" + this.x;
    }
  };
type Widget = InstanceType<ReturnType<typeof factory>>;

const build = typia.plain.createClassify<Widget>();

/**
 * Verifies classify copies an anonymous class without a runtime binding.
 *
 * A type without a reachable runtime constructor must copy its fields without
 * referencing the compiler-internal type name. Executing the reconstructed
 * result detects an unbound name that emitted helper inspection would miss.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify copies an anonymous class without a runtime binding; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seed x5 establishes the result independently; this case checks field content and absence of an unbound-name exception, without asserting a particular result prototype or class identity.
 * @evidence contracts/testing.md#distinguishing-cases The factory-returned class has no reachable constructor binding; the input x value 5 survives plain field-copy without an internal-class ReferenceError.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_unbound_anonymous in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_strategy_edges_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_unbound_anonymous = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // must NOT throw "ReferenceError: __class is not defined"; field-copies the data
  const w = build({ x: 5 });
  assert(
    w && w.x === 5,
    "unbound anonymous class should field-copy its data, got: " +
      JSON.stringify(w),
  );
};
