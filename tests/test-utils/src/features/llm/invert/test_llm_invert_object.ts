import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies an object LLM schema survives inversion unchanged.
 *
 * Property sets and required lists must come back exactly.
 *
 * 1. Generate an object LLM schema natively.
 * 2. Invert it and compare with the source ignoring descriptions.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on a natively generated object schema and the result is compared with the source.
 * @evidence contracts/testing.md#independent-expectations The round trip of an LLM-spelling-free schema must equal the source; the source comes from the native producer.
 * @evidence contracts/testing.md#distinguishing-cases One object shape; references, unions and primitives are separate files.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema is produced by the native transform; the inversion runs in process.
 * @evidence contracts/e2e.md#necessary-boundary Native object/reference schemas reach invert and their shapes are compared with the source. This checks definition wiring and field propagation, not independent correctness of the native representation.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_invert_object = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      $defs: {},
      components: {},
      schema,
    });
    TestEquality.equals(
      "inverted",
      schema,
      inverted as any,
      (key) => key === "description",
    );
  };
  validate(
    typia.llm.schema<{
      id: string & tags.Format<"uuid">;
      email: string & tags.Format<"email">;
      name: string;
      hobbies: Array<{
        title: string;
        description: string;
      }> &
        tags.MaxItems<10>;
      thumbnail: string &
        tags.Format<"uri"> &
        tags.ContentMediaType<"image/png">;
    }>({}),
  );
};
