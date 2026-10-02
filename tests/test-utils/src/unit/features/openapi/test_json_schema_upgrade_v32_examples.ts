import { OpenApi, OpenApiV3_2 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.upgradeSchema runs on an authored 3.2 string schema and the examples array becomes the deterministic named record.
 * @evidence contracts/testing.md#independent-expectations OpenAPI 3.2 shares JSON Schema 2020-12 examples semantics, so the expected record is authored from that rule.
 * @evidence contracts/testing.md#distinguishing-cases The 3.2 entry path is the only case; nested examples are covered by the 3.1 case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
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

  TestEquality.equals("examples", output, {
    type: "string",
    examples: {
      v0: "alpha",
      v1: "beta",
      v2: "gamma",
    },
  });
};
