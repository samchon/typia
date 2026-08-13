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
 * range between the two packages admits. `%` divides the binary doubles that
 * are actually stored, while the emitted `multipleOf` keyword means
 * mathematical divisibility over the decimals those doubles print as. A divisor
 * such as `0.01` has no exact binary double, so the two disagree and the shared
 * `@typia/utils` OpenAPI validator accepts values the generated one rejects;
 * issue #2335 owns closing that gap in a major.
 *
 * 1. Exercise type-tag and JSDoc validators over exactly-zero remainders,
 *    mathematical multiples with a nonzero remainder, and non-multiples.
 * 2. Confirm a divisor with an exact binary double keeps the generated validator
 *    agreeing with mathematical divisibility.
 * 3. Check the emitted JSON and LLM schemas retain the decimal constraint.
 * 4. Revalidate every value through the emitted OpenAPI schema, which diverges on
 *    each mathematical multiple the remainder check rejects.
 */
export const test_validate_decimal_multiple_of = (): void => {
  type Cent = number & tags.MultipleOf<0.01>;
  interface IJsDocCent {
    /** @multipleOf 0.01 */
    value: number;
  }

  // `0.02 % 0.01` is 0 but `0.03 % 0.01` is 0.009999999999999998. The stored
  // divisor is the double nearest 1/100, not 1/100, and for that divisor the
  // remainder happens to reach zero only where the quotient is a power of two.
  // Which multiples land where is a property of the binary representation, not
  // of the decimal, so each value is listed rather than derived.
  const zeroRemainder: number[] = [0, 0.01, 0.02, -0.02, 0.04, 1.28];
  const inexactRemainder: number[] = [0.03, -0.03, 0.05, 0.25, 1, 1.01];
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

  // A divisor that has an exact binary double keeps the remainder check
  // agreeing with mathematical divisibility, and being fractional is not what
  // breaks it: `1.5` is exact, so `9 % 1.5` is 0 even though the quotient 6 is
  // not a power of two. The disagreement above belongs to `0.01` specifically.
  type Even = number & tags.MultipleOf<2>;
  type Sesqui = number & tags.MultipleOf<1.5>;
  TestValidator.equals("integer divisor accepts", typia.is<Even>(4), true);
  TestValidator.equals("integer divisor rejects", typia.is<Even>(5), false);
  TestValidator.equals(
    "binary-exact divisor accepts",
    typia.is<Sesqui>(9),
    true,
  );
  TestValidator.equals(
    "binary-exact divisor rejects",
    typia.is<Sesqui>(10),
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
