/**
 * Checks the internationalized email spelling of the `idn-email` format.
 *
 * Accepts a local part of dotted atoms that exclude only whitespace and the
 * characters `<>()[]\.,;:@"`, or a quoted string, and a domain of labels ending
 * in a top-level label of at least two characters. Non-ASCII characters are
 * allowed. Length limits and the IDNA rules for the domain are not checked.
 *
 * @evidence contracts/common.md#principled-implementation The local part is dotted atoms excluding whitespace and the specials, or a quoted string, and the domain is dotted labels with a final label of at least two characters; this is a permissive structural check that allows any non-special Unicode character and does not apply IDNA or length limits.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the typia copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The permissive set is stated and no address is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that lists what is and is not checked.
 */
export const _isFormatIdnEmail = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
