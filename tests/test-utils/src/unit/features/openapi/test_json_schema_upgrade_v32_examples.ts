import { OpenApi, OpenApiV3_2 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies OpenAPI 3.2 schema upgrade keeps JSON Schema examples semantics.
 *
 * OpenAPI 3.2 shares the same JSON Schema 2020-12 Schema Object semantics used
 * by OpenAPI 3.1, so its raw `examples` keyword is also array-shaped. This test
 * supplies a schema typed as v3.2 to the shared schema API, whose runtime
 * implementation uses the v3.1 converter for every components-based input. It
 * does not exercise the version dispatch of document upgrade.
 *
 * 1. Build an OpenAPI 3.2 string schema with raw examples.
 * 2. Upgrade the schema to typia's emended representation.
 * 3. Assert the array is converted to a deterministic named record.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.upgradeSchema runs on an authored 3.2 string schema and the examples array becomes the deterministic named record.
 * @evidence contracts/testing.md#independent-expectations OpenAPI 3.2 shares JSON Schema 2020-12 examples semantics, so the expected record is authored from that rule.
 * @evidence contracts/testing.md#distinguishing-cases A 3.2-typed string input reaches the shared schema converter; the erased type supplies no distinct runtime version branch. Nested examples are covered by the 3.1 case, and document-version dispatch is separate.
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
