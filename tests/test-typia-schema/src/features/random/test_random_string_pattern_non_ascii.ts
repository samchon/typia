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
 * @evidence contracts/testing.md#behavioral-verification Four ASCII or mixed-character pattern populations alternate direct/factory draws1000 times and require generated is acceptance; five pure non-ASCII unsupported pattern draws must throw.
 * @evidence contracts/testing.md#independent-expectations The declared regex domains establish which existing RandExp-supported patterns can produce values; the positive generated validator is correlated, and thrown negatives check generation failure without certifying the exact error class.
 * @evidence contracts/testing.md#distinguishing-cases ASCII, mixed unbounded/bounded quantifiers and mixed length tags distinguish supported paths from Korean/Latin1 pure classes, anchored and single-codepoint negatives. This documents current generator limitations, not a general Unicode regex guarantee.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_string_pattern_non_ascii in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
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
