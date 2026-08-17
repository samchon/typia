import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies transformed MultipleOf validators divide exact decimals.
 *
 * JSON Schema's `multipleOf` is mathematical divisibility, while `%` divides
 * the binary doubles a `number` is actually stored in, so `0.3 % 0.1` is
 * `0.09999999999999998` even though `0.3` is exactly three times `0.1`. typia
 * emits the keyword and must accept what it accepts. The expectation comes from
 * `exactMultiple` below, which re-derives the rule -- mathematical divisibility
 * over the decimal each operand prints back -- with bigint arithmetic. What it
 * independently pins is that rule, not the decomposition: turning a `number`
 * into an exact rational has one shape, and `_decimal` has the same one.
 *
 * 1. Assert the sample matrix really carries values the remainder check and the
 *    oracle disagree about, so the case cannot go vacuous.
 * 2. Exercise `MultipleOf<0.01>` in the type-tag and JSDoc spellings against the
 *    oracle, on both sides, and run `validate` on both sides too -- pinning the
 *    `expected` text each spelling reports, since the two are composed by
 *    separate factories and this cycle moves the check behind a helper in
 *    both.
 * 3. Exercise an integer divisor, a fractional one, and a magnitude past
 *    `Number.MAX_SAFE_INTEGER` where the two rules disagree in both
 *    directions.
 * 4. Confirm a `bigint` divisor keeps its already-exact behavior in both
 *    spellings.
 * 5. Check the emitted JSON and LLM schemas retain the decimal constraint, and
 *    require the shared `@typia/utils` OpenAPI validator to agree on every
 *    value.
 */
export const test_validate_decimal_multiple_of = (): void => {
  type Cent = number & tags.MultipleOf<0.01>;
  interface IJsDocCent {
    /** @multipleOf 0.01 */
    value: number;
  }

  // The sample values. Which of them are multiples is decided by the oracle
  // below, not written down here, so a mistake in the list cannot become the
  // expectation.
  const SAMPLES: number[] = [
    0, 0.01, 0.02, -0.02, 0.03, -0.03, 0.04, 0.05, 0.25, 1, 1.01, 1.28, 0.031,
    1.011, 0.030000000000000002,
  ];
  const multiples: number[] = SAMPLES.filter((value) =>
    exactMultiple(value, 0.01),
  );
  const notMultiples: number[] = SAMPLES.filter(
    (value) => exactMultiple(value, 0.01) === false,
  );

  // `0.03`, `-0.03`, `0.05`, `0.25`, `1`, and `1.01` are multiples of 0.01
  // whose binary remainder is not zero, because the stored divisor is the
  // double nearest 1/100 rather than 1/100. `-0.02 % 0.01` is `-0`, which
  // `!== 0` reports as equal, so it is not one of them.
  const diverging: number[] = multiples.filter((value) => value % 0.01 !== 0);
  TestValidator.equals(
    "the sample matrix splits, and carries multiples the remainder check rejects",
    [multiples.length, notMultiples.length, diverging.length],
    [12, 3, 6],
  );

  for (const value of multiples) {
    TestValidator.equals(
      `type tag accepts ${value}`,
      typia.is<Cent>(value),
      true,
    );
    TestValidator.equals(
      `JSDoc tag accepts ${value}`,
      typia.is<IJsDocCent>({ value }),
      true,
    );
    // Both spellings, matching the rejecting side below and the `is` pair
    // above: the JSDoc name is composed by a different factory, so asserting
    // one spelling would leave the other free to drift.
    TestValidator.equals(
      `validate accepts ${value} in both spellings`,
      [
        typia.validate<Cent>(value).success,
        typia.validate<IJsDocCent>({ value }).success,
      ],
      [true, true],
    );
  }
  for (const value of notMultiples) {
    TestValidator.equals(
      `type tag rejects ${value}`,
      typia.is<Cent>(value),
      false,
    );
    TestValidator.equals(
      `JSDoc tag rejects ${value}`,
      typia.is<IJsDocCent>({ value }),
      false,
    );
    // `validate`'s negative twin, and the `expected` text with it: the report
    // names the tag rather than whatever expression implements it, so moving the
    // check into a helper must not change what a caller reads. Both spellings
    // are pinned, because the two names are composed by different factories --
    // the type tag by `MetadataTypeTagFactory` from the printed alias, the JSDoc
    // one by `MetadataCommentTagFactory` from `name + "<" + value + ">"` -- and
    // only asserting one would leave the other free to drift.
    const byType = typia.validate<Cent>(value);
    const byComment = typia.validate<IJsDocCent>({ value });
    TestValidator.equals(
      `validate rejects ${value} in both spellings`,
      [byType.success, byComment.success],
      [false, false],
    );
    TestValidator.equals(
      `validate names the tag for ${value} in both spellings`,
      [
        byType.success === false ? byType.errors[0]?.expected : null,
        byComment.success === false ? byComment.errors[0]?.expected : null,
      ],
      ["number & MultipleOf<0.01>", "number & MultipleOf<0.01>"],
    );
  }

  // An integer divisor, a fractional divisor that does divide in binary, and a
  // magnitude past `Number.MAX_SAFE_INTEGER` where printing back stops being
  // lossless — `Number(3n * 12259405221713610n) % 3` is `2` while the value's
  // own decimal spelling is divisible by three.
  type Even = number & tags.MultipleOf<2>;
  type Sesqui = number & tags.MultipleOf<1.5>;
  type Triple = number & tags.MultipleOf<3>;
  const large: number = Number(BigInt(3) * BigInt(12259405221713610));
  // `large` prints as `36778215665140830`, whose digits sum to a multiple of
  // three, while `large % 3` is `2`. `large + 16` prints as
  // `…850` and is the mirror image: `% 3` is `0` and the decimal is not
  // divisible. One value flips each way, which is what a change of meaning in
  // both directions has to be pinned by.
  TestValidator.equals(
    "the large pair really diverges from the binary remainder",
    [large % 3, (large + 16) % 3],
    [2, 0],
  );

  for (const [title, actual, value, divisor] of [
    ["integer divisor accepts", typia.is<Even>(4), 4, 2],
    ["integer divisor rejects", typia.is<Even>(5), 5, 2],
    ["fractional divisor accepts", typia.is<Sesqui>(9), 9, 1.5],
    ["fractional divisor rejects", typia.is<Sesqui>(10), 10, 1.5],
    [
      "large divisor accepts the decimal multiple",
      typia.is<Triple>(large),
      large,
      3,
    ],
    [
      "large divisor rejects the zero-remainder non-multiple",
      typia.is<Triple>(large + 16),
      large + 16,
      3,
    ],
    [
      "large divisor rejects a plain non-multiple",
      typia.is<Triple>(large + 8),
      large + 8,
      3,
    ],
  ] as Array<[string, boolean, number, number]>)
    TestValidator.equals(title, actual, exactMultiple(value, divisor));

  // A `bigint` divisor was always exact and must stay untouched.
  type Cubic = bigint & tags.MultipleOf<3n>;
  interface IJsDocCubic {
    /** @multipleOf 3 */
    value: bigint;
  }
  TestValidator.equals("bigint divisor accepts", typia.is<Cubic>(9n), true);
  TestValidator.equals("bigint divisor rejects", typia.is<Cubic>(10n), false);
  TestValidator.equals(
    "bigint JSDoc divisor accepts",
    typia.is<IJsDocCubic>({ value: 9n }),
    true,
  );
  TestValidator.equals(
    "bigint JSDoc divisor rejects",
    typia.is<IJsDocCubic>({ value: 10n }),
    false,
  );

  const json = typia.json.schema<Cent>().schema;
  TestValidator.predicate("JSON schema is numeric", () =>
    OpenApiTypeChecker.isNumber(json),
  );
  if (OpenApiTypeChecker.isNumber(json))
    TestValidator.equals("JSON schema multipleOf", json.multipleOf, 0.01);

  const $defs: Record<string, ILlmSchema> = {};
  typia.llm.schema<Cent>($defs);
  const llm: ILlmSchema = $defs.Cent!;
  TestValidator.predicate("LLM schema is numeric", () =>
    LlmTypeChecker.isNumber(llm),
  );
  if (LlmTypeChecker.isNumber(llm))
    TestValidator.equals("LLM schema multipleOf", llm.multipleOf, 0.01);

  // The generated validator and the shared OpenAPI validator now read the same
  // schema the same way; before this behavior they parted company on all six
  // diverging multiples above.
  //
  // `@typia/utils` divides with its own copy of the same decompose-and-divide
  // algorithm, so this loop pins the wiring rather than re-deriving the rule;
  // the rule itself is pinned above, against `exactMultiple`.
  for (const value of [...multiples, ...notMultiples])
    TestValidator.equals(
      `OpenAPI parity for ${value}`,
      OpenApiValidator.validate({
        components: {},
        schema: json,
        value,
        required: true,
      }).success,
      typia.is<Cent>(value),
    );
};

