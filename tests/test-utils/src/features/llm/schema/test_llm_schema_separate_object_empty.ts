import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

export const test_llm_schema_separate_object_empty = (): void => {
  TestValidator.equals(
    "separated",
    LlmSchemaConverter.separate({
      predicate: (schema: OpenApi.IJsonSchema) =>
        OpenApiTypeChecker.isInteger(schema),
      parameters: schema(typia.json.schemas<[{}]>()),
    }),
    {
      llm: schema(typia.json.schemas<[{}]>()),
      human: null,
    },
  );
};

const schema = (collection: IJsonSchemaCollection): ILlmSchema.IParameters => {
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference
      >(collection.schemas[0]),
    });
  if (result.success === false) throw new Error("Invalid schema");
  return result.value;
};
