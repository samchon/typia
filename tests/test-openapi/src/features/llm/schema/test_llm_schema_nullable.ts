import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, IOpenApiSchemaError, IResult } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_schema_nullable = (): void => {
  const collection: IJsonSchemaCollection =
    typia.json.schemas<[number | null]>();
  const result: IResult<ILlmSchema, IOpenApiSchemaError> =
    LlmSchemaComposer.schema({
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
