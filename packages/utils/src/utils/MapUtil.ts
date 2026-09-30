/**
 * Membership-based lazy initialization of caller-owned maps.
 *
 * @internal
 *
 * @evidence contracts/common.md#principled-implementation Map membership, rather than truthiness, determines reuse so every value admitted by the generic type is preserved; the helper inserts a result only after generation returns, while callback-owned mutations remain the caller's responsibility.
 * @evidence contracts/common.md#clear-and-simple-design The namespace contains one operation with an explicit caller-owned map and generator, without a separate cache or value sentinel.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Native Map.has/get/set semantics handle all keys and values uniformly without a special-case list of falsy values or schema-specific conditions.
 * @evidence contracts/common.md#meaningful-documentation The namespace identifies membership and ownership, and take explains generation, stored undefined values and failure behavior.
 */
export namespace MapUtil {
  /**
   * Returns an existing entry or generates and inserts a missing one.
   *
   * Stored `undefined` is an entry. Generation runs only for an absent key; the
   * helper inserts only after it returns. Mutations made by the generator
   * itself are not rolled back when it throws.
   *
   * @evidence contracts/common.md#principled-implementation Map.has distinguishes absent keys from every stored T, including undefined; the helper's insertion occurs only after the generator returns and does not compensate for callback-owned map mutations.
   * @evidence contracts/common.md#clear-and-simple-design One membership branch, one generator call and one insertion express lazy initialization directly; no truthiness sentinel or retained parallel state is needed.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts All generic values follow the same native membership rule, with no fixture-specific value branches or side effects introduced to satisfy one caller.
   * @evidence contracts/common.md#meaningful-documentation The comment defines existing-entry reuse, undefined membership and failure semantics; the generic signature names the caller's map, key and generator.
   */
  export const take = <Key, T>(
    dict: Map<Key, T>,
    key: Key,
    generator: () => T,
  ): T => {
    if (dict.has(key)) return dict.get(key) as T;

    const value: T = generator();
    dict.set(key, value);
    return value;
  };
}
