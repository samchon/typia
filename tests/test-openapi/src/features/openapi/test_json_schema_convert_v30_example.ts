import { TestValidator } from "@nestia/e2e";
import { OpenApi, OpenApiV3 } from "@samchon/openapi";
import { OpenApiV3Upgrader } from "@samchon/openapi/src/converters/OpenApiV3Upgrader";

export const test_json_schema_convert_v30_example = (): void => {
  const input: OpenApiV3.IJsonSchema = {
    type: "integer",
    nullable: true,
    example: 4,
    title: "Sequence number",
  };
  const output: OpenApi.IJsonSchema = OpenApiV3Upgrader.convertSchema({})(
    input,
  );
  TestValidator.equals("example", output, {
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
