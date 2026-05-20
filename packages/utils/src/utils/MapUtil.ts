/** @internal */
export namespace MapUtil {
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
