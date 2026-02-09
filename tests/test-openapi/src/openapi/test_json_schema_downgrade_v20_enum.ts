import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@samchon/openapi";
import { SwaggerV2Downgrader } from "@samchon/openapi/src/converters/SwaggerV2Downgrader";

export const test_json_schema_downgrade_v20_enum = () => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  };
  const downgraded: SwaggerV2.IJsonSchema = SwaggerV2Downgrader.downgradeSchema(
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
