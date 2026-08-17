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
 * emits the keyword and must accept what it accepts. The expectation is an
 * independent exact-rational oracle over each value's own decimal spelling,
 * never the transformer's output.
 *
 * 1. Assert the sample matrix really carries values the remainder check and the
 *    oracle disagree about, so the case cannot go vacuous.
 * 2. Exercise the type tag and the JSDoc spelling against the oracle for a
 *    fractional, an integer, and a large divisor, through `is` and `validate`.
 * 3. Confirm a `bigint` divisor keeps its already-exact behavior.
 * 4. Check the emitted JSON and LLM schemas retain the decimal constraint, and
 *    require the shared `@typia/utils` OpenAPI validator to agree on every
 *    value.
 */
export const test_validate_decimal_multiple_of = (): void => {
  type Cent = number & tags.MultipleOf<0.01>;
  interface IJsDocCent {
    /** @multipleOf 0.01 */
    value: number;
  }

  // Every one of these is a mathematical multiple of 0.01; `0.03`, `0.05`,
  // `0.25`, `1`, and `1.01` are the ones whose binary remainder is not zero,
  // because the stored divisor is the double nearest 1/100 rather than 1/100.
  const multiples: number[] = [
    0, 0.01, 0.02, -0.02, 0.03, -0.03, 0.04, 0.05, 0.25, 1, 1.01, 1.28,
  ];
  const notMultiples: number[] = [0.031, 1.011, 0.030000000000000002];

  const diverging: number[] = multiples.filter((value) => value % 0.01 !== 0);
  TestValidator.equals(
    "the sample matrix carries multiples the remainder check rejects",
    diverging.length,
    6,
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
    TestValidator.equals(
      `validate accepts ${value}`,
      typia.validate<Cent>(value).success,
      true,
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
  }

  // An integer divisor, a fractional divisor that does divide in binary, and a
  // magnitude past `Number.MAX_SAFE_INTEGER` where printing back stops being
  // lossless — `Number(3n * 12259405221713610n) % 3` is `2` while the value's
  // own decimal spelling is divisible by three.
  type Even = number & tags.MultipleOf<2>;
  type Sesqui = number & tags.MultipleOf<1.5>;
  type Triple = number & tags.MultipleOf<3>;
  const large: number = Number(BigInt(3) * BigInt(12259405221713610));
  TestValidator.equals("integer divisor accepts", typia.is<Even>(4), true);
  TestValidator.equals("integer divisor rejects", typia.is<Even>(5), false);
  TestValidator.equals("fractional divisor accepts", typia.is<Sesqui>(9), true);
  TestValidator.equals(
    "fractional divisor rejects",
    typia.is<Sesqui>(10),
    false,
  );
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
  TestValidator.equals(
    "large integer divisor accepts the decimal multiple",
    typia.is<Triple>(large),
    true,
  );
  TestValidator.equals(
    "large integer divisor rejects the zero-remainder non-multiple",
    typia.is<Triple>(large + 16),
    false,
  );
  TestValidator.equals(
    "large integer divisor rejects a plain non-multiple",
    typia.is<Triple>(large + 8),
    false,
  );

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
