/**
 * Checks UUID hexadecimal grouping with an optional urn:uuid prefix.
 *
 * Hexadecimal and the prefix are case-insensitive. The predicate imposes no
 * version, variant or allocation-history restriction.
 *
 * @evidence contracts/common.md#principled-implementation Eight hexadecimal digits followed by three four-digit groups and one twelve-digit group establish the accepted lexical spelling. Whole-input matching keeps the optional prefix outside the grouped identifier.
 * @evidence contracts/common.md#clear-and-simple-design One private expression owns the lexical contract, without binary decoding or identifier-version dispatch.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Group lengths and the optional prefix are format constants applied uniformly, not known identifier or consumer exceptions.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 */
export const _isFormatUuid = (str: string): boolean => PATTERN.test(str);

const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
