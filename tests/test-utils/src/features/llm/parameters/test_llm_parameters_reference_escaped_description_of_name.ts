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
 * @evidence contracts/e2e.md#necessary-boundary A native deeply namespaced declaration reaches parameters. Its description must contain the authored full name Something.INested.IDeep, pinning generated component-name/description interoperability.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
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
