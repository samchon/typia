/**
 * Checks the internationalized email spelling of the `idn-email` format.
 *
 * Accepts a local part of dotted atoms that exclude only whitespace and the
 * characters `<>()[]\.,;:@"`, or a quoted string, and a domain of labels ending
 * in a top-level label of at least two UTF-16 code units. Non-ASCII units,
 * including unpaired surrogates, are allowed. Length limits, surrogate validity
 * and the IDNA rules for the domain are not checked.
 *
 * @evidence contracts/common.md#principled-implementation The local part is dotted atoms excluding whitespace and the specials, or a quoted string, and the domain is dotted labels with a final label of at least two UTF-16 code units. The expression has no Unicode flag, so its permissive non-special set also accepts surrogate units; it does not apply IDNA, surrogate validity or length limits.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the copy in the typia package that emitted code imports.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The permissive set is stated and no address is special-cased.
 * @evidence contracts/common.md#meaningful-documentation The doc lists what is and is not checked.
 */
export const _isFormatIdnEmail = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
