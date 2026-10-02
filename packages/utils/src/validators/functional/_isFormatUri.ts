/**
 * Checks the supported URI spelling of the `uri` format.
 *
 * Requires a scheme, then accepts the hierarchical forms with an optional
 * authority, an IPv4, IPv6 or future-version address literal or a registered
 * name, a path, a query and a fragment, ignoring case. A string with neither
 * `/` nor `:` is rejected first, because a URI always has a scheme separator.
 *
 * This grammar rejects an empty hierarchy such as `urn:` and permits leading
 * zeros in its embedded IPv4 octets, so it is not the complete RFC 3986
 * grammar.
 *
 * @evidence contracts/common.md#principled-implementation The expression checks a scheme followed by supported authority, literal-address, registered-name, path, query and fragment forms. The separator guard is implied by the required scheme. This is an RFC 3986-oriented grammar with limitations: empty hierarchy is rejected and embedded IPv4 octets permit leading zeros rather than strict dec-octet spelling.
 * @evidence contracts/common.md#clear-and-simple-design One predicate with two private patterns, identical to the copy in the typia package that emitted code imports; the long expression is the grammar and is not factored.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts One fixed grammar applies uniformly, and the necessary separator guard preserves its result. Existing empty-hierarchy and IPv4 spelling limitations are disclosed rather than claimed as full RFC compliance.
 * @evidence contracts/common.md#meaningful-documentation The doc states the structure and the guard.
 */
export const _isFormatUri = (str: string): boolean =>
  NOT_URI_FRAGMENT.test(str) && URI.test(str);

const NOT_URI_FRAGMENT = /\/|:/;
const URI =
  /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
