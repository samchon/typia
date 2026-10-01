/**
 * Checks the ASCII email spelling of the `email` format.
 *
 * Accepts a dot-separated local part of RFC 5322 atom characters and a domain
 * of at least two dot-separated alphanumeric labels, ignoring case. Quoted
 * local parts, address literals, non-ASCII characters and the 64 and 254
 * character length limits are not handled.
 *
 * @evidence contracts/common.md#principled-implementation One expression accepts a dot-atom local part of RFC 5322 atext characters and a domain of at least two alphanumeric labels with interior hyphens, ignoring case; it is a practical subset and not the full address grammar, so quoted local parts, address literals, non-ASCII characters and the length limits are outside it.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the copy in the typia package.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The grammar is the stated subset and nothing is keyed on addresses.
 * @evidence contracts/common.md#meaningful-documentation The doc lists the accepted and unsupported forms.
 */
export const _isFormatEmail = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
