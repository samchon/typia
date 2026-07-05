import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.0 schema downgrade omits schema-level `examples`.
 *
 * OpenAPI 3.0 Schema Object supports singular `example`, but not JSON Schema's
 * `examples` keyword. The emended typia schema can carry named examples
 * internally, so this test pins the downgrade boundary that must not emit a
 * non-standard Schema Object field.
 *
 * 1. Build an emended schema with named examples.
 * 2. Downgrade it to OpenAPI 3.0.
 * 3. Assert the resulting Schema Object does not contain `examples`.
 */
export const test_json_schema_downgrade_v30_examples = (): void => {
  const input: OpenApi.IJsonSchema = {
    type: "string",
    examples: {
      lower: "abc",
      upper: "ABC",
    },
  };
  const output: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.0",
  });

  TestValidator.equals("examples", output, {
    type: "string",
  });
};
