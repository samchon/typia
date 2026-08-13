import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies transformed MultipleOf validators use the JavaScript remainder.
 *
 * `tags.MultipleOf` declares a plain `$input % N === 0` comparison, so a
 * generated validator never imports a `typia/lib/internal/*` helper to divide,
 * and `@typia/interface` stays satisfiable by any `typia` runtime the caret
 * range between the two packages admits. Under a fractional divisor that
 * remainder only reaches exactly zero when the quotient is a power of two, so
 * most mathematical multiples fail it. The emitted `multipleOf` keyword still
 * means mathematical divisibility, so the shared `@typia/utils` OpenAPI
 * validator accepts values the generated one rejects; issue #2335 owns closing
 * that gap in a major.
 *
 * 1. Exercise type-tag and JSDoc validators over exactly-zero remainders,
 *    mathematical multiples with a nonzero remainder, and non-multiples.
 * 2. Confirm an integer divisor keeps every surface in agreement.
 * 3. Check the emitted JSON and LLM schemas retain the decimal constraint.
 * 4. Pin the values where the emitted OpenAPI schema disagrees.
 */
export const test_validate_decimal_multiple_of = (): void => {
  type Cent = number & tags.MultipleOf<0.01>;
  interface IJsDocCent {
    /** @multipleOf 0.01 */
    value: number;
  }

  // `0.02 % 0.01` is 0 but `0.03 % 0.01` is 0.009999999999999998, because only
  // a power-of-two quotient survives the binary division exactly. Which
  // multiples land where is a property of the representation, not of the
  // decimal, so each value is listed rather than derived.
  const zeroRemainder: number[] = [0, 0.01, 0.02, -0.02, 0.04, 1.28];
  const inexactRemainder: number[] = [0.03, 3e-2, -0.03, 0.05, 0.25, 1, 1.01];
  const notAMultiple: number[] = [0.031, 1.011, 0.030000000000000002];

  for (const value of zeroRemainder) {
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
  }
  for (const value of [...inexactRemainder, ...notAMultiple]) {
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

  // An integer divisor divides exactly in binary, so no surface diverges.
  type Even = number & tags.MultipleOf<2>;
  TestValidator.equals("integer divisor accepts", typia.is<Even>(4), true);
  TestValidator.equals("integer divisor rejects", typia.is<Even>(5), false);

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

  // `@typia/utils` divides exact decimals, so it accepts every mathematical
  // multiple, including the ones the generated validator rejects.
  for (const value of [...zeroRemainder, ...inexactRemainder, ...notAMultiple])
    TestValidator.equals(
      `OpenAPI validator for ${value}`,
      OpenApiValidator.validate({
        components: {},
        schema: json,
        value,
        required: true,
      }).success,
      notAMultiple.includes(value) === false,
    );
};
