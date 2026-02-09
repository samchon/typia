import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@samchon/openapi";
import { SwaggerV2Downgrader } from "@samchon/openapi/src/converters/SwaggerV2Downgrader";

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
  const output: SwaggerV2.IJsonSchema = SwaggerV2Downgrader.downgradeSchema({
    original: {},
    downgraded: {},
  })(input);
  TestValidator.equals("example", output, {
    type: "integer",
    "x-nullable": true,
    title: "Primary Key",
    example: 4,
  });
};
