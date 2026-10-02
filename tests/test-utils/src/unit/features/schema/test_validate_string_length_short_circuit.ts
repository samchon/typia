import { TestEquality } from "@typia/template/equality";
import { _stringLengthGte } from "typia/lib/internal/_stringLengthGte";
import { _stringLengthLte } from "typia/lib/internal/_stringLengthLte";

/**
 * Verifies the string-length comparison helpers preserve exact code-point
 * semantics while stopping once a boundary determines their result.
 *
 * The generated validators no longer compute a complete numeric length for
 * `MinLength` and `MaxLength`. The replacement predicates must remain equal to
 * comparing `[...value].length`, including zero, fractional, and Unicode cases,
 * and their loops must not read beyond a decisive character.
 *
 * 1. Compare both helpers with a code-point-count oracle over boundary values.
 * 2. Count reads with a test-owned iterable probe, leaving global methods intact.
 * 3. Require zero-bound checks to return without opening the iterator at all.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct _stringLengthGte/_stringLengthLte calls retain the full primitive-string/boundary matrix. Test-owned iterable probes additionally pin true/false results, decisive next() counts and zero iterator openings without changing global String.prototype.
 * @evidence contracts/testing.md#independent-expectations The primitive matrix compares against [...value].length and JavaScript relational semantics; the six-character authored probe independently establishes 2/3 decisive reads and zero reads/openings for already-decided bounds. The probe observes iterable consumption, while the primitive matrix establishes supported string behavior.
 * @evidence contracts/testing.md#distinguishing-cases All six empty/ASCII/astral/regional/ZWJ string values and nine negative/zero/fractional/infinite/NaN bounds remain. Minimum/maximum thresholds and zero/negative immediate decisions retain every original assertion; iterator-opening controls strengthen the immediate-decision checks.
 * @evidence contracts/testing.md#execution-ownership The plugin-free test-utils unit runner explicitly registers test_validate_string_length_short_circuit under tsconfig.unit.json and --no-plugins. It calls the owning runtime predicates directly; the observation input is local and no native artifact, consumer installation or process host is needed.
 */
export const test_validate_string_length_short_circuit = (): void => {
  const values: string[] = [
    "",
    "a",
    "\u{1f600}",
    "a\u{1f600}",
    "\u{1f1f0}\u{1f1f7}",
    "\u{1f468}\u200d\u{1f469}\u200d\u{1f467}",
  ];
  const boundaries: number[] = [
    -1,
    0,
    0.5,
    1,
    1.5,
    2,
    5,
    Number.POSITIVE_INFINITY,
    Number.NaN,
  ];
  for (const value of values)
    for (const boundary of boundaries) {
      const length: number = [...value].length;
      const label: string = `${JSON.stringify(value)} against ${boundary}`;
      TestEquality.equals(
        `greater-than-or-equal ${label}`,
        _stringLengthGte(value, boundary),
        length >= boundary,
      );
      TestEquality.equals(
        `less-than-or-equal ${label}`,
        _stringLengthLte(value, boundary),
        length <= boundary,
      );
    }

  // Test-owned iterable probes observe the helpers' for-of consumption without
  // replacing String.prototype or any foreign runtime method. Primitive-string
  // semantics are independently pinned by the complete matrix above.
  const observe = (task: (value: string) => boolean) => {
    let reads = 0;
    let opens = 0;
    const probe = {
      [Symbol.iterator](): IterableIterator<string> {
        ++opens;
        const iterator = "abcdef"[Symbol.iterator]();
        return {
          next: (): IteratorResult<string> => {
            ++reads;
            return iterator.next();
          },
          [Symbol.iterator](): IterableIterator<string> {
            return this;
          },
        };
      },
    };
    const result = task(probe as unknown as string);
    return { result, reads, opens };
  };
  const minimum = observe((value) => _stringLengthGte(value, 2));
  const maximum = observe((value) => _stringLengthLte(value, 2));
  const zeroMinimum = observe((value) => _stringLengthGte(value, 0));
  const negativeMaximum = observe((value) => _stringLengthLte(value, -1));
  TestEquality.equals("minimum result", minimum.result, true);
  TestEquality.equals("minimum decisive reads", minimum.reads, 2);
  TestEquality.equals("maximum result", maximum.result, false);
  TestEquality.equals("maximum decisive reads", maximum.reads, 3);
  TestEquality.equals("zero minimum", zeroMinimum.result, true);
  TestEquality.equals("zero minimum reads", zeroMinimum.reads, 0);
  TestEquality.equals("negative maximum", negativeMaximum.result, false);
  TestEquality.equals("negative maximum reads", negativeMaximum.reads, 0);
  TestEquality.equals("zero minimum iterator openings", zeroMinimum.opens, 0);
  TestEquality.equals(
    "negative maximum iterator openings",
    negativeMaximum.opens,
    0,
  );
};
