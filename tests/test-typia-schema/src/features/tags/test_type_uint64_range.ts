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
 * Verifies that every uint64 validator enforces the true unsigned 64-bit range.
 *
 * The uint64 bigint path carried a lower bound and no upper bound at all, so any
 * non-negative magnitude was certified; the number path spelled its maximum as
 * `2 ** 64 - 1`, which rounds to `2 ** 64` and admitted an out-of-range value.
 * The lower bound was the only half that ever worked, so it is pinned here as a
 * regression alongside the two that did not. Expectations come from a BigInt
 * oracle, because a `number` cannot represent `2 ** 64 - 1`.
 *
 * 1. Derive every expectation from BigInt comparisons against the true bounds.
 * 2. Accept in-range values, including the largest double below `2 ** 64`.
 * 3. Reject `2 ** 64` on the number path and `2n ** 64n` on the bigint path.
 * 4. Keep rejecting negatives, the one bound that was already enforced.
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
  // NUMBER PATH
  //----
  const numbers: number[] = [
    0,
    1,
    2 ** 53,
    2 ** 63, // in range for uint64, and a real protobuf decode result
    18446744073709549568, // the largest double below 2 ** 64
    -1,
    -(2 ** 63),
    2 ** 64, // one past the true maximum
  ];
  for (const value of numbers) {
    const expected: boolean = oracle(BigInt(value));
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
    TestValidator.equals(`_isTypeUint64(${value})`, false, _isTypeUint64(value));
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
    MAXIMUM,
    2n ** 63n,
    -1n,
    MAXIMUM + 1n,
    2n ** 64n,
    2n ** 200n,
  ];
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

  //----
  // ROUND TRIP
  //----
  // The property that actually matters: typia never certifies a value its own
  // encoder will corrupt.
  for (const value of [MINIMUM, MAXIMUM, 1n, 2n ** 63n]) {
    TestValidator.equals(`round trip ${value} is certified`, true, oracle(value));
    const decoded: typia.Resolved<ITaggedBigint> = typia.protobuf.decode<
      typia.Resolved<ITaggedBigint>
    >(typia.protobuf.encode<ITaggedBigint>({ value }));
    TestValidator.equals(
      `uint64 ${value} survives protobuf unchanged`,
      value,
      decoded.value,
    );
  }
};
