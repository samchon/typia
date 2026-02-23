import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { LlmSchemaConverter, LlmTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema, tags } from "typia";

export const test_llm_schema_separate_string = (): void => {
  const separator = (schema: ILlmSchema.IParameters) =>
    LlmSchemaConverter.separate({
      predicate: (s) =>
        LlmTypeChecker.isString(s) && s.contentMediaType !== undefined,
      parameters: schema,
    });
  const plain: ILlmSchema.IParameters = schema(
    typia.json.schemas<
      [
        {
          name: string;
        },
      ]
    >(),
  );
  const upload: ILlmSchema.IParameters = schema(
    typia.json.schemas<
      [
        {
          file: string & tags.ContentMediaType<"image/*">;
        },
      ]
    >(),
  );
  TestValidator.equals("plain", separator(plain), {
    llm: plain,
    human: null,
  });
  TestValidator.equals("upload", separator(upload), {
    llm: {
      type: "object",
      properties: {},
      additionalProperties: false,
      required: [],
      $defs: {},
    },
    human: upload,
  });
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
