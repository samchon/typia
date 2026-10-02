import type { IValidation } from "@typia/interface";

/**
 * Injects surplus properties and returns a check of deletion-only mutation.
 *
 * Call this on an authored valid mutable ordinary object/array graph whose type
 * does not permit the injected keys. Native objects and unrestricted
 * dictionaries are outside this fixture contract and excluded by matrix
 * eligibility. Original enumerable string properties, array lengths and object
 * identities remain observable without cloning prototypes or executing valueOf
 * methods.
 */
export const preparePrune = (input: unknown, message: string): (() => void) => {
  const snapshots = new Map<
    object,
    {
      node: Record<string, unknown>;
      entries: [string, unknown][];
      prototype: unknown;
      length: number | undefined;
    }
  >();
  const pending: unknown[] = [input];
  while (pending.length !== 0) {
    const value = pending.pop();
    if (value === null || typeof value !== "object" || snapshots.has(value))
      continue;
    const node = value as Record<string, unknown>;
    const entries = Object.entries(node);
    snapshots.set(value, {
      node,
      entries,
      prototype: Object.getPrototypeOf(value),
      length: Array.isArray(value) ? value.length : undefined,
    });
    for (const [, child] of entries) pending.push(child);
  }
  for (const { node, length } of snapshots.values()) {
    if (length !== undefined) continue;
    let index = 0;
    for (let added = 0; added < 10; ) {
      const key = `__non_regular_type__${index++}`;
      if (key in node) continue;
      Object.defineProperty(node, key, {
        value: "vulnerable",
        enumerable: true,
        configurable: true,
        writable: true,
      });
      ++added;
    }
  }
  return () => {
    for (const { node, entries, prototype, length } of snapshots.values())
      if (
        Object.getPrototypeOf(node) !== prototype ||
        Object.keys(node).length !== entries.length ||
        (length !== undefined && node.length !== length) ||
        entries.some(
          ([key, value]) =>
            !Object.prototype.hasOwnProperty.call(node, key) ||
            !Object.is(node[key], value),
        )
      )
        throw new Error(message);
  };
};

/**
 * Checks surplus removal without losing authored valid fixture data.
 *
 * Uses the same closed ordinary-data fixture premise as preparePrune. The
 * callback mutates the supplied value in place; its return value is unused.
 */
export const _test_plain_prune =
  (name: string) =>
  <T>(factory: { generate(): T }) =>
  (prune: (input: T) => void): void => {
    const input = factory.generate();
    const check = preparePrune(
      input,
      `Bug on typia.plain.prune(): failed to prune the ${name} type.`,
    );
    prune(input);
    check();
  };

/**
 * Checks a clean pruning mutation and its successful validation report.
 *
 * The report must contain literal true and the original input after pruning.
 * SameValue comparison preserves NaN and signed zero as well as object
 * identity. Invalid-fixture error reports belong to the calling native helper;
 * this operation owns only the otherwise-valid fixture and its surplus
 * members.
 */
export const _test_plain_validatePrune_success =
  (name: string) =>
  <T>(factory: { generate(): T }) =>
  (prune: (input: T) => IValidation<T>): void => {
    const input = factory.generate();
    const message = `Bug on typia.plain.validatePrune(): failed to prune the ${name} type.`;
    const check = preparePrune(input, message);
    const result = prune(input);
    if (result.success !== true || !Object.is(result.data, input))
      throw new Error(message);
    check();
  };
