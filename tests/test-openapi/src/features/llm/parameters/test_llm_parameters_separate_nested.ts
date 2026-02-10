import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, LlmTypeChecker, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

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
  const member: ILlmSchema.IParameters =
    typia.llm.parameters<INested<IMember>>();
  const upload: ILlmSchema.IParameters =
    typia.llm.parameters<INested<IFileUpload>>();
  const combined: ILlmSchema.IParameters =
    typia.llm.parameters<INested<ICombined>>();

  TestValidator.equals(
    "member",
    separator(member),
    {
      llm: member,
      human: null,
    },
    (key) => key !== "description",
  );
  TestValidator.equals(
    "upload",
    separator(upload),
    {
      llm: {
        type: "object",
        properties: {},
        additionalProperties: false,
        required: [],
        $defs: {},
      },
      human: upload,
    },
    (key) => key !== "description",
  );
  TestValidator.equals(
    "combined",
    separator(combined),
    {
      llm: member,
      human: upload,
    },
    (key) => key !== "description",
  );
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
