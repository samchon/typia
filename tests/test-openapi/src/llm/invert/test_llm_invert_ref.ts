import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
  OpenApiTypeChecker,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_invert_ref = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<[IMember]>();
  const converted: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
    LlmSchemaComposer.parameters({
      components: collection.components,
      schema: collection.schemas[0] as OpenApi.IJsonSchema.IReference,
    });
  if (converted.success === false) throw new Error(converted.error.message);

  const inverted: OpenApi.IJsonSchema = LlmSchemaComposer.invert({
    $defs: converted.value.$defs,
    components: collection.components,
    schema: converted.value,
  });
  TestValidator.predicate("inverted")(
    OpenApiTypeChecker.isObject(inverted) &&
      inverted.properties !== undefined &&
      OpenApiTypeChecker.isArray(inverted.properties.hobbies) &&
      OpenApiTypeChecker.isReference(inverted.properties.hobbies.items) &&
      inverted.properties.hobbies.items.$ref === "#/components/schemas/IHobby",
  );
};

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  name: string;
  hobbies: IHobby[] & tags.MaxItems<10>;
  thumbnail: string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">;
}
interface IHobby {
  title: string;
  description: string;
}
