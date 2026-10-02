/**
 * Accesses own dictionary entries without treating prototype members as data.
 *
 * Reads may invoke an own accessor; writes define an ordinary data property.
 * Proxy traps and property-definition errors propagate to the caller.
 *
 * @evidence contracts/common.md#principled-implementation Native own-property queries distinguish dictionary data from inheritance, and data-property definition supports literal prototype-named keys.
 * @evidence contracts/common.md#clear-and-simple-design Three operations share the own-entry policy while retaining ordinary JavaScript records as the storage representation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Intrinsic methods are called without patching record methods, prototypes or foreign globals.
 * @evidence contracts/common.md#meaningful-documentation Native prose explains own-entry purpose, accessor reads, data writes and propagated exotic-object errors.
 */
export namespace ObjectDictionary {
  /**
   * Tests own membership, treating an absent dictionary as empty.
   *
   * @evidence contracts/common.md#principled-implementation Calling the intrinsic hasOwnProperty accepts null-prototype records and records that shadow that method; null and undefined are handled before the call.
   * @evidence contracts/common.md#clear-and-simple-design A nullish guard and intrinsic query expose the complete membership decision without value reads.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Membership does not depend on truthiness or inherited names, and no record method is replaced.
   * @evidence contracts/common.md#meaningful-documentation The native comment defines own membership and absent-container semantics; namespace prose covers exceptional proxy behavior.
   */
  export const has = (
    record: object | null | undefined,
    key: PropertyKey,
  ): boolean =>
    record !== undefined &&
    record !== null &&
    Object.prototype.hasOwnProperty.call(record, key);

  /**
   * Reads an own value, returning undefined for an absent entry or dictionary.
   *
   * An own undefined value and absence have the same return; use has to
   * distinguish them. An own accessor retains its normal read effects.
   *
   * @evidence contracts/common.md#principled-implementation The shared own-membership guard prevents inherited values from leaking into a dictionary lookup and preserves falsy own values unchanged.
   * @evidence contracts/common.md#clear-and-simple-design Reusing has keeps the membership policy in one place; only a successful membership query triggers the property read.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Lookup uses native property semantics without fabricated fallback values or inherited-member exceptions.
   * @evidence contracts/common.md#meaningful-documentation Native prose documents undefined ambiguity and own-accessor effects needed to interpret a read.
   */
  export const get = <T>(
    record: Record<string, T> | null | undefined,
    key: string,
  ): T | undefined => (has(record, key) ? record![key] : undefined);

  /**
   * Defines a writable, enumerable, configurable own data entry.
   *
   * Defining the key avoids invoking an inherited setter, including **proto**.
   * Non-extensible records and incompatible non-configurable entries can
   * throw.
   *
   * @evidence contracts/common.md#principled-implementation Object.defineProperty writes an own data descriptor, so inherited setters cannot intercept dictionary assignment and literal __proto__ remains a data key.
   * @evidence contracts/common.md#clear-and-simple-design One descriptor states the ordinary mutable dictionary-entry attributes without a secondary backing store.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The same property definition applies to every string key, with native failures preserved rather than patched or retried.
   * @evidence contracts/common.md#meaningful-documentation Native prose identifies descriptor ownership, inherited-setter avoidance and property-compatibility failures separately from the tags.
   */
  export const set = <T>(
    record: Record<string, T>,
    key: string,
    value: T,
  ): void => {
    Object.defineProperty(record, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value,
    });
  };
}
