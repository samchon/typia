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
