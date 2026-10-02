import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies an OpenAPI 3.0 upgrade turns nullable into a null member and keeps
 * annotations.
 *
 * The emended schema expresses nullability as a union with null. Title and
 * example on the 3.0 schema must remain on the resulting union.
 *
 * 1. Build an OpenAPI 3.0 nullable integer schema with an example and a title.
 * 2. Upgrade it.
 * 3. Assert a oneOf of integer and null with the title and example.
 */
export const test_json_schema_upgrade_v30_example = (): void => {
  const input: OpenApiV3.IJsonSchema = {
    type: "integer",
    nullable: true,
    example: 4,
    title: "Sequence number",
  };
  const output: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: {},
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
