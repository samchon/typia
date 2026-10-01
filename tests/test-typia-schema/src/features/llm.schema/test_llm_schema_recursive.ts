import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm schema recursive against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is reference, $defs has
 * ICategory, has name, has children, children items is ref.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (is reference; $defs has ICategory; has name; has children; children items is ref).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is reference; $defs has ICategory; has name; has children; children items is ref) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_recursive is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_recursive = (): void => {
  interface ICategory {
    name: string;
    children: ICategory[];
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<ICategory>($defs);

  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );
  TestValidator.predicate("$defs has ICategory", () => "ICategory" in $defs);

  const category = $defs["ICategory"];
  if (category && LlmTypeChecker.isObject(category)) {
    TestValidator.predicate("has name", () => "name" in category.properties);
    TestValidator.predicate(
      "has children",
      () => "children" in category.properties,
    );

    const children = category.properties["children"];
    if (children && LlmTypeChecker.isArray(children)) {
      TestValidator.predicate("children items is ref", () =>
        LlmTypeChecker.isReference(children.items),
      );
    }
  }
};
