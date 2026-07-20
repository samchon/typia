/**
 * Writes one object member the way ECMAScript `JSON.stringify` writes it.
 *
 * `SerializeJSONObject` serializes each member first and drops the member
 * entirely when that result is `undefined`. Deciding omission from the *input*
 * instead cannot reach the same answer: a symbol and a `toJSON` returning
 * nothing are both present, non-`undefined`, non-function values whose
 * serialization is `undefined`, so the member's text became the literal
 * `"k":undefined` — output that is not JSON at all.
 *
 * The serialized text is passed in already evaluated, so the member's value is
 * serialized exactly once. Testing the input and then serializing would evaluate
 * a `toJSON` twice, and a `toJSON` is free to answer differently each call.
 *
 * The trailing separator belongs to the member because a dropped member must
 * take its comma with it; `_jsonStringifyTail` removes the one that is left
 * behind when the last written member is the one that dropped.
 *
 * @param head Quoted key and colon, emitted by the transform.
 * @param text Serialized member value, or `undefined` when it has none.
 * @param tail Separator following this member, empty for the last one.
 * @returns Member text, or an empty string when the member is omitted.
 * @internal
 */
export const _jsonStringifyProperty = (
  head: string,
  text: string | undefined,
  tail: string,
): string => (text === undefined ? "" : head + text + tail);
