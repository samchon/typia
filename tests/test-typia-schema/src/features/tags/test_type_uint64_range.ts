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
 * Verifies uint64 bounds the number path and only rejects negatives on bigint.
 *
 * The bigint arm must not name a `typia/lib/internal/*` helper. It is declared
 * in `@typia/interface`, which `typia` admits through a caret range that only
 * floats upward, so a named helper makes an older `typia` emit an import it
 * never shipped (#2330). The arm is therefore the `BigInt(0) <= $input` it
 * declared before #2166: a lower bound with no upper bound. The surviving lower
 * bound is what separates this tag from `Type<"int64">`, whose arm checks
 * nothing at all, so both halves are pinned -- the negatives still rejected and
 * the oversized values now accepted. #2338 owns restoring the upper bound, and
 * only a major can carry it: tightening an accepted range rejects data that
 * passes today.
 *
 * 1. Keep the enforced number path, whose helper crosses no package boundary.
 * 2. Require the bigint type tag and `@type uint64` to reject every negative,
 *    accept every non-negative, and still reject a non-bigint, while the
 *    still-published `_isTypeUint64Bigint` keeps the exact bound.
 * 3. Pin both protobuf outcomes against the wire format: an in-range value decodes
 *    unchanged, an accepted oversized value decodes as its unsigned 64-bit
 *    truncation.
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
  // `isTypeUint64` is named by `@typia/interface` 13.0.0 and shipped by `typia`
  // 13.0.0, so it crosses no version boundary and the number path keeps it.
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
  // `_isTypeUint64Bigint` stays published with the exact bound even though the
  // emitted validator no longer reaches it: a `typia` that ships the helper can
  // still satisfy an `@typia/interface` that names it, which is the other
  // direction of the same compatibility problem. So the helper and the tag are
  // asserted separately, and the values where they now disagree are the gap.
  const bigints: bigint[] = [
    0n,
    1n,
    MAXIMUM,
    2n ** 63n,
    -1n,
    -(2n ** 200n),
    MAXIMUM + 1n,
    2n ** 200n,
  ];
  for (const value of bigints) {
    const expected: boolean = oracle(value);
    TestValidator.equals(
      `_isTypeUint64Bigint(${value}) === ${expected}`,
      expected,
      _isTypeUint64Bigint(value),
    );
    // the surviving lower bound is the whole check, so the tag answers
    // `0n <= value` rather than the width
    TestValidator.equals(
      `bigint type tag on ${value} === ${MINIMUM <= value}`,
      MINIMUM <= value,
      typia.is<ITaggedBigint>({ value }),
    );
    TestValidator.equals(
      `bigint comment tag on ${value} === ${MINIMUM <= value}`,
      MINIMUM <= value,
      typia.is<ICommentBigint>({ value }),
    );
  }

  // The gap is the oversized members, and the negatives are outside it because
  // the lower bound survives. The loop above asserts both of those on every
  // member; what it cannot defend is its own input, since a boundary list later
  // trimmed to in-range values would still pass while proving nothing. So both
  // kinds are counted rather than assumed.
  const oversized: number = bigints.filter((value) => MAXIMUM < value).length;
  const negative: number = bigints.filter((value) => value < MINIMUM).length;
  if (oversized === 0 || negative === 0)
    throw new Error(
      "the bigint boundary list needs an oversized and a negative value.",
    );

  // A bigint tag still rejects a non-bigint, so the lower bound replaced the
  // range check and not the type check.
  for (const value of [0, "0", null])
    TestValidator.equals(
      `bigint type tag rejects the non-bigint ${JSON.stringify(value)}`,
      false,
      typia.is<ITaggedBigint>({ value: value as unknown as bigint }),
    );

  //----
  // PROTOBUF ROUND TRIP
  //----
  // A protobuf `uint64` field is an unsigned 64-bit varint: the writer emits the
  // low 64 bits and the reader reads them back unsigned, so a value outside that
  // width decodes as `BigInt.asUintN(64, value)`. The oracle is the wire format,
  // not typia's output.
  for (const value of [MINIMUM, MAXIMUM, 1n, 2n ** 63n]) {
    TestValidator.equals(
      `round trip ${value} is in range`,
      true,
      oracle(value),
    );
    TestValidator.equals(
      `uint64 ${value} decodes unchanged`,
      value,
      roundTrip(value),
    );
  }

  // Above the width, typia certifies a value its own encoder truncates. That is
  // the cost of the missing upper bound, and #2338 owns closing it; until then
  // it is pinned here rather than left untested.
  for (const value of [MAXIMUM + 1n, 2n ** 64n + 7n, 2n ** 200n + 3n]) {
    TestValidator.equals(
      `${value} is out of uint64 range`,
      false,
      oracle(value),
    );
    TestValidator.equals(
      `typia certifies the oversized ${value}`,
      true,
      typia.is<ITaggedBigint>({ value }),
    );
    const truncated: bigint = BigInt.asUintN(64, value);
    TestValidator.notEquals(
      `the uint64 decode of ${value} is a different value`,
      value,
      truncated,
    );
    TestValidator.equals(
      `uint64 ${value} comes back truncated to ${truncated}`,
      truncated,
      roundTrip(value),
    );
  }
};

const roundTrip = (value: bigint): bigint =>
  typia.protobuf.decode<typia.Resolved<ITaggedBigint>>(
    typia.protobuf.encode<ITaggedBigint>({ value }),
  ).value;
