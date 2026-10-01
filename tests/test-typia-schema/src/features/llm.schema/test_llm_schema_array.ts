import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm schema array against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is array type, items is
 * string, minItems, maxItems.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (is array type; items is string; minItems; maxItems).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is array type; items is string; minItems; maxItems) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_array is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_array = (): void => {
  const schema = typia.llm.schema<string[]>({});

  TestValidator.predicate("is array type", () =>
    LlmTypeChecker.isArray(schema),
  );

  if (LlmTypeChecker.isArray(schema)) {
    TestValidator.predicate("items is string", () =>
      LlmTypeChecker.isString(schema.items),
    );
  }

  // array with constraints
  const constrained = typia.llm.schema<
    string[] & tags.MinItems<1> & tags.MaxItems<10>
  >({});
  if (LlmTypeChecker.isArray(constrained)) {
    TestEquality.equals("minItems", constrained.minItems, 1);
    TestEquality.equals("maxItems", constrained.maxItems, 10);
  }
};
