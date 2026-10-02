import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

/**
 * Verifies string LLM schemas with constraints survive inversion unchanged.
 *
 * String constraints (length, format, pattern) must be restored exactly.
 *
 * 1. Generate string LLM schemas natively.
 * 2. Invert each and compare with its source ignoring descriptions.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on natively generated string schemas and each result is compared with its source.
 * @evidence contracts/testing.md#independent-expectations A schema without LLM-only spellings must round-trip to itself; sources come from the native producer.
 * @evidence contracts/testing.md#distinguishing-cases Three tag combinations are separate rows.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema is produced by the native transform; the inversion runs in process.
 * @evidence contracts/e2e.md#necessary-boundary A native constrained string schema reaches invert; source equality except descriptions pins string-keyword propagation. Source parity cannot independently prove native keyword correctness.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_invert_string = (): void => {
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
    typia.llm.schema<string & tags.MinLength<3> & tags.MaxLength<10>>({}),
  );
  validate(typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({}));
  validate(
    typia.llm.schema<
      string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">
    >({}),
  );
};
