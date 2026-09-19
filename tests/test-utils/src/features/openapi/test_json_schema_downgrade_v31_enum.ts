import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v31_enum = () => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  };
  const downgraded: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema,
    version: "3.1",
  });
  TestEquality.equals("enum", downgraded, {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  });
};
