import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v20_example = (): void => {
  const input: OpenApi.IJsonSchema = {
    oneOf: [
      {
        type: "integer",
      },
      {
        type: "null",
      },
    ],
    title: "Primary Key",
    example: 4,
  };
  const output: SwaggerV2.IJsonSchema = OpenApiConverter.downgradeSchema({
    version: "2.0",
    components: {},
    downgraded: {},
    schema: input,
  });
  TestEquality.equals("example", output, {
    type: "integer",
    "x-nullable": true,
    title: "Primary Key",
    example: 4,
  });
};
