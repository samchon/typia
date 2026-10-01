import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies strict LLM converter rejects optional object properties.
 *
 * Strict function-calling schemas require every object property to appear in
 * `required`, but empty objects still need to be accepted and normalized with
 * `required: []` after JSON Schema omits the empty keyword.
 *
 * 1. Convert strict objects with partial and missing required lists.
 * 2. Assert non-empty optional properties are rejected.
 * 3. Assert an empty object without `required` is accepted and restored.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 8 assertions (optional property rejected; optional reason; empty strict object accepted; empty strict required restored; missing required rejected; missing required reason). The case documents its purpose as: Verifies strict LLM converter rejects optional object properties.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Strict function-calling schemas require every object property to appear in `required`, but empty objects still need to be accepted and normalized with `required: []` after JSON Schema omits the empty keyword. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (optional property rejected; optional reason; empty strict object accepted; empty strict required restored; missing required rejected; missing required reason) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_parity_converter_strict_rejection is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
 */
export const test_llm_schema_parity_converter_strict_rejection = (): void => {
  const optional = LlmSchemaConverter.schema({
    config: { strict: true },
    components: { schemas: {} },
    $defs: {},
    schema: {
      type: "object",
      properties: {
        required: { type: "string" },
        optional: { type: "number" },
      },
      required: ["required"],
      additionalProperties: false,
    } satisfies OpenApi.IJsonSchema.IObject,
  });

  TestEquality.equals("optional property rejected", optional.success, false);
  if (optional.success === false)
    TestValidator.predicate("optional reason", () =>
      optional.error.reasons.some((r) =>
        r.message.includes("optional properties in strict mode"),
      ),
    );

  const empty = LlmSchemaConverter.schema({
    config: { strict: true },
    components: { schemas: {} },
    $defs: {},
    schema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    } satisfies OpenApi.IJsonSchema.IObject,
  });

  TestEquality.equals("empty strict object accepted", empty.success, true);
  if (empty.success === true)
    TestEquality.equals("empty strict required restored", clean(empty.value), {
      type: "object",
      properties: {},
      additionalProperties: false,
      required: [],
    });

  const missingRequired = LlmSchemaConverter.schema({
    config: { strict: true },
    components: { schemas: {} },
    $defs: {},
    schema: {
      type: "object",
      properties: {
        optional: { type: "number" },
      },
      additionalProperties: false,
    } satisfies OpenApi.IJsonSchema.IObject,
  });

  TestEquality.equals(
    "missing required rejected",
    missingRequired.success,
    false,
  );
  if (missingRequired.success === false)
    TestValidator.predicate("missing required reason", () =>
      missingRequired.error.reasons.some((r) =>
        r.message.includes("optional properties in strict mode"),
      ),
    );

  const dynamic = LlmSchemaConverter.parameters({
    config: { strict: true },
    components: { schemas: {} },
    schema: {
      type: "object",
      properties: {
        value: { type: "string" },
      },
      required: ["value"],
      additionalProperties: { type: "string" },
    } satisfies OpenApi.IJsonSchema.IObject,
  });

  TestEquality.equals("dynamic key rejected", dynamic.success, false);
  if (dynamic.success === false)
    TestValidator.predicate("dynamic reason", () =>
      dynamic.error.reasons.some((r) =>
        r.message.includes("additional properties on parameters"),
      ),
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
