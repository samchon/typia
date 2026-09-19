import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_upgrade_v30_example = (): void => {
  const input: OpenApiV3.IJsonSchema = {
    type: "integer",
    nullable: true,
    example: 4,
    title: "Sequence number",
  };
  const output: OpenApi.IJsonSchema = OpenApiConverter.upgradeSchema({
    components: {},
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
