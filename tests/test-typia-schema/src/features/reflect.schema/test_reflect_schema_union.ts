import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema union against the native typia.reflect.schema output.
 *
 * The case builds its input in this file and asserts atomics length, has
 * string, has number, objects length, has ICat, has IDog.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (atomics length; has string; has number; objects length; has ICat; has IDog).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (atomics length; has string; has number; objects length; has ICat; has IDog) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_union is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_union = (): void => {
  // primitive union
  const primitiveUnion = typia.reflect.schema<string | number>();
  TestEquality.equals(
    "atomics length",
    primitiveUnion.schema.atomics.length,
    2,
  );

  const types = primitiveUnion.schema.atomics.map((a) => a.type);
  TestValidator.predicate("has string", () => types.includes("string"));
  TestValidator.predicate("has number", () => types.includes("number"));

  // object union
  interface ICat {
    type: "cat";
    meow: string;
  }
  interface IDog {
    type: "dog";
    bark: string;
  }

  const objectUnion = typia.reflect.schema<ICat | IDog>();
  TestEquality.equals("objects length", objectUnion.schema.objects.length, 2);

  const objectNames = objectUnion.schema.objects.map((o) => o.name);
  TestValidator.predicate("has ICat", () => objectNames.includes("ICat"));
  TestValidator.predicate("has IDog", () => objectNames.includes("IDog"));
};
