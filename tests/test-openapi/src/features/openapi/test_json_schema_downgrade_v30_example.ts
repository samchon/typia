import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3 } from "@samchon/openapi";
import { OpenApiV3Downgrader } from "@samchon/openapi/src/converters/OpenApiV3Downgrader";

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
  const output: OpenApiV3.IJsonSchema = OpenApiV3Downgrader.downgradeSchema({
    original: {},
    downgraded: {},
  })(input);
  TestValidator.equals("example", output, {
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
