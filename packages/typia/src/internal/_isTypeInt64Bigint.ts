/**
 * Test whether a bigint is in the signed 64-bit range, exactly.
 *
 * @evidence contracts/common.md#principled-implementation The exact inclusive int64 range is compared on bigints built from decimal strings, since a number literal would round the bound to 2^63 before BigInt saw it.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants built from strings.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The strings are what keep the bound exact, as the comment explains.
 * @evidence contracts/common.md#meaningful-documentation The comment explains why the bounds are strings.
 */
export const _isTypeInt64Bigint = (value: bigint): boolean =>
  MINIMUM <= value && value <= MAXIMUM;

// Unlike the `number` path, a `bigint` represents both bounds exactly, so this
// is the true inclusive int64 range rather than an exclusive approximation.
//
// The arguments must stay strings. `BigInt(9223372036854775807)` rounds its
// `number` literal to `2 ** 63` before `BigInt` ever sees it, which is the
// defect this helper exists to close; `BigInt("9223372036854775807")` parses
// the digits directly and is exact.
const MINIMUM = -BigInt("9223372036854775808");
const MAXIMUM = BigInt("9223372036854775807");
