import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_schema_enum = (): void => {
  type Status = "pending" | "active" | "completed";

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<Status>($defs);

  // named type returns $ref
  TestValidator.predicate("is reference", () => LlmTypeChecker.isReference(schema));

  const status = $defs["Status"];
  if (status && LlmTypeChecker.isString(status)) {
    TestValidator.predicate("has enum values", () =>
      status.enum !== undefined && status.enum.length === 3,
    );
    TestValidator.predicate("contains pending", () =>
      status.enum?.includes("pending") ?? false,
    );
  }
};
