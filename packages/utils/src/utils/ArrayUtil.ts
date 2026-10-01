/**
 * In-place array membership and lazy insertion helpers for fixture builders.
 *
 * Comparators, selectors and initializers are caller-owned callbacks; their
 * side effects and exceptions are not rolled back.
 *
 * @internal
 */
export namespace ArrayUtil {
  /**
   * Reports whether an existing element satisfies the supplied predicate.
   *
   * Native `some` short-circuits and skips holes in sparse arrays.
   */
  export const has = <T>(array: T[], pred: (elem: T) => boolean): boolean =>
    array.some(pred);

  /**
   * Appends a value only when no existing element compares equal to it.
   *
   * Returns whether this helper appended. The default comparator is strict
   * equality, so NaN does not compare equal to itself.
   */
  export const add = <T>(
    array: T[],
    value: T,
    pred: (x: T, y: T) => boolean = (x, y) => x === y,
  ): boolean => {
    if (array.some((elem) => pred(elem, value))) return false;
    array.push(value);
    return true;
  };

  /**
   * Appends a value if its selected key is absent, retaining an existing value.
   *
   * Keys use strict equality. The selector must give stable keys during the
   * search; it is evaluated for each visited element and candidate comparison.
   */
  export const set = <Key, T>(
    array: T[],
    value: T,
    key: (elem: T) => Key,
  ): void => {
    if (array.some((elem) => key(elem) === key(value))) return;
    array.push(value);
  };

  /**
   * Returns the first matching entry, or appends and returns a lazy
   * initializer.
   *
   * A successful match avoids initialization, including for falsy values. The
   * helper appends only after initialization returns; callback-owned array
   * mutations are preserved even if that callback throws.
   */
  export const take = <T>(
    array: T[],
    pred: (elem: T) => boolean,
    init: () => T,
  ): T => {
    const index: number = array.findIndex(pred);
    if (index !== -1) return array[index]!;

    const elem: T = init();
    array.push(elem);
    return elem;
  };

  /**
   * Builds a dense array from an index-aware factory.
   *
   * Count follows the native single-number Array constructor: it must be an
   * integer array length. Each call receives its index and the original count.
   */
  export const repeat = <T>(
    count: number,
    closure: (index: number, count: number) => T,
  ): T[] => new Array(count).fill("").map((_, index) => closure(index, count));
}
