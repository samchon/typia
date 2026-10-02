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
