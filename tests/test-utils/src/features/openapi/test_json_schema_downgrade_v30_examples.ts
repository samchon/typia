import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

export const test_json_schema_downgrade_v30_examples = (): void => {
  const input: OpenApi.IJsonSchema = {
    type: "string",
    examples: {
      lower: "abc",
      upper: "ABC",
    },
  };
  const output: OpenApiV3.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema: input,
    version: "3.0",
  });

  TestValidator.equals("examples", output, {
    type: "string",
    examples: ["abc", "ABC"],
  });
};
