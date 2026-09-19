import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

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
  const res: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components: collection.components,
      schema: collection.schemas[0]!,
      $defs: {},
      config: {
        strict: true,
      },
    });
  TestEquality.subset(
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
