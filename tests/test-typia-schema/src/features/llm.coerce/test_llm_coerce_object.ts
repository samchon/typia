import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm coerce object against the native typia.llm.coerce output.
 *
 * The case builds its input in this file and asserts name, age, age type,
 * alive, alive type.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.coerce is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (name; age; age type; alive; alive type).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (name; age; age type; alive; alive type) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_coerce_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_coerce_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Already parsed object with wrong types
  const input = {
    name: "John",
    age: "30" as unknown as number, // string instead of number
    alive: "true" as unknown as boolean, // string instead of boolean
  };

  const result = typia.llm.coerce<IInput>(input);

  TestEquality.equals("name", result.name, "John");
  TestEquality.equals("age", result.age, 30);
  TestEquality.equals("age type", typeof result.age, "number");
  TestEquality.equals("alive", result.alive, true);
  TestEquality.equals("alive type", typeof result.alive, "boolean");
};
