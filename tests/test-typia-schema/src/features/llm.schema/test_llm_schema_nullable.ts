import { TestValidator } from "@nestia/e2e";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_schema_nullable = (): void => {
  const schema = typia.llm.schema<string | null>({});

  TestValidator.predicate("is anyOf type", () => LlmTypeChecker.isAnyOf(schema));

  if (LlmTypeChecker.isAnyOf(schema)) {
    TestValidator.predicate("contains string", () =>
      schema.anyOf.some((s) => LlmTypeChecker.isString(s)),
    );
    TestValidator.predicate("contains null", () =>
      schema.anyOf.some((s) => LlmTypeChecker.isNull(s)),
    );
  }
};
