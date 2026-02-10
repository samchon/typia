import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@samchon/openapi";
import { SwaggerV2Upgrader } from "@samchon/openapi/src/converters/SwaggerV2Upgrader";

export const test_json_schema_convert_v20_example = (): void => {
  const input: SwaggerV2.IJsonSchema = {
    type: "integer",
    "x-nullable": true,
    example: 4,
    title: "Sequence number",
  };
  const output: OpenApi.IJsonSchema = SwaggerV2Upgrader.convertSchema({})(
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
