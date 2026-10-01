/**
 * Checks the `iri-reference` format at the character level.
 *
 * Rejects control characters, DEL and C1 controls, lone surrogates, space and
 * the characters `"<>\^`{|}`, and any `%`that is not followed by two
 * hexadecimal digits. A colon before the first`/`, `?`or`#` must end a valid
 * scheme. Authority, port and path structure are not parsed.
 *
 * @evidence contracts/common.md#principled-implementation Characters that no IRI may contain (controls, space, lone surrogates and a few ASCII delimiters) and malformed percent escapes are rejected, and a colon before the first path delimiter must be the end of a valid scheme, which separates `a:b` from the relative `./a:b`. Authority, port and path structure are not parsed, so the predicate is a character and scheme check and not full grammar validation.
 * @evidence contracts/common.md#clear-and-simple-design One predicate with three private patterns, identical to the copy in @typia/utils.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The forbidden set comes from the IRI grammar and not from examples.
 * @evidence contracts/common.md#meaningful-documentation The doc states what is rejected and what is not parsed.
 */
export const _isFormatIriReference = (str: string): boolean => {
  if (FORBIDDEN.test(str) || INVALID_PERCENT.test(str)) return false;
  const colon: number = str.indexOf(":");
  const boundary: number = str.search(/[/?#]/u);
  return (
    colon === -1 || (boundary !== -1 && boundary < colon) || SCHEME.test(str)
  );
};

const FORBIDDEN = /[\u0000-\u0020\u007f-\u009f\ud800-\udfff"<>\\^`{|}]/u;
const INVALID_PERCENT = /%(?![0-9A-Fa-f]{2})/u;
const SCHEME = /^[A-Za-z][A-Za-z0-9+.-]*:/u;
