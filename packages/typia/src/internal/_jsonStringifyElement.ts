/**
 * Writes one array or tuple element the way ECMAScript `JSON.stringify` writes
 * it.
 *
 * `SerializeJSONArray` writes `null` wherever an element serializes to
 * `undefined`, because an array position cannot be omitted without shifting
 * every element after it. A present value with no serialization — a function, a
 * symbol, or a `toJSON` returning nothing — is therefore `null`, not the
 * literal text `undefined` and not an empty slot.
 *
 * This is the fixed-position counterpart of `_jsonStringifyArray`, which
 * answers the same question while walking an array's own index range.
 *
 * @param text Serialized element value, or `undefined` when it has none.
 * @returns Element text, or `null` when the element has no serialization.
 * @internal
 */
export const _jsonStringifyElement = (text: string | undefined): string =>
  text === undefined ? "null" : text;
