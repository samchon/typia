/**
 * Checks the `url` format, which is stricter than a generic URI.
 *
 * Accepts only the `http`, `https` and `ftp` schemes, an optional user and
 * password, a host that is a public IPv4 address or a dotted domain name with a
 * top-level label, an optional port of two to five digits and an optional path.
 * Hosts without a dot, such as `localhost`, private, loopback and link-local
 * IPv4 addresses, addresses whose last octet is 0 or 255, and IPv6 literals are
 * rejected.
 *
 * @evidence contracts/common.md#principled-implementation The expression is a public-web URL grammar, not the generic URI one: the schemes are limited to http, https and ftp, the host is a public IPv4 address (private, loopback, link-local and last-octet 0 or 255 addresses are excluded) or a dotted domain with a top-level label of letters, the port has two to five digits and the path has no spaces. Hosts without a dot, such as `localhost`, and IPv6 literals are rejected, which is an unresolved departure from a general URL notion.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the copy in the typia package that emitted code imports.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The limits are stated and no host is special-cased.
 * @evidence contracts/common.md#meaningful-documentation The doc lists the accepted schemes and hosts and the rejected local addresses.
 */
export const _isFormatUrl = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?:https?|ftp):\/\/(?:[^\s/?#@]+(?::[^\s/?#@]*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?=.{1,253}(?::\d{2,5})?(?:\/[^\s]*)?$)(?:[a-z0-9\u00a1-\uffff](?:[-a-z0-9\u00a1-\uffff]{0,61}[a-z0-9\u00a1-\uffff])?\.)+(?:[a-z\u00a1-\uffff](?:[-a-z0-9\u00a1-\uffff]{0,61}[a-z0-9\u00a1-\uffff])))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
