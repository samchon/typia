import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm schema enum against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is reference, has enum
 * values, contains pending.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (is reference; has enum values; contains pending).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is reference; has enum values; contains pending) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_enum is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_enum = (): void => {
  type Status = "pending" | "active" | "completed";

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<Status>($defs);

  // named type returns $ref
  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );

  const status = $defs["Status"];
  if (status && LlmTypeChecker.isString(status)) {
    TestValidator.predicate(
      "has enum values",
      () => status.enum !== undefined && status.enum.length === 3,
    );
    TestValidator.predicate(
      "contains pending",
      () => status.enum?.includes("pending") ?? false,
    );
  }
};
