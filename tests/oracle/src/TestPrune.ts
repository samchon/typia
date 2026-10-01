/**
 * Injects surplus properties and returns a check of deletion-only mutation.
 *
 * Call this on an authored valid ordinary object/array graph whose type does
 * not permit the injected keys. Native objects and unrestricted dictionaries
 * are outside this fixture contract and excluded by matrix eligibility.
 * Original enumerable string properties, array lengths and object identities
 * remain observable without cloning prototypes or executing valueOf methods.
 *
 * @evidence contracts/common.md#principled-implementation The original graph is captured before surplus injection. Each retained own key, value identity, prototype and array length must survive, and the final enumerable key count must equal the original count. Together these checks establish deletion of only injected surplus keys under the valid ordinary-data fixture premise.
 * @evidence contracts/common.md#clear-and-simple-design One iterative graph capture supplies the four pruning helpers with a shared mutation oracle. A per-call Map records each object once, handling shared references and cycles without recursive stack growth; the returned check retains only this invocation's snapshots.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Acceptance depends on the mutated graph, never callback source or generated spelling. Fresh injection names do not overwrite existing or inherited members. The selected matrix excludes native objects and unrestricted dictionaries rather than guessing their contracts from callback text.
 * @evidence contracts/common.md#meaningful-documentation Native prose describes the fixture premise, injected mutation, returned check and observable preservation boundary. Non-enumerable and symbol properties are outside the enumerable-string pruning assertion; this check does not claim generic native-object support.
 * @evidence contracts/testing.md#behavioral-verification The returned check rejects retained surplus keys, lost or replaced declared members, changed child identities, prototypes and array lengths. Ordinary surplus-only deletion passes, including shared and cyclic graph traversal.
 * @evidence contracts/testing.md#independent-expectations Authored clean fixture properties are recorded before calling the supplied product operation. Their preservation follows the in-place deletion-only contract; injected surplus members are authored separately and never used as expected valid data.
 * @evidence contracts/testing.md#distinguishing-cases Shared unit cases exercise no-op spelling, destructive mutation, nested records/arrays, unchanged values including undefined and NaN, fresh-key collisions, shared references and cycles. The native matrix supplies its selected real fixture shapes and direct/factory callbacks.
 * @evidence contracts/testing.md#execution-ownership This operation performs portable graph bookkeeping and checks directly under plugin-free units. Existing native pruning helpers delegate their mutation check here while retaining their producer and diagnostic boundary assertions.
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
 *
 * @evidence contracts/common.md#principled-implementation preparePrune records valid data before injecting surplus keys; executing the callback and then its returned check establishes both required mutation and retained valid data.
 * @evidence contracts/common.md#clear-and-simple-design Existing name/fixture/callback currying is retained. Shared preparation owns graph semantics; this entry owns only invocation and its plain.prune failure identity.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The supplied callback executes directly and is judged by its mutation, without reading its source or replacing methods.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies mutation ownership, ignored return and the shared fixture premise; tags are separated from descriptive prose.
 * @evidence contracts/testing.md#behavioral-verification Correct surplus-only deletion passes; the shared check rejects retained extras and deletion or replacement of valid data after the actual callback.
 * @evidence contracts/testing.md#independent-expectations Valid properties originate in the authored fixture before the callback executes. Expected mutation follows deletion-only pruning, independently of producer output.
 * @evidence contracts/testing.md#distinguishing-cases Unit controls distinguish correct deletion, no-op spellings and destructive callbacks; existing direct/factory generated cases exercise their eligible authored shapes.
 * @evidence contracts/testing.md#execution-ownership Portable units call this shared entry without a native producer. The automated internal file forwards here and retains its actual generated native callbacks.
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
