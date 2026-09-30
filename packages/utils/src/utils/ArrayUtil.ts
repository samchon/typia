/**
 * In-place array membership and lazy insertion helpers for fixture builders.
 *
 * Comparators, selectors and initializers are caller-owned callbacks; their
 * side effects and exceptions are not rolled back.
 *
 * @evidence contracts/common.md#principled-implementation Native array searches determine membership before insertion; each operation states its comparison and callback semantics.
 * @evidence contracts/common.md#clear-and-simple-design The namespace groups small array operations without introducing a second collection representation or retained index.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The helpers use ordinary array operations and caller callbacks; there are no fixture-name branches or foreign mutations.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies in-place ownership and callback effects, and each exported operation documents its distinct return or insertion contract.
 *
 * @internal
 */
export namespace ArrayUtil {
  /**
   * Reports whether an existing element satisfies the supplied predicate.
   *
   * Native `some` short-circuits and skips holes in sparse arrays.
   *
   * @evidence contracts/common.md#principled-implementation Array.some supplies existential membership and propagates the predicate's exceptions; an empty array returns false.
   * @evidence contracts/common.md#clear-and-simple-design Delegating the search to some keeps the native sparse-array and early-return behavior visible.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The predicate decides membership for all elements without known-value exceptions.
   * @evidence contracts/common.md#meaningful-documentation The comment explains existential purpose and native short-circuit and hole semantics separately from acknowledgment tags.
   */
  export const has = <T>(array: T[], pred: (elem: T) => boolean): boolean =>
    array.some(pred);

  /**
   * Appends a value only when no existing element compares equal to it.
   *
   * Returns whether this helper appended. The default comparator is strict
   * equality, so NaN does not compare equal to itself.
   *
   * @evidence contracts/common.md#principled-implementation A some search over pred(existing, value) precedes push; strict equality is the explicit default rather than SameValueZero membership.
   * @evidence contracts/common.md#clear-and-simple-design One predicate search and one append implement conditional insertion with a boolean outcome.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Equality comes from the caller or the documented default, without coercion or fixture-specific overrides.
   * @evidence contracts/common.md#meaningful-documentation Native prose defines the boolean outcome, comparator argument order through the signature, and the consequential NaN default behavior.
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
   *
   * @evidence contracts/common.md#principled-implementation Comparing key(existing) with key(value) using strict equality implements insertion by a stable caller-selected key; a match preserves the existing element.
   * @evidence contracts/common.md#clear-and-simple-design Key comparison and conditional push stay in one operation, without a persistent index whose validity would depend on later array mutations.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The caller's selector determines keys uniformly and no matching entry is silently replaced.
   * @evidence contracts/common.md#meaningful-documentation Native prose distinguishes insertion from replacement and states stable-key, equality and repeated-evaluation premises.
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
   *
   * @evidence contracts/common.md#principled-implementation findIndex distinguishes a found index from -1 independently of value truthiness; initialization runs only for an absent match and its return is appended.
   * @evidence contracts/common.md#clear-and-simple-design An index sentinel separates reuse from generation without a second scan or retained state.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Reuse follows the supplied predicate for all values, and initializer exceptions propagate without retries or rollback wrappers.
   * @evidence contracts/common.md#meaningful-documentation Native prose identifies first-match identity, lazy initialization, falsy reuse and the boundary between helper insertion and caller mutations.
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
   *
   * @evidence contracts/common.md#principled-implementation Filling the allocated length makes every index visitable by map; closure results populate the dense output in index order, and invalid lengths throw natively.
   * @evidence contracts/common.md#clear-and-simple-design Allocation, densification and mapping use native array operations with no custom iteration state.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The factory supplies every element rather than reusing one generated value or substituting fixture constants.
   * @evidence contracts/common.md#meaningful-documentation Native prose documents dense construction, length restrictions and callback arguments needed by fixture builders.
   */
  export const repeat = <T>(
    count: number,
    closure: (index: number, count: number) => T,
  ): T[] => new Array(count).fill("").map((_, index) => closure(index, count));
}
