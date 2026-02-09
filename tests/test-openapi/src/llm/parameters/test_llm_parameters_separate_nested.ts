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

export const test_llm_parameters_separate_nested = (): void => {
  const separator = (schema: ILlmSchema.IParameters) =>
    LlmSchemaComposer.separate({
      predicate: (s) =>
        LlmTypeChecker.isString(s as OpenApi.IJsonSchema.IString) &&
        (s as OpenApi.IJsonSchema.IString).description?.includes(
          "@contentMediaType",
        ) === true,
      parameters: schema as any,
    });
  const member: ILlmSchema.IParameters = schema()(
    typia.json.schemas<[INested<IMember>]>(),
  );
  const upload: ILlmSchema.IParameters = schema()(
    typia.json.schemas<[INested<IFileUpload>]>(),
  );
  const combined: ILlmSchema.IParameters = schema()(
    typia.json.schemas<[INested<ICombined>]>(),
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

interface INested<T> {
  first: {
    second: {
      third: {
        fourth: T;
      };
      array: T[];
    };
  };
}
interface IMember {
  id: number;
  name: string;
}
interface IFileUpload {
  file: string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">;
}
interface ICombined extends IMember, IFileUpload {}

const schema =
  () =>
  (collection: IJsonSchemaCollection): ILlmSchema.IParameters => {
    const result: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
      LlmSchemaComposer.parameters({
        components: collection.components,
        schema: typia.assert<
          OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference
        >(collection.schemas[0]),
      }) as IResult<ILlmSchema.IParameters, IOpenApiSchemaError>;
    if (result.success === false) throw new Error("Invalid schema");
    return result.value;
  };
