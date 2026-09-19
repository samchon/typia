import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_upgrade_v20_example = (): void => {
  const input: SwaggerV2.IJsonSchema = {
    type: "integer",
    "x-nullable": true,
    example: 4,
    title: "Sequence number",
  };
  const output: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    definitions: {},
    schema: input,
  });
  TestEquality.equals("example", output, {
    oneOf: [
      {
        type: "integer",
      },
      {
        type: "null",
      },
    ],
    title: "Sequence number",
    example: 4,
  });
};
