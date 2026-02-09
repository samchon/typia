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

export const test_llm_parameters_separate_object = (): void => {
  const separator = (schema: ILlmSchema.IParameters) =>
    LlmSchemaComposer.separate({
      predicate: (s) =>
        LlmTypeChecker.isString(s as OpenApi.IJsonSchema.IString) &&
        (s as OpenApi.IJsonSchema.IString).contentMediaType !== undefined,
      parameters: schema,
    });
  const member: ILlmSchema.IParameters = schema(
    typia.json.schemas<[IMember]>(),
  );
  const upload: ILlmSchema.IParameters = schema(
    typia.json.schemas<[IFileUpload]>(),
  );
  const combined: ILlmSchema.IParameters = schema(
    typia.json.schemas<[ICombined]>(),
  );

  TestValidator.equals(
    "member",
    (key) => key !== "description",
  )(separator(member))({
    llm: member,
    human: null,
  });
  TestValidator.equals(
    "upload",
    (key) => key !== "description",
  )(separator(upload))({
    llm: {
      type: "object",
      properties: {},
      additionalProperties: false,
      required: [],
      $defs: {},
    },
    human: upload,
  });
  TestValidator.equals(
    "combined",
    (key) => key !== "description",
  )(separator(combined))({
    llm: member,
    human: upload,
  });
};

interface IMember {
  id: number;
  name: string;
}
interface IFileUpload {
  file: string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">;
}
interface ICombined extends IMember, IFileUpload {}

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
