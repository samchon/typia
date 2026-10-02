import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies an OpenAPI 3.0 downgrade distributes nullability and keeps example
 * metadata.
 *
 * OpenAPI 3.0 uses nullable on each branch instead of a null member.
 * Annotations on the union must remain on the downgraded schema.
 *
 * 1. Build an emended oneOf of integer, string and null with a title and example.
 * 2. Downgrade it to 3.0.
 * 3. Assert both remaining branches are nullable and the title and example remain.
 *
 */
export const test_json_schema_downgrade_v30_example = (): void => {
  const input: OpenApi.IJsonSchema = {
    oneOf: [
      {
        type: "integer",
      },
      {
        type: "string",
      },
      {
        type: "null",
      },
    ],
    title: "Primary Key",
    example: 4,
  };
  const output: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.0",
  });
  TestEquality.equals("example", output, {
    oneOf: [
      {
        type: "integer",
        nullable: true,
      },
      {
        type: "string",
        nullable: true,
      },
    ],
    title: "Primary Key",
    example: 4,
  });
};
