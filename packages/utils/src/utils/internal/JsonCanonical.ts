/**
 * Compares JSON values regardless of object key order.
 *
 * Two schemas that differ only in key order are the same schema, but a plain
 * `JSON.stringify` tells them apart. Converters reorder keys freely, so a
 * document that went through one (a 3.1 downgrade, for instance) comes back
 * with the same schemas spelled in another order.
 *
 * @internal
 */
export namespace JsonCanonical {
  /**
   * @param x First JSON value
   * @param y Second JSON value
   * @returns Whether both are the same JSON value
   */
  export const equals = (x: unknown, y: unknown): boolean =>
    stringify(x) === stringify(y);

  /**
   * @param value JSON value
   * @returns JSON text with every object's keys in code-unit order
   */
  export const stringify = (value: unknown): string =>
    JSON.stringify(canonicalize(value));

  const canonicalize = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(canonicalize);
    if (value === null || typeof value !== "object") return value;
    return Object.fromEntries(
      Object.entries(value)
        .sort(([x], [y]) => (x < y ? -1 : x > y ? 1 : 0))
        .map(([key, entry]) => [key, canonicalize(entry)]),
    );
  };
}
