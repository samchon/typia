import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

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

  TestValidator.equals("optional property rejected", optional.success, false);
  if (optional.success === false)
    TestValidator.predicate("optional reason", () =>
      optional.error.reasons.some((r) =>
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

  TestValidator.equals("dynamic key rejected", dynamic.success, false);
  if (dynamic.success === false)
    TestValidator.predicate("dynamic reason", () =>
      dynamic.error.reasons.some((r) =>
        r.message.includes("additional properties on parameters"),
      ),
    );
};
