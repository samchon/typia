import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies typia.random never returns a value its own `is` rejects for a string
 * leaf whose only constraint is a non-ASCII character-class pattern.
 *
 * The unbounded pattern path used to fall back to an unchecked `r.gen()`, and
 * RandExp yields `""` for a class of only non-ASCII code points (e.g. `[가-힣]+`
 * or `[À-ÿ]+`), so `random` emitted `""` which fails `Pattern<P>`. RandExp
 * cannot construct any matching value for such a class, so `random` must throw
 * the same way an impossible length window already does, never silently return
 * a non-matching string. This round trip pins both directions.
 *
 * 1. Draw a large sample of each generatable pattern and require every draw to
 *    pass `is` of the same type (ASCII and mixed ASCII+non-ASCII, unchanged).
 * 2. Require each pure non-ASCII class, which RandExp cannot satisfy, to throw on
 *    draw rather than return an `is`-rejected value.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.is, typia.random is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (… (first invalid: …)). The case documents its purpose as: Verifies typia.random never returns a value its own `is` rejects for a string leaf whose only constraint is a non-ASCII character-class pattern.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The unbounded pattern path used to fall back to an unchecked `r.gen()`, and RandExp yields `""` for a class of only non-ASCII code points (e.g. `[가-힣]+` or `[À-ÿ]+`), so `random` emitted `""` which fails `Pattern<P>`. RandExp cannot construct any matching value for such a class, so `random` must throw the same way an impossible length window already does, never silently return a non-matching string. This round trip pins both directions. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… (first invalid: …)) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_string_pattern_non_ascii is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_random_string_pattern_non_ascii = (): void => {
  // POSITIVE: generatable patterns still round-trip through `is`, unchanged.
  {
    // ASCII-only control.
    type T = string & tags.Pattern<"^[0-9]+$">;
    const create = typia.createRandom<T>();
    roundTrip(
      "ascii pattern",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // Mixed ASCII+non-ASCII class: RandExp draws from the ASCII sub-range.
    type T = string & tags.Pattern<"[a-z가-힣]+">;
    const create = typia.createRandom<T>();
    roundTrip(
      "mixed pattern",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // Mixed class with a bounded quantifier stays generatable and accepted.
    type T = string & tags.Pattern<"[a-z가-힣]{3,8}">;
    const create = typia.createRandom<T>();
    roundTrip(
      "mixed bounded-quantifier pattern",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }
  {
    // Mixed class carrying typia length tags exercises the bounded path.
    type T = string &
      tags.Pattern<"[a-z가-힣]+"> &
      tags.MinLength<3> &
      tags.MaxLength<8>;
    const create = typia.createRandom<T>();
    roundTrip(
      "mixed pattern & length window",
      (v) => typia.is<T>(v),
      () => typia.random<T>(),
      () => create(),
    );
  }

  // NEGATIVE: a pure non-ASCII class RandExp cannot satisfy must throw on draw,
  // never return the `is`-rejected `""` the unbounded fallback used to emit.
  assertThrows("korean class +", () =>
    typia.random<string & tags.Pattern<"[가-힣]+">>(),
  );
  assertThrows("latin-1 class +", () =>
    typia.random<string & tags.Pattern<"[À-ÿ]+">>(),
  );
  assertThrows("latin-1 class bounded quantifier", () =>
    typia.random<string & tags.Pattern<"[À-ÿ]{2,4}">>(),
  );
  assertThrows("korean class anchored", () =>
    typia.random<string & tags.Pattern<"^[가-힣]+$">>(),
  );
  assertThrows("korean single-codepoint class", () =>
    typia.random<string & tags.Pattern<"[가-힣]">>(),
  );
};

const COUNT = 1_000;

const roundTrip = (
  title: string,
  is: (input: unknown) => boolean,
  ...draws: Array<() => unknown>
): void => {
  let failures: number = 0;
  let first: string | null = null;
  for (let i = 0; i < COUNT; ++i) {
    const value: unknown = draws[i % draws.length]!();
    if (is(value) === false) {
      ++failures;
      if (first === null) first = String(value);
    }
  }
  TestEquality.equals(`${title} (first invalid: ${first})`, failures, 0);
};

const assertThrows = (title: string, closure: () => unknown): void => {
  let thrown: boolean = false;
  try {
    closure();
  } catch {
    thrown = true;
  }
  TestEquality.equals(title, thrown, true);
};
