import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies random pattern generation measures its length window in characters.
 *
 * `MinLength` and `MaxLength` count Unicode characters, so the retry filter in
 * `_randomPattern` has to count them too. RandExp quantifies over UTF-16 code
 * units, so a pattern carrying an astral character emits draws whose two counts
 * differ: under `Pattern<"^😀+$"> & MinLength<3>` a code-unit filter accepts a
 * three-unit draw that is only two characters long, and `typia.random` would
 * hand back a value its own `typia.is` rejects. Every other string generator
 * draws from an ASCII alphabet, where the two counts agree, so this pattern is
 * the reachable case.
 *
 * 1. Confirm the pattern really produces draws whose two counts differ, so the
 *    case cannot go vacuous.
 * 2. Require every draw of a lower-bounded, an upper-bounded, and a two-sided
 *    astral window to satisfy its own type through both random APIs.
 * 3. Keep an ASCII control, where the two measures cannot disagree.
 */
export const test_random_astral_pattern_length_window = (): void => {
  type AtLeastThree = string & tags.Pattern<"^😀+$"> & tags.MinLength<3>;
  type AtMostThree = string & tags.Pattern<"^😀+$"> & tags.MaxLength<3>;
  type Window = string &
    tags.Pattern<"^😀+$"> &
    tags.MinLength<2> &
    tags.MaxLength<4>;
  type Ascii = string & tags.Pattern<"^a+$"> & tags.MinLength<3>;

  let diverging: number = 0;
  const check = (
    title: string,
    is: (input: unknown) => boolean,
    ...draws: Array<() => string>
  ): void => {
    let failures: number = 0;
    let first: string | null = null;
    for (let i: number = 0; i < 200; ++i) {
      const value: string = draws[i % draws.length]!();
      if ([...value].length !== value.length) ++diverging;
      if (is(value) === false) {
        ++failures;
        if (first === null) first = JSON.stringify(value);
      }
    }
    TestValidator.equals(`${title} (first invalid: ${first})`, failures, 0);
  };

  const atLeastThree = typia.createRandom<AtLeastThree>();
  check(
    "astral pattern with a lower bound",
    (v) => typia.is<AtLeastThree>(v),
    () => typia.random<AtLeastThree>(),
    () => atLeastThree(),
  );

  const atMostThree = typia.createRandom<AtMostThree>();
  check(
    "astral pattern with an upper bound",
    (v) => typia.is<AtMostThree>(v),
    () => typia.random<AtMostThree>(),
    () => atMostThree(),
  );

  const window = typia.createRandom<Window>();
  check(
    "astral pattern with a two-sided window",
    (v) => typia.is<Window>(v),
    () => typia.random<Window>(),
    () => window(),
  );

  // Every draw above is astral, so every one must have carried two different
  // counts. A pattern later changed to an ASCII class would leave the loops
  // passing while proving nothing about the measure.
  TestValidator.equals(
    "every astral draw carried two different counts",
    diverging,
    600,
  );

  const ascii = typia.createRandom<Ascii>();
  check(
    "ascii control",
    (v) => typia.is<Ascii>(v),
    () => typia.random<Ascii>(),
    () => ascii(),
  );
};
