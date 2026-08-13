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
 * Verifies int64 bounds the number path and leaves the bigint path unchecked.
 *
 * The bigint arm must not name a `typia/lib/internal/*` helper. It is declared
 * in `@typia/interface`, which `typia` admits through a caret range that only
 * floats upward, so a named helper makes an older `typia` emit an import it
 * never shipped (#2330). The arm is therefore the bare `true` it declared
 * before #2166, which enforces nothing -- and an unenforced bound is invisible
 * unless the gap is pinned, so this file asserts the accepted out-of-range
 * values and the protobuf round trips that then corrupt them. #2338 owns
 * restoring the bound, and only a major can carry it: tightening an accepted
 * range rejects data that passes today.
 *
 * 1. Keep the enforced number path, whose helper crosses no package boundary.
 * 2. Require the bigint type tag and `@type int64` to accept every bigint and
 *    still reject a non-bigint, while the still-published `_isTypeInt64Bigint`
 *    keeps the exact bound.
 * 3. Pin both protobuf outcomes against the wire format: an in-range value decodes
 *    unchanged, an accepted out-of-range value decodes as its two's-complement
 *    64-bit truncation.
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
  // NUMBER PATH
  //----
  // `isTypeInt64` is named by `@typia/interface` 13.0.0 and shipped by `typia`
  // 13.0.0, so it crosses no version boundary and the number path keeps it.
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
  // `_isTypeInt64Bigint` stays published with the exact bound even though the
  // emitted validator no longer reaches it: a `typia` that ships the helper can
  // still satisfy an `@typia/interface` that names it, which is the other
  // direction of the same compatibility problem. So the helper and the tag are
  // asserted separately, and the values where they now disagree are the gap.
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
      `bigint type tag accepts ${value}`,
      true,
      typia.is<ITaggedBigint>({ value }),
    );
    TestValidator.equals(
      `bigint comment tag accepts ${value}`,
      true,
      typia.is<ICommentBigint>({ value }),
    );
  }

  // The gap is the out-of-range members: the loop above asserts the helper
  // rejects each one and the tag accepts it anyway, which is the whole
  // disagreement. What that loop cannot defend is its own input -- a boundary
  // list later trimmed to in-range values would still pass while proving
  // nothing -- so the out-of-range members are counted rather than assumed.
  const unenforced: number = bigints.filter(
    (value) => oracle(value) === false,
  ).length;
  if (unenforced === 0)
    throw new Error("the bigint boundary list carries no out-of-range value.");

  // A bigint tag still rejects a non-bigint, so `true` replaced the range check
  // and not the type check.
  for (const value of [0, "0", null])
    TestValidator.equals(
      `bigint type tag rejects the non-bigint ${JSON.stringify(value)}`,
      false,
      typia.is<ITaggedBigint>({ value: value as unknown as bigint }),
    );

  //----
  // PROTOBUF ROUND TRIP
  //----
  // A protobuf `int64` field is a two's-complement 64-bit varint: the writer
  // emits the low 64 bits and the reader reads them back signed, so a value
  // outside that width decodes as `BigInt.asIntN(64, value)`. The oracle is the
  // wire format, not typia's output.
  for (const value of [MINIMUM, MAXIMUM, 0n, -1n, 1n, 2n ** 62n]) {
    TestValidator.equals(
      `round trip ${value} is in range`,
      true,
      oracle(value),
    );
    TestValidator.equals(
      `int64 ${value} decodes unchanged`,
      value,
      roundTrip(value),
    );
  }

  // Outside the width, typia certifies a value its own encoder truncates. That
  // is the cost of the unenforced bound, and #2338 owns closing it; until then
  // it is pinned here rather than left untested.
  for (const value of [
    MAXIMUM + 1n,
    MINIMUM - 1n,
    2n ** 64n + 7n,
    2n ** 200n + 3n,
  ]) {
    TestValidator.equals(
      `${value} is out of int64 range`,
      false,
      oracle(value),
    );
    TestValidator.equals(
      `typia certifies the out-of-range ${value}`,
      true,
      typia.is<ITaggedBigint>({ value }),
    );
    const truncated: bigint = BigInt.asIntN(64, value);
    TestValidator.notEquals(
      `the int64 decode of ${value} is a different value`,
      value,
      truncated,
    );
    TestValidator.equals(
      `int64 ${value} comes back truncated to ${truncated}`,
      truncated,
      roundTrip(value),
    );
  }
};

const roundTrip = (value: bigint): bigint =>
  typia.protobuf.decode<typia.Resolved<ITaggedBigint>>(
    typia.protobuf.encode<ITaggedBigint>({ value }),
  ).value;
