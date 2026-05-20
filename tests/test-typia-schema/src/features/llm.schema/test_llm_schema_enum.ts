import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies that `typia.llm.schema` lifts a string union (enum) into `$defs` and
 * emits a `$ref`.
 *
 * String literal unions must be stored as a named definition with an `enum`
 * property rather than inlined. A regression could either inline the enum or
 * emit a type mismatch, silently omitting the valid string set from the
 * function-calling schema.
 *
 * 1. Declare `Status` as a three-value string literal union.
 * 2. Call `typia.llm.schema<Status>($defs)` and assert the root is a `$ref`.
 * 3. Assert `$defs["Status"]` exists, is a string schema, and carries all three
 *    enum values.
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
  TestValidator.predicate("Status exists in $defs", () => status !== undefined);
  TestValidator.predicate(
    "Status is string schema",
    () => status !== undefined && LlmTypeChecker.isString(status),
  );
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
