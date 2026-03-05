import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_constant = (): void => {
  // string literal
  const stringLiteral = typia.reflect.schema<"hello">();
  TestValidator.equals("constants length", stringLiteral.schema.constants.length, 1);
  TestValidator.equals("constant type", stringLiteral.schema.constants[0]?.type, "string");
  TestValidator.equals("constant value", stringLiteral.schema.constants[0]?.values[0]?.value, "hello");

  // number literal
  const numberLiteral = typia.reflect.schema<42>();
  TestValidator.equals("number constants length", numberLiteral.schema.constants.length, 1);
  TestValidator.equals("number constant type", numberLiteral.schema.constants[0]?.type, "number");
  TestValidator.equals("number constant value", numberLiteral.schema.constants[0]?.values[0]?.value, 42);

  // boolean literal
  const booleanLiteral = typia.reflect.schema<true>();
  TestValidator.equals("boolean constants length", booleanLiteral.schema.constants.length, 1);
  TestValidator.equals("boolean constant type", booleanLiteral.schema.constants[0]?.type, "boolean");
  TestValidator.equals("boolean constant value", booleanLiteral.schema.constants[0]?.values[0]?.value, true);
};
