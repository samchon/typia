import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs on an emended schema with named examples and the 3.0 result is compared with an object that has no examples keyword.
 * @evidence contracts/testing.md#independent-expectations The OpenAPI 3.0 Schema Object defines only a singular example, so the expected output is authored without examples.
 * @evidence contracts/testing.md#distinguishing-cases The named-examples schema is the only case; the singular example path is covered by test_json_schema_downgrade_v30_example.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
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

  TestEquality.equals("examples", output, {
    type: "string",
  });
};
