import { OpenApi, OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v30_example = (): void => {
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
  const output: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.0",
  });
  TestEquality.equals("example", output, {
    oneOf: [
      {
        type: "integer",
        nullable: true,
      },
      {
        type: "string",
        nullable: true,
      },
    ],
    title: "Primary Key",
    example: 4,
  });
};
