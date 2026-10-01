import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies an OpenAPI 3.1 downgrade keeps null members and example metadata.
 *
 * OpenAPI 3.1 expresses nullability with a null type member, so the 3.0
 * distribution of nullable must not be applied to a 3.1 target.
 *
 * 1. Build an emended oneOf of integer, string and null with a title and example.
 * 2. Downgrade it to 3.1.
 * 3. Assert the union, title and example are unchanged.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs on the authored union and the whole schema is compared, so a nullable rewrite or lost annotation fails.
 * @evidence contracts/testing.md#independent-expectations JSON Schema 2020-12 null-type semantics define the expected output, authored as a literal.
 * @evidence contracts/testing.md#distinguishing-cases The 3.1 counterpart of the 3.0 nullable distribution case differs only in target version.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
 */
export const test_json_schema_downgrade_v31_example = (): void => {
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
  const output: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.1",
  });
  TestEquality.equals("example", output, {
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
  });
};
