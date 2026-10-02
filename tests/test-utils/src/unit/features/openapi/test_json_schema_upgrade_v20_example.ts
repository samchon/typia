import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
