import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_llm_schema_nullable = (): void => {
  interface IInput {
    nullable: string | null;
    required: string;
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

  const nullable = props["nullable"];
  const required = props["required"];

  if (nullable === undefined) return TestValidator.error("no nullable");
  if (required === undefined) return TestValidator.error("no required");

  // LLM schema uses anyOf for nullable
  TestValidator.predicate("nullable is anyOf", () =>
    LlmTypeChecker.isAnyOf(nullable),
  );
  if (LlmTypeChecker.isAnyOf(nullable)) {
    const hasString = nullable.anyOf.some((s) => LlmTypeChecker.isString(s));
    const hasNull = nullable.anyOf.some((s) => LlmTypeChecker.isNull(s));
    TestValidator.predicate("has string in anyOf", () => hasString);
    TestValidator.predicate("has null in anyOf", () => hasNull);
  }

  TestValidator.predicate("required is string", () =>
    LlmTypeChecker.isString(required),
  );
};
