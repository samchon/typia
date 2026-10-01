import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies a Swagger 2 upgrade turns x-nullable into a null member and keeps
 * annotations.
 *
 * The emended schema expresses nullability as a union with null. Title and
 * example on the Swagger schema must remain on the resulting union.
 *
 * 1. Build a Swagger 2 integer schema with x-nullable, an example and a title.
 * 2. Upgrade it.
 * 3. Assert a oneOf of integer and null with the title and example.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.upgradeSchema runs on the authored schema and the whole output is compared, so a lost annotation or missing null member fails.
 * @evidence contracts/testing.md#independent-expectations The expected union is an authored literal following the typia emended representation and Swagger's x-nullable extension.
 * @evidence contracts/testing.md#distinguishing-cases One nullable annotated scalar is the owned case; the non-nullable form is not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
 */
export const test_json_schema_upgrade_v20_example = (): void => {
  const input: SwaggerV2.IJsonSchema = {
    type: "integer",
    "x-nullable": true,
    example: 4,
    title: "Sequence number",
  };
  const output: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    definitions: {},
    schema: input,
  });
  TestEquality.equals("example", output, {
    oneOf: [
      {
        type: "integer",
      },
      {
        type: "null",
      },
    ],
    title: "Sequence number",
    example: 4,
  });
};
