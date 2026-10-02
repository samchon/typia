import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification Direct/factory draws alternate200 times for each astral lower, upper and two-sided length window; generated is must reject no draw,600 astral draws must differ in UTF16 and code-point counts, and ASCII is a control.
 * @evidence contracts/testing.md#independent-expectations The count divergence is independently measured by string.length versus iteration over code points. The generated pattern/length validator remains a correlated oracle and does not independently prove every length bound.
 * @evidence contracts/testing.md#distinguishing-cases Lower-only, upper-only and2..4 windows plus ASCII control retain all600 astral and200 ASCII draws. This sample does not certify distribution or exhaustive Unicode support.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_astral_pattern_length_window in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
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
    TestEquality.equals(`${title} (first invalid: ${first})`, failures, 0);
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
  TestEquality.equals(
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
