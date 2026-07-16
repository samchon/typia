import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import {
  LlmTypeChecker,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies transformed validators and emitted schemas share decimal semantics.
 *
 * Type tags and JSDoc tags are emitted by the native transformer, while JSON
 * and LLM schemas are consumed later by separate validators. Ordinary decimal
 * multiples must not diverge across those surfaces.
 *
 * 1. Exercise type-tag and JSDoc validators with valid and nearby decimals.
 * 2. Check the emitted JSON and LLM schemas retain the decimal constraint.
 * 3. Revalidate values against the emitted OpenAPI schema for parity.
 */
export const test_validate_decimal_multiple_of = (): void => {
  type Cent = number & tags.MultipleOf<0.01>;
  interface IJsDocCent {
    /** @multipleOf 0.01 */
    value: number;
  }

  const accepted: number[] = [0, 0.03, 1.01, -0.03, 3e-2];
  const rejected: number[] = [0.031, 1.011, 0.030000000000000002];
  for (const value of accepted) {
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
  for (const value of rejected) {
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

  for (const value of [...accepted, ...rejected])
    TestValidator.equals(
      `OpenAPI parity for ${value}`,
      OpenApiValidator.validate({
        components: {},
        schema: json,
        value,
        required: true,
      }).success,
      accepted.includes(value),
    );
};
