import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, LlmTypeChecker, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

export const test_llm_parameters_separate_object_additionalProperties =
  (): void => {
    const separator = (schema: ILlmSchema.IParameters) =>
      LlmSchemaComposer.separate({
        predicate: (s) =>
          LlmTypeChecker.isString(s as OpenApi.IJsonSchema.IString) &&
          (s as OpenApi.IJsonSchema.IString).description?.includes(
            "@contentMediaType",
          ) === true,
        parameters: schema as any,
      });
    const params: ILlmSchema.IParameters = typia.llm.parameters<IParameters>();
    TestValidator.equals(
      "separated",
      separator(params),
      {
        llm: typia.llm.parameters<{
          email: string;
          hobbies: Record<
            string,
            {
              id: string;
              name: string;
            }
          >;
        }>(),
        human: typia.llm.parameters<{
          input: {
            hobbies: Record<
              string,
              {
                thumbnail: string &
                  tags.Format<"uri"> &
                  tags.ContentMediaType<"image/*">;
              }
            >;
          };
        }>(),
      },
      (key) => key !== "description",
    );
  };

interface IParameters {
  input: IMember;
}
interface IMember {
  email: string;
  hobbies: Record<string, IHobby>;
}
interface IHobby {
  id: string;
  name: string;
  thumbnail: string & tags.Format<"uri"> & tags.ContentMediaType<"image/*">;
}
