import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.1 schema examples survive downgrade and upgrade.
 *
 * Typia's emended schema stores examples by name, but raw OpenAPI 3.1 Schema
 * Objects use an examples array. A round trip must drop only the names, keep
 * values and ordering, and recursively apply the same rule to child schemas.
 *
 * 1. Downgrade an emended object schema with named examples to OpenAPI 3.1.
 * 2. Assert raw Schema Object examples are arrays at both parent and property
 *    levels.
 * 3. Upgrade the raw schema back and assert example values reappear under
 *    deterministic `v0`, `v1` keys.
 */
export const test_json_schema_roundtrip_v31_examples = (): void => {
  const input: OpenApi.IJsonSchema = {
    type: "object",
    examples: {
      first: { name: "alpha" },
      second: { name: "beta" },
    },
    properties: {
      name: {
        type: "string",
        examples: {
          short: "alpha",
          long: "beta",
        },
      },
    },
    required: ["name"],
  };
  const downgraded: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.1",
  });
  TestValidator.equals("downgraded", downgraded, {
    type: "object",
    examples: [{ name: "alpha" }, { name: "beta" }],
    properties: {
      name: {
        type: "string",
        examples: ["alpha", "beta"],
      },
    },
    required: ["name"],
  });

  const upgraded: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: {},
    schema: downgraded,
  });
  TestValidator.equals("upgraded", upgraded, {
    type: "object",
    examples: {
      v0: { name: "alpha" },
      v1: { name: "beta" },
    },
    properties: {
      name: {
        type: "string",
        examples: {
          v0: "alpha",
          v1: "beta",
        },
      },
    },
    required: ["name"],
  });
};
