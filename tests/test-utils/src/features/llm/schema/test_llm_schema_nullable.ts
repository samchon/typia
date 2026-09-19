import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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
  TestEquality.equals("success", result.success, true);
  TestEquality.equals("nullable", result.success ? result.value : {}, {
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
