import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  LlmTypeChecker,
  OpenApi,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_schema_separate_string = (): void => {
  const separator = (schema: ILlmSchema.IParameters) =>
    LlmSchemaComposer.separate({
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
