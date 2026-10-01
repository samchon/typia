/**
 * Checks the RFC 1123 hostname spelling of the `hostname` format.
 *
 * Accepts dot-separated ASCII labels of one to 63 letters, digits and interior
 * hyphens, at most 253 characters before one optional trailing dot, and ignores
 * case. A name of a single label is valid.
 *
 * @evidence contracts/common.md#principled-implementation A lookahead bounds the name to 253 characters before an optional trailing dot, then labels of one to 63 letters, digits and interior hyphens are required, which is the RFC 1123 hostname grammar; a single label is valid and underscores are not.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the typia copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The limits are the standard's own numbers.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the length and label rules.
 */
export const _isFormatHostname = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
