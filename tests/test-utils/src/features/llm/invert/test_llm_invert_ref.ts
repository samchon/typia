import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

export const test_llm_invert_ref = (): void => {
  const parameters: ILlmSchema.IParameters = typia.llm.parameters<IMember>();
  const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
    $defs: parameters.$defs,
    components: {},
    schema: parameters,
  });
  TestValidator.predicate(
    "inverted",
    () =>
      OpenApiTypeChecker.isObject(inverted) &&
      inverted.properties !== undefined &&
      OpenApiTypeChecker.isArray(inverted.properties.hobbies!) &&
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
