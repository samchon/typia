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
