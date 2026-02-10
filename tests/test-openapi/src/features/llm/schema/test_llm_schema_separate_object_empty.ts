import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
  OpenApiTypeChecker,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_schema_separate_object_empty = (): void => {
  TestValidator.equals(
    "separated",
    LlmSchemaComposer.separate({
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
  const result: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
    LlmSchemaComposer.parameters({
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference
      >(collection.schemas[0]),
    });
  if (result.success === false) throw new Error("Invalid schema");
  return result.value;
};
