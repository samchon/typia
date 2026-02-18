import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v20_enum = () => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  };
  const downgraded: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    schema,
    version: "2.0",
    downgraded: {},
  });
  TestValidator.equals("enum", downgraded, {
    type: "string",
    title: "something",
    description: "nothing",
    enum: ["a", "b", "c"],
  });
};
