import type { Resolved } from "@typia/interface";

import { TestEquality } from "./TestOracleEquality";

/**
 * Captures an ordinary-data clone expectation before invoking its producer.
 *
 * The fixture supplies a finite graph of arrays and ordinary/class data objects
 * with stable enumerable string properties. Native objects, accessors with
 * effects and callable values are outside the active clone matrix's fixture
 * premise. An authored projection can omit undeclared class data. Undefined
 * versus absent record members follow TestEquality's data policy; null and
 * empty containers and numeric zero signs remain distinct. Source references
 * and prototypes must survive, while every returned data object must belong to
 * a new graph.
 *
 * @evidence contracts/common.md#principled-implementation Input properties are captured before the callback, and the authored projection is copied into an independent expectation. Symmetric data equality keeps null and empty containers distinct; source preservation and disjoint source/result object sets separately establish non-mutation and deep-copy ownership under the documented ordinary-data premise.
 * @evidence contracts/common.md#clear-and-simple-design One iterative graph capture owns stable property snapshots, and the returned check owns source preservation, content and reference separation. The ordinary clone scenario and validating wrappers reuse this check rather than inheriting a transport omission comparator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Assertions inspect actual values and references. Fixture names and callback spelling do not affect acceptance; unsupported native/callable graphs fail explicitly instead of silently receiving an ordinary-record comparison.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the fixture premise, projection ownership, undefined/absent policy and three independent clone obligations. It does not claim binary-native or effectful-accessor coverage.
 * @evidence contracts/testing.md#behavioral-verification The returned check rejects original or nested source references, changed/lost projected data and mutation of original keys, values, prototypes or array lengths. Correct independently owned data passes.
 * @evidence contracts/testing.md#independent-expectations Authored input and optional authored projection are observed before the callback. A separate ordinary-data snapshot fixes expected values; no native clone or producer output supplies that expectation.
 * @evidence contracts/testing.md#distinguishing-cases Portable units distinguish identity/shallow/lossy/source-mutating callbacks from deep-copy controls, including empty, nullable, nested, alias and cyclic graph boundaries. Native cases retain actual type-to-producer bindings.
 * @evidence contracts/testing.md#execution-ownership Plugin-free units call the maintained check and complete ordinary clone scenario directly. Native wrappers use the same check while preserving their invalid-input diagnostic responsibilities.
 * @evidence contracts/performance.md#efficient-algorithms Iterative identity-indexed captures and reference walks visit each ordinary node and enumerable edge once. Snapshot storage grows with those nodes and edges; TestEquality separately owns the content comparison and its cycle handling.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Each effectful callback needs its own pre-call input/projection expectations. This check coordinates no equivalent completed or in-flight requests and does not reuse snapshots across mutations.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The returned synchronous check owns only one scenario's snapshots and expected graph until its caller releases it. No historical fixture, host, file or task is retained; callback/check exceptions unwind the scenario's local ownership.
 */
export const prepareClone = (
  input: unknown,
  projection: unknown,
  message: string,
): ((output: unknown) => void) => {
  const source = capture(input, message);
  const expected = Object.is(projection, input)
    ? source.copy
    : capture(projection, message).copy;
  return (output) => {
    for (const [node, snapshot] of source.nodes)
      if (
        Object.getPrototypeOf(node) !== snapshot.prototype ||
        Object.keys(node).length !== snapshot.entries.length ||
        (snapshot.length !== undefined &&
          (node as unknown[]).length !== snapshot.length) ||
        snapshot.entries.some(
          ([key, value]) =>
            !Object.hasOwn(node, key) ||
            !Object.is((node as Record<string, unknown>)[key], value),
        )
      )
        throw new Error(message);
    TestEquality.equals(message, expected, output);
    const pending: unknown[] = [output];
    const visited = new Set<object>();
    while (pending.length) {
      const node = pending.pop();
      if (typeof node === "function") throw new Error(message);
      if (node === null || typeof node !== "object" || visited.has(node))
        continue;
      if (source.nodes.has(node)) throw new Error(message);
      visited.add(node);
      for (const child of Object.values(node)) pending.push(child);
    }
  };
};

