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
 *
 * @evidence contracts/common.md#principled-implementation The original graph is captured before surplus injection. Each retained own key, value identity, prototype and array length must survive, and the final enumerable key count must equal the original count. Together these checks establish deletion of only injected surplus keys under the valid ordinary-data fixture premise.
 * @evidence contracts/common.md#clear-and-simple-design One iterative graph capture supplies the four pruning helpers with a shared mutation oracle. A per-call Map records each object once, handling shared references and cycles without recursive stack growth; the returned check retains only this invocation's snapshots.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Acceptance depends on the mutated graph, never callback source or generated spelling. Fresh injection names do not overwrite existing or inherited members. The selected matrix excludes native objects and unrestricted dictionaries rather than guessing their contracts from callback text.
 * @evidence contracts/common.md#meaningful-documentation Native prose describes the fixture premise, injected mutation, returned check and observable preservation boundary. Non-enumerable and symbol properties are outside the enumerable-string pruning assertion; this check does not claim generic native-object support.
 * @evidence contracts/testing.md#behavioral-verification The returned check rejects retained surplus keys, lost or replaced declared members, changed child identities, prototypes and array lengths. Ordinary surplus-only deletion passes, including shared and cyclic graph traversal.
 * @evidence contracts/testing.md#independent-expectations Authored clean fixture properties are recorded before calling the supplied product operation. Their preservation follows the in-place deletion-only contract; injected surplus members are authored separately and never used as expected valid data.
 * @evidence contracts/testing.md#distinguishing-cases Shared unit cases exercise no-op spelling, destructive mutation, nested records/arrays, unchanged values including undefined and NaN, fresh-key collisions, shared references and cycles. The native matrix supplies its selected real fixture shapes and direct/factory callbacks.
 * @evidence contracts/testing.md#execution-ownership This operation performs portable graph bookkeeping and checks directly under plugin-free units. Existing native pruning helpers delegate their mutation check here while retaining their producer and diagnostic boundary assertions.
 * @evidence contracts/performance.md#efficient-algorithms Capture and checking visit each node once and each enumerable edge once; temporary snapshots scale with nodes and entries. Fresh-key probing adds ten keys per record and skips only existing matching names, with lookup cost determined by its ordinary prototype chain. Identity indexing avoids repeated traversal of aliases and cycles.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This operation coordinates no equivalent requests. Each mutable fixture requires its own pre-mutation expectation; snapshots are not reused across invocations or after another scenario's mutation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The returned check retains one input graph's snapshots, bounded by its nodes and entries. Ownership transfers to its caller until the check is released; scenario helpers use it immediately and retain no historical graph, process or handle.
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
 * @evidence contracts/performance.md#efficient-algorithms The scenario performs one fixture generation and one callback invocation at their own costs, followed by shared graph checking. It introduces no second generation, clone or traversal beyond the capture/injection/check work owned by preparePrune.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Separate effectful fixture/callback invocations are not equivalent requests coordinated here. Reusing a prior mutated value or outcome would change the scenario being asserted.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources One fixture and its graph-check closure remain local until normal return or synchronous exception unwinding. The operation stores no cross-case history and acquires no process or native host; a supplied callback owns any state it retains itself.
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
 *
 * @evidence contracts/common.md#principled-implementation A generated valid fixture is captured before surplus injection. The actual callback must report literal true and the same original value under Object.is, then satisfy deletion-only graph preservation. These independent checks establish both the successful report contract and required mutation under preparePrune's fixture premise.
 * @evidence contracts/common.md#clear-and-simple-design This operation owns one complete clean scenario: generation, preparation, callback execution and assertions. Native wrappers delegate that scenario and retain their own invalid-input report checks, so portable semantics require no native host or extra checker-only layer.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The callback executes directly and its report is judged against literal status and authored input, without source inspection, substituted methods or producer-derived expected data. SameValue applies generally to primitive and reference inputs.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies report meaning, SameValue boundaries, in-place mutation and the separate owner of invalid-input checks. Descriptive prose and acknowledgment tags remain separate.
 * @evidence contracts/testing.md#behavioral-verification The actual supplied callback must mutate surplus members correctly, report true and retain original data. Status-only correctness, correct mutation with foreign data and valid reports without required mutation each fail independently.
 * @evidence contracts/testing.md#independent-expectations The authored fixture precedes product execution. IValidation.ISuccess supplies literal true and original-data requirements; preparePrune records valid properties before injection, independently of native output.
 * @evidence contracts/testing.md#distinguishing-cases The registered report unit exercises false and non-Boolean statuses, missing/changed/equal-distinct data, no-op/destructive callbacks, propagated callback failure, primitive/empty/NaN controls and -0 versus +0. The native ObjectSimple composite provides its real valid fixture and producer connection.
 * @evidence contracts/testing.md#execution-ownership Plugin-free units directly execute this shared operation. The existing native validatePrune helper calls the same operation before its unchanged invalid-fixture shape/path checks; this entry does not require a native producer merely to verify reports.
 * @evidence contracts/performance.md#efficient-algorithms One generation and callback invocation are combined with the shared graph work and constant-time status/SameValue checks. No clone or extra fixture generation is introduced to establish original-data identity.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This scenario coordinates no equivalent completed or in-flight requests. Fixture generation and pruning are effectful and must execute for each independent scenario.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The fixture, report and graph-check closure are local to one synchronous invocation and become reclaimable on return or exception unwinding. No persistent graph, cache, process or handle is retained by this operation.
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
