import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";
import { _isTypeInt64 } from "typia/lib/internal/_isTypeInt64";
import { _isTypeInt64Bigint } from "typia/lib/internal/_isTypeInt64Bigint";

interface ITaggedNumber {
  value: number & tags.Type<"int64">;
}

interface ICommentNumber {
  /** @type int64 */
  value: number;
}

interface ITaggedBigint {
  value: bigint & tags.Type<"int64">;
}

interface ICommentBigint {
  /** @type int64 */
  value: bigint;
}

/**
 * Verifies int64 enforces the signed 64-bit range on the number and bigint
 * paths.
 *
 * Int64-max is `2 ** 63 - 1`, which no `number` can represent — it rounds to `2
 * ** 63` — so the number path accepts `2 ** 63` as that maximum's only float
 * form. A `bigint` represents both bounds exactly, so its arm holds the true
 * inclusive range; it used to be the literal `true`, which certified any
 * magnitude at all while `typia.protobuf.encode` truncated the value to 64
 * bits. The oracle is a BigInt comparison and the Protocol Buffer wire format,
 * never typia's own output.
 *
 * 1. Keep the number path's behavior, boundary float form included.
 * 2. Enforce the exact inclusive bigint bounds through the type tag, the `@type`
 *    spelling, and the helper, one step outside each bound included.
 * 3. Require every certified bigint to survive a protobuf round trip unchanged,
 *    and a value one step outside to be rejected before encoding.
 * 4. Require `typia.random` output for the constrained type to satisfy it.
 */
export const test_type_int64_range = (): void => {
  const MINIMUM: bigint = -(2n ** 63n);
  const MAXIMUM: bigint = 2n ** 63n - 1n;
  const oracle = (value: bigint): boolean =>
    MINIMUM <= value && value <= MAXIMUM;

  // The oracle must be able to represent the boundary the validators cannot.
  TestValidator.equals(
    "2 ** 63 is not an int64",
    false,
    oracle(BigInt(2 ** 63)),
  );
  TestValidator.equals(
    "the largest double below 2 ** 63 is an int64",
    true,
    oracle(BigInt(9223372036854774784)),
  );

  //----
  // NUMBER PATH -- unchanged, and the control a mutation proof needs
  //----
  const numbers: [number, boolean][] = [
    [0, true],
    [1, true],
    [-1, true],
    [2 ** 53, true],
    [-(2 ** 53), true],
    [9223372036854774784, true], // the largest double below 2 ** 63
    [-(2 ** 63), true], // the true minimum, exactly representable
    [2 ** 63, true], // int64-max's only float form
    [2 ** 64, false],
    [-(2 ** 64), false],
  ];
  for (const [value, expected] of numbers) {
    TestValidator.equals(
      `_isTypeInt64(${value}) === ${expected}`,
      expected,
      _isTypeInt64(value),
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

  // A non-integer is never an int64, whatever its magnitude.
  for (const value of [0.5, -0.5, 1.5]) {
    TestValidator.equals(`_isTypeInt64(${value})`, false, _isTypeInt64(value));
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
    0n,
    1n,
    -1n,
    MINIMUM, // exact inclusive minimum
    MAXIMUM, // exact inclusive maximum
    MINIMUM - 1n, // one step below
    MAXIMUM + 1n, // one step above
    2n ** 64n,
    2n ** 200n,
    -(2n ** 200n),
  ];
  // The list has to carry values on both sides of both bounds, or the loop
  // below could pass while proving only one direction.
  TestValidator.equals(
    "the bigint boundary list straddles both bounds",
    [
      bigints.filter((value) => oracle(value)).length,
      bigints.filter((value) => oracle(value) === false).length,
    ],
    [5, 5],
  );
  for (const value of bigints) {
    const expected: boolean = oracle(value);
    TestValidator.equals(
      `_isTypeInt64Bigint(${value}) === ${expected}`,
      expected,
      _isTypeInt64Bigint(value),
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

  // The range check replaced nothing else: a non-bigint is still rejected.
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
  for (const value of [MINIMUM, MAXIMUM, 0n, -1n, 1n, 2n ** 62n]) {
    TestValidator.equals(
      `round trip ${value} is certified`,
      true,
      typia.is<ITaggedBigint>({ value }),
    );
    TestValidator.equals(
      `int64 ${value} decodes unchanged`,
      value,
      typia.protobuf.decode<typia.Resolved<ITaggedBigint>>(
        typia.protobuf.encode<ITaggedBigint>({ value }),
      ).value,
    );
  }
  for (const value of [MAXIMUM + 1n, MINIMUM - 1n, 2n ** 200n + 3n]) {
    // The truncation this used to produce, from the wire format rather than
    // from typia: a 64-bit varint read back signed is `BigInt.asIntN(64, …)`.
    TestValidator.notEquals(
      `${value} would decode as a different value`,
      value,
      BigInt.asIntN(64, value),
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
      `random bigint int64 satisfies its type at ${i}`,
      typia.is<ITaggedBigint>(typia.random<ITaggedBigint>()),
      true,
    );
    TestValidator.equals(
      `random BigInt64Array elements satisfy int64 at ${i}`,
      [...typia.random<BigInt64Array>()].every((value) => oracle(value)),
      true,
    );
  }
};
