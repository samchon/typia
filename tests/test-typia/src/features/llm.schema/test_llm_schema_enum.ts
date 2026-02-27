import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_enum = (): void => {
  type Status = "pending" | "active" | "completed";
  interface IInput {
    status: Status;
  }

  const $defs: Record<string, unknown> = {};
  const schema = typia.llm.schema<IInput, "chatgpt">($defs);

  TestValidator.predicate("is reference", () => LlmTypeChecker.isReference(schema));

  const refName = (schema as { $ref: string }).$ref.replace("#/$defs/", "");
  const actual = $defs[refName];
  if (actual === undefined) return TestValidator.error("schema not in $defs");
  if (!LlmTypeChecker.isObject(actual))
    return TestValidator.error("not object");

  const props = actual.properties;
  if (props === undefined) return TestValidator.error("no properties");

  const status = props["status"];
  if (status === undefined) return TestValidator.error("no status");

  // LLM schema uses string type with enum array
  TestValidator.predicate("status is string", () => LlmTypeChecker.isString(status));
  if (LlmTypeChecker.isString(status)) {
    const enumValues = status.enum;
    if (enumValues === undefined) return TestValidator.error("no enum values");

    TestValidator.predicate("has pending", () => enumValues.includes("pending"));
    TestValidator.predicate("has active", () => enumValues.includes("active"));
    TestValidator.predicate("has completed", () =>
      enumValues.includes("completed"),
    );
    TestValidator.equals("enum count", enumValues.length, 3);
  }
};
