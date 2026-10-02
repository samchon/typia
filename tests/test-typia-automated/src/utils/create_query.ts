/**
 * Encodes a flat fixture as URLSearchParams with repeated keys for array values
 * and omitted undefined fields.
 *
 * @evidence contracts/common.md#principled-implementation Encodes a flat fixture as URLSearchParams with repeated keys for array values and omitted undefined fields.
 * @evidence contracts/common.md#clear-and-simple-design One object-entry loop appends each array element or sets one scalar string, leaving key escaping to URLSearchParams.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Input string conversion is the authored test transport policy; no typia decoder is called and no invalid verdict is manufactured.
 * @evidence contracts/common.md#meaningful-documentation The comment states the flat representation, undefined omission and array repetition.
 */
export const create_query = (input: Record<string, any>): URLSearchParams => {
  const encoded: URLSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(input))
    if (value === undefined) continue;
    else if (Array.isArray(value))
      for (const elem of value) encoded.append(key, String(elem));
    else encoded.set(key, String(value));
  return encoded;
};
