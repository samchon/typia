import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflect schema constant against the native typia.reflect.schema
 * output.
 *
 * The case builds its input in this file and asserts constants length, constant
 * type, constant value, number constants length, number constant type, number
 * constant value.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (constants length; constant type; constant value; number constants length; number constant type; number constant value).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (constants length; constant type; constant value; number constants length; number constant type; number constant value) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schema_constant is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_schema_constant = (): void => {
  // string literal
  const stringLiteral = typia.reflect.schema<"hello">();
  TestEquality.equals(
    "constants length",
    stringLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "constant type",
    stringLiteral.schema.constants[0]?.type,
    "string",
  );
  TestEquality.equals(
    "constant value",
    stringLiteral.schema.constants[0]?.values[0]?.value,
    "hello",
  );

  // number literal
  const numberLiteral = typia.reflect.schema<42>();
  TestEquality.equals(
    "number constants length",
    numberLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "number constant type",
    numberLiteral.schema.constants[0]?.type,
    "number",
  );
  TestEquality.equals(
    "number constant value",
    numberLiteral.schema.constants[0]?.values[0]?.value,
    42,
  );

  // boolean literal
  const booleanLiteral = typia.reflect.schema<true>();
  TestEquality.equals(
    "boolean constants length",
    booleanLiteral.schema.constants.length,
    1,
  );
  TestEquality.equals(
    "boolean constant type",
    booleanLiteral.schema.constants[0]?.type,
    "boolean",
  );
  TestEquality.equals(
    "boolean constant value",
    booleanLiteral.schema.constants[0]?.values[0]?.value,
    true,
  );
};
