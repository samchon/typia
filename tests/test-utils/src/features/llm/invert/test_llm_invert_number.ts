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
