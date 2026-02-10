import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3 } from "@samchon/openapi";
import { OpenApiV3Downgrader } from "@samchon/openapi/src/converters/OpenApiV3Downgrader";

export const test_json_schema_downgrade_v30_enum = () => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  };
  const downgraded: OpenApiV3.IJsonSchema = OpenApiV3Downgrader.downgradeSchema(
    {
      original: {},
      downgraded: {},
    },
  )(schema);
  TestValidator.equals("enum", downgraded, {
    type: "string",
    title: "something",
    description: "nothing",
    enum: ["a", "b", "c"],
  });
};
