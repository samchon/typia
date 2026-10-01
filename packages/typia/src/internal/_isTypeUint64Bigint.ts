/**
 * Test whether a bigint is in the unsigned 64-bit range, exactly.
 *
 * @evidence contracts/common.md#principled-implementation The exact inclusive uint64 range is compared on bigints, with the maximum built from a decimal string so it is not rounded.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The string is what keeps the bound exact.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the string.
 */
export const _isTypeUint64Bigint = (value: bigint): boolean =>
  MINIMUM <= value && value <= MAXIMUM;

// See `_isTypeInt64Bigint`: the bound is exact only because the argument is a
// string, and `bigint` can represent the true inclusive maximum.
const MINIMUM = BigInt(0);
const MAXIMUM = BigInt("18446744073709551615");
