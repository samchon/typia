import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

/**
 * Verifies an array LLM schema with constraints survives inversion unchanged.
 *
 * A constrained array written by typia.llm.schema must invert to the same
 * keywords, since the model and the validator both rely on them.
 *
 * 1. Generate the LLM schema of a constrained array natively.
 * 2. Invert it with LlmSchemaConverter.invert.
 * 3. Compare the result with the schema ignoring descriptions.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on a natively generated array schema and the whole inverted schema is compared with the source, ignoring descriptions, so an erased minItems, maxItems or uniqueItems fails.
 * @evidence contracts/testing.md#independent-expectations For a schema without LLM-only spellings the inversion must equal its source, which is the round-trip contract; the source comes from the native producer and not from invert.
 * @evidence contracts/testing.md#distinguishing-cases One constrained array; other kinds are separate files and spelling differences are owned by the oneOf and enum cases.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema is produced by the native transform; the inversion itself runs in process.
 * @evidence contracts/e2e.md#necessary-boundary A native constrained array schema reaches invert; source equality except descriptions pins minItems/maxItems/uniqueItems propagation. Source parity cannot independently prove native keyword correctness.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_invert_array = (): void => {
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
    typia.llm.schema<
      Array<string> & tags.MinItems<1> & tags.MaxItems<10> & tags.UniqueItems
    >({}),
  );
};
