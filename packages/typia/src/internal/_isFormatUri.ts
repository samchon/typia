/**
 * Checks the RFC 3986 URI spelling of the `uri` format.
 *
 * Requires a scheme, then accepts the hierarchical forms with an optional
 * authority, an IPv4, IPv6 or future-version address literal or a registered
 * name, a path, a query and a fragment, ignoring case. A string with neither
 * `/` nor `:` is rejected first, because a URI always has a scheme separator.
 * The accepted subset requires a nonempty hierarchical part after the scheme;
 * scheme-only forms such as `urn:` are not accepted.
 *
 * @evidence contracts/common.md#principled-implementation The expression checks URI syntax with a scheme, authority and path alternatives, optional user information, address literal or registered host name, port, query and fragment, ignoring case. It requires a nonempty hierarchical part after the scheme, unlike RFC 3986's path-empty alternative. The cheap slash-or-colon guard is implied by the scheme. The IPv4 octet alternative also accepts leading zeros; these accepted syntax rules are not a complete RFC grammar implementation.
 * @evidence contracts/common.md#clear-and-simple-design One predicate with two private patterns, identical to the copy in @typia/utils; the long expression is the grammar and is not factored.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The same documented URI subset applies to every input. The preliminary guard is implied by the scheme separator and therefore does not impose a different result.
 * @evidence contracts/common.md#meaningful-documentation The doc states the structure and the guard.
 */
export const _isFormatUri = (str: string): boolean =>
  NOT_URI_FRAGMENT.test(str) && URI.test(str);

const NOT_URI_FRAGMENT = /\/|:/;
const URI =
  /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
