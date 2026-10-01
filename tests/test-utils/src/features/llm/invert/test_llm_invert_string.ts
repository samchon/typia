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
