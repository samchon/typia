import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (numeric default restored; numeric minimum restored; numeric tags consumed; string default restored; string minLength restored; string tags consumed). The case documents its purpose as: Verifies a strict `default` survives the shift-then-invert round trip.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Under `strict`, the write half moves `default` into the description as a `@default value` tag; inversion must read it back as a keyword rather than leave it behind as prose. The numeric path used to drop `default` on the write side and no reader restored it on either path, so a numeric default was lost outright and a string default leaked as literal `@default …` text. This pins both directions: the tag is emitted on write and restored on read, for numeric and string alike. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (numeric default restored; numeric minimum restored; numeric tags consumed; string default restored; string minLength restored; string tags consumed) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_invert_default_round_trip is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals("numeric default restored", numericInverted.default, 7);
  TestEquality.equals("numeric minimum restored", numericInverted.minimum, 1);
  TestEquality.equals(
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
  TestEquality.equals(
    "string default restored",
    stringInverted.default,
    "body",
  );
  TestEquality.equals("string minLength restored", stringInverted.minLength, 2);
  TestEquality.equals(
    "string tags consumed",
    stringInverted.description,
    undefined,
  );
};
