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
 * Verifies that every int64 validator enforces the true signed 64-bit range.
 *
 * The int64 bound is reproduced by the runtime number helper, the runtime bigint
 * helper, and native JSDoc-tag generation. Two defects hid here at once: the
 * bigint path emitted a literal `true` and checked nothing, and the number path
 * spelled its maximum as `2 ** 63 - 1`, which rounds to `2 ** 63` and admitted
 * an out-of-range value. Every expectation below therefore comes from a BigInt
 * oracle -- a `number` cannot represent `2 ** 63 - 1`, so an expectation written
 * from the specification reproduces the defect inside the test.
 *
 * 1. Derive every expectation from BigInt comparisons against the true bounds.
 * 2. Accept in-range values, including the largest double below `2 ** 63`.
 * 3. Reject `2 ** 63` on the number path and `2n ** 200n` on the bigint path.
 * 4. Require every certified value to survive a protobuf round trip unchanged.
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
  // `2 ** 63` is the nearest double to the unrepresentable maximum, and the
  // value every owner used to admit. The largest double strictly below it is
  // `2 ** 63 - 1024`, a genuine int64 that must still be accepted.
  const numbers: number[] = [
    0,
    1,
    -1,
    2 ** 53,
    -(2 ** 53),
    9223372036854774784, // the largest double below 2 ** 63
    -(2 ** 63), // the true minimum, exactly representable
    2 ** 63, // one past the true maximum
    2 ** 64,
    -(2 ** 64),
  ];
  for (const value of numbers) {
    const expected: boolean = oracle(BigInt(value));
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
  // The property that actually matters, and the one checkable without arguing
  // about literals: typia never certifies a value its own encoder will corrupt.
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
