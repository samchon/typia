const STR_ESCAPE = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/
/**
 * In the past, name of `typia` was `typescript-json`, and supported
 * JSON serialization by wrapping `fast-json-stringify. `typescript-json` was
 * a helper library of `fast-json-stringify`, which can skip manual JSON schema
 * definition just by putting pure TypeScript type.
 *
 * This `$string` function is a part of `fast-json-stringify` at that time, and
 * still being used in `typia` for the string serialization.
 *
 * @internal
 * @reference https://github.com/fastify/fast-json-stringify/blob/master/lib/serializer.js
 * @blog https://dev.to/samchon/good-bye-typescript-is-ancestor-of-typia-20000x-faster-validator-49fi
 */
export const $string = (str: string): string => {
const len = str.length
    if (len < 42) {
      // magically escape strings for json
      // relying on their charCodeAt
      // everything below 32 needs JSON.stringify()
      // every string that contain surrogate needs JSON.stringify()
      // 34 and 92 happens all the time, so we
      // have a fast case for them
      let result = ''
      let last = -1
      let point = 255
      // eslint-disable-next-line
      for (var i = 0; i < len; i++) {
        point = str.charCodeAt(i)
        if (
          point === 0x22 || // '"'
          point === 0x5c // '\'
        ) {
          last === -1 && (last = 0)
          result += str.slice(last, i) + '\\'
          last = i
        } else if (point < 32 || (point >= 0xD800 && point <= 0xDFFF)) {
          // The current character is non-printable characters or a surrogate.
          return JSON.stringify(str)
        }
      }
      return (last === -1 && ('"' + str + '"')) || ('"' + result + str.slice(last) + '"')
    } else if (len < 5000 && STR_ESCAPE.test(str) === false) {
      // Only use the regular expression for shorter input. The overhead is otherwise too much.
      return '"' + str + '"'
    } else {
      return JSON.stringify(str)
    }
};
