/**
 * Serialize a string as a JSON string literal.
 *
 * A string with no control character, surrogate, quote or backslash is wrapped
 * in quotes, and quotes and backslashes are escaped by copying slices; any
 * control character or surrogate falls back to `JSON.stringify`, so the result
 * equals `JSON.stringify(str)` for every input.
 *
 * In the past, name of `typia` was `typescript-json`, and supported JSON
 * serialization by wrapping `fast-json-stringify. `typescript-json`was a helper
 * library of`fast-json-stringify`, which can skip manual JSON schema definition
 * just by putting pure TypeScript type.
 *
 * This `$string` function is a part of `fast-json-stringify` at that time, and
 * still being used in `typia` for the string serialization.
 *
 * @reference https://github.com/fastify/fast-json-stringify/blob/master/lib/serializer.js
 *
 * @blog https://dev.to/samchon/good-bye-typescript-is-ancestor-of-typia-20000x-faster-validator-49fi
 *
 * @evidence contracts/common.md#principled-implementation The common case is a string without control characters, quotes, backslashes or surrogates, which is wrapped in quotes without a pass through the general serializer; quotes and backslashes are escaped by copying slices, and any control character or surrogate falls back to `JSON.stringify`, which handles every remaining escape and lone-surrogate rule, so the result equals `JSON.stringify(str)` for all input.
 * @evidence contracts/common.md#clear-and-simple-design One function with a single scan and one fallback.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The fast path is a speed-up with the same result and falls back for every character that needs more than escaping a quote or backslash; it is adapted from fast-json-stringify, as the comment records.
 * @evidence contracts/common.md#meaningful-documentation The doc states what the function produces, the origin and the reference of the helper; the equality with `JSON.stringify` is argued in the principle answer.
 */
export const _jsonStringifyString = (str: string): string => {
  const len = str.length;
  let result = "";
  let last = -1;
  let point = 255;

  // eslint-disable-next-line
  for (var i = 0; i < len; i++) {
    point = str.charCodeAt(i);
    if (point < 32) {
      return JSON.stringify(str);
    }
    if (point >= 0xd800 && point <= 0xdfff) {
      // The current character is a surrogate.
      return JSON.stringify(str);
    }
    if (
      point === 0x22 || // '"'
      point === 0x5c // '\'
    ) {
      last === -1 && (last = 0);
      result += str.slice(last, i) + "\\";
      last = i;
    }
  }

  return (
    (last === -1 && '"' + str + '"') || '"' + result + str.slice(last) + '"'
  );
};
