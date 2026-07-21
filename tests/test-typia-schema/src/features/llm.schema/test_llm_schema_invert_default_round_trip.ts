import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies a strict `default` survives the shift-then-invert round trip.
 *
 * Under `strict`, the write half moves `default` into the description as a
 * `@default value` tag; inversion must read it back as a keyword rather than
 * leave it behind as prose. The numeric path used to drop `default` on the
 * write side and no reader restored it on either path, so a numeric default was
 * lost outright and a string default leaked as literal `@default …` text. This
 * pins both directions: the tag is emitted on write and restored on read, for
 * numeric and string alike.
 *
 * 1. Build strict LLM schemas for a numeric and a string property, each with a
 *    `Default` alongside another constraint.
 * 2. Invert each under `strict`.
 * 3. Assert `default` is restored to a keyword and the tag is consumed from the
 *    description.
 */
export const test_llm_schema_invert_default_round_trip = (): void => {
  const numeric = typia.llm.schema<
    number & tags.Minimum<1> & tags.Default<7>,
    { strict: true }
  >({});
  const numericInverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: numeric,
    $defs: {},
  }) as OpenApi.IJsonSchema.INumber;
  TestValidator.equals("numeric default restored", numericInverted.default, 7);
  TestValidator.equals("numeric minimum restored", numericInverted.minimum, 1);
  TestValidator.equals(
    "numeric tags consumed",
    numericInverted.description,
    undefined,
  );

  const string = typia.llm.schema<
    string & tags.MinLength<2> & tags.Default<"body">,
    { strict: true }
  >({});
  const stringInverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: string,
    $defs: {},
  }) as OpenApi.IJsonSchema.IString;
  TestValidator.equals(
    "string default restored",
    stringInverted.default,
    "body",
  );
  TestValidator.equals(
    "string minLength restored",
    stringInverted.minLength,
    2,
  );
  TestValidator.equals(
    "string tags consumed",
    stringInverted.description,
    undefined,
  );
};
