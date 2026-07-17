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
 * Verifies that the int64 validators enforce the signed 64-bit range on both the
 * number and bigint paths.
 *
 * int64-max is `2 ** 63 - 1`, which no `number` can represent -- it rounds to
 * `2 ** 63` -- so the number path accepts `2 ** 63` as int64-max's only float
 * form. The bigint path represents the bound exactly, so it enforces the true
 * inclusive range and still rejects magnitudes such as `2n ** 200n` that the
 * bare-`true` bigint validator used to certify.
 *
 * 1. Accept in-range numbers, including int64-max's float form `2 ** 63`.
 * 2. Enforce the exact inclusive bounds on the bigint path from a BigInt oracle.
 * 3. Require every certified bigint to survive a protobuf round trip unchanged.
 */
export const test_type_int64_range = (): void => {
  const MINIMUM: bigint = -(2n ** 63n);
  const MAXIMUM: bigint = 2n ** 63n - 1n;
  const oracle = (value: bigint): boolean =>
    MINIMUM <= value && value <= MAXIMUM;

  // The oracle must be able to represent the boundary the validators cannot.
  TestValidator.equals("2 ** 63 is not an int64", false, oracle(BigInt(2 ** 63)));
  TestValidator.equals(
    "the largest double below 2 ** 63 is an int64",
    true,
    oracle(BigInt(9223372036854774784)),
  );

  //----
  // NUMBER PATH
  //----
  // int64-max is `2 ** 63 - 1`, which rounds to `2 ** 63` as a `number`, so the
  // number path accepts `2 ** 63`: no double can distinguish the two. `2 ** 64`
  // and beyond stay out of range.
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
    MINIMUM,
    MAXIMUM,
    MINIMUM - 1n,
    MAXIMUM + 1n,
    2n ** 64n,
    2n ** 200n,
    -(2n ** 200n),
  ];
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

  //----
  // ROUND TRIP
  //----
  // On the exact bigint path, typia never certifies a value its own encoder will
  // corrupt: every in-range bigint survives protobuf byte-for-byte.
  for (const value of [MINIMUM, MAXIMUM, 0n, -1n, 1n, 2n ** 62n]) {
    TestValidator.equals(`round trip ${value} is certified`, true, oracle(value));
    const decoded: typia.Resolved<ITaggedBigint> = typia.protobuf.decode<
      typia.Resolved<ITaggedBigint>
    >(typia.protobuf.encode<ITaggedBigint>({ value }));
    TestValidator.equals(
      `int64 ${value} survives protobuf unchanged`,
      value,
      decoded.value,
    );
  }
};
