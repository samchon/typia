import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

export const test_llm_schema_nullable = (): void => {
  const collection: IJsonSchemaCollection =
    typia.json.schemas<[number | null]>();
  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components: collection.components,
      schema: collection.schemas[0]!,
      $defs: {},
    });
  TestValidator.equals("success", result.success, true);
  TestValidator.equals("nullable", result.success ? result.value : {}, {
    anyOf: [
      {
        type: "null",
      },
      {
        type: "number",
      },
    ],
  });
};
