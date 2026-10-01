import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm schema object against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is reference, $defs has
 * IMember, has id property, has name property, has email property, id is
 * required.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (is reference; $defs has IMember; has id property; has name property; has email property; id is required).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is reference; $defs has IMember; has id property; has name property; has email property; id is required) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_object = (): void => {
  interface IMember {
    id: number;
    name: string;
    email?: string;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IMember>($defs);

  // named type returns $ref
  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );

  // actual schema in $defs
  TestValidator.predicate("$defs has IMember", () => "IMember" in $defs);

  const member = $defs["IMember"];
  if (member && LlmTypeChecker.isObject(member)) {
    TestValidator.predicate("has id property", () => "id" in member.properties);
    TestValidator.predicate(
      "has name property",
      () => "name" in member.properties,
    );
    TestValidator.predicate(
      "has email property",
      () => "email" in member.properties,
    );

    TestValidator.predicate(
      "id is required",
      () => member.required?.includes("id") ?? false,
    );
    TestValidator.predicate(
      "email is optional",
      () => !(member.required?.includes("email") ?? false),
    );

    TestValidator.predicate("id is number", () =>
      LlmTypeChecker.isNumber(member.properties["id"]!),
    );
  }
};
