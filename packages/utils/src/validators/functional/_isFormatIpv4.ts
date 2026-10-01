/**
 * Checks the dotted-decimal spelling of the `ipv4` format.
 *
 * Accepts exactly four decimal octets from 0 to 255 separated by dots, with no
 * leading zeros.
 *
 * @evidence contracts/common.md#principled-implementation Four octets of 0 to 255 without leading zeros are matched by an alternation of the decimal ranges, so values above 255 and zero-padded octets are rejected.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the typia copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The ranges are the dotted-decimal grammar's.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the octet rule.
 */
export const _isFormatIpv4 = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
