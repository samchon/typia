/**
 * Checks UUID hexadecimal grouping with an optional urn:uuid prefix.
 *
 * Hexadecimal and the prefix are case-insensitive. The predicate imposes no
 * version, variant or allocation-history restriction.
 *
 * @evidence contracts/common.md#principled-implementation Eight hexadecimal digits followed by three four-digit groups and one twelve-digit group establish the accepted lexical spelling. Whole-input matching keeps the optional prefix outside the grouped identifier.
 * @evidence contracts/common.md#clear-and-simple-design One private expression owns the lexical contract, without binary decoding or identifier-version dispatch.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Group lengths and the optional prefix are format constants applied uniformly, not known identifier or consumer exceptions.
 * @evidence contracts/common.md#meaningful-documentation The doc states the grouping, the optional urn:uuid prefix, case insensitivity and that no version or variant is imposed.
 * @evidence contracts/performance.md#efficient-algorithms The grammar has bounded prefix and group lengths, so the anchored predicate checks one fixed-size spelling without decoding or temporary segment arrays.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The verdict for one string is independent of every other, so there is no computation to share between requests, and caching results keyed by arbitrary input strings would add retention without any validity contract.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Only the pattern constant is retained; the match state of one call is local and reclaimed on return, and the input string is not kept.
 */
export const _isFormatUuid = (str: string): boolean => PATTERN.test(str);

const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
