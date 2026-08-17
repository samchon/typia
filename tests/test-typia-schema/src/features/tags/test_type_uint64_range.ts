import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";
import { _isTypeUint64 } from "typia/lib/internal/_isTypeUint64";
import { _isTypeUint64Bigint } from "typia/lib/internal/_isTypeUint64Bigint";

interface ITaggedNumber {
  value: number & tags.Type<"uint64">;
}

interface ICommentNumber {
  /** @type uint64 */
  value: number;
}

interface ITaggedBigint {
  value: bigint & tags.Type<"uint64">;
}

interface ICommentBigint {
  /** @type uint64 */
  value: bigint;
}

/**
 * Verifies uint64 enforces the unsigned 64-bit range on the number and bigint
 * paths.
 *
 * Uint64-max is `2 ** 64 - 1`, which no `number` can represent — it rounds to
 * `2 ** 64` — so the number path accepts `2 ** 64` as that maximum's only float
 * form. A `bigint` represents the bound exactly, so its arm holds the true
 * inclusive range; it used to carry a lower bound and no upper one, which
 * certified `2n ** 64n` while `typia.protobuf.encode` truncated it. The oracle
 * is a BigInt comparison and the Protocol Buffer wire format, never typia's own
 * output.
 *
 * 1. Keep the number path's behavior, boundary float form included.
 * 2. Enforce the exact inclusive bigint bounds through the type tag, the `@type`
 *    spelling, and the helper, one step outside each bound included.
 * 3. Require every certified bigint to survive a protobuf round trip unchanged,
 *    and a value one step outside to be rejected before encoding.
 * 4. Require `typia.random` output for the constrained type to satisfy it.
 */
export const test_type_uint64_range = (): void => {
  const MINIMUM: bigint = 0n;
  const MAXIMUM: bigint = 2n ** 64n - 1n;
  const oracle = (value: bigint): boolean =>
    MINIMUM <= value && value <= MAXIMUM;

  // The oracle must be able to represent the boundary the validators cannot.
  TestValidator.equals(
    "2 ** 64 is not a uint64",
    false,
    oracle(BigInt(2 ** 64)),
  );
  TestValidator.equals(
    "the largest double below 2 ** 64 is a uint64",
    true,
    oracle(BigInt(18446744073709549568)),
  );

  //----
  // NUMBER PATH -- unchanged, and the control a mutation proof needs
  //----
  const numbers: [number, boolean][] = [
    [0, true],
    [1, true],
    [2 ** 53, true],
    [2 ** 63, true], // in range for uint64, and a real protobuf decode result
    [18446744073709549568, true], // the largest double below 2 ** 64
    [-1, false],
    [-(2 ** 63), false],
    [2 ** 64, true], // uint64-max's only float form
  ];
  for (const [value, expected] of numbers) {
    TestValidator.equals(
      `_isTypeUint64(${value}) === ${expected}`,
      expected,
      _isTypeUint64(value),
    );
    TestValidator.equals(
      `number type tag on ${value} === ${expected}`,
      expected,
      typia.is<ITaggedNumber>({ value }),
    );
    TestValidator.equals(
      `number comment tag on ${value} === ${expected}`,
      expected,
      typia.is<ICommentNumber>({ value }),
    );
  }

  // A non-integer is never a uint64, whatever its magnitude.
  for (const value of [0.5, 1.5]) {
    TestValidator.equals(
      `_isTypeUint64(${value})`,
      false,
      _isTypeUint64(value),
    );
    TestValidator.equals(
      `number type tag on ${value}`,
      false,
      typia.is<ITaggedNumber>({ value }),
    );
  }

  //----
  // BIGINT PATH
  //----
  const bigints: bigint[] = [
    MINIMUM, // exact inclusive minimum
    1n,
    2n ** 63n,
    MAXIMUM, // exact inclusive maximum
    MINIMUM - 1n, // one step below
    MAXIMUM + 1n, // one step above
    2n ** 64n,
    2n ** 200n,
  ];
  // The list has to carry values on both sides of both bounds, or the loop
  // below could pass while proving only one direction.
  TestValidator.equals(
    "the bigint boundary list straddles both bounds",
    [
      bigints.filter((value) => oracle(value)).length,
      bigints.filter((value) => oracle(value) === false).length,
    ],
    [4, 4],
  );
  for (const value of bigints) {
    const expected: boolean = oracle(value);
    TestValidator.equals(
      `_isTypeUint64Bigint(${value}) === ${expected}`,
      expected,
      _isTypeUint64Bigint(value),
    );
    TestValidator.equals(
      `bigint type tag on ${value} === ${expected}`,
      expected,
      typia.is<ITaggedBigint>({ value }),
    );
    TestValidator.equals(
      `bigint comment tag on ${value} === ${expected}`,
      expected,
      typia.is<ICommentBigint>({ value }),
    );
  }

  // The upper bound replaced nothing else: a non-bigint is still rejected.
  for (const value of [0, "0", null])
    TestValidator.equals(
      `bigint type tag rejects the non-bigint ${JSON.stringify(value)}`,
      false,
      typia.is<ITaggedBigint>({ value: value as unknown as bigint }),
    );

  //----
  // PROTOBUF ROUND TRIP
  //----
  // typia no longer certifies a value its own encoder corrupts: every accepted
  // bigint decodes back to itself, and the first value past the bound is
  // rejected before `assertEncode` ever writes a varint.
  for (const value of [MINIMUM, MAXIMUM, 1n, 2n ** 63n]) {
    TestValidator.equals(
      `round trip ${value} is certified`,
      true,
      typia.is<ITaggedBigint>({ value }),
    );
    TestValidator.equals(
      `uint64 ${value} decodes unchanged`,
      value,
      typia.protobuf.decode<typia.Resolved<ITaggedBigint>>(
        typia.protobuf.encode<ITaggedBigint>({ value }),
      ).value,
    );
  }
  for (const value of [MAXIMUM + 1n, 2n ** 200n + 3n]) {
    // The truncation this used to produce, from the wire format rather than
    // from typia: a 64-bit varint read back unsigned is
    // `BigInt.asUintN(64, …)`.
    TestValidator.notEquals(
      `${value} would decode as a different value`,
      value,
      BigInt.asUintN(64, value),
    );
    let encoded: boolean = true;
    try {
      typia.protobuf.assertEncode<ITaggedBigint>({ value });
    } catch {
      encoded = false;
    }
    TestValidator.equals(
      `assertEncode rejects the out-of-range ${value}`,
      encoded,
      false,
    );
  }

  //----
  // RANDOM ROUND TRIP
  //----
  for (let i: number = 0; i < 100; ++i) {
    TestValidator.equals(
      `random bigint uint64 satisfies its type at ${i}`,
      typia.is<ITaggedBigint>(typia.random<ITaggedBigint>()),
      true,
    );
    TestValidator.equals(
      `random BigUint64Array elements satisfy uint64 at ${i}`,
      [...typia.random<BigUint64Array>()].every((value) => oracle(value)),
      true,
    );
  }
};
