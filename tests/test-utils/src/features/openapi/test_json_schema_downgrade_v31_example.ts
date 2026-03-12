import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v31_example = (): void => {
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
  const output: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.1",
  });
  TestValidator.equals("example", output, {
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
  });
};
