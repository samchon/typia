import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

/**
 * Verifies a qualified type name appears in the parameters description.
 *
 * A deeply qualified interface name must be kept in the description the model
 * reads.
 *
 * 1. Generate the schema of a nested namespace type natively.
 * 2. Convert it with LlmSchemaConverter.parameters.
 * 3. Assert the description includes the qualified name.
 *
 * @evidence contracts/testing.md#behavioral-verification The converter runs on a natively generated collection and the description must include the qualified name Something.INested.IDeep.
 * @evidence contracts/testing.md#independent-expectations The expected substring is the declared type name; the check is a presence check and does not verify the whole description.
 * @evidence contracts/testing.md#distinguishing-cases One qualified type; the same unit-level distinctions are covered on authored schemas.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the collection is produced by the native typia.json.schemas; the conversion runs in process.
 */
export const test_llm_parameters_reference_escaped_description_of_name =
  (): void => {
    const collection: IJsonSchemaCollection =
      typia.json.schemas<[Something.INested.IDeep]>();
    const deep: ILlmSchema.IParameters = composeSchema(collection);
    TestValidator.predicate(
      "description",
      () => !!deep.description?.includes("Something.INested.IDeep"),
    );
  };

interface Something {
  x: number;
}
namespace Something {
  export interface INested {
    y: number;
  }
  export namespace INested {
    export interface IDeep {
      z: number;
    }
  }
}

const composeSchema = (
  collection: IJsonSchemaCollection,
): ILlmSchema.IParameters => {
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference
      >(collection.schemas[0]),
    });
  if (result.success === false) throw new Error("Invalid schema");
  return result.value;
};
