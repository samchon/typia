import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm createParse object against the native typia.llm.createParse
 * output.
 *
 * The case builds its input in this file and asserts result1 success, result2
 * success, result1 name, result1 age, result2 name, result2 age.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.createParse is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (result1 success; result2 success; result1 name; result1 age; result2 name; result2 age).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (result1 success; result2 success; result1 name; result1 age; result2 name; result2 age) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_createParse_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_createParse_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Create reusable parser
  const parse = typia.llm.createParse<IInput>();

  // Test with multiple inputs
  const input1 = JSON.stringify({ name: "John", age: 30, alive: true });
  const input2 = JSON.stringify({ name: "Jane", age: 25, alive: false });

  const result1 = parse(input1);
  const result2 = parse(input2);

  TestEquality.equals("result1 success", result1.success, true);
  TestEquality.equals("result2 success", result2.success, true);

  if (result1.success) {
    TestEquality.equals("result1 name", result1.data.name, "John");
    TestEquality.equals("result1 age", result1.data.age, 30);
  }

  if (result2.success) {
    TestEquality.equals("result2 name", result2.data.name, "Jane");
    TestEquality.equals("result2 age", result2.data.age, 25);
  }
};
