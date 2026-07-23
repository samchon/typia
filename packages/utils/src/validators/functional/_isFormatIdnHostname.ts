export const _isFormatIdnHostname = (str: string): boolean => PATTERN.test(str);

// The ASCII `hostname` structure with the label character class extended by the
// non-ASCII range: every valid host name is a valid IDN host name, so this must
// accept a single label, a one-to-63-character label in any position, and a
// name up to 253 characters, exactly as `_isFormatHostname` does (issue #2317).
const PATTERN =
  /^(?=.{1,253}\.?$)[a-z0-9\u00a1-\uffff](?:[a-z0-9\u00a1-\uffff-]{0,61}[a-z0-9\u00a1-\uffff])?(?:\.[a-z0-9\u00a1-\uffff](?:[a-z0-9\u00a1-\uffff-]{0,61}[a-z0-9\u00a1-\uffff])?)*\.?$/i;
