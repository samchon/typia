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

export const test_llm_parameters_separate_ref = (): void => {
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
    typia.json.schemas<[IWrapper<IMember>]>(),
  );
  const upload: ILlmSchema.IParameters = schema()(
    typia.json.schemas<[IWrapper<IFileUpload>]>(),
  );
  const combined: ILlmSchema.IParameters = schema()(
    typia.json.schemas<[IWrapper<ICombined>]>(),
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
  )({
    llm: separator(combined).llm
      ? { ...separator(combined).llm, $defs: {} }
      : null,
    human: separator(combined).human
      ? { ...separator(combined).human, $defs: {} }
      : null,
  })({
    llm: {
      $defs: {},
      type: "object",
      properties: {
        value: {
          $ref: "#/$defs/ICombined.Llm",
        },
      },
      required: ["value"],
      additionalProperties: false,
    } satisfies ILlmSchema.IParameters,
    human: {
      $defs: {},
      type: "object",
      properties: {
        value: {
          $ref: "#/$defs/ICombined.Human",
        },
      },
      required: ["value"],
      additionalProperties: false,
    } satisfies ILlmSchema.IParameters,
  });
};

interface IWrapper<T> {
  value: T;
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
