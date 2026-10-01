import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs on the authored union and the whole output is compared, so a leftover null branch or lost annotation fails.
 * @evidence contracts/testing.md#independent-expectations The expected object is authored following OpenAPI 3.0's nullable keyword.
 * @evidence contracts/testing.md#distinguishing-cases A multi-branch nullable union is the owned case; the single-type form is covered by the nullable case.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
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
