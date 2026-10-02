import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

/**
 * Verifies number LLM schemas with bounds survive inversion unchanged.
 *
 * Number constraints must be restored exactly, with exclusive bounds and
 * defaults kept.
 *
 * 1. Generate number LLM schemas natively.
 * 2. Invert each and compare with its source ignoring descriptions.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on natively generated number schemas and results are compared with sources.
 * @evidence contracts/testing.md#independent-expectations A schema with no LLM-only spelling must round-trip to itself; sources come from the native producer.
 * @evidence contracts/testing.md#distinguishing-cases Three tag combinations are separate rows; integer is a separate file.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema is produced by the native transform; the inversion runs in process.
 * @evidence contracts/e2e.md#necessary-boundary A native constrained number schema reaches invert; source equality except descriptions pins numeric-keyword propagation. Source parity cannot independently prove native keyword correctness.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_invert_number = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted = LlmSchemaConverter.invert({
      $defs: {},
      components: {},
      schema,
    } as any);
    TestEquality.equals(
      "inverted",
      schema,
      inverted as any,
      (key) => key === "description",
    );
  };
  validate(typia.llm.schema<number>({}));
  validate(
    typia.llm.schema<
      number & tags.Minimum<0> & tags.Maximum<100> & tags.MultipleOf<5>
    >({}),
  );
  validate(
    typia.llm.schema<
      number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
    >({}),
  );
};
