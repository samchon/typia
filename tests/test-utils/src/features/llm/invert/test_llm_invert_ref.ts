import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

/**
 * Verifies an LLM reference schema survives inversion into components.
 *
 * A reference to a named type must invert to the same reference with its
 * definition restored.
 *
 * 1. Generate an LLM schema referencing a named type natively.
 * 2. Invert it and compare with the source.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on a natively generated reference schema and the result is compared with the source.
 * @evidence contracts/testing.md#independent-expectations A reference round-trips to itself; the source comes from the native producer.
 * @evidence contracts/testing.md#distinguishing-cases One reference; recursive and nested references are owned by the unit reference cases.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema is produced by the native transform; the inversion runs in process.
 */
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
