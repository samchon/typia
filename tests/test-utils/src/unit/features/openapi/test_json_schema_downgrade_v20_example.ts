import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies a Swagger 2 downgrade keeps example and title on a nullable integer.
 *
 * Swagger 2 has no null type, so a nullable union becomes the base type with
 * x-nullable. Annotations on the union such as title and example must stay on
 * the single resulting schema.
 *
 * 1. Build an emended schema oneOf integer and null with a title and example.
 * 2. Downgrade it to Swagger 2.
 * 3. Assert an integer with x-nullable, the title and the example.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs on the authored union and the whole output object is compared, so a lost annotation or a dropped nullability fails.
 * @evidence contracts/testing.md#independent-expectations The expected object is an authored literal following Swagger 2's x-nullable extension, independent of the converter.
 * @evidence contracts/testing.md#distinguishing-cases One nullable scalar with annotations is the owned case; non-nullable schemas and object unions are covered by other conversion cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
 */
export const test_json_schema_downgrade_v20_example = (): void => {
  const input: OpenApi.IJsonSchema = {
    oneOf: [
      {
        type: "integer",
      },
      {
        type: "null",
      },
    ],
    title: "Primary Key",
    example: 4,
  };
  const output: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "2.0",
    components: {},
    downgraded: {},
    schema: input,
  });
  TestEquality.equals("example", output, {
    type: "integer",
    "x-nullable": true,
    title: "Primary Key",
    example: 4,
  });
};
