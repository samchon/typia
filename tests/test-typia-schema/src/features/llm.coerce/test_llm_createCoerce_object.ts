import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm createCoerce object against the native typia.llm.createCoerce
 * output.
 *
 * The case builds its input in this file and asserts result1 age, result1
 * alive, result2 age, result2 alive.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.createCoerce is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (result1 age; result1 alive; result2 age; result2 alive).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (result1 age; result1 alive; result2 age; result2 alive) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_createCoerce_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_createCoerce_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Create reusable coercer
  const coerce = typia.llm.createCoerce<IInput>();

  // Test with multiple inputs
  const input1 = {
    name: "John",
    age: "30" as unknown as number,
    alive: "true" as unknown as boolean,
  };
  const input2 = {
    name: "Jane",
    age: "25" as unknown as number,
    alive: "false" as unknown as boolean,
  };

  const result1 = coerce(input1);
  const result2 = coerce(input2);

  TestEquality.equals("result1 age", result1.age, 30);
  TestEquality.equals("result1 alive", result1.alive, true);
  TestEquality.equals("result2 age", result2.age, 25);
  TestEquality.equals("result2 alive", result2.alive, false);
};
