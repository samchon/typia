import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.1 schema downgrade emits array-shaped `examples`.
 *
 * OpenAPI 3.1 Schema Object inherits JSON Schema 2020-12 keywords, where
 * `examples` is an array. The emended typia schema stores examples as a named
 * record, so this test pins the conversion to the raw Schema Object shape.
 *
 * 1. Build an emended schema with named examples.
 * 2. Downgrade it to OpenAPI 3.1.
 * 3. Assert the resulting Schema Object contains examples as an array.
 */
export const test_json_schema_downgrade_v31_examples = (): void => {
  const input: OpenApi.IJsonSchema = {
    type: "string",
    examples: {
      lower: "abc",
      upper: "ABC",
    },
  };
  const output: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.1",
  });

  TestValidator.equals("examples", output, {
    type: "string",
    examples: ["abc", "ABC"],
  });
};
