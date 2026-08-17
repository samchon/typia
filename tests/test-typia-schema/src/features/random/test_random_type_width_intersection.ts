import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies random generation draws inside the `Type<...>` width, not only
 * inside the declared range.
 *
 * The width never reaches the schema — a `Type<...>` tag contributes `{ "type":
 * "integer" }`, or `{ "type": "integer", "minimum": 0 }` when unsigned, while
 * the range itself lives in the tag's runtime check. So `_randomInteger`, which
 * reads only the schema, drew from whatever `Minimum` / `Maximum` declared and
 * handed back values the generated validator rejects: `Type<"int32"> &
 * Minimum<-1e12> & Maximum<1e12>` failed its own `is` on 499 of 500 draws, and
 * `Type<"uint8"> & Maximum<10000>` on 486 (#2348).
 *
 * The clip must not work by simply imposing the width, which would widen a
 * window the author narrowed. Both directions are asserted here.
 *
 * 1. Require every draw of a window wider than its width to satisfy its own type,
 *    across both paths and several widths.
 * 2. Require a window narrower than its width to still be honoured exactly,
 *    inclusive and exclusive.
 * 3. Require a window with no overlap at all to keep throwing, which is how an
 *    unsatisfiable range already behaves.
 */
export const test_random_type_width_intersection = (): void => {
  const DRAWS = 500;

  //----
  // 1. a window wider than the width
  //----
  type WideInt32 = number &
    tags.Type<"int32"> &
    tags.Minimum<-1000000000000> &
    tags.Maximum<1000000000000>;
  type WideUint8 = number &
    tags.Type<"uint8"> &
    tags.Minimum<0> &
    tags.Maximum<10000>;
  type WideBigInt64 = bigint &
    tags.Type<"int64"> &
    tags.Minimum<-10000000000000000000n> &
    tags.Maximum<10000000000000000000n>;
  type WideBigUint64 = bigint &
    tags.Type<"uint64"> &
    tags.Minimum<0n> &
    tags.Maximum<20000000000000000000n>;

  const rejected = (draw: () => unknown, is: (v: never) => boolean): number => {
    let count: number = 0;
    for (let i: number = 0; i < DRAWS; ++i)
      if (is(draw() as never) === false) ++count;
    return count;
  };

  TestValidator.equals(
    "int32 draws inside its width",
    rejected(
      () => typia.random<WideInt32>(),
      (v) => typia.is<WideInt32>(v),
    ),
    0,
  );
  TestValidator.equals(
    "uint8 draws inside its width",
    rejected(
      () => typia.random<WideUint8>(),
      (v) => typia.is<WideUint8>(v),
    ),
    0,
  );
  TestValidator.equals(
    "bigint int64 draws inside its width",
    rejected(
      () => typia.random<WideBigInt64>(),
      (v) => typia.is<WideBigInt64>(v),
    ),
    0,
  );
  TestValidator.equals(
    "bigint uint64 draws inside its width",
    rejected(
      () => typia.random<WideBigUint64>(),
      (v) => typia.is<WideBigUint64>(v),
    ),
    0,
  );

  //----
  // 2. a window narrower than the width, which must survive untouched
  //----
  type NarrowInclusive = number &
    tags.Type<"int32"> &
    tags.Minimum<-10> &
    tags.Maximum<10>;
  type NarrowExclusive = number &
    tags.Type<"int32"> &
    tags.ExclusiveMinimum<-5> &
    tags.ExclusiveMaximum<5>;

  const inclusive = new Set<number>();
  const exclusive = new Set<number>();
  for (let i: number = 0; i < DRAWS; ++i) {
    inclusive.add(typia.random<NarrowInclusive>());
    exclusive.add(typia.random<NarrowExclusive>());
  }
  TestValidator.equals(
    "an inclusive window narrower than the width is honoured",
    [
      [...inclusive].every((value) => value >= -10 && value <= 10),
      inclusive.size > 1,
    ],
    [true, true],
  );
  TestValidator.equals(
    "an exclusive window narrower than the width is honoured",
    [
      [...exclusive].every((value) => value > -5 && value < 5),
      exclusive.size > 1,
    ],
    [true, true],
  );

  // The narrow windows must actually be narrow, or the assertions above would
  // hold for a generator that ignored them and drew from the full width.
  TestValidator.equals(
    "the narrow windows are narrower than int32",
    [inclusive.size <= 21, exclusive.size <= 9],
    [true, true],
  );

  //----
  // 3. no overlap at all -- unchanged, still a throw
  //----
  type Impossible = number &
    tags.Type<"uint8"> &
    tags.Minimum<300> &
    tags.Maximum<400>;
  let thrown: boolean = false;
  try {
    typia.random<Impossible>();
  } catch {
    thrown = true;
  }
  TestValidator.equals("a window outside the width throws", thrown, true);
};
