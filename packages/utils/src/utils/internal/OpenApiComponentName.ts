/**
 * Allocate OpenAPI Components Object keys for unrestricted LLM `$defs` keys.
 *
 * The two key spaces are not the same. An LLM definition map owns arbitrary
 * JSON object keys, while the OpenAPI Components Object restricts every key to
 * `^[a-zA-Z0-9.\-_]+$`. Encoding a reference is therefore not enough: a
 * reference can carry `/` as `~1`, but the stored component key still may not.
 *
 * This mirrors the native allocator in
 * `packages/typia/native/core/schemas/metadata/MetadataCollection.go`
 * (`MetadataCollection_replaceOpenApi`), which owns the same contract for
 * generated schemas. The two need not agree on how a forbidden name is
 * disambiguated: a natively generated key is already legal, so it round-trips
 * through {@link allocate} unchanged.
 *
 * @internal
 */
export namespace OpenApiComponentName {
  export const GRAMMAR = /^[a-zA-Z0-9.\-_]+$/;

  /**
   * Separates an escaped base name from its disambiguating counter.
   *
   * Never `.`: `JsonDescriptor.cascade` reads a dot in a component key as a
   * namespace boundary and inherits the parent component's description, so a
   * dotted suffix would present the escaped base as a fake parent and pull an
   * unrelated type's description into the escaped schema. `-` is in the OpenAPI
   * key alphabet, needs no JSON Pointer or URI escaping, and carries no such
   * meaning.
   */
  const SUFFIX = "-x";

  /** Encode one raw key into a legal, nonempty base name. */
  export const escape = (key: string): string => {
    let base: string = "";
    for (const character of key)
      base += GRAMMAR.test(character)
        ? character
        : `_x${character.codePointAt(0)!.toString(16).toUpperCase()}_`;
    return base.length === 0 ? "_" : base;
  };

  /**
   * Allocate one legal, distinct component key per raw `$defs` key.
   *
   * Allocation runs in two passes so an escaped name can never squat a name
   * that an already legal key owns: a legal key would otherwise lose its exact
   * name to whichever forbidden key happened to sort first.
   *
   * The sorted iteration makes the result depend only on which keys exist,
   * never on `$defs` insertion or traversal order.
   *
   * @param props.keys Raw `$defs` keys to allocate
   * @param props.reserved Component keys the caller already owns
   * @returns Raw `$defs` key to allocated component key
   */
  export const allocate = (props: {
    keys: readonly string[];
    reserved: readonly string[];
  }): Map<string, string> => {
    const taken: Set<string> = new Set(props.reserved);
    const allocation: Map<string, string> = new Map();
    const deferred: string[] = [];

    // Pass 1: an already legal key keeps its exact name when it is free.
    for (const key of [...props.keys].sort())
      if (GRAMMAR.test(key) === true && taken.has(key) === false) {
        taken.add(key);
        allocation.set(key, key);
      } else deferred.push(key);

    // Pass 2: everything forbidden, empty, or outbid takes an escaped name.
    for (const key of deferred) {
      const base: string = escape(key);
      let allocated: string = base;
      for (let i: number = 0; taken.has(allocated); ++i)
        allocated = `${base}${SUFFIX}${i}`;
      taken.add(allocated);
      allocation.set(key, allocated);
    }
    return allocation;
  };
}
