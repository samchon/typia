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
    const params: ILlmSchema.IParameters = schema()(
      typia.json.schemas<[IParameters]>(),
    );
    TestValidator.equals(
      "separated",
      (key) => key !== "description",
    )(separator(params))({
      llm: schema()(
        typia.json.schemas<
          [
            {
              input: {
                email: string;
                hobbies: Record<
                  string,
                  {
                    id: string;
                    name: string;
                  }
                >;
              };
            },
          ]
        >(),
      ),
      human: schema()(
        typia.json.schemas<
          [
            {
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
            },
          ]
        >(),
      ),
    });
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
