/**
 * Checks the internationalized hostname spelling of the `idn-hostname` format.
 *
 * Accepts the hostname structure with label characters extended to the code
 * units from U+00A1 to U+FFFF. It checks characters and lengths only: IDNA
 * mapping, Punycode and the contextual and bidirectional rules are not applied.
 * Surrogate pairs are accepted as two label code units, so astral characters
 * consume two units of the label and hostname length limits.
 *
 * @evidence contracts/common.md#principled-implementation The ASCII hostname structure is reused with the label class widened to code units from U+00A1 to U+FFFF, so every valid hostname is also a valid IDN hostname as the comment records. Without the `u` flag, both units of a surrogate pair match separately and consume two units of the length limits; this also admits unpaired surrogates. IDNA mapping, Punycode and contextual and bidirectional rules are not applied, so this spelling check is an approximation rather than IDNA validation.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the copy in @typia/utils.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The widening is a stated approximation of IDNA, not a fixture accommodation.
 * @evidence contracts/common.md#meaningful-documentation The doc states the character range and the checks that are absent.
 */
export const _isFormatIdnHostname = (str: string): boolean => PATTERN.test(str);

// The ASCII `hostname` structure with the label character class extended by the
// non-ASCII range: every valid host name is a valid IDN host name, so this must
// accept a single label, a one-to-63-character label in any position, and a
// name up to 253 characters, exactly as `_isFormatHostname` does (issue #2317).
const PATTERN =
  /^(?=.{1,253}\.?$)[a-z0-9\u00a1-\uffff](?:[a-z0-9\u00a1-\uffff-]{0,61}[a-z0-9\u00a1-\uffff])?(?:\.[a-z0-9\u00a1-\uffff](?:[a-z0-9\u00a1-\uffff-]{0,61}[a-z0-9\u00a1-\uffff])?)*\.?$/i;
