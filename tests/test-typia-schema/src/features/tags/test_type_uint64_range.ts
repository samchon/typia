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
 * Verifies that the uint64 validators enforce the unsigned 64-bit range on both
 * the number and bigint paths.
 *
 * uint64-max is `2 ** 64 - 1`, which no `number` can represent -- it rounds to
 * `2 ** 64` -- so the number path accepts `2 ** 64` as uint64-max's only float
 * form. The bigint path represents the bound exactly, so it enforces the true
 * inclusive range and still rejects magnitudes such as `2n ** 64n` that the
 * upper-bound-less bigint validator used to certify. Negatives are rejected on
 * both paths.
 *
 * 1. Accept in-range numbers, including uint64-max's float form `2 ** 64`.
 * 2. Enforce the exact inclusive bounds on the bigint path from a BigInt oracle.
 * 3. Require every certified bigint to survive a protobuf round trip unchanged.
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
  // uint64-max is `2 ** 64 - 1`, which rounds to `2 ** 64` as a `number`, so the
  // number path accepts `2 ** 64`: no double can distinguish the two. Negatives
  // stay out of range.
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
  // On the exact bigint path, typia never certifies a value its own encoder will
  // corrupt: every in-range bigint survives protobuf byte-for-byte.
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
