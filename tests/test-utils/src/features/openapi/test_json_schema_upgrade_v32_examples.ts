import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.2 schema upgrade keeps JSON Schema examples semantics.
 *
 * OpenAPI 3.2 shares the same JSON Schema 2020-12 Schema Object semantics used
 * by OpenAPI 3.1, so its raw `examples` keyword is also array-shaped. This test
 * pins the v3.2 upgrader path, which delegates schema conversion through the
 * v3.1 converter.
 *
 * 1. Build an OpenAPI 3.2 string schema with raw examples.
 * 2. Upgrade the schema to typia's emended representation.
 * 3. Assert the array is converted to a deterministic named record.
 */
export const test_json_schema_upgrade_v32_examples = (): void => {
  const input: OpenApiV3_2.IJsonSchema = {
    type: "string",
    examples: ["alpha", "beta", "gamma"],
  };
  const output: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: {},
    schema: input,
  });

  TestValidator.equals("examples", output, {
    type: "string",
    examples: {
      v0: "alpha",
      v1: "beta",
      v2: "gamma",
    },
  });
};
