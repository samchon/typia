/**
 * Membership-based lazy initialization of caller-owned maps.
 *
 * @internal
 */
export namespace MapUtil {
  /**
   * Returns an existing entry or generates and inserts a missing one.
   *
   * Stored `undefined` is an entry. Generation runs only for an absent key; the
   * helper inserts only after it returns. Mutations made by the generator
   * itself are not rolled back when it throws.
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