/**
 * Mathematical divisibility over the decimal each operand prints back.
 *
 * This is what JSON Schema's `multipleOf` means: each `number` becomes an exact
 * rational taken from its own `toString()`, and the quotient is tested with
 * bigint arithmetic, which cannot round. That is the rule the generated
 * validator has to implement, stated here independently of how it implements
 * it.
 *
 * The decomposition step is not independent and cannot be -- reading a double's
 * printed decimal into a coefficient and an exponent has one shape, and
 * `packages/typia/src/internal/_decimal.ts` has the same one. What this pins is
 * the rule: divisibility of the printed decimals rather than a remainder over
 * the stored binary doubles.
 *
 * A divisor of zero or less, or a non-finite operand, is outside the keyword's
 * domain -- JSON Schema requires `multipleOf` to be greater than zero -- so the
 * answer is `false`, which is what `_isMultipleOf` returns for them too. Saying
 * so here keeps the oracle from contradicting the behavior it certifies if such
 * a sample is ever added.
 */
const exactMultiple = (value: number, multipleOf: number): boolean => {
  if (Number.isFinite(value) === false) return false;
  if (Number.isFinite(multipleOf) === false || multipleOf <= 0) return false;
  const left = fraction(value);
  const right = fraction(multipleOf);
  return (
    (left.numerator * right.denominator) %
      (right.numerator * left.denominator) ===
    BigInt(0)
  );
};

const fraction = (
  value: number,
): { numerator: bigint; denominator: bigint } => {
  const [mantissa = "0", exponentText = "0"] = value.toString().split("e");
  const negative: boolean = mantissa.startsWith("-");
  const unsigned: string = negative ? mantissa.slice(1) : mantissa;
  const point: number = unsigned.indexOf(".");
  const decimals: number = point === -1 ? 0 : unsigned.length - point - 1;
  const digits: bigint = BigInt(unsigned.replace(".", ""));
  const exponent: number = Number(exponentText) - decimals;
  const numerator: bigint = negative ? -digits : digits;
  return exponent >= 0
    ? {
        numerator: numerator * BigInt(10) ** BigInt(exponent),
        denominator: BigInt(1),
      }
    : { numerator, denominator: BigInt(10) ** BigInt(-exponent) };
};
