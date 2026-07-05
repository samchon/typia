import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.1 schema upgrade converts array-shaped `examples`.
 *
 * Raw OpenAPI 3.1 Schema Objects use JSON Schema's array-shaped `examples`,
 * while typia's emended schema keeps examples as a named record. The nested
 * property and item schemas pin recursive conversion, not only the top-level
 * attribute copy.
 *
 * 1. Build an OpenAPI 3.1 object schema with examples on the object, a property,
 *    an array, and its item schema.
 * 2. Upgrade the schema to typia's emended representation.
 * 3. Assert every raw examples array is converted to a deterministic `v0`, `v1`
 *    record.
 */
export const test_json_schema_upgrade_v31_examples = (): void => {
  const input: OpenApiV3_1.IJsonSchema = {
    type: "object",
    examples: [
      { id: "alpha", tags: ["red"] },
      { id: "beta", tags: ["blue"] },
    ],
    properties: {
      id: {
        type: "string",
        examples: ["alpha", "beta"],
      },
      tags: {
        type: "array",
        examples: [["red"], ["blue"]],
        items: {
          type: "string",
          examples: ["red", "blue"],
        },
      },
    },
    required: ["id", "tags"],
  };
  const output: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: {},
    schema: input,
  });

  TestValidator.equals("examples", output, {
    type: "object",
    examples: {
      v0: { id: "alpha", tags: ["red"] },
      v1: { id: "beta", tags: ["blue"] },
    },
    properties: {
      id: {
        type: "string",
        examples: {
          v0: "alpha",
          v1: "beta",
        },
      },
      tags: {
        type: "array",
        examples: {
          v0: ["red"],
          v1: ["blue"],
        },
        items: {
          type: "string",
          examples: {
            v0: "red",
            v1: "blue",
          },
        },
      },
    },
    required: ["id", "tags"],
  });
};
