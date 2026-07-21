/**
 * Serializes the elements of an array the way ECMAScript `JSON.stringify` does.
 *
 * `SerializeJSONArray` walks index `0` to `LengthOfArrayLike(value) - 1` and
 * writes `null` wherever the element serializes to `undefined`. Neither
 * `Array.prototype.map` nor `Array.prototype.join` reproduces that:
 *
 * - `map` never visits a hole and leaves one behind, and `join` renders a hole as
 *   empty text, so a sparse array joined into malformed text such as `[,1]`. A
 *   hole exists at runtime whatever the element type declares, so this is not
 *   an `any` concern.
 * - `join` renders a mapped `undefined` as empty text too, which is what an `any`
 *   or `unknown` element holding a function, a symbol, or a `toJSON` that
 *   returns nothing serializes to.
 *
 * The length is converted with `ToLength` and read once, which is both what
 * `JSON.stringify` does and what `Array.prototype.every` - the traversal
 * typia's own array checkers emit - does, so the checker and the serializer
 * walk one index range rather than two that merely usually coincide.
 *
 * @param elements Array being serialized.
 * @param mapper Serializer of one element, emitted by the transform.
 * @returns Comma separated element text, without the enclosing brackets.
 * @internal
 */
export const _jsonStringifyArray = <T>(
  elements: ArrayLike<T>,
  mapper: (elem: T, index: number) => string,
): string => {
  const length: number = Math.min(
    Math.max(Math.trunc(elements.length) || 0, 0),
    Number.MAX_SAFE_INTEGER,
  );
  let output: string = "";
  for (let i: number = 0; i < length; ++i) {
    const elem: T | undefined = elements[i];
    // A hole and an explicit `undefined` are answered without calling the
    // mapper, because the mapper is the element type's own serializer and a
    // typed one has no answer for a missing value. Everything else is answered
    // from the mapper's *result*: an element that is present but serializes to
    // nothing — a function, a symbol, or a `toJSON` returning nothing in an
    // `any` slot — is `null` in an array position, exactly as
    // SerializeJSONArray specifies, and testing the input instead would let its
    // text become the literal `undefined`.
    const text: string | undefined =
      elem === undefined ? undefined : mapper(elem, i);
    output += (i === 0 ? "" : ",") + (text === undefined ? "null" : text);
  }
  return output;
};
