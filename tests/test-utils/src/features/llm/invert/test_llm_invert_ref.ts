import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

/**
 * Verifies an LLM array-item reference retains its component path on inversion.
 *
 * The named array-item reference must invert to the authored component path.
 * This assertion checks that reference path, not the restored definition body.
 *
 * 1. Generate LLM parameters referencing a named type natively.
 * 2. Invert them and check the array-item reference against its authored path.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on natively generated parameters and the object/array/reference shape and authored array-item component path are checked. The restored component definition is outside this assertion.
 * @evidence contracts/testing.md#independent-expectations The literal #/components/schemas/IHobby path follows the declared named type; it is not read from the inversion output or producer schema.
 * @evidence contracts/testing.md#distinguishing-cases One reference; recursive and nested references are owned by the unit reference cases.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.parameters is produced by the native transform; the inversion runs in process.
 * @evidence contracts/e2e.md#necessary-boundary The native IHobby schema supplies an emitted reference to invert; the restored path is compared with an authored component path, detecting producer/converter reference wiring loss.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
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
