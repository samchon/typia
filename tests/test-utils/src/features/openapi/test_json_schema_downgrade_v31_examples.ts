import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v31_examples = (): void => {
  const input: OpenApi.IJsonSchema = {
    type: "string",
    examples: {
      lower: "abc",
      upper: "ABC",
    },
  };
  const output: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.1",
  });

  TestValidator.equals("examples", output, {
    type: "string",
    examples: ["abc", "ABC"],
  });
};
