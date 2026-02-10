import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, LlmTypeChecker, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

export const test_llm_parameters_separate_object = (): void => {
  const separator = (schema: ILlmSchema.IParameters) =>
    LlmSchemaComposer.separate({
      predicate: (s) =>
        LlmTypeChecker.isString(s as OpenApi.IJsonSchema.IString) &&
        (s as OpenApi.IJsonSchema.IString).contentMediaType !== undefined,
      parameters: schema,
    });
  const member: ILlmSchema.IParameters = typia.llm.parameters<IMember>();
  const upload: ILlmSchema.IParameters = typia.llm.parameters<IFileUpload>();
  const combined: ILlmSchema.IParameters = typia.llm.parameters<ICombined>();

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

interface IMember {
  id: number;
  name: string;
}
interface IFileUpload {
  file: string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">;
}
interface ICombined extends IMember, IFileUpload {}