/**
 * Executes one authored clean clone scenario with independently owned data.
 *
 * The original currying and failure identity remain intact. Validating wrappers
 * own their separate invalid-input reports, and share prepareClone for their
 * successful copy.
 *
 * @evidence contracts/common.md#principled-implementation Generation and the optional authored RESOLVE happen before callback execution. prepareClone fixes that projection and original graph, then judges the actual returned value against content, non-mutation and graph-separation requirements.
 * @evidence contracts/common.md#clear-and-simple-design The existing name/fixture/callback entry owns the complete clean scenario; the shared check owns graph semantics used by validating clone wrappers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The supplied callback executes directly and no foreign operation, fixture-name exception or producer-derived expectation determines its acceptance.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the clean scenario and separate invalid-input owner; prepareClone documents the actual fixture and comparison limits.
 * @evidence contracts/testing.md#behavioral-verification The real callback must return the captured projected data in a graph independent of the unmodified input. Identity, shallow, lossy and destructive callbacks fail while correct deep copies pass.
 * @evidence contracts/testing.md#independent-expectations The fixture and optional authored projection precede the callback. prepareClone's independent snapshot, rather than post-callback input, determines expected content.
 * @evidence contracts/testing.md#distinguishing-cases The registered unit supplies positive/negative ownership, mutation and nullable/empty data twins plus aliases, cycles, primitive and class-projection controls. Existing generated cases contribute their eligible native direct/factory bindings.
 * @evidence contracts/testing.md#execution-ownership This operation runs directly under plugin-free units and is forwarded by the ordinary automated clone helper; it owns no native preparation merely to inspect portable clone results.
 * @evidence contracts/performance.md#efficient-algorithms One fixture generation, optional authored projection and callback invocation surround the shared graph checks. Their own costs remain visible; no extra fixture generation or native clone constructs expectations.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Fresh generation and cloning are effectful scenario steps. This entry coordinates no requests whose completed or in-flight work can be shared.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Input, expectation, callback result and check closure remain local to one synchronous scenario and become reclaimable on return or exception. No cache, process or handle is acquired.
 */
export const _test_plain_clone =
  (name: string) =>
  <T>(factory: { generate(): T; RESOLVE?: (input: T) => unknown }) =>
  (clone: (input: T) => Resolved<T>): void => {
    const input = factory.generate();
    const check = prepareClone(
      input,
      factory.RESOLVE ? factory.RESOLVE(input) : input,
      `Bug on typia.plain.clone(): failed to clone the ${name} type.`,
    );
    const result = clone(input);
    check(result);
  };

/** Captures stable ordinary-data properties without recursive stack growth. */
function capture(input: unknown, message: string) {
  const nodes = new Map<
    object,
    {
      entries: [string, unknown][];
      prototype: unknown;
      length: number | undefined;
      copy: Record<string, unknown> | unknown[];
    }
  >();
  const pending: object[] = [];
  const copy = (value: unknown): unknown => {
    if (typeof value === "function") throw new Error(message);
    if (value === null || typeof value !== "object") return value;
    const prior = nodes.get(value);
    if (prior) return prior.copy;
    if (
      !Array.isArray(value) &&
      Object.prototype.toString.call(value) !== "[object Object]"
    )
      throw new Error(message);
    const entries = Object.entries(value);
    const cloned = Array.isArray(value)
      ? new Array<unknown>(value.length)
      : (Object.create(null) as Record<string, unknown>);
    nodes.set(value, {
      entries,
      prototype: Object.getPrototypeOf(value),
      length: Array.isArray(value) ? value.length : undefined,
      copy: cloned,
    });
    pending.push(value);
    return cloned;
  };
  const output = copy(input);
  while (pending.length) {
    const node = nodes.get(pending.pop()!)!;
    for (const [key, value] of node.entries)
      Object.defineProperty(node.copy, key, {
        value: copy(value),
        enumerable: true,
        writable: true,
        configurable: true,
      });
  }
  return { copy: output, nodes };
}
