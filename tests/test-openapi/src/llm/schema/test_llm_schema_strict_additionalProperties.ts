import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, IOpenApiSchemaError, IResult } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_schema_strict_additionalProperties = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<
    [
      {
        id: string;
        name: string;
        hobbies: {
          id: string;
          name: string;
        }[];
      },
    ]
  >();
  const res: IResult<ILlmSchema, IOpenApiSchemaError> =
    LlmSchemaComposer.schema({
      components: collection.components,
      schema: collection.schemas[0]!,
      $defs: {},
      config: {
        strict: true,
      },
    });
  TestValidator.equals(
    "strict",
    {
      type: "object",
      additionalProperties: false,
      properties: {
        hobbies: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
          },
        },
      },
    },
    (res.success ? res.value : null) as any,
  );
};
