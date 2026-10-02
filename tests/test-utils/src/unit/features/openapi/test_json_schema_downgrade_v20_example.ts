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
