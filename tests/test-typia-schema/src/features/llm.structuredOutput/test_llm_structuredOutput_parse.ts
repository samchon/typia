import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm structuredOutput parse against the native
 * typia.llm.structuredOutput output.
 *
 * The case builds its input in this file and asserts success, name, age, alive.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.structuredOutput is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (success; name; age; alive).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (success; name; age; alive) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_structuredOutput_parse is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_structuredOutput_parse = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  const output = typia.llm.structuredOutput<IInput>();

  // Test parse with stringified values (coercion)
  const result = output.parse('{"name":"Jane","age":"25","alive":"true"}');

  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("name", result.data.name, "Jane");
    TestEquality.equals("age", result.data.age, 25);
    TestEquality.equals("alive", result.data.alive, true);
  }
};
