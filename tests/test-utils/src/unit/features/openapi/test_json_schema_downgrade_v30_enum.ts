import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies an OpenAPI 3.0 downgrade turns constant unions into one typed enum.
 *
 * OpenAPI 3.0 has no const keyword, so a oneOf of constants must collapse to a
 * typed enum while keeping title and description.
 *
 * 1. Build an emended oneOf of three string constants with title and description.
 * 2. Downgrade it to 3.0.
 * 3. Assert a string enum with the same annotations.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.downgradeSchema runs on the authored union and the whole schema is compared, so lost enum values, a missing type or lost annotations fail.
 * @evidence contracts/testing.md#independent-expectations The expected schema is an authored literal following OpenAPI 3.0's enum model.
 * @evidence contracts/testing.md#distinguishing-cases One string constant union is the owned case; mixed-type and nullable constants are covered by the Swagger 2 enum case and not asserted here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on an authored schema with no native build, installation or host.
 */
export const test_json_schema_downgrade_v30_enum = () => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  };
  const downgraded: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema,
    version: "3.0",
  });
  TestEquality.equals("enum", downgraded, {
    type: "string",
    title: "something",
    description: "nothing",
    enum: ["a", "b", "c"],
  });
};
