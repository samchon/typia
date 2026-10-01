import { TestValidator } from "@nestia/e2e";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm schema nullable against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is anyOf type, contains
 * string, contains null.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (is anyOf type; contains string; contains null).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is anyOf type; contains string; contains null) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_nullable is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_nullable = (): void => {
  const schema = typia.llm.schema<string | null>({});

  TestValidator.predicate("is anyOf type", () =>
    LlmTypeChecker.isAnyOf(schema),
  );

  if (LlmTypeChecker.isAnyOf(schema)) {
    TestValidator.predicate("contains string", () =>
      schema.anyOf.some((s) => LlmTypeChecker.isString(s)),
    );
    TestValidator.predicate("contains null", () =>
      schema.anyOf.some((s) => LlmTypeChecker.isNull(s)),
    );
  }
};
