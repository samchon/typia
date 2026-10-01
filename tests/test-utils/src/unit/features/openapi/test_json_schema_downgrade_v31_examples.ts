import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs on an emended schema with named examples and the 3.1 result is compared with an array-shaped examples value.
 * @evidence contracts/testing.md#independent-expectations JSON Schema 2020-12 defines examples as an array, so the expected value is authored from that rule and the names are dropped.
 * @evidence contracts/testing.md#distinguishing-cases A single schema with named examples is the owned case; nested schemas are covered by the round-trip case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
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

  TestEquality.equals("examples", output, {
    type: "string",
    examples: ["abc", "ABC"],
  });
};
