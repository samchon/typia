import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema enum against the native typia.reflect.schema output.
 *
 * The case builds its input in this file and asserts constants length, constant
 * type, values length, has red, has green, has blue.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (constants length; constant type; values length; has red; has green; has blue).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (constants length; constant type; values length; has red; has green; has blue) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_enum is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_enum = (): void => {
  // string enum
  type Color = "red" | "green" | "blue";
  const colorUnit = typia.reflect.schema<Color>();
  TestEquality.equals("constants length", colorUnit.schema.constants.length, 1);
  TestEquality.equals(
    "constant type",
    colorUnit.schema.constants[0]?.type,
    "string",
  );
  TestEquality.equals(
    "values length",
    colorUnit.schema.constants[0]?.values.length,
    3,
  );

  const values =
    colorUnit.schema.constants[0]?.values.map((v) => v.value) ?? [];
  TestValidator.predicate("has red", () => values.includes("red"));
  TestValidator.predicate("has green", () => values.includes("green"));
  TestValidator.predicate("has blue", () => values.includes("blue"));

  // number enum
  type Status = 0 | 1 | 2;
  const statusUnit = typia.reflect.schema<Status>();
  TestEquality.equals(
    "number constants length",
    statusUnit.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "number constant type",
    statusUnit.schema.constants[0]?.type,
    "number",
  );
  TestEquality.equals(
    "number values length",
    statusUnit.schema.constants[0]?.values.length,
    3,
  );
};
